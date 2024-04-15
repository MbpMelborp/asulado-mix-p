const timerInterval = 12000;
function setBanners(gsap) {
  let tls = setTls(gsap);
  const banners = document.querySelectorAll(".banner");
  const btn_next = document.querySelector(".as__banner_controls_arrows .next");
  btn_next.addEventListener("click", () => {
    let active = document.querySelector(".banner.active");
    let next = active.nextElementSibling;
    if (next) {
      active.classList.remove("active");
      next.classList.add("active");
    } else {
      active.classList.remove("active");
      banners[0].classList.add("active");
    }
    tls.tl.kill();
    tls.tl_banner_anciana.kill();
    tls.tl_banner_ninos.kill();
    tls = setTls(gsap);
    setDots();
    clearInterval(interval);
    interval = setInterval(() => {
      btn_next.click();
    }, timerInterval);
  });
  const btn_prev = document.querySelector(".as__banner_controls_arrows .prev");
  btn_prev.addEventListener("click", () => {
    let active = document.querySelector(".banner.active");
    let prev = active.previousElementSibling;
    if (prev) {
      active.classList.remove("active");
      prev.classList.add("active");
    } else {
      active.classList.remove("active");
      banners[banners.length - 1].classList.add("active");
    }
    tls.tl.kill();
    tls.tl_banner_anciana.kill();
    tls.tl_banner_ninos.kill();
    tls = setTls(gsap);
    setDots();
    clearInterval(interval);
    interval = setInterval(() => {
      btn_next.click();
    }, timerInterval);
  });

  let interval = setInterval(() => {
    btn_next.click();
  }, timerInterval);

  if (banners.length > 1) {
    setDots(tls, interval);
  } else if (banners.length == 1) {
    document.querySelector(".as__banner_controls_arrows").style.display =
      "none";
    document.querySelector(".as__banner_controls_dots").style.display = "none";
  }
}

function setDots(gsap, tls) {
  const banners = document.querySelectorAll(".banner");
  const dots = document.querySelector(".as__banner_controls_dots");
  let html = "";
  banners.forEach((banner, i) => {
    if (banner.classList.contains("active"))
      html += `<li class="dot active">${i + 1}</div>`;
    else html += `<li class="dot">${i + 1}</li>`;
  });
  dots.innerHTML = html;
  // const dots_btns = document.querySelectorAll(".as__banner_controls_dots .dot");
  // dots_btns.forEach((dot, i) => {
  //   dot.addEventListener("click", () => {
  //     const active = document.querySelector(".banner.active");
  //     active.classList.remove("active");
  //     banners[i].classList.add("active");

  //     setDots();
  //   });
  // });
}

