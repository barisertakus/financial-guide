import axios from "axios";
import { localURL, prodURL } from "./constants";

const instance = axios.create({
  baseURL: localURL
})

export default instance;