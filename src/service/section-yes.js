import gsap from 'gsap'

export const sectionYes = () => {
  //   // Option 1: Using timeline repeat
  //   const tl = gsap.timeline({
  //     repeat: -1, // -1 means infinite repeats
  //     defaults: { ease: 'none' },
  //   })

  //   const paths = document.querySelectorAll('[yes-marquee] path')

  //   paths.forEach((path) => {
  //     // Add class
  //     tl.add(() => path.classList.add('yes-path-active'))
  //       // Wait 1 second
  //       .to(path, {
  //         duration: 0.1,
  //       })
  //       // Remove class
  //       .add(() => path.classList.remove('yes-path-active'))
  //   })

  // Option 2: Using separate timelines for each path with staggered starts
  const paths = document.querySelectorAll('[yes-marquee] path')
  const totalPaths = paths.length
  const staggerTime = 0.1 // Time between each path starting its animation

  paths.forEach((path, index) => {
    // Create a timeline for each path
    const pathTl = gsap.timeline({
      repeat: -1,
      delay: index * staggerTime, // Stagger the start times
    })

    // Add the animation sequence
    pathTl
      .add(() => path.classList.add('yes-path-active'))
      .to(path, { duration: 0.5 })
      .add(() => path.classList.remove('yes-path-active'))
      .to(path, { duration: 0.5 }) // Add a pause before repeating
  })
}
