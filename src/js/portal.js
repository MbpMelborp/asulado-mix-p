import { gsap } from "gsap";
import { setCalendar } from "./calendar";
import Glide from "@glidejs/glide";
import { TourGuideClient } from "@sjmc11/tourguidejs/dist/tour"; // JS

// import Tourguide from "tourguidejs";

// import { Grid } from "gridjs";
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const id_login = "pa__login";
const pa__login = document.getElementById(id_login);

if (document.getElementById("hora")) {
  const horaElement = document.getElementById("hora");
  const currentDate = new Date();
  const hora = currentDate.getHours();
  const minutos = currentDate.getMinutes();
  const segundos = currentDate.getSeconds();
  const fecha = currentDate.toLocaleDateString();

  horaElement.innerHTML = `<b>Fecha y hora:</b> ${fecha} ${hora}:${minutos}:${segundos}`;
}
if (pa__login) {
  const tl_pa__login = gsap.timeline({ paused: false });

  tl_pa__login.from(
    `#${id_login} .pa_login_screen`,
    {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
      duration: 0.7,
      ease: "power1.inOut",
    },
    "0"
  );
  tl_pa__login.from(
    `#${id_login} .pa_login_form`,
    {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
      duration: 0.5,
      delay: 0.7,
      background: "#CEE3EB",
      ease: "power1.inOut",
    },
    "0"
  );

  tl_pa__login.from(
    `#${id_login} .pa_login_screen .anim_1`,
    {
      opacity: 0,
      y: 19,
      duration: 0.5,
      stagger: 0.3,
      ease: "power1.inOut",
    },
    "+=0.4"
  );

  //   tl_pa__login.fromTo(
  //     ".as__top_int img",
  //     {
  //       yPercent: 150,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       yPercent: 0,
  //       duration: 0.8,
  //       ease: "power4.inout",
  //     },
  //     "-=1"
  //   );
  //   tl_pa__login.fromTo(
  //     ".as__top_title_item",
  //     {
  //       xPercent: -10,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       xPercent: 0,
  //       duration: 1,
  //       stagger: 0.3,
  //       ease: "power4.inout",
  //     },
  //     "-=0"
  //   );
}
if (document.getElementById("start_chat"))
  document.getElementById("start_chat").addEventListener("click", startChat);
if (document.getElementById("link_chat"))
  document.getElementById("link_chat").addEventListener("click", startChat);

if (document.getElementById("nav_search")) {
  document
    .querySelector("#nav_search .as__nav_search_ico")
    .addEventListener("click", (e) => {
      document.getElementById("nav_search").classList.toggle("open");
      e.target.classList.toggle("fa-xmark");
      e.target.classList.toggle("fa-magnifying-glass");
    });
}

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

if (document.getElementById("open_chat_btn")) {
  document.getElementById("open_chat_btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("open_chat").classList.toggle("toopen");
  });
}

if (document.getElementById("togglePassword")) {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#id_password");

  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
}
if (document.getElementById("togglePassword2")) {
  const togglePassword2 = document.querySelector("#togglePassword2");
  const password = document.querySelector("#id_password2");

  togglePassword2.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
}

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
  const mobile = window.innerWidth < 1024;
  if (mobile) {
    if (!open_menu) {
      document.querySelector("body").classList.add("overflow-hidden");
      menu_nav.classList.add("nav_open");
      menu_wrap.classList.add("open");
      menu_button.classList.add("open");
      menu_nav.classList.remove("nav_close");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
      menu_nav.classList.add("nav_close");
      menu_button.classList.remove("open");
      menu_nav.classList.remove("nav_open");
      menu_wrap.classList.remove("open");
    }
    open_menu = !open_menu;
  }
}
const serviceLinks = document.querySelectorAll(".service_link a[href='#']");
serviceLinks.forEach((link) => {
  link.classList.add("disabled");
});

const serviceNavsLinks = document.querySelectorAll(
  ".as__nav_links_ppal_li .dropdown-content a[href='#']"
);

serviceNavsLinks.forEach((link) => {
  link.classList.add("disabled");
});

