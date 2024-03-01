function lenisScroll(){ 
const lenis1 = new Lenis()

lenis1.on('scroll', (e) => {
  console.log(e)
})

lenis1.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis1.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}
lenisScroll()

gsap.from('#mid-part, #right-part',{
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
  delay: 0.2
})
const crsr = document.querySelector('.cursor')

window.addEventListener('mousemove',(e) => {
  crsr.style.top = e.clientY + "px"
  crsr.style.left = e.clientX + "px"
})

