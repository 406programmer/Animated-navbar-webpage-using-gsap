var tl = gsap.timeline();

tl.to(".fill", {
  duration:0.5,
  right: "0%",
  ease: "power.out"
});
tl.from(".fill h4",{
    x:200,
    duration:0.5,
    stagger:0.1,
    opacity:0,
    scale:0,

})
tl.from(".fill i",{
    duration:0.2,
    opacity:0,
    scale:0,
    ease:"power.out"
})

tl.pause();

const menu = document.querySelector("nav i");
const closeIcon = document.querySelector(".fill i");
console.log(closeIcon)
menu.addEventListener("click", () => {
            tl.play();
})
closeIcon.addEventListener("click", () => {
    tl.reverse();
});