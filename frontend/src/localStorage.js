export const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  return cartItems;
};

export const setCartItems = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const setUserInfo = ({
  _id = "",
  name = "",
  email = "",
  password = "",
  token = "",
  isAdmin = false,
}) => {
  localStorage.setItem(
    "userinfo",
    JSON.stringify({
      _id,
      name,
      email,
      password,
      token,
      isAdmin,
    })
  );
};
export const clearUser = () => {
  localStorage.removeItem("userinfo");
};
export const getUserInfo = () => {
  return localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : { name: "", password: "", email: "" };
};
export const getShipping = () => {
  const shipping = localStorage.getItem("shipping")
    ? JSON.parse(localStorage.getItem("shipping"))
    : {
        address: "",
        city: "",
        postalcode: "",
        country: "",
      };
  return shipping;
};
export const setShipping = ({
  address = "",
  city = "",
  postalcode = "",
  country = "",
}) => {
  localStorage.setItem(
    "shipping",
    JSON.stringify({ address, city, postalcode, country })
  );
};
export const getPayment = () => {
  const payment = localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {
        paymentMethod: "paypal",
      };
  return payment;
};
export const setPayment = ({ paymentMethod = "paypal" }) => {
  localStorage.setItem("payment", JSON.stringify({ paymentMethod }));
};
