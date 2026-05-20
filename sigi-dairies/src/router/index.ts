import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Cows from "../views/Cows.vue"
import CowDetails from "../views/CowDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cows",
    name: "Cows",
    component: Cows,
  },
  {
    path: "/cows/:id",
    name: "CowDetails",
    component: CowDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router