if (
  document.getElementById("servicios") &&
  document.getElementById("docs_tabs")
) {
  const as = document.querySelectorAll(".tabs_link");
  document.getElementById("docs_tabs").selectedIndex = 0;
  document.getElementById("docs_tabs").addEventListener("change", (e) => {
    changeTab(e.target.value);
    // location.href = "#servicios";
  });
  document
    .querySelectorAll(".as__nav_links_ppal_link[data-tab]")
    .forEach((tabe) => {
      tabe.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = e.target.dataset.tab;
        if (window.location.hash == "") changeTab(tab, false);
        else changeTab(tab);
      });
    });

  as.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      const hash = e.target.dataset.hash;
      history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.search
      );
      let url = window.location.href;
      url = url.split("#")[0];
      url = url + "#" + hash;
      history.replaceState({}, document.title, url);
      changeTab(tab);
    });
  });
  if (window.location.hash) {
    const hast = window.location.hash.split("#")[1];
    const elTag = document.querySelector(
      ".tabs_link[data-hash='" + hast + "']"
    );
    var url = location.href;
    location.href = "#servicios";
    history.replaceState(null, null, url);
    if (elTag) elTag.click();
  } else {
    if (document.getElementById("por__tabs")) {
      const tabse = document.querySelector(
        ".as__nav_links_ppal_link[data-tab='0']"
      );
      tabse.click();
    }
  }
}

function changeTab(tab, scroll = true) {
  document.getElementById("docs_tabs").selectedIndex = parseInt(tab);
  if (document.getElementById("por__tabs")) {
    const tabse = document.querySelector(
      ".as__g_faqs_ls[data-tab='" + parseInt(tab) + "']"
    );
    tabse.classList.add("active");
  }
  document.querySelectorAll(".tabs_link").forEach((tabe) => {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");
    else {
      tabe.classList.add("active");

      window.location.hash = tabe.dataset.hash; // Change the page hash
      if (scroll) {
        var url = location.href;
        location.href = "#servicios";
        history.replaceState(null, null, url);
      }
    }
  });
  document.querySelectorAll(".servicios_contents_item").forEach((tabe) => {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");
    else tabe.classList.add("active");
  });

  gsap.fromTo(
    ".servicios_contents_item.active ul li",
    { opacity: 0 },
    { opacity: 1, y: 5, duration: 0.5, stagger: 0.2, ease: "power1.inOut" }
  );
}
if (document.getElementById("as__ayuda")) {
  const tl_banner = gsap.timeline({ paused: false });
  tl_banner.to(
    ".as__ayuda svg .ban_st",
    {
      transformOrigin: "center",
      duration: 4,
      repeat: -1,
      rotate: function (i) {
        return i % 2 == 0 ? 360 : -360;
      },
      ease: "power4.inout",
      yoyo: true,
      stagger: 0.2,
    },
    "0"
  );
  tl_banner.to(
    ".as__ayuda svg .ban_nube_1",
    {
      scale: 1.1,
      transformOrigin: "center",
      duration: 4,
      repeat: -1,
      ease: "power4.inout",
      yoyo: true,
      stagger: 0.2,
    },
    "0"
  );
  tl_banner.fromTo(
    ".as__ayuda svg .ban_nube_it",
    {
      x: "-40vw",
    },
    {
      x: "180vw",
      transformOrigin: "center",
      duration: 19,
      repeat: -1,
      ease: "power4.inout",
      // yoyo: true,
      stagger: 0.2,
    },
    "0"
  );
  tl_banner.fromTo(
    ".as__ayuda svg .ban_nube_dt",
    {
      x: "20vw",
    },
    {
      x: "-120vw",
      transformOrigin: "center",
      duration: 15,
      repeat: -1,
      ease: "power4.inout",
      // yoyo: true,
      stagger: 0.2,
    },
    "0"
  );
}

//CALENDAR
setCalendar(gsap);

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
  });

  const as = document.querySelectorAll(".tabs_link");

  as.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      changeTab2(tab);
    });
  });
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

if (document.getElementById("tabs_nov")) {
  const as = document.querySelectorAll(".tab");

  as.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = e.target.dataset.tab;

      document.querySelectorAll(".tab-active").forEach((tabe) => {
        tabe.classList.remove("tab-active");
      });
      document.querySelectorAll(`[data-tab="${tab}"]`).forEach((tabe) => {
        tabe.classList.add("tab-active");
      });
    });
  });
}

