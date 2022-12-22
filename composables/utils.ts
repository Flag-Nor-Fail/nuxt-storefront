import type {
  MoneyV2,
} from '@/types/shopify'

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

  const displayPrice = (money: MoneyV2) => {
    const amount = money?.amount || 0
    const currencyCode = money?.currencyCode || 'USD'

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
    })

    // if price decimal is 0, don't show it
    return formatter.format(+amount).replace('.00', '')
  }

  const resolveRelativeLink = (link?: string) => {
    if (!link)
      return '#'
    const storeOrigin = useShop().shop.value?.primaryDomain?.url || new URL(window.location.href).origin
    // get link url w/out '.myshopify.com'
    const linkOrigin = new URL(link).origin.replace(/\.myshopify/, '')
    if (linkOrigin === storeOrigin)
      return new URL(link).pathname
    else
      return link
  }

  return {
    hexToRgb,
    stripRgb,
    hexToStrippedRgb,
    displayPrice,
    resolveRelativeLink,
  }
}
