declare module 'webgl-fluid' {
  export interface FluidConfig {
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
    SPLAT_COLOR?: { r: number; g: number; b: number } | { readonly r: number; readonly g: number; readonly b: number }
    SHADING?: boolean
    SUNRAYS?: boolean
  }

  const WebGLFluid: (canvas: HTMLCanvasElement, config?: FluidConfig) => void
  export default WebGLFluid
}
