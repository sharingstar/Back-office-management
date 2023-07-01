// 权限控制模块
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '@/stores/user'

export function createAuthGuard() {
    return async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const authStore = useAuthStore()
      const isAuthenticated = authStore.isAuthenticated
      if (isAuthenticated) {
        await authStore.getUserInfo()
        if (to.path === '/login') {
          next('/')
          return
        } else {
          next()
          return
        }
      }
      if (to.path === '/login') {
        next()
        return
      }
      next('/login')
      return
    }
  }
