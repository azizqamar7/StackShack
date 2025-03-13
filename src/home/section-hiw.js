import gsap from 'gsap'

export const sectionHiw = () => {
  const cards = document.querySelectorAll('[hiw-item]')

  const vh = (coef) => window.innerHeight * (coef / 100)
  //   const vw = (coef) => window.innerWidth * (coef / 100)

  if (cards) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[home-how-list]',
        start: `top ${vh(25)}`,
        end: '+=1400px',
        scrub: 1,
        pin: true,
      },
    })

    tl.to('[hiw-item="1"]', { rotationZ: '-45deg', y: '-90%' })
      .to('[hiw-item="2"]', { zIndex: 3 }, '<50%')
      .to('[hiw-item="1"]', { zIndex: 1 }, '<')
      .to('[hiw-item="1"]', { rotationZ: '0deg', y: '0%' })
      .to('[hiw-item="2"]', { rotationZ: '-45deg', y: '-90%' })
      .to('[hiw-item="3"]', { zIndex: 3 }, '<50%')
      .to('[hiw-item="2"]', { rotationZ: '0deg', y: '0%' })
  }
}
