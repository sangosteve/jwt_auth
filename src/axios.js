import axios from "axios";
const instance = axios.create({
  baseURL: "https://app-test-pg-api.herokuapp.com",
});
export default instance;
