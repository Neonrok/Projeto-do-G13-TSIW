let hamburger = document.querySelector(".menu");
let panel = document.querySelector(".panel");
let cross = document.querySelector(".resto");
let links = document.querySelectorAll(".link");

let tl = gsap.timeline();


hamburger.addEventListener("click", () => {
    tl.to(panel, {
      duration: 0.5,
      xPercent: 100,
      ease: "expo.out",
    });

    gsap.fromTo(
        links,
        {
          opacity: 0,
          yPercent: 10,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.05,
          ease: "expo.out",
          duration: 1,
          delay: 0.75,
        }
    );
});

cross.addEventListener("click", () => {
    gsap.to(panel, {
      duration: 1,
      xPercent: 0,
      ease: "expo.out",
    });
  });