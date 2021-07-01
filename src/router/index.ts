import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
const history = createWebHashHistory()
const loadView = (view: any, index = 'index') => () =>
  import(`../views/${view}/${index}.vue`)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: loadView('home'),
  },
]
const Router = createRouter({
  history,
  routes,
})

export default Router
