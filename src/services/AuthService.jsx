import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Update backend URL if needed

export const register = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
