import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: () => import('@/modules/dashboard/pages/HomePage.vue'),
  },
];

export default routes;
