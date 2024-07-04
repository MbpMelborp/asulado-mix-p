import { gsap } from "gsap";
import { setCalendar } from "./calendar";
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
        changeTab(tab, true);
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
      // location.href = "#";
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
  }
}

function changeTab(tab, scroll = true) {
  document.getElementById("docs_tabs").selectedIndex = parseInt(tab);
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

  // document.addEventListener("click", () => {
  //   document.getElementById("toast_session").classList.add("hidden");
  //   document.removeEventListener("click", () => {});
  // });
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

waitForElm('form[name="pg:fm"]').then((fm) => {
  document.querySelectorAll('form[name="pg:fm"]').forEach((fm) => {
    // console.log("fm", fm);

    if (document.querySelectorAll('form[name="pg:fm"] h6').length > 0) {
      document.querySelectorAll(".secondaryPalette").forEach((tb) => {
        tb.classList.add("gfull");
      });
    }
    if (fm.attributes.action.value.includes("NomiCompensacion")) {
      if (
        document.querySelector('input[name="pg:fm:pb:actualiza:btnTraslado"]')
      ) {
        document.querySelector(".bPageBlock").classList.add("caja");
      }
    }
    if (fm.attributes.action.value.includes("NomiEps")) {
      if (document.querySelector('input[name="pg:fm:pb:p:btnTraslado"]')) {
        document.querySelector(".bPageBlock").classList.add("caja");
      }
    }
    if (
      fm.attributes.action.value.includes("NomiEps") ||
      fm.attributes.action.value.includes("UpdateDocument") ||
      fm.attributes.action.value.includes("CertiEstudio") 
    ) {
      if (
        fm.querySelector('input[value="Confirmar"]') ||
        (fm.querySelector('input[value="Enviar"]') &&
          fm.querySelector('input[value="Cancelar"]'))
      ) {
        fm.querySelector(".bPageBlock").classList.add("gperp");
      }
    }
    if (fm.attributes.action.value.includes("NomiVoluntaria")) {
      if (document.querySelector('input[name="pg:fm:pb:p:btnTraslado"]')) {
        document.querySelector(".bPageBlock").classList.add("caja");
      }
    }
  });
});
waitForElm('input[name="pg:fm:pb:preview:btnSend"]').then((elm) => {
  document.querySelectorAll(".detailList tbody").forEach((dl) => {
    dl.classList.add("tflex");
  });
});
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
    console.log("el", el.innerHTML);
    if (el.innerHTML == "" || el.innerHTML == " " || el.innerHTML == "&nbsp;")
      el.remove();
  });
});

const btns = [
  'input[name="pg:fm:pb:ps:btnVerify"]',
  'input[name="pg:fm:pb:confirmacion:btnVerifys"]',
  'input[name="pg:fm:pb:preview:btnvolver"]',
  'input[name="pg:fm:pb:ext:btnIngreso"]',
  'input[name="pg:fm:pb:actualiza:btnTraslado"]',
  "#pg:fm:pb:motorFallido",
  'input[name="consultaTipo"]',
  'input[name="pg:fm:pb:ps:btnvolver"]',
  'input[name="pg:fm:pb:ps2:btnVerify"]',
];
btns.forEach((btn) => {
  waitForElm(".empty").then((elm) => {
    addStyles();
  });
});

// function checkForms() {
//   if (
//     document.querySelector('input[name="pg:fm:pb:ps:btnVerify"]') ||
//     document.querySelector('input[name="pg:fm:pb:confirmacion:btnVerifys"]') ||
//     document.querySelector('input[name="pg:fm:pb:preview:btnvolver"]') ||
//     document.querySelector('input[name="pg:fm:pb:ext:btnIngreso"]') ||
//     document.querySelector('input[name="pg:fm:pb:actualiza:btnTraslado"]') ||
//     document.getElementById("pg:fm:pb:motorFallido") ||
//     document.querySelector('input[name="consultaTipo"]')
//   ) {
//     addStyles();
//   }
// }
// checkForms();

function addStyles(type = 1) {
  document.querySelectorAll(".bPageBlock").forEach((pbi) => {
    pbi.classList.add("gfull");
    if (
      !document.querySelector('input[name="pg:fm:pb:actualiza:btnTraslado"]') &&
      !document.querySelector('input[name="pg:fm:pb:extx:btnRetiro"]') &&
      !document.querySelector('input[name="pg:fm:pb:p:btnTraslado"]')
    )
      pbi.querySelectorAll(".pbBottomButtons").forEach((pb, index) => {
        pb.classList.add("btnnse");
        if (
          plainHtml(pb.innerHTML) ==
          `<tableborder="0"cellpadding="0"cellspacing="0"><tbody><tr><tdclass="pbTitle">&nbsp;</td><td>&nbsp;</td></tr></tbody></table>`
        )
          pb.remove();
      });
  });
}

// function checkAsyncForm() {
//   if (
//     document.querySelector('input[name="pg:fm:pb:ps:btnvolver"]') ||
//     document.querySelector('input[name="pg:fm:pb:ps2:btnVerify"]')
//   ) {
//     addStyles();

//     clearInterval(interP);
//   }
//   if (document.querySelector('input[name="pg:fm2:pb2:ps2:btnVerify"]')) {
//     addStyles(2);
//     clearInterval(interP);
//   }
// }
// const interP = setInterval(() => {
//   checkAsyncForm();
// }, 1000);
// checkAsyncForm();
// const intro = introJs().setOptions({
//   nextLabel: "Siguiente",
//   prevLabel: "Anterior",
//   doneLabel: "Finalizar",
//   steps: [
//     {
//       intro: "Bienvenido a Asulado, tu aliado en beneficios garantizados",
//     },
//     {
//       element: document.querySelector("#as__header"),
//       intro:
//         "Acá encontrarás las opciones de navegación del sitio y podrás acceder a los dierentes servicios que ofrece Asulado.",
//     },
//   ],
// });
// intro.start();
