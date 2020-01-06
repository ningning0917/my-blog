import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'Index',
        meta: { title: 'index', icon: '', noCache: true }
      }, {
        path: 'detail',
        component: () => import('@/views/detail/index'),
        name: 'Detail',
        meta: { title: 'detail', icon: '', noCache: true }
      }, {
        path: 'label',
        component: () => import('@/views/label/index'),
        name: 'Label',
        meta: { title: 'Label', icon: '', noCache: true }
      }, {
        path: 'list',
        component: () => import('@/views/list/index'),
        name: 'List',
        meta: { title: 'list', icon: '', noCache: true }
      }, {
        path: 'reader',
        component: () => import('@/views/reader/index'),
        name: 'Reader',
        meta: { title: 'reader', icon: '', noCache: true }
      }, {
        path: 'book',
        component: () => import('@/views/book/index'),
        name: 'Book',
        meta: { title: 'book', icon: '', noCache: true }
      }, {
        path: 'meiZi',
        component: () => import('@/views/meiZi/index'),
        name: 'MeiZi',
        meta: { title: 'meiZi', icon: '', noCache: true }
      }, {
        path: 'weChat',
        component: () => import('@/views/weChat/index'),
        name: 'WeChat',
        meta: { title: 'weChat', icon: '', noCache: true }
      }, {
        path: 'chat',
        component: () => import('@/views/chat/index'),
        name: 'chat',
        meta: { title: 'chat', icon: '', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    name: 'Profile',
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
