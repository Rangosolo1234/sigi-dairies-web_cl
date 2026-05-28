import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Cows from "../views/Cows.vue"
import CowDetails from "../views/CowDetails.vue"
import Transport from "../views/Transport.vue"
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
  {
    path: "/transport",
    component: Transport,
  },
  {
      path: "/contact",
      name: "contact",
      component: Contact
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router