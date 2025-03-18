import gsap from 'gsap'

export const sectionCommitment = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[commitment-wrapper]',
      start: 'top 70%',
    },
  })

  tl.from('[commitment-item]', {
    rotationX: '15deg',
    stagger: 0.1,
    opacity: 0,
    ease: 'back.out(3)',
    duration: 0.4,
  })
}
