export const useUtils = () => {
  const hexToRgb = (hex: string, alpha?: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if (alpha)
      return `rgb(${r}, ${g}, ${b}, ${alpha})`
    else
      return `rgb(${r}, ${g}, ${b})`
  }

  const stripRgb = (rgb: string) => {
    return rgb.replace(/rgb\(|\)/g, '')
  }

  const hexToStrippedRgb = (hex: string) => {
    return stripRgb(hexToRgb(hex))
  }

  return {
    hexToRgb,
    stripRgb,
    hexToStrippedRgb,
  }
}
