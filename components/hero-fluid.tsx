'use client'

import { useEffect, useRef } from 'react'

type FluidConfig = {
  TRIGGER?: 'hover' | 'click'
  IMMEDIATE?: boolean
  AUTO?: boolean
  COLORFUL?: boolean
  COLOR_UPDATE_SPEED?: number
  PAUSED?: boolean
  BACK_COLOR?: { r: number; g: number; b: number }
  TRANSPARENT?: boolean
  BRIGHTNESS?: number
  BLOOM?: boolean
  BLOOM_ITERATIONS?: number
  BLOOM_RESOLUTION?: number
  BLOOM_INTENSITY?: number
  BLOOM_THRESHOLD?: number
  DENSITY_DISSIPATION?: number
  VELOCITY_DISSIPATION?: number
  PRESSURE?: number
  CURL?: number
  SPLAT_RADIUS?: number
  SPLAT_FORCE?: number
  SHADING?: boolean
}

const DARK_BG = { r: 9, g: 10, b: 10 }
const LIGHT_BG = { r: 255, g: 255, b: 255 }

/** Converts HSV color values to RGB */
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

/** Generates fluid colors: 90% purple/violet, 5% dark blue, 5% pink */
function getDarkBluePurplePinkColor() {
  const rand = Math.random()
  let h: number

  if (rand < 0.90) {
    // 90% Purple / Violet / Deep Purple (hue 0.69 - 0.81)
    h = 0.69 + Math.random() * 0.12
  } else if (rand < 0.95) {
    // 5% Dark Royal Blue (hue 0.60 - 0.67)
    h = 0.60 + Math.random() * 0.07
  } else {
    // 5% Pink / Magenta (hue 0.84 - 0.92)
    h = 0.84 + Math.random() * 0.08
  }

  const s = 0.90 + Math.random() * 0.10 // 90-100% saturation
  const v = 0.35 + Math.random() * 0.35 // deep dark tones
  return hsvToRgb(h, s, v)
}

/**
 * HeroFluid / FluidBackground
 * Renders a full-screen WebGL Navier-Stokes fluid & paint simulation canvas across the page.
 *
 * - Listens to mouse/pointer events on `window` and forwards them to `<canvas>`
 * - Operates smoothly over text, buttons, hero elements & content sections
 * - Configured with transparent background, rich pastel blooms & fluid swirls
 */
export function HeroFluid({ theme }: { theme: 'light' | 'dark' }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let cancelled = false
    import('webgl-fluid').then((mod) => {
      if (cancelled || !canvasRef.current) return

      const WebGLFluid = mod.default ?? mod
      const bg = theme === 'dark' ? DARK_BG : LIGHT_BG

      let currentColor = getDarkBluePurplePinkColor()
      const customSplatColor = {
        get r() {
          currentColor = getDarkBluePurplePinkColor()
          return currentColor.r
        },
        get g() {
          return currentColor.g
        },
        get b() {
          return currentColor.b
        },
      }

      WebGLFluid(canvas, {
        TRIGGER: 'hover',
        IMMEDIATE: true,
        AUTO: false,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 4,
        PAUSED: false,
        BACK_COLOR: bg,
        TRANSPARENT: true,
        BRIGHTNESS: 0.3,
        BLOOM: false,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.2,
        BLOOM_THRESHOLD: 0.2,
        DENSITY_DISSIPATION: 3.5,
        VELOCITY_DISSIPATION: 1.5,
        PRESSURE: 0.4,
        CURL: 10,
        SPLAT_RADIUS: 0.15,
        SPLAT_FORCE: 3000,
        SPLAT_COLOR: customSplatColor,
        SHADING: false,
        SUNRAYS: false,
      })
    })

    return () => {
      cancelled = true
    }
  }, [theme])

  // Forward pointer/touch events from window -> canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top

      const event = new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
      })
      Object.defineProperty(event, 'offsetX', { get: () => offsetX })
      Object.defineProperty(event, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(event)
    }

    const handlePointerDown = (e: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top

      const event = new MouseEvent('mousedown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
      })
      Object.defineProperty(event, 'offsetX', { get: () => offsetX })
      Object.defineProperty(event, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(event)
    }

    const handleTouchMove = (e: TouchEvent) => {
      const event = new TouchEvent('touchmove', {
        touches: Array.from(e.touches) as unknown as Touch[],
        targetTouches: Array.from(e.targetTouches) as unknown as Touch[],
        changedTouches: Array.from(e.changedTouches) as unknown as Touch[],
        bubbles: true,
      })
      canvas.dispatchEvent(event)
    }

    const handleTouchStart = (e: TouchEvent) => {
      const event = new TouchEvent('touchstart', {
        touches: Array.from(e.touches) as unknown as Touch[],
        targetTouches: Array.from(e.targetTouches) as unknown as Touch[],
        changedTouches: Array.from(e.changedTouches) as unknown as Touch[],
        bubbles: true,
      })
      canvas.dispatchEvent(event)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  )
}
