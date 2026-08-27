import faker from "faker";

export const mountCart = (el) => {
 const cartText = `<div>You have ${faker.datatype.number()} items in you cart</div>`;

 el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
 const el = document.querySelector("#dev-cart");

 if (el) {
  mountCart(el);
 }
}
