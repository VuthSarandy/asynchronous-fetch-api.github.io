import { cardProduct } from "../component/CardProduct.js";
import { cardUser } from "../component/CardUser.js";
import { fetchData } from "../store/fetchApi.js";

const query = document.querySelector("#itemPro");
const userQuery = document.querySelector("#itemUser");

const dataProduct = await fetchData("products");
const dataUser = await fetchData("users");

dataProduct.map((e) => {
    query.innerHTML += cardProduct(e);
})

dataUser.map((u)=>{
    userQuery.innerHTML += cardUser(u);
})


