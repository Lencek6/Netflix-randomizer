import Login from "@/components/Login";
import Randomizer from "@/components/Randomizer";
import Register from "@/components/Register";
import History from "@/components/History";

const routes = [
    {
        path: "/",
        component: Login,
        meta: {
            guest: true,
            hideOnLogin: true,
        }
    },
    {
        path: "/history",
        component: History,
        meta: {requiresAuth: true}
    },
    {
        path: "/login",
        component: Login,
        meta: {
            guest: true,
            hideOnLogin: true,
        }
    },
    {
        path: "/register",
        component: Register,
        meta: {
            guest: true,
            hideOnLogin: true,
        }
    },
    {
        path: "/randomizer",
        component: Randomizer,
        meta: {guest: true}
    }
]

export default routes;
