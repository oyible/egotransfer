let time1 = gsap.timeline({default: {duration: 0.7, ease: 'elastic', opacity: 0, delay:5} })
let time2 = gsap.timeline({default: {duration: 1.5}})
var logo = gsap.timeline({default: {duration: 1.5, delay:1}})

time2.from(".welcome", {opacity:0, y: 40, stagger: .3})

time1.from(".arrow1", {scaleX:0})
     .from(".image1", {delay: 1, opacity: 0.2, transformOrigin: 'center'}, "=.1")
     .from(".arrow2", {scaleX:0}, "-=.6")
     .from(".image2", {delay: 1, opacity: 0.2, transformOrigin: 'center'}, "=.2")


logo.to(".logo", {y:1, repeat: -1, yoyo:true})
logo.to(".download", {x:5, repeat: -1, yoyo:true})