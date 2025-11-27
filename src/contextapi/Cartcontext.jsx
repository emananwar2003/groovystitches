import { createContext, useContext, useState, useEffect } from "react";
import {
  fetchCartFromServer,
  postAddToCart,
  patchRemoveFromCart,
  deleteClearCart,
} from "../utils/cartApi";
import { useAuth } from "./Authcontext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { status: isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      loadCart();
    } else {
      setCartItems([]);
    }
  }, [isLoggedIn]);

  const loadCart = async () => {
    try {
      const items = await fetchCartFromServer();
      setCartItems(items);
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  };

  const addToCart = async (product) => {
    if (isLoggedIn) {
      try {
        await postAddToCart(product.id);
        await loadCart();
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    } else {
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
    }
  };

  const incrementQuantity = async (id) => {
    if (isLoggedIn) {
      try {
        await postAddToCart(id);
        await loadCart();
      } catch (error) {
        console.error("Failed to increment quantity:", error);
      }
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const decrementQuantity = async (id) => {
    if (isLoggedIn) {
      try {
        await patchRemoveFromCart(id);
        await loadCart();
      } catch (error) {
        console.error("Failed to decrement quantity:", error);
      }
    } else {
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
    }
  };

  const removeFromCart = async (id) => {
    if (isLoggedIn) {
      try {
        const itemToRemove = cartItems.find((item) => item.id === id);
        if (itemToRemove) {
          const promises = [];
          for (let i = 0; i < itemToRemove.quantity; i++) {
            promises.push(patchRemoveFromCart(id));
          }
          await Promise.all(promises);
          await loadCart();
        }
      } catch (error) {
        console.error("Failed to remove from cart:", error);
      }
    } else {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const clearCart = async () => {
    if (isLoggedIn) {
      try {
        await deleteClearCart();
        setCartItems([]);
      } catch (error) {
        console.error("Failed to clear cart:", error);
      }
    } else {
      setCartItems([]);
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
