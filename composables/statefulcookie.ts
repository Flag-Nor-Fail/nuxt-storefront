import type { CookieOptions, CookieRef } from '#app'

// Expires in a year
const expires = new Date()
expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000))

// Sync state to cookies across app
export const useStatefulCookie = <T = string>(name: string, cookieOptions?: CookieOptions): CookieRef<T> => {
  const cookie = useCookie<T | null>(name, { ...cookieOptions, expires })
  const state = useState<T | null>(name, () => cookie.value)

  watch(state,
    () => {
      cookie.value = state.value
    }, {
      deep: true,
    },
  )

  return state
}
