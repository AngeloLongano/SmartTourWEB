import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:57929/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});

export default {
  setToken(token) {
    let authorization = "Bearer " + token;

    apiClient.defaults.headers.common["Authorization"] = authorization;
    let api = apiClient;

    console.log(api);
  },
  login(credentials) {
    console.log(credentials);
    return apiClient.post("/users/login", credentials);
  },
  getUsers() {
    return apiClient.get("/users");
  },
  getAgencies() {
    return apiClient.get("/agencies");
  },
  getAgenciesPublic() {
    return apiClient.get("/agencies");
  }
};
