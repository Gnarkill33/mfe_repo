import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartShow";

mountProducts(document.querySelector("#prod-products"));
mountCart(document.querySelector("#prod-cart"));
