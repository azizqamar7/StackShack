import gsap from 'gsap'
import { matterTabs } from './matter-tabs'

export const sectionTemplate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.feature_tabs',
      start: 'top 100%',
      onEnter: () => {
        matterTabs()
      },
    },
  })
}
