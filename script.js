// анімація Roblox Logo
let logo1 = anime({
  targets: ".logo-image",
  keyframes: [
   
    {
      scale: 0.6,
      rotate: 180,
    },
    {
      scale: 1,
      rotate: 360,
    },
  ],
  duration: 2000,
  easing: "linear",
  autoplay: false,

})
document.querySelector('.logo-image') .addEventListener('click', logo1.play)
