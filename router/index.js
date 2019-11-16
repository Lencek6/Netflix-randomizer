import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: 'history'
});

// Router Guard logic
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if JWT exists
    // if not, redirect to login page.
    if(localStorage.getItem('JWT')) {
      next()
    }
    else {
      next({path: '/login'})
    }
    // this route requires hideOnLogin, check if JWT exists
    // if yes, redirect to randomizer page.
  } else if(to.matched.some(record => record.meta.hideOnLogin)) {
    if(!localStorage.getItem('JWT')) {
      next()
    }
    else {
      next({path: '/randomizer'})
    }
  }
  else{
    next()
  }
})

export default router;
