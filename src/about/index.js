/**
 * For About page js
 */

console.log('Hello from About folder')

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { sectionCommitment } from './section-commitment'
import { marqueeScrollIx } from '../helpers/marqueeScroll'
import { sectionHorizontal } from './section-horizontal'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  marqueeScrollIx()

  sectionCommitment()

  if (window.innerWidth > 767) {
    sectionHorizontal()
  }
})
