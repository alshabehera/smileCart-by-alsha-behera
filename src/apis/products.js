import axios from "axios";
// this is to show a single product details
const show = (slug) => axios.get(`products/${slug}`);
//this is to fetch data of all the products
const fetch = (params) => axios.get("products", { params });

const productsApi = { show, fetch };
export default productsApi;
