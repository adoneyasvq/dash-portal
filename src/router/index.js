import { createRouter, createWebHistory } from "vue-router";

// We will create these view components in the next step
import Home from "../views/Home.vue";
import DHIS from "../views/DHIS.vue";
import MIS from "../views/MIS.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/dhis", name: "DHIS", component: DHIS },
  { path: "/mis", name: "MIS", component: MIS },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
