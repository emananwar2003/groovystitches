const API_URL = "https://backend-one-delta-10.vercel.app/api/v1";

const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const addProduct = async (productData) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
