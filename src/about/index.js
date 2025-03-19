/**
 * For About page js
 */

console.log('Hello from About folder')

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { sectionCommitment } from './section-commitment'
import { marqueeScrollIx } from '../helpers/marqueeScroll'
import { sectionHorizontal } from './section-horizontal'
import { sectionCompany } from './section-company'
import { sectionSecret } from './section-secret'
import { sectionHero } from './section-hero'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  if (window.innerWidth > 991) {
    sectionHero()
  }

  marqueeScrollIx()

  sectionCommitment()

  if (window.innerWidth > 767) {
    sectionHorizontal()
  }

  sectionCompany()

  sectionSecret()
})
