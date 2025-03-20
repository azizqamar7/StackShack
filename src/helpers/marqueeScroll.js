import gsap from 'gsap'

export const marqueeScrollIx = () => {
  const marqueeList = document.querySelectorAll('[marquee-track]')

  if (marqueeList) {
    marqueeList.forEach((marqueeItem) => {
      const marqueeDuration = marqueeItem.getAttribute('marquee-track')
      let isForward = marqueeItem.getAttribute('is-forward')
      let isPause = marqueeItem.getAttribute('is-pause')

      const tl = gsap.timeline({ repeat: -1 })

      if (isForward == 'false') {
        tl.to(marqueeItem, {
          x: '-50%',
          ease: 'none',
          duration: marqueeDuration,
          repeat: -1,
        })
      } else {
        tl.fromTo(
          marqueeItem,
          { x: '-50%' },
          { x: '0%', ease: 'none', duration: marqueeDuration, repeat: -1 }
        )
      }

      if (isPause == 'true') {
        marqueeList.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            tl.pause()
          })

          item.addEventListener('mouseleave', () => {
            tl.resume()
          })
        })
      }
    })
  }
}

marqueeScrollIx()
