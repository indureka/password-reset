import axios from "axios";

const api = axios.create({
  baseURL: "https://password-reset-b3em.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
