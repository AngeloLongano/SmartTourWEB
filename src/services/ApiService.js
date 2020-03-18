import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://192.168.1.226:54095/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getUser(id) {
    return apiClient.get("/consumers" + id);
  }
};