// if (document.querySelectorAll("table.tableClass").length > 0) {
//   document.querySelectorAll("table.tableClass").forEach((table) => {
//     console.log("table", table);
//     const div = document.createElement("div");
//     table.parentNode.insertBefore(div, table.nextSibling);
//     div.classList.add("gridjs-container");
//     const grid = new Grid({
//       from: table,
//       // pagination: {
//       //   limit: 10
//       // },
//     }).render(div);
//   });
// }

//HOME
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
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
if (document.getElementById("modal_per")) {
  if (document.getElementById("modal_per").dataset.pass == "true") {
    document.getElementById("modal_data").checked = getCookieValue("modal_data")
      ? false
      : true;

    document.getElementById("showcheck").checked = false;

    document.getElementById("modal_data").addEventListener("change", (e) => {
      if (e.target.checked) {
      } else {
      }
    });
    document.getElementById("showcheck").addEventListener("change", (e) => {
      if (e.target.checked) {
        setCookie("modal_data", true, 30);
        setTimeout(() => {
          document.getElementById("modal_data").checked = false;
        }, 500);
      } else {
        deleteCookie("modal_data");
        // setCookie("modal_sus", "false", 1);
      }
    });

    document
      .getElementsByClassName("btn_no")[0]
      .addEventListener("click", () => {
        setCookie("modal_data", true, 1);
        setTimeout(() => {
          document.getElementById("modal_data").checked = false;
        }, 500);
      });
    document
      .getElementsByClassName("btn_si")[0]
      .addEventListener("click", () => {
        setCookie("modal_data", true, 30);
        setTimeout(() => {
          document.getElementById("modal_data").checked = false;
        }, 500);
      });
  } else {
    document.getElementById("modal_data").checked = getCookieValue("modal_data")
      ? false
      : true;

    document.getElementById("showcheck").checked = false;

    document.getElementById("modal_data").addEventListener("change", (e) => {
      if (e.target.checked) {
      } else {
      }
    });

    document
      .getElementsByClassName("btn_si")[0]
      .addEventListener("click", () => {
        setCookie("modal_data", true, 30);
        setTimeout(() => {
          document.getElementById("modal_data").checked = false;
          window.location.reload();
        }, 500);
      });

    document
      .getElementsByClassName("btn_no")[0]
      .addEventListener("click", () => {
        document.querySelector(".modal_info.info1").classList.add("hidden");
        document.querySelector(".modal_info.info2").classList.remove("hidden");
        document.querySelector(".modal_info.info2").classList.add("flex");
      });
    document
      .getElementsByClassName("btn_back")[0]
      .addEventListener("click", () => {
        document.querySelector(".modal_info.info2").classList.remove("flex");
        document.querySelector(".modal_info.info2").classList.add("hidden");
        document.querySelector(".modal_info.info1").classList.remove("hidden");
        document.querySelector(".modal_info.info1").classList.add("flex");
      });
  }
}

if (document.getElementById("close_session")) {
  document.addEventListener("click", () => {
    document.getElementById("toast_session").classList.add("hidden");
    document.removeEventListener("click", () => {});
  });
}

