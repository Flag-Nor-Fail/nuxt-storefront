export default defineNuxtRouteMiddleware((to, _from) => {
  const {
    accessToken,
    isAuthenticated,
    isTokenExpired,
  } = useAuth()

  if (isTokenExpired.value && accessToken.value?.accessToken.length)
    useAuth().logout()

  if (!isAuthenticated.value) {
    if (to.fullPath === '/account') {
      return navigateTo('/account/login', {
        redirectCode: 302,
      })
    }
  }
  else {
    if (to.fullPath === '/account/login' || to.fullPath === '/account/register') {
      return navigateTo('/account', {
        redirectCode: 302,
      })
    }
  }
})
