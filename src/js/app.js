// import external dependencies
import $ from "jquery";
import "../sass/app.sass";

import Quote_clients from "./blocks/Quote_clients.block";

import BurgerMenu from "./modules/BurgerMenu.module";
import HeaderPrimary from "./modules/HeaderPrimary.module";

$(document).ready(() => {
  Quote_clients.init();
  BurgerMenu.init();
  HeaderPrimary.init();
})
