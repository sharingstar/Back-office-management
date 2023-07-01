import { createRouter, createWebHistory } from "vue-router";
import type {RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized} from 'vue-router'
import { useUserStore } from '@/stores/user'
import { defineStore } from 'pinia'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home/index.vue"),
    // 重定向
    redirect: '/employees',
    children: [
      {
        path: "/AddEmployees",
        name: "AddEmployees",
        component: () => import("../pages/employees/components/AddEmployees.vue"),
      },
      {
        path: "/employees",
        name: "employees",
        component: () => import("../pages/employees/index.vue"),
      },
      {
        path: "/approvals",
        name: "approvals",
        component: () => import("../pages/approvals/index.vue"),
      },
      {
        path: "/attendances",
        name: "attendances",
        component: () => import("../pages/attendances/index.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../pages/dashboard/index.vue"),
      },
      {
        path: "/permission",
        name: "permission",
        component: () => import("../pages/permission/index.vue"),
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../pages/setting/index.vue"),
      },
      {
        path: "/salarys",
        name: "salarys",
        component: () => import("../pages/salarys/index.vue"),
      },
      {
        path: "/social",
        name: "social",
        component: () => import("../pages/social/index.vue"),
      },
      {
        path: "/departments",
        name: "departments",
        component: () => import("../pages/departments/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// 导航守卫
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.token;
  if (isAuthenticated) {
    next();
    return;
  }
  if (to.path === "/login") {
    next();
    return;
  }
  next("/login");
  return;
})

export default router;
