import axios from "axios";

const instance = axios.create({
  baseURL: "https://project-ideas-bbc79.firebaseio.com/"
});

export default instance;
