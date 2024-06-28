var tl = gsap.timeline()

tl.from("#nav h3",{
    y : -50,
    opacity : 0,
    duration: 0.8,
    // delay : 0.4,
    stagger: 0.3
})
tl.from("#main h1",{
    x: -500,
    opacity: 0,
    duration: 0.7,
    stagger: 0.4,
})
tl.from("#main img",{
    x:100,
    opacity:0,
    duration:0.8,
    rotate: 45,
    stagger:0.5,
})