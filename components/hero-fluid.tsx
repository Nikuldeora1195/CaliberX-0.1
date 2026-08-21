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
    let rampStartTime: number | null = null
    let leaveTimeout: ReturnType<typeof setTimeout> | null = null

    const forwardPointer = (clientX: number, clientY: number, type: 'move' | 'down') => {
      if (rampStartTime === null) rampStartTime = performance.now()
      if (leaveTimeout) {
        clearTimeout(leaveTimeout)
        leaveTimeout = null
      }

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
    const onMouseLeaveDoc = () => {
      // Debounce so a quick re-entry doesn't reset the ramp
      leaveTimeout = setTimeout(() => {
        rampStartTime = null
      }, 300)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    document.addEventListener('mouseleave', onMouseLeaveDoc)

    import('webgl-fluid').then((mod) => {
      if (!alive) return

      const WebGLFluid = mod.default ?? mod

      const pickColor = () => {
        const elapsed = rampStartTime === null ? 0 : performance.now() - rampStartTime
        const rampProgress = Math.min(1, elapsed / 300) // 0 -> 1 over first 600ms

        // Single, narrow purple hue band — no pink, no blue
        const h = 0.735 + Math.random() * 0.055
        const rgb = hsvToRgb(
          h,
          0.88 + Math.random() * 0.08,
          0.55 + Math.random() * 0.25
        )

        // Start soft (~35% strength), ease up to full over the ramp window
        const baseGain = isLight ? 0.26 + Math.random() * 0.1 : 0.16 + Math.random() * 0.08
        const gain = baseGain * (0.35 + 0.65 * rampProgress)

        return { r: rgb.r * gain, g: rgb.g * gain, b: rgb.b * gain }
      }

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
        TRANSPARENT: false,
        BLOOM: false,
        SUNRAYS: false,
        SHADING: false,
        DENSITY_DISSIPATION: isLight ? 1.2 : 1.6,
        VELOCITY_DISSIPATION: 1.1,
        PRESSURE: 0.45,
        CURL: 20,
        SPLAT_RADIUS: 0.48,
        SPLAT_FORCE: isLight ? 1800 : 2200,
        SPLAT_COLOR: splatColor,
      })
    })

    return () => {
      alive = false
      if (leaveTimeout) clearTimeout(leaveTimeout)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('mouseleave', onMouseLeaveDoc)
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