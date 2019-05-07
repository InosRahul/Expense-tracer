import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Callback from "./components/Callback.vue";
import auth from "./auth/authService";
import AddExpenses from "./components/AddExpenses.vue"
import UpdateExpenses from './components/UpdateExpenses.vue'
import DeleteExpenses from './components/DeleteExpenses.vue'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: "/addexpenses",
      name: "addexpenses",
      component: AddExpenses
    },
    {
      path: "/updateexpenses",
      name: "updateexpenses",
      component: UpdateExpenses
    },
    {
      path: "/deleteexpenses",
      name: "deleteexpenses",
      component: DeleteExpenses
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
    return next();
  }

  auth.login({
    target: to.path
  });
});

export default router;