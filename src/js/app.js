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

import { setTop, setQue, setGestion, setAyuda } from "./general";

import { setPropositios, setComo } from "./empresa";

import { setRV_auxilio, setRV_destacados } from "./prods";

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
const menu_nav = document.getElementById("as__nav_links");
const menu_wrap = document.getElementById("as__header");
menu_button.addEventListener("click", handleMenu);

function handleMenu() {
  // lenis.scroll = window.scrollY;
  // console.log(document.querySelector("body").classList);
  if (!open_menu) {
    document.querySelector("body").classList.add("overflow-hidden");
    menu_nav.classList.add("nav_open");
    menu_wrap.classList.add("open");
    menu_button.classList.add("open");
    menu_nav.classList.remove("nav_close");

    lenis.stop();
  } else {
    document.querySelector("body").classList.remove("overflow-hidden");
    menu_nav.classList.add("nav_close");
    menu_button.classList.remove("open");
    menu_nav.classList.remove("nav_open");
    menu_wrap.classList.remove("open");
    lenis.start();
  }

  open_menu = !open_menu;
}

//HOME
if (document.getElementById("as__home")) {
  setHomeBanners(gsap);
  setHomePropositios(gsap, ScrollTrigger);
  setHomeServicios(gsap, ScrollTrigger);
  setHomeCifras(gsap, ScrollTrigger);
  setHomeDocumentos(gsap, ScrollTrigger);
  setHomeBlog(gsap, ScrollTrigger);
}
setTop(gsap, ScrollTrigger);
setQue(gsap, ScrollTrigger);
setGestion(gsap, ScrollTrigger);
setAyuda(gsap, ScrollTrigger);
//EMPRESA
if (document.getElementById("as__nuestra_empresa")) {
  setHomeServicios(gsap, ScrollTrigger);
  setPropositios(gsap, ScrollTrigger);
  setComo(gsap, ScrollTrigger);
}

if (document.getElementById("as__renta_vitalicia")) {
  setRV_auxilio(gsap, ScrollTrigger);
  setRV_destacados(gsap, ScrollTrigger);
}