if (document.getElementById("timer_session")) {
  var inactivityTime = function () {
    console.log("inactivityTime");
    var time, time2;

    // DOM Events

    document
      .getElementById("close_toast_session")
      .addEventListener("click", () => {
        resetTimer();
        document.getElementById("toast_session").classList.add("hidden");
      });

    document
      .getElementById("close_timer_session")
      .addEventListener("click", () => {
        resetTimer2();
      });

    function showToast() {
      console.log("showToast");
      document.getElementById("toast_session").classList.remove("hidden");
      //location.href = 'logout.html'
    }
    function showDialog() {
      console.log("showDialog");
      document.getElementById("toast_session").classList.add("hidden");
      document.getElementById("timer_session").setAttribute("open", true);
      //location.href = 'logout.html'
    }

    function resetTimer(e) {
      clearTimeout(time);
      time = setTimeout(showToast, 1000 * 60 * 7);
    }
    function resetTimer2(e) {
      clearTimeout(time2);
      time2 = setTimeout(showDialog, 1000 * 60 * 15);
    }
    resetTimer();
    resetTimer2();
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
    document.addEventListener("scroll", resetTimer);
    document.addEventListener("mousemove", resetTimer2);
    document.addEventListener("keydown", resetTimer2);
    document.addEventListener("scroll", resetTimer2);
  };
  window.onload = function () {
    inactivityTime();
  };
}
if (document.getElementById("tabs_nov")) {
  if (document.getElementById("tabs_nov").querySelector("span")) {
    const el = document.querySelector("#tabs_nov span");
    const a = document.querySelector("#tabs_nov span a");
    document.getElementById("tabs_nov").appendChild(a);
    el.remove();
  }
}
if (document.getElementsByClassName("pa_co_form")) {
  const pbBottomButtons = plainHtml(
    `<tableborder="0"cellpadding="0"cellspacing="0"><tbody><tr><tdclass="pbTitle">&nbsp;</td><td>&nbsp;</td></tr></tbody></table>`
  );
  document.querySelectorAll(".pbBottomButtons").forEach((pb) => {
    if (plainHtml(pb.innerHTML) == pbBottomButtons) {
      pb.remove();
    }
  });
}
// if (document.getElementsByClassName("pa_co_form")) {
//   ('<div class="pbFooter secondaryPalette"><div class="bg"></div></div>');
// }

function plainHtml(html) {
  return html.replace(/\t|\n|\r|:|\s/g, "");
}

waitForElm(".palert").then((elm) => {
  document.querySelectorAll(".palert").forEach((pa) => {
    // check if element not contain span
    if (!pa.querySelector("span")) {
      const org_html = pa.innerHTML;
      const span = document.createElement("span");
      span.classList.add("palerts");
      span.innerHTML = org_html;
      pa.innerHTML = "";
      pa.appendChild(span);
    }
  });
});
waitForElm(".empty").then((elm) => {
  document.querySelectorAll(".empty").forEach((el) => {
    if (el.innerHTML == "" || el.innerHTML == " " || el.innerHTML == "&nbsp;")
      el.remove();
  });
});

function addStyles(type = 1) {
  document.querySelectorAll(".bPageBlock").forEach((pbi) => {
    pbi.querySelectorAll(".pbBottomButtons").forEach((pb, index) => {
      if (
        plainHtml(pb.innerHTML) ==
        `<tableborder="0"cellpadding="0"cellspacing="0"><tbody><tr><tdclass="pbTitle">&nbsp;</td><td>&nbsp;</td></tr></tbody></table>`
      )
        pb.remove();
    });
  });
}

if (document.querySelectorAll(".glide").length > 0) {
  new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    autoheight: true,
    perView: 3,
    breakpoints: {
      1024: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  }).mount();
}

for (let alert of document.querySelectorAll(".alert")) {
  if (isEmpty(alert)) {
    console.log("alert", alert.parentElement.nextSibling.innerHTML);
    const firstTd = alert.closest("td"); // Get the parent <td> of the alert
    const secondTd = firstTd.nextElementSibling; // Get the next <td> (the second <td>)
    // Remove the second <td>
    // Get the content of the second <td>
    const content = secondTd.innerHTML; // or use .textContent for plain text
    secondTd.remove();
    alert.innerHTML = content;
  }
}

function isEmpty(node) {
  return node.textContent.trim() === "";
}

function checkRequestParameter(parameterName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has(parameterName);
}

