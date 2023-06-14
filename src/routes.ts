import { RouteRecordRaw } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SkipLinkPage from "./pages/SkipLinkPage.vue";
import NavigationPage from "./pages/NavigationPage.vue";

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
];

export default routes;