function setTls(gsap) {
  const tl = gsap.timeline({ paused: false });
  tl.to(
    ".banner.active .as__banner_content h1 ",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "=0"
  );
  tl.from(
    ".banner.active .as__banner_piso",
    {
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: "power2.inout",
    },
    "-=1"
  );
  tl.from(
    ".banner.active .as__banner_content .ban_anim1",
    {
      scale: 0.8,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=1"
  );
  tl.from(
    ".banner.active  .as__banner_images img",
    {
      duration: 1,
      y: -10,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=1"
  );
  tl.fromTo(
    ".banner.active .as__banner_left .as__banner_left_int",
    {
      yPercent: 20,
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      yPercent: 0,
      scale: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=1"
  );
  gsap.set(".banner.active .as__banner_right", { opacity: 1 });
  tl.fromTo(
    ".banner.active .as__banner_right .as__banner_right_int",
    {
      xPercent: 100,
      opacity: 1,
    },
    {
      opacity: 1,
      xPercent: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=1"
  );

  const tl_banner_anciana = gsap.timeline({ paused: false });
  tl_banner_anciana.to(
    ".banner.active .as__banner_right_int #gafas",
    {
      transformOrigin: "center",
      duration: 1,
      repeat: -1,
      y: 256,
      ease: "sine.inOut",
      yoyo: true,
      stagger: 0.2,
    },
    "0"
  );

  tl_banner_anciana.to(
    ".banner.active .as__banner_right_int #mano",
    {
      scale: 1.1,
      transformOrigin: "left top",
      duration: 3,
      rotate: 10,
      y: 467,
      repeat: -1,
      ease: "power4.inout",
      yoyo: true,
      stagger: 0.2,
    },
    "0"
  );

  const tl_banner_ninos = gsap.timeline({ paused: false });

  tl_banner_ninos.to(
    ".banner.active .as__banner_left_int #cabeza",
    {
      transformOrigin: "center bottom",
      duration: 1,
      repeat: -1,
      rotate: 5,
      ease: "sine.inOut",
      yoyo: true,
      stagger: 0.2,
    },
    "0"
  );

  tl_banner_ninos.to(
    ".banner.active .as__banner_left_int #mano",
    {
      transformOrigin: "top left",
      duration: 3,
      rotate: 15,
      y: 286,
      repeat: -1,
      ease: "power4.inout",
      yoyo: true,
    },
    "0"
  );
  tl_banner_ninos.to(
    ".banner.active .as__banner_left_int #pierna",
    {
      transformOrigin: "180px 0px 0px",
      duration: 3,
      rotate: -15,
      repeat: -1,
      ease: "power4.inout",
      yoyo: true,
    },
    "0"
  );
  return {
    tl,
    tl_banner_anciana,
    tl_banner_ninos,
  };
}

export function setHomeBanners(gsap) {
  if (document.getElementById("home_banners")) {
    const tl_banner = gsap.timeline({ paused: false });
    tl_banner.to(
      ".as__banner .ban_st_1",
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
      ".as__banner .ban_nube_1",
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
      ".as__banner .ban_nube_it",
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
      ".as__banner .ban_nube_dt",
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
    setBanners(gsap);
  }
}
export function setHomePropositios(gsap, ScrollTrigger) {
  if (document.getElementById("home_proposito")) {
    const tl = gsap.timeline({ paused: true });
    const toMarquee = -(
      document.querySelector(".as_proposito .as__marquee .as__marquee_to_left")
        .offsetWidth - window.innerWidth
    );
    tl.from(
      ".as_proposito .as__title_section",

      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0"
    )
      .fromTo(
        ".as_proposito .as__marquee .as__marquee_to_left",
        { x: 0 },
        {
          x: toMarquee,
          duration: 20,
          opacity: 1,
          ease: "linear",
        },
        "-=1"
      )
      .fromTo(
        ".as_proposito .as_proposito_content .prop_anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.4,
        },
        "-=8"
      )
      .from(
        ".as__proposito_link .as__button",
        {
          opacity: 0,
          y: 20,
          duration: 1,
        },
        "-=10"
      )
      .from(
        ".as__proposito_ilus img",
        {
          opacity: 0.5,
          y: 50,
          duration: 4,
        },
        "-=3"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("home_proposito"),
      start: "-20% bottom",
      end: "40% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}
export function setHomeServicios(gsap, ScrollTrigger) {
  if (document.getElementById("home_servicios")) {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".as__servicios_item",
      { opacity: 0, y: 50 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 1,
      },
      "-=0"
    );
    tl.fromTo(
      ".as__servicios_image img",
      { y: 30, scale: 1.1 },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.2,
      },
      "-=1"
    );
    tl.from(
      ".img_renta",
      { backgroundColor: "transparent", duration: 2 },
      "-=3"
    );

    tl.from(
      ".img_seguro",
      { backgroundColor: "transparent", duration: 2 },
      "-=3"
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("home_servicios"),
      // start: "20% bottom",
      // end: "center center",
      start: "top bottom",
      end: "center center",
      scrub: 3,
      //markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function setHomeCifras(gsap, ScrollTrigger) {
  if (document.getElementById("home_cifras")) {
    const toCLiets = 29;
    const toCobertura = 56;
    const toColaboradores = 93;
    const counters = { clientes: 0, cobertura: 0, colaboradores: 0 };

    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__cifras .as__title_section",
      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0"
    );
    tl.fromTo(
      ".as__cifras .as__cifras_content .as__cifras_content_cifra",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=1"
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("home_cifras"),
      start: "-20% bottom",
      end: "center center",
      scrub: 3,
      // markers: true,
      onEnter: () => {
        gsap.fromTo(
          counters,
          { val: 0 },
          {
            val: toCLiets,
            duration: 1,
            roundProps: "clientes",
            ease: "ease.out",
            delay: 1,
            onUpdate: function () {
              counters.clientes = Math.round(counters.val);
              document.getElementById("home_cifras_clientes").innerHTML =
                counters.clientes;
              //   setClientes(Math.round(counters.val));
            },
          }
        );
        gsap.fromTo(
          counters,
          { val: 0 },
          {
            val: toCobertura,
            duration: 1,
            roundProps: "cobertura",
            ease: "ease.out",
            delay: 1.5,
            onUpdate: function () {
              counters.cobertura = Math.round(counters.val);
              document.getElementById("home_cifras_cobertura").innerHTML =
                counters.cobertura;
              //   setCobertura(Math.round(counters.val));
            },
          }
        );
        gsap.fromTo(
          counters,
          { val: 0 },
          {
            val: toColaboradores,
            duration: 1,
            roundProps: "colaboradores",
            ease: "ease.out",
            delay: 2,
            onUpdate: function () {
              counters.colaboradores = Math.round(counters.val);
              // console.log(counters.val);
              var cols = counters.colaboradores / 10;
              document.getElementById("home_cifras_colaboradores").innerHTML =
                cols.toFixed(1);
              //   setColaboradores(Math.round(counters.val));
            },
          }
        );
      },
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}
export function setHomeDocumentos(gsap, ScrollTrigger) {
  if (document.getElementById("home_documentos")) {
    const tl_yoyo = gsap.timeline({ paused: true });

    tl_yoyo.to(
      ".as__documentos .img_doc_3",
      {
        yPercent: -1,
        duration: 1,
        repeat: -1,
        ease: "power4.inout",
        yoyo: true,
      },
      "0"
    );

    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__documentos .as__title_section",
      {
        y: -20,
        duration: 1,
        opacity: 0,
      },
      "=0"
    );

    tl.from(
      ".as__documentos .as__documentos_img",
      {
        opacity: 0,
        yPercent: 20,
        duration: 8,
        opacity: 1,
        ease: "power4.out",
      },
      "+=2"
    );
    tl.fromTo(
      ".as__documentos .as__documentos_content h4 span",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=3"
    );
    tl.fromTo(
      ".as__documentos .as__documentos_content_info",
      { opacity: 0, y: -20 },
      {
        opacity: 0,
        y: 0,
        duration: 2,
        opacity: 1,
      },
      "-=2"
    );
    tl.addLabel("end", "-=4");
    tl.fromTo(
      ".as__documentos .img_doc_1",
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
      },
      "end"
    );
    tl.fromTo(
      ".as__documentos .img_doc_2",
      { y: 100, scale: 1.2 },
      {
        y: 0,
        scale: 1,
        duration: 3,
      },
      "end"
    );
    tl.fromTo(
      ".as__documentos .img_doc_3",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
      },
      "end"
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("home_documentos"),
      start: "-20% bottom",
      end: "30% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        if (progress == 1) tl_yoyo.play();
        else tl_yoyo.pause();
      },
    });
  }
}
export function setHomeBlog(gsap, ScrollTrigger) {
  if (document.getElementById("home_blog")) {
    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__blog .as__title_section",
      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0"
    );
    tl.fromTo(
      ".as__blog .as__blog_posts .as__post_small a",
      { opacity: 0, xPercent: -20 },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=2"
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("home_blog"),
      start: "-20% bottom",
      end: "top center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}
