import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { authGuard } from './guards/authGuard';
import authRoutes from './routes/auth.routes';
import dashboardRoutes from './routes/dashboard.routes';

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...dashboardRoutes,
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(authGuard);
export default router;
