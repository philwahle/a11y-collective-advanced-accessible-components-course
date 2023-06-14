import { RouteRecordRaw } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SkipLinkPage from "./pages/SkipLinkPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "", name: "pages.home", component: HomePage },
  { path: "/skip-link", name: "pages.skip-link", component: SkipLinkPage },
];

export default routes;
