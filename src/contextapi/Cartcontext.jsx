import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://backend-one-delta-10.vercel.app/api/v1/cart";

  const getHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  };

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    const response = await axios.get(BASE_URL, getHeaders());

    const rawProducts = response.data.products || [];

    const groupedItems = rawProducts.reduce((acc, item) => {
      if (!item.productid) return acc;

      const product = item.productid;
      const existingItem = acc.find((i) => i.id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({
          id: product._id,
          title: product.name,
          price: product.price,
          img: product.image,
          quantity: 1,
        });
      }
      return acc;
    }, []);

    setCartItems(groupedItems);
    setLoading(false);
  };

  const addToCart = async (product) => {
    await axios.post(
      BASE_URL,
      { productId: product._id || product.id },
      getHeaders()
    );
    await fetchCart();
  };

  const removeFromCart = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`, getHeaders());
    await fetchCart();
  };

  const clearCart = async () => {
    await axios.delete(`${BASE_URL}`, getHeaders());
    setCartItems([]);
  };

  const incrementQuantity = (id) => {
    addToCart({ _id: id });
  };

  const decrementQuantity = async (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item.quantity === 1) {
      removeFromCart(id);
    } else {
      await axios.delete(`${BASE_URL}/${id}/decrement`, getHeaders());
      await fetchCart();
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        incrementQuantity,
        decrementQuantity,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
