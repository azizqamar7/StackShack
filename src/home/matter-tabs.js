export const matterTabs = () => {
  console.log('>>>>')
  var containerWidth
  var containerHeight
  var Engine,
    Render,
    Runner,
    Bodies,
    Body,
    Composite,
    Mouse,
    MouseConstraint,
    Events

  const createMatterInstance = (canvas, elements = []) => {
    if (!canvas) {
      console.error(`Canvas element "${canvas}" not found`)
      return
    }

    // module aliases

    // create an engine
    let engine = Engine.create({
      element: document.body,
      positionIterations: 6,
      velocityIterations: 4,
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
        slop: 0.001,
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
        slop: 0.001,
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
        slop: 0.001,
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
        slop: 0.001,
        render: { visible: true, opacity: 0.2, fillStyle: 'transparent' },
      }
    )

    // let isMobile = window.innerWidth <= 768
    // let scale = isMobile ? 0.3 : 1
    // let radius = 20 * scale

    //added this line
    Composite.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      ...elements,
    ])

    engine.gravity.x = 0
    engine.gravity.y = 0.05

    Events.on(engine, 'collisionStart', function (event) {
      const pairs = event.pairs

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i]

        if (pair.bodyA.isStatic && !pair.bodyB.isStatic) {
          const correction = 0.2
          const normal = pair.collision.normal

          Body.applyForce(pair.bodyB, pair.bodyB.position, {
            x: normal.x * correction,
            y: normal.y * correction,
          })
        } else if (!pair.bodyA.isStatic && pair.bodyB.isStatic) {
          const correction = 0.2
          const normal = pair.collision.normal

          Body.applyForce(pair.bodyA, pair.bodyA.position, {
            x: normal.x * correction,
            y: normal.y * correction,
          })
        }
      }
    })

    Render.run(render)

    let runner = Runner.create()
    Runner.run(runner, engine)

    let mouse = Mouse.create(render.canvas, {
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

    render.mouse = mouse

    mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)

    let click = false

    document.addEventListener('mousedown', () => (click = true))
    document.addEventListener('mousemove', () => (click = false))
    document.addEventListener('mouseup', () =>
      console.log(click ? 'click' : 'drag')
    )

    Composite.add(engine.world, mouseConstraint)
  }

  // Initialize instances for each tab when DOM is loaded
  const tabs = ['canvas-1', 'canvas-2', 'canvas-3', 'canvas-4']

  //this can be any canvas as all have same width/height
  const canvases = tabs.map((tab) => document.getElementById(tab))
  const canvas = canvases[0]

  containerWidth = canvas.clientWidth
  containerHeight = canvas.clientHeight
  ;(Engine = Matter.Engine),
    (Render = Matter.Render),
    (Runner = Matter.Runner),
    (Bodies = Matter.Bodies),
    (Body = Matter.Body),
    (Composite = Matter.Composite),
    (Mouse = Matter.Mouse),
    (MouseConstraint = Matter.MouseConstraint),
    (Events = Matter.Events)

  //element creation
  let isMobile = window.innerWidth <= 768
  let scale = isMobile ? 0.3 : 1
  let radius = 20 * scale

  /**
   * Tab 1 Elements
   */

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

  /**
   * Tab 1 Elements
   */

  /**
   * Tab 2 Elements
   */

  let tab2Element1 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd3d2d752ef4ae8be16_tab-2.1-Built-out-Component-library.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element2 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd304e046bdd4411576_tab-2.2-built-out-cms-collections.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element3 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd38155796a53485173_tab-2.3-client-first-webflow.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element4 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd301ae785b825420b8_tab-2.4-girl-headshot.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element5 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd3d482cc9c069574a0_tab-2.5-fully-branded-style-guide.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element6 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd36bb78358b5951d67_tab-2.6-vairables-for-framer-webflow.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element7 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd86be12b46d85a0409_tab-2.7-Figmac.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element8 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd66be12b46d85a0299_tab-2.8-airtable-sheets.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element9 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd3023e063e760c7707_tab-2.9-fluid-responsive-components.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab2Element10 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4fc4f394c0c520a27_tab-2.91Extra-Hot.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  /**
   * Tab 2 Elements
   */

  /**
   * Tab 3 Elements
   */

  let tab3Element1 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd3a829f124bbc53abc_tab-3.1-ecommerce-ready-checkout-experience.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab3Element2 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd409d18d48aff69654_tab-3.2-Flip-The-Script.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab3Element3 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4dea378707ccf289a_tab-3.3-juice.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab3Element4 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4f705353d8dbd750e_tab-3.4.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab3Element5 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4d72d47e8ebbbcafb_tab-3.5-ring.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  /**
   * Tab 3 Elements
   */

  /**
   * Tab 4 Elements
   */

  let tab4Element1 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4fc4f394c0c520a31_tab-4.1-email-sign.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element2 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd364a1e8aeb3ed68cb_tab-4.2-icon-lib.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element3 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4b71896b4a30f6410_tab-4.3-video-tutorials.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element4 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd38e0506612d1d8c8a_tab-4.4-licencse.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element5 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd409d18d48aff69657_tab-4.5-Figmac.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element6 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd427dc40b0014b24b3_tab-4.6-compatible.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element7 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4023e063e760c7837_tab-4.7-Cheese.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element8 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4713c89a0047e04ea_tab-4.8-cookie-consent.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element9 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd45a372a89fd4fd0d8_tab-4.9-lady-headshot.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  let tab4Element10 = Bodies.rectangle(
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
            'https://cdn.prod.website-files.com/67bf693f7c273162d5dcffe3/67d9cdd4dc6303fadd9ae4cf_tab-4.91-get-start.svg',
          xScale: scale,
          yScale: scale,
        },
      },
    }
  )

  /**
   * Tab 4 Elements
   */

  const Elements = [
    [
      tab1Element1,
      tab1Element2,
      tab1Element3,
      tab1Element4,
      tab1Element5,
      tab1Element6,
    ],
    [
      tab2Element1,
      tab2Element2,
      tab2Element3,
      tab2Element4,
      tab2Element5,
      tab2Element6,
      tab2Element7,
      tab2Element8,
      tab2Element9,
      tab2Element10,
    ],
    [tab3Element1, tab3Element2, tab3Element3, tab3Element4, tab3Element5],
    [
      tab4Element1,
      tab4Element2,
      tab4Element3,
      tab4Element4,
      tab4Element5,
      tab4Element6,
      tab4Element7,
      tab4Element8,
      tab4Element9,
      tab4Element10,
    ],
  ]

  canvases.forEach((canvas, idx) => {
    createMatterInstance(canvas, Elements[idx])
  })
}
