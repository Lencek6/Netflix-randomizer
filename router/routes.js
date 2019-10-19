import Login from "@/components/Login";
import Randomizer from "@/components/Randomizer";
import Register from "@/components/Register";

const routes = [
  {
    path: "/",
    component: Randomizer,
    meta: {requiresAuth: true}
  },
  {
    path: "/login",
    component: Login,
    meta: { guest: true}
  },
  {
    path: "register",
    component: Register,
    meta: { guest: true}
  }
]

export default routes;
