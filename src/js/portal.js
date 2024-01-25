import { gsap } from "gsap";

const id_login = "pa__login";
const pa__login = document.getElementById(id_login);

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
