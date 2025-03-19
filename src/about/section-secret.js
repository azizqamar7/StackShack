import gsap from 'gsap'

export const sectionSecret = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[secret-ingredients]',
      //   markers: true,
      start: 'top 100%',
      end: 'bottom 50%',
      scrub: true,
    },
  })

  tl.to('[secret-ingredients]', { y: '20%' })
}
