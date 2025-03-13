import gsap from 'gsap'
import { sectionMatterTab1 } from './matter-tab1'

export const sectionTemplate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.feature_tabs',
      start: 'top 100%',
      onEnter: () => {
        sectionMatterTab1()
      },
    },
  })
}
