export const sectionMatterTab1 = () => {
  const canvas = document.getElementById('canvas-1')
  let containerWidth = canvas.clientWidth
  let containerHeight = canvas.clientHeight

  // module aliases
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events

  // create an engine
  let engine = Engine.create({
    positionIterations: 6, // Higher value for better collision resolution
    velocityIterations: 4, // Higher value for better collision resolution
    constraintIterations: 2,
    timeScale: 1,
  })

  // create a renderer
  let render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      background: 'transparent',
      wireframes: false,
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      border: 'none',
    },
  })

  let ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    {
      render: { fillStyle: 'transparent' },
      isStatic: true,
      restitution: 0.2,
      friction: 0.1,
      collisionFilter: {
        category: 0x0002,
      },
      chamfer: { radius: 0 },
      slop: 0.001, // Very small slop value
      render: { visible: true, opacity: 0.2 },
    }
  )
  let wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    {
      isStatic: true,
      restitution: 0.2,
      friction: 0.1,
      collisionFilter: {
        category: 0x0002,
      },
      chamfer: { radius: 0 },
      slop: 0.001, // Very small slop value
      render: { visible: true, opacity: 0.2, fillStyle: 'transparent' },
    }
  )
  let wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    {
      isStatic: true,
      restitution: 0.2,
      friction: 0.1,
      collisionFilter: {
        category: 0x0002,
      },
      chamfer: { radius: 0 },
      slop: 0.001, // Very small slop value
      render: { visible: true, opacity: 0.2, fillStyle: 'transparent' },
    }
  )
  let roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    {
      isStatic: true,
      restitution: 0.2,
      friction: 0.1,
      collisionFilter: {
        category: 0x0002,
      },
      chamfer: { radius: 0 },
      slop: 0.001, // Very small slop value
      render: { visible: true, opacity: 0.2, fillStyle: 'transparent' },
    }
  )

  let isMobile = window.innerWidth <= 768 // Define a breakpoint for mobile view

  let scale = isMobile ? 0.3 : 1 // Scale down the rectangles for mobile

  let radius = 20 * scale // Scale radius

  // create objects
  let tab1Element1 = Bodies.rectangle(
    containerWidth / 2 - 500 * scale,
    10 * scale,
    215 * scale,
    150 * scale,
    {
      chamfer: { radius: radius },
      restitution: 0.4,

      render: {
        sprite: {
          texture:
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d27a5c0a945e8f8a753eba_tab-1.1-fully-branded-style-guide.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab1Element2 = Bodies.rectangle(
    containerWidth / 2 - 100 * scale,
    10 * scale,
    215 * scale,
    150 * scale,
    {
      chamfer: { radius: radius },
      restitution: 0.4,

      render: {
        sprite: {
          texture:
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d27a5c57ecdf79c0c5a783_tab-1.2-ui.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab1Element3 = Bodies.rectangle(
    containerWidth - 500 * scale,
    10 * scale,
    215 * scale,
    150 * scale,
    {
      chamfer: { radius: radius },
      restitution: 0.4,

      render: {
        sprite: {
          texture:
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d27a5c799d3aad3987b4ce_tab-1.3-breakpoints.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab1Element4 = Bodies.rectangle(
    containerWidth / 2 - 65 * scale,
    260 * scale,
    215 * scale,
    150 * scale,
    {
      chamfer: { radius: radius },
      restitution: 0.4,

      render: {
        sprite: {
          texture:
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d27a5c9735c83f5f466592_tab-1.4-animation.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab1Element5 = Bodies.rectangle(
    containerWidth / 2 - 505 * scale,
    260 * scale,
    115 * scale,
    120 * scale,
    {
      chamfer: { radius: radius },
      restitution: 0.4,

      render: {
        sprite: {
          texture:
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d27a5ce0a0102ea44f40bb_tab-1.5-Saucy.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab1Element6 = Bodies.rectangle(
    containerWidth / 1 - 305 * scale,
    260 * scale,
    215 * scale,
    90 * scale,
    {
      chamfer: { radius: radius },
      restitution: 0.4,

      render: {
        sprite: {
          texture:
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d27a5cffd6d546a1b1d07e_tab-1.6.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  // add all of the bodies to the world
  Composite.add(engine.world, [
    tab1Element1,
    tab1Element2,
    tab1Element3,
    tab1Element4,
    tab1Element5,
    tab1Element6,
    ground,
    wallLeft,
    wallRight,
    roof,
  ])

  // Set proper gravity
  engine.gravity.x = 0
  engine.gravity.y = 0.05 // Increased for better effect

  // Set up collision correction
  Events.on(engine, 'collisionStart', function (event) {
    const pairs = event.pairs

    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i]

      // If one body is static (like a wall) and the other is not
      if (pair.bodyA.isStatic && !pair.bodyB.isStatic) {
        // Apply a small correctional impulse to prevent sinking
        const correction = 0.2
        const normal = pair.collision.normal

        Body.applyForce(pair.bodyB, pair.bodyB.position, {
          x: normal.x * correction,
          y: normal.y * correction,
        })
      } else if (!pair.bodyA.isStatic && pair.bodyB.isStatic) {
        // Same but reversed if bodyB is the wall
        const correction = 0.2
        const normal = pair.collision.normal

        Body.applyForce(pair.bodyA, pair.bodyA.position, {
          x: normal.x * correction,
          y: normal.y * correction,
        })
      }
    }
  })

  // run the renderer
  Render.run(render)

  // create runner
  let runner = Runner.create()

  // run the engine
  Runner.run(runner, engine)

  // Create mouse event
  let mouse = Mouse.create(render.canvas, {
    // This option prevents the mouse from capturing wheel events
    preventDefault: false,
  })

  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  })

  // Scale mouse position according to canvas scaling
  render.mouse = mouse

  mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)

  let click = false

  document.addEventListener('mousedown', () => (click = true))
  document.addEventListener('mousemove', () => (click = false))
  document.addEventListener('mouseup', () =>
    console.log(click ? 'click' : 'drag')
  )

  // Add mouseConstraint to the Engine World
  Composite.add(engine.world, mouseConstraint)
}
