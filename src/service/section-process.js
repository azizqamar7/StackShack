import gsap from 'gsap'

export const sectionProcess = () => {
  const horizontalWrapper = document.querySelector('[process-list]')

  const getScrollAmount = () => {
    let horizontalWrapperWidth = horizontalWrapper.scrollWidth
    return -(
      horizontalWrapperWidth -
      window.innerWidth +
      window.innerWidth * 0.5
    )
  }

  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: '[section-process]',
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
