import gsap from 'gsap'

export const sectionHero = () => {
  const horizontalWrapper = document.querySelector('[about-hero-horizontail]')

  const getScrollAmount = () => {
    let horizontalWrapperWidth = horizontalWrapper.scrollWidth
    return -(horizontalWrapperWidth - window.innerWidth)
  }

  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: '[section-about]',
      start: 'top 10%',
      end: `+=${getScrollAmount() * -1}`,
      //   markers: true,
      scrub: 1,
      pin: true,
    },
  })

  mainTl.to(horizontalWrapper, {
    x: getScrollAmount,
    ease: 'none',
  })
}
