export function setPropositios(gsap, ScrollTrigger) {
  const id = document.getElementById("am__proposito");
  if (id) {
    const tl = gsap.timeline({ paused: true });
    const toMarquee = -(
      document.querySelector(
        ".as_em_proposito .as__marquee .as__marquee_to_left"
      ).offsetWidth - window.innerWidth
    );

    tl.from(
      ".as_em_proposito .as__title_section",

      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      0
    )
      .addLabel("startp", 0)
      .fromTo(
        ".as_em_proposito .as_proposito_content .prop_anim",
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
        ".as_em_proposito img",
        { opacity: 0, y: 20 },
        {
          y: 0,
          opacity: 1,
          duration: 4,
        },
        "startp-=3"
      )
      .fromTo(
        ".as_em_proposito .as__marquee .as__marquee_to_left",
        { x: 0 },
        {
          x: toMarquee,
          duration: 20,
          opacity: 1,
          ease: "linear",
        },
        "startp"
      );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: id,
      start: "-10% center",
      end: "30% center",
      scrub: 3,
      //   markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}

export function setComo(gsap, ScrollTrigger) {
  const id = document.getElementById("am__como");
  if (id) {
    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__como .as__title_section",
      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0"
    );
    tl.fromTo(
      ".as__como .as__como_item .anim",
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
      trigger: id,
      start: "-20% bottom",
      end: "top center",
      scrub: 3,
      //   markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });
  }
}
