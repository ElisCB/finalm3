import axios from "axios";

const api = axios.create({
  baseURL: "https://vactracker.onrender.com/", 
  timeout: 3000
})

export default api