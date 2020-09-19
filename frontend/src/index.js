import HomeScreen from "./screen/HomeScreen.js";
import ProductScreen from "./screen/ProductScreen.js";
import { parseRequestUrl, showLoading, hideLoading } from "./utils.js";
import Error404Screen from "./screen/Error4040Screen.js";
import CartScreen from "./screen/CartScreen.js";
import SignInScreen from "./screen/SignInScreen.js";
import Header from "./components/Header.js";
import RegisterScreen from "./screen/RegisterScreen.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
  "/signin": SignInScreen,
  "/register": RegisterScreen,
};
const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const header = document.getElementById("header-container");
  header.innerHTML = await Header.render();
  await Header.after_render();

  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  await screen.after_render();
  hideLoading();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
