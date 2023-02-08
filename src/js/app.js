// import external dependencies
import $ from "jquery";
import "../sass/app.sass";

import Quote_clients from "./blocks/Quote_clients.block";
import FAQ from "./blocks/FAQ.block";

import BurgerMenu from "./modules/BurgerMenu.module";
import HeaderPrimary from "./modules/HeaderPrimary.module";
import HeaderSecondary from "./modules/HeaderSecondary.module";

$(document).ready(() => {
  Quote_clients.init();
  FAQ.init();
  BurgerMenu.init();
  HeaderPrimary.init();
  HeaderSecondary.init();
})
