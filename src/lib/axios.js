import axios from "axios";

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "http://localhost:3001/api", // TODO: baca dari env
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
