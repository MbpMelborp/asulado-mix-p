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

import {
  setTop,
  setQue,
  setGestion,
  setAyuda,
  setDocumentosInt,
} from "./general";

import { setPropositios, setComo } from "./empresa";

import {
  setRV_auxilio,
  setRV_destacados,
  set_destacados,
  set_listado,
} from "./prods";

import { setCalendar } from "./calendar";

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

if (document.getElementById("as__header")) {
  document.getElementById("as__header").classList.add("init");
}

if (document.getElementById("documentos")) {
  document.getElementById("docs_tabs").selectedIndex = 0;
  document.getElementById("docs_tabs").addEventListener("change", (e) => {
    changeTab(e.target.value);
    lenis.scrollTo("#documentos", {
      offset: -60,
    });
  });

  const as = document.querySelectorAll(".tabs_link");

  as.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      changeTab(tab);
      lenis.scrollTo("#documentos", {
        offset: -80,
      });
    });
  });
}

if (document.getElementById("open_chat_btn")) {
  document.getElementById("open_chat_btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("open_chat").classList.toggle("toopen");
  });
}

if (document.getElementById("faqs")) {
  const faq = document.querySelectorAll(".as__g_faqs_ls .fqs_list:first-child");
  document.querySelectorAll(".as__g_faqs_ls .fqs_list").forEach((fq) => {
    fq.children[0].children[0].addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.parentElement.parentElement.classList.contains("active")) {
        for (let ep of e.target.parentElement.parentElement.parentElement
          .children) {
          ep.classList.remove("active");
        }
        e.target.parentElement.parentElement.classList.add("active");
      } else {
        e.target.parentElement.parentElement.classList.remove("active");
      }
    });
  });
  faq.forEach((fq) => {
    fq.classList.add("active");
  });

  document.getElementById("docs_tabs").selectedIndex = 0;
  document.getElementById("docs_tabs").addEventListener("change", (e) => {
    changeTab2(e.target.value);
    lenis.scrollTo("#documentos", {
      offset: -60,
    });
  });

  const as = document.querySelectorAll(".tabs_link");

  as.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      changeTab2(tab);
      lenis.scrollTo("#faqs", {
        offset: -80,
      });
    });
  });
}

function changeTab(tab) {
  document.getElementById("docs_tabs").selectedIndex = parseInt(tab);
  document.querySelectorAll(".tabs_link").forEach((tabe) => {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");
    else tabe.classList.add("active");
  });

  document
    .querySelectorAll(".as__g_documentos_tcon_list_int")
    .forEach((tabe) => {
      if (tab !== tabe.dataset.tab) tabe.classList.remove("active");
      else tabe.classList.add("active");
    });

  console.log(document.querySelectorAll(".as__g_documentos_tcon_list_int"));
}

function changeTab2(tab) {
  document.getElementById("docs_tabs").selectedIndex = parseInt(tab);
  document.querySelectorAll(".tabs_link").forEach((tabe) => {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");
    else tabe.classList.add("active");
  });

  document.querySelectorAll(".as__g_faqs_tcon_list_int").forEach((tabe) => {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");
    else tabe.classList.add("active");
  });
}

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
if (document.getElementById("modal_sus")) {
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookieValue(name) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);
    if (match) {
      return match[2];
    }
  }
  function deleteCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  document.getElementById("modal_sus").checked = getCookieValue("modal_sus")
    ? false
    : true;

  document.getElementById("showcheck").checked = getCookieValue("modal_sus")
    ? false
    : true;

  // document.getElementById("modal_sus").checked = true;

  document.getElementById("modal_sus").addEventListener("change", (e) => {
    if (e.target.checked) {
    } else {
    }
  });
  document.getElementById("showcheck").addEventListener("change", (e) => {
    if (e.target.checked) {
      setCookie("modal_sus", true, 30);
    } else {
      deleteCookie("modal_sus");
      // setCookie("modal_sus", "false", 1);
    }
  });
}

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
setDocumentosInt(gsap, ScrollTrigger);

//EMPRESA
if (document.getElementById("as__nuestra_empresa")) {
  setHomeServicios(gsap, ScrollTrigger);
  setPropositios(gsap, ScrollTrigger);
  setComo(gsap, ScrollTrigger);
}
//PRODS
set_destacados(gsap, ScrollTrigger);
set_listado(gsap, ScrollTrigger);
if (
  document.getElementById("as__renta_vitalicia") ||
  document.getElementById("as__seguro_previsional") ||
  document.getElementById("as__rv_sobreviviencia") ||
  document.getElementById("as__rv_invalidez")
) {
  setRV_auxilio(gsap, ScrollTrigger);
  setRV_destacados(gsap, ScrollTrigger);
}

//CALENDAR

setCalendar(gsap);

/** CHAT
 *
 */

var initESW = function (gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = false; //Or false
  embedded_svc.settings.language = ""; //For example, enter 'en' or 'en-US'
  embedded_svc.settings.chatbotAvatarImgURL =
    "https://www.asulado.com/resource/1693413698000/Avatar";
  embedded_svc.settings.avatarImgURL =
    "https://www.asulado.com/resource/1693413698000/Avatar";

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.init(
    "https://asulado.my.salesforce.com",
    "https://www.asulado.com/",
    gslbBaseURL,
    "00D8a000003gPOw",
    "Chat_Web",
    {
      baseLiveAgentContentURL:
        "https://c.la5-c2-ia5.salesforceliveagent.com/content",
      deploymentId: "5728a000000Tmu9",
      buttonId: "5738a000000Tn5E",
      baseLiveAgentURL: "https://d.la5-c2-ia5.salesforceliveagent.com/chat",
      eswLiveAgentDevName: "Chat_Web",
      isOfflineSupportEnabled: false,
    }
  );
};

if (!window.embedded_svc) {
  var s = document.createElement("script");
  s.setAttribute(
    "src",
    "https://asulado.my.salesforce.com/embeddedservice/5.0/esw.min.js"
  );
  s.onload = function () {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW("https://service.force.com");
}

document.getElementById("start_chat").addEventListener("click", startChat);

function startChat() {
  console.log("Iniciando chat");
  embedded_svc.liveAgentAPI.startChat({
    directToAgentRouting: {
      buttonId: "5738a000000Tn5E",
      fallback: true,
    },
    extraPrechatInfo: [
      {
        entityName: "Contact",
        saveToTranscript: "",
      },
    ],
    extraPrechatFormDetails: [],
  });
}
