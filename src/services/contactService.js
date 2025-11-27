
import api from "./api";

// SEND CONTACT FORM MESSAGE
export const sendContactMessage = async (contactData) => {
  const response = await api.post("/api/contact", contactData);
  
  return response.data;
};
export const getAllMessages = async () => {
  return (await api.get("/api/contact")).data;
};

