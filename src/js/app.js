import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();

import {
  setHomeBanners,
  setHomePropositios,
  setHomeServicios,
  setHomeCifras,
  setHomeDocumentos,
  setHomeBlog,
} from "./home";

// import { RoughEase } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ({ scroll }) => {
  ScrollTrigger.update();
  if (scroll > 20) {
    document.querySelector(".as__header").classList.add("as__header_scroll");
  } else {
    document.querySelector(".as__header").classList.remove("as__header_scroll");
  }
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/**
 * MENU
 */
let open_menu = false;
const menu_button = document.getElementById("open_menu");
const menu_nav = document.getElementById("navbar-default");
menu_button.addEventListener("click", handleMenu);

function handleMenu() {
  // lenis.scroll = window.scrollY;
  // console.log(document.querySelector("body").classList);
  if (!open_menu) {
    document.querySelector("body").classList.add("overflow-hidden");
    menu_nav.classList.add("nav_open");
    menu_nav.classList.remove("nav_close");
    lenis.stop();
  } else {
    document.querySelector("body").classList.remove("overflow-hidden");
    menu_nav.classList.add("nav_close");
    menu_nav.classList.remove("nav_open");
    lenis.start();
  }

  open_menu = !open_menu;
}

//HOME
setHomeBanners(gsap);
setHomePropositios(gsap, ScrollTrigger);
setHomeServicios(gsap, ScrollTrigger);
setHomeCifras(gsap, ScrollTrigger);
setHomeDocumentos(gsap, ScrollTrigger);
setHomeBlog(gsap, ScrollTrigger);
