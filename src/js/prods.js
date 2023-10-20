export function setRV_auxilio(gsap, ScrollTrigger) {
  const id = document.getElementById("rv_auxilio");
  if (id) {
    const tl_yoyo = gsap.timeline({ paused: false });
    tl_yoyo
      .to(
        "#rv_auxilio #i_anim",
        {
          transformOrigin: "center",
          duration: 1,
          repeat: -1,
          y: -5,
          ease: "sine.inOut",
          yoyo: true,
        },
        "0"
      )
      .to(
        "#rv_auxilio #nube_2",
        {
          transformOrigin: "center",
          duration: 1,
          repeat: -1,
          y: 15,
          ease: "sine.inOut",
          yoyo: true,
        },
        "0"
      )
      .to(
        "#rv_auxilio #numbe_1",
        {
          transformOrigin: "center",
          duration: 1,
          repeat: -1,
          y: -15,
          ease: "sine.inOut",
          yoyo: true,
        },
        "0"
      )
      .to(
        "#rv_auxilio .start",
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
        ".as__rv_auxilio .as__rv_auxilio_content .prop_anim",
        { opacity: 0, y: -20 },
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
        ".as__rv_auxilio_ilustra svg",
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

export function setRV_destacados(gsap, ScrollTrigger) {
  if (document.getElementById("rv_destacados")) {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".as__rv_destacados_item",
      { opacity: 0, y: 50 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 1,
      },
      "-=0"
    )
      .fromTo(
        ".as__rv_destacados_item img",
        { y: 30, scale: 1.1 },
        {
          y: 0,
          scale: 1,
          duration: 2,
          stagger: 0.2,
        },
        "-=1"
      )
      .from(
        ".as__rv_destacados_image",
        { backgroundColor: "transparent", duration: 2, stagger: 0.3 },
        "-=3"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: document.getElementById("rv_destacados"),
      // start: "20% bottom",
      // end: "center center",
      start: "top bottom",
      end: "center center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function set_destacados(gsap, ScrollTrigger) {
  const id = document.getElementById("as__destacados");
  if (id) {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".as__destacados_item",
      { opacity: 0, y: 50 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 1,
      },
      "-=0"
    )
      .fromTo(
        ".as__destacados_image img",
        { y: 30, scale: 1.1 },
        {
          y: 0,
          scale: 1,
          duration: 2,
          stagger: 0.2,
        },
        "-=1"
      )
      .from(
        ".as__destacados_image",
        { backgroundColor: "transparent", duration: 2, stagger: 0.3 },
        "-=3"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: id,
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

export function set_listado(gsap, ScrollTrigger) {
  const id = document.getElementById("as__listado");
  if (id) {
    const tl_yoyo = gsap.timeline({ paused: false });
    if (document.getElementsByClassName("ilus_rot_top_right"))
      tl_yoyo.to(
        ".ilus_rot_top_right",
        {
          transformOrigin: "right top",
          duration: 1,
          repeat: -1,
          rotation: -5,
          ease: "sine.inOut",
          yoyo: true,
        },
        "0"
      );

    const tl = gsap.timeline({ paused: true });

    tl.addLabel("startp", 0)
      .fromTo(
        ".as__listado .as__listado_content .prop_anim",
        { opacity: 0, y: -20 },
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
        ".as__listado_ilustra svg",
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
