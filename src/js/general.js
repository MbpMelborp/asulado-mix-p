import SuperMarquee from "sp-supermarquee";

export function setTop(gsap, ScrollTrigger) {
  const id = document.getElementById("as__top");

  if (id) {
    const tl_top = gsap.timeline({ paused: false });

    tl_top.from(
      ".as__top_svg",
      {
        scale: 1.1,
        opacitiy: 0,
        transformOrigin: "center",
        duration: 1,
        ease: "power4.inout",
      },
      "0"
    );

    tl_top.fromTo(
      ".as__top_int img",
      {
        yPercent: 150,
        opacity: 0,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "power4.inout",
      },
      "-=1"
    );
    tl_top.fromTo(
      ".as__top_title_item",
      {
        xPercent: -10,
        opacity: 0,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.inout",
      },
      "-=0"
    );
  }
  const marqEl = document.getElementById("as__top_marquee");
  if (marqEl) {
    const datap = document.getElementById("as__top_marquee").dataset["marquee"];
    const marquee = new SuperMarquee(marqEl, {
      content: datap,
      easing: true,
      speed: 0.1,
    });
    const tl = gsap.timeline({ paused: true });
    tl.to("#as__top_marquee", {
      yPercent: 60,
      duration: 4,
      opacitiy: 0,
    });
    tl.to(
      ".as__top_int",
      {
        duration: 2,
        opacitiy: 0.8,
      },
      "-=4"
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("as__top_marquee"),
      start: "center center",
      end: "150% center",
      scrub: 3,
      //   markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function setQue(gsap, ScrollTrigger) {
  const id = document.getElementById("que_es");

  if (id) {
    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__que_es .as__title_section",

      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      0
    )
      .addLabel("startp", 0)
      .fromTo(
        ".as__que_es .as__que_es_content .prop_anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          opacity: 1,
          stagger: 0.4,
        },
        "startp"
      )
      .fromTo(
        ".as__que_es img",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 4,
        },
        "startp-=3"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: id,
      start: "-20% center",
      end: "20% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function setGestion(gsap, ScrollTrigger) {
  const id = document.getElementById("gestion");

  if (id) {
    const tl = gsap.timeline({ paused: true });

    tl.addLabel("startp", 0)
      .fromTo(
        ".as__gestion h3",
        { clipPath: "inset(0 100% 0 0)", opacitiy: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 4,
        },
        "startp"
      )
      .fromTo(
        ".as__gestion .as__gestion_content .prop_anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          opacity: 1,
          stagger: 0.4,
        },
        "startp-=2"
      )
      .fromTo(
        ".as__gestion img",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 4,
        },
        "startp-=3"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: id,
      start: "-20% center",
      end: "20% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function setAyuda(gsap, ScrollTrigger) {
  const id = document.getElementById("ayuda");

  if (id) {
    const tl_yoyo = gsap.timeline({ paused: false });
    tl_yoyo
      .to(
        "#ayuda .na_nube",
        {
          transformOrigin: "center",
          duration: 1,
          repeat: -1,
          y: 15,
          ease: "sine.inOut",
          stagger: 0.2,
          yoyo: true,
        },
        "0"
      )
      .to(
        "#ayuda .start",
        {
          transformOrigin: "center",
          duration: 1,
          repeat: -1,
          rotation: function (index, target) {
            return (index + 1) * 360;
          },
          y: -15,
          ease: "sine.inOut",
          stagger: 0.2,
          yoyo: true,
        },
        "0"
      );

    const tl = gsap.timeline({ paused: true });

    tl.addLabel("startp", 0)
      .fromTo(
        ".as__ayuda .as__ayuda_ilus",
        { clipPath: "inset(0 100% 0 0)", opacitiy: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 4,
        },
        "startp"
      )
      .fromTo(
        ".as__ayuda .as__ayuda_content .prop_anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          opacity: 1,
          stagger: 0.4,
        },
        "startp-=2"
      )
      .fromTo(
        ".as__ayuda img",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 4,
        },
        "startp-=3"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: id,
      start: "-20% center",
      end: "10% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function setDocumentosInt(gsap, ScrollTrigger) {
  const id = document.getElementById("as__documentos_int");

  if (id) {
    const tl_yoyo = gsap.timeline({ paused: false });
    tl_yoyo.to(
      ".idocs_float",
      {
        transformOrigin: "center",
        duration: 1,
        repeat: -1,
        y: 15,
        ease: "sine.inOut",
        stagger: 0.2,
        yoyo: true,
      },
      "0"
    );
    // .to(
    //   "#ayuda .start",
    //   {
    //     transformOrigin: "center",
    //     duration: 1,
    //     repeat: -1,
    //     rotation: function (index, target) {
    //       return (index + 1) * 360;
    //     },
    //     y: -15,
    //     ease: "sine.inOut",
    //     stagger: 0.2,
    //     yoyo: true,
    //   },
    //   "0"
    // );

    const tl = gsap.timeline({ paused: true });

    tl.addLabel("startp", 0)
      .fromTo(
        ".as__documentos_int .doc_img",
        { yPercent: 20, opacitiy: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 4,
        },
        "startp"
      )
      .fromTo(
        ".as__documentos_int .doc_ges",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          opacity: 1,
        },
        "startp+=1"
      )
      .fromTo(
        ".as__documentos_int .doc_cal",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          opacity: 1,
        },
        "startp+=2"
      );
    // .fromTo(
    //   ".as__ayuda img",
    //   { opacity: 0, y: 40 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 4,
    //   },
    //   "startp-=3"
    // );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: id,
      start: "-20% center",
      end: "20% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}
