import axios from "axios";

export const sintaAPI = axios.create({
  baseURL: "https://sintaapp-production.up.railway.app",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
});
