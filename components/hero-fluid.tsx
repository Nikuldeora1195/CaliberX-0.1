'use client'

import { useEffect, useRef } from 'react'

const DARK_BG = { r: 9, g: 10, b: 10 }

function hsvToRgb(h: number, s: number, v: number) {
  let r = 0, g = 0, b = 0
  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break
    case 1: r = q; g = v; b = p; break
    case 2: r = p; g = v; b = t; break
    case 3: r = p; g = q; b = v; break
    case 4: r = t; g = p; b = v; break
    case 5: r = v; g = p; b = q; break
  }
  return { r, g, b }
}

/** Purple + dark blue dye (webgl-fluid uses 0–1, default splats peak ~0.15) */
function getPurpleBlueColor(isLight: boolean) {
  const roll = Math.random()
  const h = roll < 0.8
    ? 0.69 + Math.random() * 0.11
    : 0.6 + Math.random() * 0.07

  const rgb = hsvToRgb(h, 0.92 + Math.random() * 0.08, 0.58 + Math.random() * 0.34)
  const gain = isLight ? 0.24 + Math.random() * 0.12 : 0.14 + Math.random() * 0.1

  return {
    r: rgb.r * gain,
    g: rgb.g * gain,
    b: rgb.b * gain,
  }
}

export function HeroFluid({ theme }: { theme: 'light' | 'dark' }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const isLight = theme === 'light'

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const canvas = document.createElement('canvas')
    canvas.className = 'hero-fluid-canvas'
    canvas.setAttribute('aria-hidden', 'true')
    host.appendChild(canvas)

    let alive = true

    const forwardPointer = (clientX: number, clientY: number, type: 'move' | 'down') => {
      const rect = canvas.getBoundingClientRect()
      const event = new MouseEvent(type === 'move' ? 'mousemove' : 'mousedown', {
        clientX,
        clientY,
        bubbles: true,
      })
      Object.defineProperty(event, 'offsetX', { get: () => clientX - rect.left })
      Object.defineProperty(event, 'offsetY', { get: () => clientY - rect.top })
      canvas.dispatchEvent(event)
    }

    const onPointerMove = (e: PointerEvent) => forwardPointer(e.clientX, e.clientY, 'move')
    const onPointerDown = (e: PointerEvent) => forwardPointer(e.clientX, e.clientY, 'down')

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })

    import('webgl-fluid').then((mod) => {
      if (!alive) return

      const WebGLFluid = mod.default ?? mod
      const pickColor = () => getPurpleBlueColor(isLight)

      let current = pickColor()
      const splatColor = {
        get r() {
          current = pickColor()
          return current.r
        },
        get g() {
          return current.g
        },
        get b() {
          return current.b
        },
      }

      WebGLFluid(canvas, {
        TRIGGER: 'hover',
        IMMEDIATE: false,
        AUTO: false,
        COLORFUL: false,
        PAUSED: false,
        BACK_COLOR: isLight ? { r: 255, g: 255, b: 255 } : DARK_BG,
        TRANSPARENT: true,
        BLOOM: false,
        SUNRAYS: false,
        SHADING: false,
        DENSITY_DISSIPATION: isLight ? 4 : 3.2,
        VELOCITY_DISSIPATION: 1.55,
        PRESSURE: 0.4,
        CURL: 12,
        SPLAT_RADIUS: 0.18,
        SPLAT_FORCE: isLight ? 2600 : 3000,
        SPLAT_COLOR: splatColor,
      })
    })

    return () => {
      alive = false
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      canvas.remove()
    }
  }, [isLight])

  return (
    <div
      ref={hostRef}
      className="hero-fluid-layer"
      data-theme={theme}
      aria-hidden="true"
    />
  )
}
