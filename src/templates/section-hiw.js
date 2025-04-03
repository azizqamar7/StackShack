import gsap from 'gsap'

export const sectionHiwHorizontal = () => {
  const horizontalWrapper = document.querySelector('[template-hiw-horizontal]')

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
      trigger: '[template-hiw-trigger]',
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
