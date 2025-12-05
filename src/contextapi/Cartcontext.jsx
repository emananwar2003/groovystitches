import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./Authcontext";
import {
  fetchCartFromServer,
  postAddToCart,
  patchRemoveFromCart,
  deleteClearCart,
  putDecreaseQuantity,
} from "../utils/cartApi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const loadCart = async () => {
      if (token) {
        const data = await fetchCartFromServer();

        if (data && data.products) {
          const transformedItems = data.products.reduce((acc, item) => {
            if (item.productid) {
              const existingIndex = acc.findIndex(
                (i) => i.id === item.productid._id
              );

              if (existingIndex > -1) {
                acc[existingIndex].quantity += 1;
              } else {
                acc.push({
                  id: item.productid._id,
                  title: item.productid.name,
                  price: item.productid.price,
                  image: item.productid.image,
                  quantity: 1,
                });
              }
            }
            return acc;
          }, []);

          setCartItems(transformedItems);
        } else {
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    };
    loadCart();
  }, [token]);

  const addToCart = async (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    if (token) {
      try {
        await postAddToCart(product.id);
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    }
  };

  const incrementQuantity = async (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    if (token) {
      try {
        await postAddToCart(id);
      } catch (error) {
        console.error("Failed to increment quantity:", error);
      }
    }
  };

  const decrementQuantity = async (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });

    if (token) {
      try {
        await putDecreaseQuantity(id);
      } catch (error) {
        console.error("Failed to decrement quantity:", error);
      }
    }
  };

  const removeFromCart = async (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    if (token) {
      try {
        await patchRemoveFromCart(id);
      } catch (error) {
        console.error("Failed to remove from cart:", error);
      }
    }
  };

  const clearCart = async () => {
    setCartItems([]);
    if (token) {
      try {
        await deleteClearCart();
      } catch (error) {
        console.error("Failed to clear cart:", error);
      }
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
