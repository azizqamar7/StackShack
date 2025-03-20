import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { sectionCompany } from '../about/section-company'
import { marqueeScrollIx } from '../helpers/marqueeScroll'
import { sectionYes } from './section-yes'
import { sectionProcess } from './section-process'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  marqueeScrollIx()

  sectionYes()

  if (window.innerWidth > 991) {
    sectionProcess()
  }

  sectionCompany()
})
