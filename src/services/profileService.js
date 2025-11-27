import api from "./api";

// GET profile
export const getProfile = async () => {
  return (await api.get("/api/profile")).data;
};

// UPDATE or CREATE profile
export const updateProfile = async (data) => {
  return (await api.post("/api/profile", data)).data;
};

// DELETE profile
export const deleteProfile = async () => {
  return (await api.delete("/api/profile")).data;
};
