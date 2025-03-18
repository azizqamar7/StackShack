import gsap from 'gsap'

export const sectionHorizontal = () => {
  const horizontalWrapper = document.querySelector('[about-horizontal]')

  const getScrollAmount = () => {
    let horizontalWrapperWidth = horizontalWrapper.scrollWidth
    return -(
      horizontalWrapperWidth -
      window.innerWidth +
      window.innerWidth * 0.2
    )
  }

  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about_horizontal',
      start: 'top 20%',
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
