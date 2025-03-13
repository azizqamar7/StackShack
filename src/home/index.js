/**
 * For Home page js
 */

console.log('Hello from Home folder')

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { marqueeScrollIx } from '../helpers/marqueeScroll'
import { sectionHiw } from './section-hiw'
import { sectionWhy } from './section-why'
import { sectionTemplate } from './section-template'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  marqueeScrollIx()

  if (window.innerWidth > 991) {
    sectionHiw()
  }

  sectionWhy()

  sectionTemplate()
})
