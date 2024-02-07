// init
var controller = new ScrollMagic.Controller();

// define movement of panels
var wipeAnimation = new TimelineMax()
  .fromTo(
    "section.panel.turqoise",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeInOut }
  ) // in from left
  .to("section.panel .additionalContent", 1, {
    x: "-100%",
    ease: Linear.easeInOut,
  }) // scroll Content
  .fromTo(
    "section.panel.green",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeInOut }
  ) // in from right
  .fromTo(
    "section.panel.bordeaux",
    1,
    { y: "100%" },
    { y: "0%", ease: Linear.easeInOut }
  ) // in from top
  .fromTo(
    "section.panel.pink",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeInOut }
  )
  .fromTo(
    "section.panel.aqua",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeInOut }
  )
  .fromTo(
    "section.panel.brown",
    1,
    { y: "100%" },
    { y: "0%", ease: Linear.easeInOut }
  )
  .to("section.panel .additionalContent", 1, {
    x: "-100%",
    ease: Linear.easeInOut,
  }) // scroll Content
  .fromTo(
    "section.panel.bisque",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeInOut }
  )
  .fromTo(
    "section.panel.cadetblue",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeInOut }
  );

// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "400%",
})
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addTo(controller);
