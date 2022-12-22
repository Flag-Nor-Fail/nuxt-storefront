import type {
  Cart,
  CartBuyerIdentityInput,
  CartBuyerIdentityUpdatePayload,
  CartCreatePayload,
  CartInput,
  CartLineInput,
  CartLineUpdateInput,
  CartLinesAddPayload,
  CartLinesRemovePayload,
  CartLinesUpdatePayload,
} from '@/types/shopify'
import cartCreate from '@/apollo/mutations/createCart'
import getCart from '@/apollo/queries/cart'
import cartAddLine from '@/apollo/mutations/cartLinesAdd'
import cartLinesUpdate from '@/apollo/mutations/cartLinesUpdate'
import cartLinesRemove from '@/apollo/mutations/cartLinesRemove'
import cartBuyerIdentityUpdate from '@/apollo/mutations/cartBuyerIdentityUpdate'

interface CartRet {
  cart: Cart
}
interface CartMutCreate {
  cartCreate: CartCreatePayload
}
interface CartMutAdd {
  cartLinesAdd: CartLinesAddPayload
}
interface CartMutRemove {
  cartLinesRemove: CartLinesRemovePayload
}
interface CartMutUpdate {
  cartLinesUpdate: CartLinesUpdatePayload
}
interface CartMutBuyerIdentity {
  cartBuyerIdentityUpdate: CartBuyerIdentityUpdatePayload
}

export const useCart = () => {
  const cartId = useStatefulCookie<String>('cart_id')
  const cart = useState<Cart>('cart')

  const checkoutUrl = computed(() => cart.value?.checkoutUrl ?? '')

  // Lines
  const lines = computed(() => cart.value?.lines ?? [])
  const linesCount = computed(() => lines.value?.edges?.length ?? 0)

  // Cost
  const subtotal = computed(() => cart.value?.cost.subtotalAmount)
  const total = computed(() => cart.value?.cost.totalAmount)
  const tax = computed(() => cart.value?.cost.totalTaxAmount)

  // Discounts
  const discounts = computed(() => cart.value?.discountCodes ?? [])

  // Buyer Identity
  const buyerIdentity = computed(() => cart.value?.buyerIdentity)
  const isBuyerAttached = computed(() => !!buyerIdentity.value)

  // Localizations
  const currencyCode = computed(() => total.value.currencyCode)

  // Utilities
  const isInCart = (merchandiseId: string) => {
    return lines.value?.edges?.some(line => line.node.merchandise.id === merchandiseId) ?? false
  }

  // Functions
  // Create a new cart
  const createCart = async (input?: CartInput) => {
    const { mutate } = useMutation<CartMutCreate>(cartCreate)
    await mutate({
      input: {
        ...input,
        buyerIdentity: {
          customerAccessToken: !useAuth().isTokenExpired.value ? useAuth().currentToken.value : null,
        },
      },
      // countryCode: TODO
    })
      .then((res) => {
        if (res?.data?.cartCreate.cart?.id) {
          cartId.value = res.data.cartCreate.cart.id
          cart.value = res.data.cartCreate.cart
        }
        if (res?.data?.cartCreate.userErrors?.length)
          console.error(res.data.cartCreate.userErrors)
      })
  }

  // Get cart by ID
  const retrieveCart = async () => {
    if (!cartId.value)
      return
    await useAsyncQuery<CartRet>(getCart, {
      id: cartId.value || cart.value.id,
      // TODO: countryCode
    })
      .then((res) => {
        if (res.data.value?.cart?.id)
          cart.value = res.data.value.cart
        else
          console.error('Cart ID exists but no cart was returned')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // Add line to cart
  const add = async (lines: CartLineInput[]) => {
    if (!cartId.value)
      await createCart({ lines })
    const { mutate } = useMutation<CartMutAdd>(cartAddLine)
    await mutate({
      cartId: cartId.value,
      lines,
      // TODO: countryCode
    })
      .then((res) => {
        if (!res?.data?.cartLinesAdd.cart)
          createCart({ lines })
        else if (res?.data?.cartLinesAdd.cart?.id)
          cart.value = res.data.cartLinesAdd.cart
        if (res?.data?.cartLinesAdd.userErrors?.length)
          console.error(res.data.cartLinesAdd.userErrors)
      })
      .catch(err => console.error(err))
  }

  // Remove line from cart
  const remove = async (lineIds: string[]) => {
    if (!cartId.value)
      return
    if (!lineIds.length)
      return
    const { mutate } = useMutation<CartMutRemove>(cartLinesRemove)
    await mutate({
      cartId: cartId.value,
      lineIds,
      // TODO: countryCode
    })
      .then((res) => {
        if (res?.data?.cartLinesRemove.cart?.id)
          cart.value = res.data.cartLinesRemove.cart
        if (res?.data?.cartLinesRemove.userErrors?.length)
          console.error(res.data.cartLinesRemove.userErrors)
      })
      .catch(err => console.error(err))
  }

  // Update lines in cart
  const update = async (lines: CartLineUpdateInput[]) => {
    if (!cartId.value)
      return
    if (!lines.length)
      return
    const { mutate } = useMutation<CartMutUpdate>(cartLinesUpdate)
    await mutate({
      cartId: cartId.value,
      lines,
      // TODO: countryCode
    })
      .then((res) => {
        if (res?.data?.cartLinesUpdate.cart?.id)
          cart.value = res.data.cartLinesUpdate.cart
        if (res?.data?.cartLinesUpdate.userErrors?.length)
          console.error(res.data.cartLinesUpdate.userErrors)
      })
      .catch(err => console.error(err))
  }

  // Update buyer identity in cart
  const attachBuyer = async (buyerIdentity: CartBuyerIdentityInput | null) => {
    if (!cartId.value)
      return
    const { mutate } = useMutation<CartMutBuyerIdentity>(cartBuyerIdentityUpdate)
    await mutate({
      cartId: cartId.value,
      buyerIdentity,
      // TODO: countryCode
    })
      .then((res) => {
        if (res?.data?.cartBuyerIdentityUpdate.cart?.id)
          cart.value = res.data.cartBuyerIdentityUpdate.cart
        if (res?.data?.cartBuyerIdentityUpdate.userErrors?.length)
          console.error(res.data.cartBuyerIdentityUpdate.userErrors)
      })
      .catch(err => console.error(err))
  }

  // Detach buyer identity from cart
  const detachBuyer = async () => {
    await attachBuyer(null)
  }

  // Apply discount code to cart
  // TODO: add discount code to cart

  // Remove discount code from cart
  // TODO: remove discount code from cart

  return {
    cartId,
    cart,
    checkoutUrl,
    lines,
    linesCount,
    subtotal,
    total,
    tax,
    discounts,
    buyerIdentity,
    isBuyerAttached,
    currencyCode,
    isInCart,
    createCart,
    retrieveCart,
    add,
    remove,
    update,
    attachBuyer,
    detachBuyer,
  }
}
