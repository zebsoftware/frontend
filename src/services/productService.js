
  import axios from "axios";

  const API_BASE = "https://backend-16lc.onrender.com/api";

  export const getProducts = async () => {
    
      const res = await axios.get(`${API_BASE}/products`);

      return res.data;
    } ;
    


  export const getProductById = async (id) => {
    
      const res = await axios.get(`${API_BASE}/products/${id}`);
      return res.data;
    
  };
