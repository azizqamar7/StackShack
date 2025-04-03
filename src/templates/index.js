import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { marqueeScrollIx } from '../helpers/marqueeScroll'
import { sectionHiwHorizontal } from './section-hiw'
import { sectionTemplate } from '../home/section-template'
import { sectionCompany } from '../about/section-company'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  marqueeScrollIx()

  // From home page
  sectionTemplate()

  sectionCompany()

  if (window.innerWidth > 991) {
    sectionHiwHorizontal()
  }
})
