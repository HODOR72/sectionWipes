const controller = new ScrollMagic.Controller()

// define movement of panels
const wipeAnimation = new TimelineMax()
	.fromTo(
		"section.panel.turqoise",
		1,
		{ x: "100%" },
		{ x: "0%", ease: Linear.easeNone }
	) // in from left
	.to("section.panel .additionalContent", 1, {
		x: "-100%",
		ease: Linear.easeNone,
	}) // scroll Content
	.fromTo(
		"section.panel.green",
		1,
		{ x: "100%" },
		{ x: "0%", ease: Linear.easeNone }
	) // in from right
	.fromTo(
		"section.panel.bordeaux",
		1,
		{ y: "100%" },
		{ y: "0%", ease: Linear.easeNone }
	) // in from top
	.fromTo(
		"section.panel.pink",
		1,
		{ x: "100%" },
		{ x: "0%", ease: Linear.easeNone }
	)
	.fromTo(
		"section.panel.aqua",
		1,
		{ x: "100%" },
		{ x: "0%", ease: Linear.easeNone }
	)
	.fromTo(
		"section.panel.brown",
		1,
		{ y: "100%" },
		{ y: "0%", ease: Linear.easeNone }
	)
	.to("section.panel .additionalContent", 1, {
		x: "-100%",
		ease: Linear.easeNone,
	}) // scroll Content
	.fromTo(
		"section.panel.bisque",
		1,
		{ x: "100%" },
		{ x: "0%", ease: Linear.easeNone }
	)
	.fromTo(
		"section.panel.cadetblue",
		1,
		{ x: "100%" },
		{ x: "0%", ease: Linear.easeNone }
	)

const contentBlocks = document.querySelectorAll(".panel")

const scene = new ScrollMagic.Scene({
	triggerElement: "#pinContainer",
	triggerHook: "onLeave",
	duration: "600%",
})
	.setPin("#pinContainer")
	.setTween(wipeAnimation)
	.addTo(controller)

const tg = window.Telegram?.WebApp
if (tg) {
	tg.ready()
	tg.expand()
	tg.setBackgroundColor = "#fff"
	tg.enableClosingConfirmation()
}
