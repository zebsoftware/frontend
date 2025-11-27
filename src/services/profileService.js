import api from "./api";

// GET profile (with token)
export const getProfile = async () => {
  const token = localStorage.getItem("token");

  return (
    await api.get("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;
};

// UPDATE profile (with token)
export const updateProfile = async (data) => {
  const token = localStorage.getItem("token");

  return (
    await api.post("/api/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;
};

// DELETE profile (with token)
export const deleteProfile = async () => {
  const token = localStorage.getItem("token");

  return (
    await api.delete("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;
};
