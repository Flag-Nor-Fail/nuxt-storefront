import ShopQuery from '@/apollo/queries/shop'
import type { Shop } from '@/types/shopify'

interface ShopRet {
  shop: Shop
}

export const useShop = () => {
  const shop = useState<Shop | null>('shop')

  const init = async () => {
    await useAsyncQuery<ShopRet>(ShopQuery)
      .then(({ data }) => {
        if (data.value?.shop.id)
          shop.value = data.value.shop
        else
          console.error('Shop did not return a valid ID')
      })
      .catch(err => console.error(err))
  }

  return {
    shop,
    init,
  }
}
