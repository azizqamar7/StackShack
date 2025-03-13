import gsap from 'gsap'

export const sectionWhy = () => {
  const vw = (coef) => window.innerWidth * (coef / 100)

  const titleScrubTl = gsap.timeline({
    scrollTrigger: {
      trigger: '[marquee-stack]',
      // markers: true,
      start: 'top 50%',
      end: 'bottom 10%',
      scrub: 1,
    },
  })

  titleScrubTl.to('[why-title-track]', { x: '-130vw' })

  if (window.innerWidth > 767) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[why-list]',
        // markers: true,
        start: 'top 70%',
        scrub: true,
      },
    })

    tl.to('[why-card="1"]', { y: '40%' })
      .to('[why-card="2"]', { y: '-40%' }, '<')
      .to('[why-card="3"]', { y: '40%' })
      .to('[why-card="4"]', { y: '-40%' }, '<')

    const carTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '[why-list]',
        start: 'top 60%',
        // markers: true,
        scrub: 2,
      },
    })

    carTl1
      .to('[car="1"]', { x: vw(-50) })
      .to('[car="2"]', { x: vw(50) })
      .to('[car="3"]', { x: vw(-50) })
      .to('[car="4"]', { x: vw(50) })
  }
}
