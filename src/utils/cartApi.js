import axios from "axios";

const BASE_URL = "https://backend-one-delta-10.vercel.app/api/v1/cart";

export const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
};

export async function fetchCartFromServer() {
  const token = localStorage.getItem("token");
  if (!token) return [];

  try {
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

    return groupedItems;
  } catch (error) {
    console.error("fetchCartFromServer error:", error);
    return [];
  }
}

export async function postAddToCart(productId) {
  try {
    await axios.post(BASE_URL, { productId }, getHeaders());
  } catch (error) {
    console.error("postAddToCart error:", error);
    throw error;
  }
}

export async function patchRemoveFromCart(productId) {
  try {
    await axios.patch(BASE_URL, { productId }, getHeaders());
  } catch (error) {
    console.error("patchRemoveFromCart error:", error);
    throw error;
  }
}

export async function deleteClearCart() {
  try {
    await axios.delete(BASE_URL, getHeaders());
  } catch (error) {
    console.error("deleteClearCart error:", error);
    throw error;
  }
}

export async function putDecreaseQuantity(productId) {
  try {
    await axios.put(BASE_URL, { productId }, getHeaders());
  } catch (error) {
    console.error("putDecreaseQuantity error:", error);
    throw error;
  }
}