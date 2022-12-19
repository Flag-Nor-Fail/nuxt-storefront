import type {
  Customer,
  CustomerAccessToken,
  CustomerAccessTokenCreateInput,
  CustomerAccessTokenCreatePayload,
  CustomerAccessTokenDeletePayload,
} from '@/types/shopify'
import CreateToken from '@/apollo/mutations/customerAccessTokenCreate'
import DeleteToken from '@/apollo/mutations/customerAccessTokenDelete'
import GetCustomer from '@/apollo/queries/customer'

interface AccessTokenCreateMut {
  customerAccessTokenCreate: CustomerAccessTokenCreatePayload
}
interface AccessTokenDeleteMut {
  customerAccessTokenDelete: CustomerAccessTokenDeletePayload
}
interface GetCustomerRet {
  customer: Customer
}

export const useAuth = () => {
  // State
  const accessToken = useStatefulCookie<CustomerAccessToken | null>('access_token')
  const customer = useState<Customer | null>('customer')

  // Authentication Status
  const currentToken = computed(() => accessToken.value?.accessToken ?? '')
  const isTokenExpired = computed(() => accessToken.value ? new Date(accessToken.value.expiresAt) < new Date() : true)
  const isAuthenticated = computed(() => !!accessToken.value?.accessToken.length && !isTokenExpired.value)

  // Functions

  // creates a shopify access token and stores it in the state
  const createToken = async (input: CustomerAccessTokenCreateInput) => {
    const { mutate } = useMutation<AccessTokenCreateMut>(CreateToken)
    await mutate({ input })
      .then((res) => {
        const {
          customerAccessToken,
          customerUserErrors,
        } = res?.data?.customerAccessTokenCreate ?? {}
        if (customerUserErrors?.length)
          console.error(customerUserErrors)
        if (customerAccessToken?.accessToken)
          accessToken.value = customerAccessToken
      })
      .catch(err => console.error(err))
  }

  // destroys the current shopify access token and removes it from the state
  const destroyToken = async () => {
    const { mutate } = useMutation<AccessTokenDeleteMut>(DeleteToken)
    await mutate({ accessToken: currentToken.value })
      .then((res) => {
        const {
          deletedAccessToken,
          deletedCustomerAccessTokenId,
          userErrors,
        } = res?.data?.customerAccessTokenDelete ?? {}
        if (userErrors?.length)
          console.error(userErrors)
        if (deletedAccessToken && deletedCustomerAccessTokenId)
          accessToken.value = null
      })
      .catch(err => console.error(err))
  }

  // gets the customer data from shopify using the current access token and stores it in the state
  const getCustomer = async () => {
    if (isAuthenticated.value) {
      await useAsyncQuery<GetCustomerRet>(GetCustomer, {
        customerAccessToken: currentToken.value,
      })
        .then(({ data }) => {
          const customerData = data.value?.customer ?? null
          if (customerData)
            customer.value = customerData
        })
        .catch(err => console.error(err))
    }
  }

  // Login
  const login = async (email: string, password: string) => {
    if (!isAuthenticated.value) {
      await createToken({ email, password })
        .then(() => {
          if (isAuthenticated.value) {
            getCustomer()
            if (useCart().cartId.value) {
              useCart().attachBuyer({
                customerAccessToken: currentToken.value,
              })
            }
          }
          else { console.error('could not authenticate before fetching customer data') }
        })
        .catch(err => console.error(err))
    }
    console.error('cannot login if already authenticated')
  }

  // Logout
  const logout = async () => {
    if (isAuthenticated.value || isTokenExpired.value) {
      await destroyToken()
        .then(() => {
          if (useCart().cartId.value)
            useCart().detachBuyer()
        })
        .catch(err => console.error(err))
    }
    console.error('cannot logout if not authenticated')
  }

  // Init
  const init = async () => {
    if (!!isAuthenticated.value && !customer.value?.id)
      await getCustomer()
  }

  return {
    accessToken,
    customer,
    currentToken,
    isTokenExpired,
    isAuthenticated,
    createToken,
    destroyToken,
    getCustomer,
    login,
    logout,
    init,
  }
}
