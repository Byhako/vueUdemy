import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/Login.vue';
import store from './store';

// import authTypes from './types/auth';
// import globalTypes from './types/global';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { title: 'Login' },
    },
    // {
    //   path: '/bookings',
    //   name: 'bookings',
    //   component: Bookings,
    //   meta: { Auth: true, title: 'Bookings' },
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.Auth && !store.state.authModule.logged) {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
