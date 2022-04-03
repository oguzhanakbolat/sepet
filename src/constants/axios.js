import axios from "axios";

export const baseURL = "https://dummyjson.com";
export default axios.create({baseURL});

export const URL = {
  products: '/products',
  post: '/post',
  todos: '/todos'
}