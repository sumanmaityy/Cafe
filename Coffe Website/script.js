let tl = gsap.timeline();
tl.from(".front", {
    y: 1000,
    duration: 1,
});
tl.from(".front h1", {
    y: 1000,
    duration: 0.5,
    rotate: 360,
});
tl.from("#coffeec", {
    y: 1000,
    duration: 1,
});
tl.from("#coffeeb1", {
    y: 1000,
    duration: 0.8,
});
tl.from("#coffeeb2", {
    y: 1000,
    duration: 0.8,
});
tl.from("#coffeeb3", {
    y: 1000,
    duration: 0.8,
});
tl.from("#coffeeb4", {
    y: 1000,
    duration: 0.8,
});
tl.from("#coffeeb5", {
    y: 1000,
    duration: 0.8,
});
tl.from("nav", {
    y: 1000,
    duration: 1,
});

//About

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        scrub: 2,
        markers: true,
        start: "0% 80%",
        end: "50% 50%",
    },
});
tl2.to(
    "#coffeec",
    {
        top: 900,
        left: 110,
        duration: 1,
        scale: 0.9,
    },
    "suman"
);
tl2.to(
    "#coffeeb1",
    {
        top: 900,
        left: 220,
        duration: 1,
        scale: 0.8,
        rotate: 127,
    },
    "suman"
);
tl2.to(
    "#coffeeb2",
    {
        top: 1370,
        left: 30,
        duration: 1,
        scale: 0.8,
        rotate: 127,
    },
    "suman"
);

//Menu

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#menu",
        scroller: "body",
        scrub: 2,
        markers: true,
        start: "0% 90%",
        end: "50% 40%",
    },
});
tl3.to(
    "#coffeec",
    {
        top: 1770,
        left: 720,
        duration: 1,
        scale: 0.9,
    },
    "suman"
);
tl3.to(
    "#coffeeb2",
    {
        top: 1790,
        left: 855,
        duration: 1,
        scale: 0.8,
        rotate: 300,
    },
    "suman"
);
tl3.from(
    "#can1",
    {
        x: -300,
        duration: 1,
    },
    "suman"
);
tl3.from(
    "#can2",
    {
        x: 300,
        duration: 1,
    },
    "suman"
);
tl3.from(
    "#bean1",
    {
        x: -300,
        duration: 1,
        rotate: 360,
    },
    "suman"
);
tl3.from(
    "#bean2",
    {
        x: 300,
        duration: 1,
        rotate: 360,
    },
    "suman"
);

//contact

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        scrub: 2,
        markers: true,
        start: "0% 90%",
        end: "50% 40%",
    },
});
tl4.to(
    "#coffeec",
    {
        top: 2600,
        left: 1100,
        duration: 1,
        scale: 0.9,
    },
    "suman"
);
tl4.to(
    "#coffeeb2",
    {
        top: 2510,
        left: 1200,
        duration: 1,
        scale: 0.8,
        rotate: 20,
    },
    "suman"
);
tl4.to(
    "#can1",
    {
        top: 800,
        left: 630,
        duration: 1,
        rotate: -15,
    },
    "suman"
);
tl4.to(
    "#can2",
    {
        top: 840,
        left: 240,
        duration: 1,
        rotate: 15,
    },
    "suman"
);