function removeParameter(parameterName) {
  const url = new URL(window.location.href);
  url.searchParams.delete(parameterName);
  window.history.replaceState({}, document.title, url.toString());
}
function initIntro() {
  if (
    document.querySelector(".pa__banner") &&
    getCookieValue("intro") == null
  ) {
    const steps = [
      {
        content:
          "<img src='/assets/images/PORTAL/bienvenida.jpg' /><p>Aquí podrás gestionar documentos, novedades y solicitudes.</p><p> <b> ¡Te haremos un rápido recorrido! </b></p>",
        title: "¡Bienvenido al Portal Transaccional de ASULADO!",
        // target: "",
        order: 0,
        group: "init",
      },
      {
        content:
          "Aquí podrás configurar toda la información general de tu cuenta.",
        title: "Esta es tu foto de perfil",
        target: "#nav-user .help",
        order: 1,
        group: "init",
        fixed: true,
        beforeEnter: function (currentStep, nextStep) {
          const nav = document.querySelector("#nav-user");
          const ul = document.querySelector("#nav-user ul");
          const help = document.querySelector("#nav-user .help");
          const w = ul.offsetWidth;
          const h = ul.offsetHeight + 20;
          help.style.width = w + "px";
          help.style.height = h + "px";
          help.classList.remove("hidden");
          ul.classList.add("openp");
          nav.classList.add("dest");
        },
        beforeLeave: function (currentStep, nextStep) {
          const nav = document.querySelector("#nav-user");
          const ul = document.querySelector("#nav-user ul");
          const help = document.querySelector("#nav-user .help");
          help.style.width = "0px";
          help.style.height = "0px";
          help.classList.add("hidden");
          ul.classList.remove("openp");
          nav.classList.remove("dest");
        },
      },
      {
        content:
          "En esta sección podrás gestionar y descargar de forma autónoma tus documentos.",
        title: "Sección de certificados",
        target: "#nav-certificados .help_int",
        order: 2,
        group: "init",
        fixed: true,
        beforeEnter: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-certificados");
          const ul = document.querySelector("#nav-certificados ul");
          const help = document.querySelector("#nav-certificados .help_int");
          const w = ul.offsetWidth;
          const h = ul.offsetHeight + 20;
          help.style.width = w + "px";
          help.style.height = h + "px";
          help.classList.remove("hidden");
          ul.classList.add("openp");
          nav.classList.add("dest");
        },
        beforeLeave: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-certificados");
          const ul = document.querySelector("#nav-certificados ul");
          const help = document.querySelector("#nav-certificados .help_int");
          help.style.width = "0px";
          help.style.height = "0px";
          help.classList.add("hidden");
          ul.classList.remove("openp");
          nav.classList.remove("dest");
        },
      },
      {
        content:
          "Aquí podrás crear y consultar novedades de deducción o certificación de nómina.",
        title: "Sección de novedades",
        target: "#nav-novedades .help_int",
        order: 3,
        group: "init",
        fixed: true,
        beforeEnter: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-novedades");
          const ul = document.querySelector("#nav-novedades ul");
          const help = document.querySelector("#nav-novedades .help_int");
          const w = ul.offsetWidth;
          const h = ul.offsetHeight + 20;
          help.style.width = w + "px";
          help.style.height = h + "px";
          help.classList.remove("hidden");
          ul.classList.add("openp");
          nav.classList.add("dest");
        },
        beforeLeave: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-novedades");
          const ul = document.querySelector("#nav-novedades ul");
          const help = document.querySelector("#nav-novedades .help_int");
          help.style.width = "0px";
          help.style.height = "0px";
          help.classList.add("hidden");
          ul.classList.remove("openp");
          nav.classList.remove("dest");
        },
      },
      {
        content:
          "En esta sección puedes crear y consultar tus peticiones, quejas, reclamos o servicios.",
        title: "Sección de solicitudes",
        target: "#nav-solicitudes .help_int",
        order: 4,
        group: "init",
        fixed: true,
        beforeEnter: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-solicitudes");
          const ul = document.querySelector("#nav-solicitudes ul");
          const help = document.querySelector("#nav-solicitudes .help_int");
          const w = ul.offsetWidth;
          const h = ul.offsetHeight + 20;
          help.style.width = w + "px";
          help.style.height = h + "px";
          help.classList.remove("hidden");
          ul.classList.add("openp");
          nav.classList.add("dest");
        },
        beforeLeave: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-solicitudes");
          const ul = document.querySelector("#nav-solicitudes ul");
          const help = document.querySelector("#nav-solicitudes .help_int");
          help.style.width = "0px";
          help.style.height = "0px";
          help.classList.add("hidden");
          ul.classList.remove("openp");
          nav.classList.remove("dest");
        },
      },
      {
        content:
          "Consulta aquí las preguntas que tengas sobre el Portal y sus servicios.",
        title: "Sección de preguntas frecuentes",
        target: "#nav-preguntas",
        order: 5,
        group: "init",
        fixed: true,
        beforeEnter: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-preguntas");
          nav.classList.add("dest");
        },
        beforeLeave: function (currentStep, nextStep) {
          handleMenu();
          const nav = document.querySelector("#nav-preguntas");
          nav.classList.remove("dest");
        },
      },
      {
        content:
          "Aquí encuentras todos los servicios del Portal en un mismo lugar.",
        title: "Servicios a un clic",
        target: "#servicios .pa__inner_title",
        order: 6,
        group: "init",
        fixed: false,
        beforeEnter: function (currentStep, nextStep) {},
        beforeLeave: function (currentStep, nextStep) {},
      },
      {
        content:
          "Encuentra artículos que te darán recomendaciones para lograr tener bienestar financiero.",
        title: "Artículos de interés",
        target: ".as__articulos .pa__inner_title",
        order: 7,
        group: "init",
        fixed: false,
        beforeEnter: function (currentStep, nextStep) {},
        beforeLeave: function (currentStep, nextStep) {},
      },
      {
        content:
          "Si no encuentras alguna información que necesitas en el Portal, aquí puedes buscarla.",
        title: "Buscador del Portal",
        target: "#nav_search",
        order: 8,
        group: "init",
        fixed: true,
        beforeEnter: function (currentStep, nextStep) {},
        beforeLeave: function (currentStep, nextStep) {},
      },
    ];
    const options = {
      autoScroll: true, // auto scroll to elements
      autoScrollSmooth: true, // auto scroll smooth
      autoScrollOffset: 20, // Offset from edge for smooth scroll
      // backdropClass: "", // additional css class for tour backdrop
      backdropColor: "rgba(69, 125 ,149, 0.5)", // RGBA support only
      // targetPadding: 30, // space around highlighted target in px
      // backdropAnimate: true, // animate backdrop position & size
      // dialogClass: "", // additional css class for tour dialog
      // dialogZ: 999, // z-index of dialog
      // dialogWidth: 0, // width style property for dialog - recommended if loading images into content
      dialogMaxWidth: "28rem", // max-width style property for dialog
      dialogAnimate: true, // Animate dialog position & size
      // closeButton: true, // show close button
      nextLabel: "Siguiente", // text for next button
      prevLabel: "Anterior", // text for prev button
      finishLabel: "¡Estoy listo!", // text for finish button
      // hidePrev: false, // hide prev button
      // hideNext: false, // hide next button
      completeOnFinish: true, // Set tour as finished in localStorage on finish
      // showStepDots: true, // show the dots tour progress
      // stepDotsPlacement: "footer", // show dots in dialog body/footer
      // showButtons: true, // show next/prev buttons
      showStepProgress: true, // show `1/5` human-readable step progress
      progressBar: "#3bc3ed", // show progress bar under dialog header - pass a colour to enable
      // keyboardControls: false, // show next & prev arrows keys + esc key
      exitOnEscape: true, // Close the tour on escape key
      exitOnClickOutside: false, // Close the tour on backdrop click
      // rememberStep: true, // open tour on last active step
      // debug: false, // show console logging
      steps: steps, // pre-define the tour steps
    };
    const tg = new TourGuideClient(options);

    tg.start();
    tg.onAfterStepChange(() => {
      // console.info("step change complete " + tg.activeStep);
    });

    tg.onFinish(() => {
      document.getElementById("modal_intro").showModal();
      setBtnsClose(tg);
      // setCookie("intro", true, 9000);
      // document.getElementById("modal_intro").classList;
    });
    tg.onAfterExit(() => {
      document.getElementById("modal_intro").showModal();
      setBtnsClose(tg);
      // setCookie("intro", true, 5);
    });

    // tg.onBeforeExit(() => {
    //   return new Promise((resolve, reject) => {
    //     if (confirm("Are you sure you want to close the tour?")) {
    //       return resolve(true);
    //     } else {
    //       return reject();
    //     }
    //   });
    // });
  }
}
function setCookieIntro() {
  setCookie("intro", true, 9000);
}
function setBtnsClose(tg) {
  console.log(document.querySelectorAll("#modal_intro button"));
  document.querySelectorAll("#modal_intro button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("btn_x")) {
        setCookieIntro();
      }
      if (btn.classList.contains("btn_ok")) {
        tg.start();
      }
      // setCookieIntro();
      document.getElementById("modal_intro").close();
    });
  });
}

if (document.querySelector(".pa__banner")) {
  if (checkRequestParameter("ayuda")) {
    deleteCookie("intro");
    removeParameter("ayuda");
  }
  initIntro();
}
