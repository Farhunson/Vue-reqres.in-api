import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";


const routes = [
    {
        name:'Home',
        component: Home,
        path:'/',
    },
    {
        name:'Login',
        component: Login,
        path:'/login',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;