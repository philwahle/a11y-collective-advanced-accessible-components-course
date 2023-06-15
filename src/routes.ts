import { RouteRecordRaw } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SkipLinkPage from "./pages/SkipLinkPage.vue";
import NavigationPage from "./pages/NavigationPage.vue";
import HambugerMenuPage from "./pages/HambugerMenuPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "", name: "pages.home", component: HomePage },
  {
    path: "/skip-link",
    name: "pages.skip-link",
    component: SkipLinkPage,
    meta: { label: "Skip Link" },
  },
  {
    path: "/navigation",
    name: "pages.navigation",
    component: NavigationPage,
    meta: { label: "Navigation" },
  },
  {
    path: "/hambuger-menu",
    name: "pages.hambuger-menu",
    component: HambugerMenuPage,
    meta: { label: "Hambuger Menu" },
  },
];

export default routes;
