const BASE_URL = "https://backend-one-delta-10.vercel.app/api/v1/cart";

export const getHeaders = () => {
  const token = localStorage.getItem("token");
  console.log("CartAPI: Retrieved token from localStorage:", token);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export async function fetchCartFromServer() {
  const token = localStorage.getItem("token");
  if (!token) return [];

  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Error fetching cart: ${response.statusText}`);
    }

    const data = await response.json();
    const rawProducts = data.products || [];

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

    return groupedItems;
  } catch (error) {
    console.error("fetchCartFromServer error:", error);
    return [];
  }
}

export async function postAddToCart(productId) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      throw new Error(`Error adding to cart: ${response.statusText}`);
    }
  } catch (error) {
    console.error("postAddToCart error:", error);
    throw error;
  }
}

export async function patchRemoveFromCart(productId) {
  try {
    const response = await fetch(BASE_URL, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      throw new Error(`Error removing from cart: ${response.statusText}`);
    }
  } catch (error) {
    console.error("patchRemoveFromCart error:", error);
    throw error;
  }
}

export async function deleteClearCart() {
  try {
    const response = await fetch(BASE_URL, {
      method: "DELETE",
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Error clearing cart: ${response.statusText}`);
    }
  } catch (error) {
    console.error("deleteClearCart error:", error);
    throw error;
  }
}
