import type { NavigationGuard, RouteLocationNormalized } from 'vue-router';

export function isAuthenticated(): boolean {
  return !!localStorage.getItem('token');
}

export const authGuard: NavigationGuard = (to: RouteLocationNormalized) => {
  const authed = isAuthenticated();
  if (to.meta?.requiresAuth && !authed) {
    return { path: '/login', query: { redirect: to.fullPath } };
  }
  if (to.path === '/login' && authed) {
    return { path: '/' };
  }
};
