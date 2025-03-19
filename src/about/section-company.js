import gsap from 'gsap'

export const sectionCompany = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[section-company]',
      // markers: true,
      start: 'top 60%',
    },
  })

  tl.from('[title-sticker]', { scaleX: 0, duration: 1, ease: 'power3.out' })
}
