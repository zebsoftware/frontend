import api from "./api"; // import the axios instance

export const getAllProducts = async () => {
  return api.get("/products"); // no need to repeat baseURL
};

export const addProduct = async (formData) => {
  return api.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateProduct = async (id, formData) => {
  return api.put(`/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProduct = async (id) => {
  return api.delete(`/products/${id}`);
};
