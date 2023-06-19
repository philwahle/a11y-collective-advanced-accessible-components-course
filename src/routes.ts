import { RouteRecordRaw } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SkipLinkPage from "./pages/SkipLinkPage.vue";
import NavigationPage from "./pages/NavigationPage.vue";
import HambugerMenuPage from "./pages/HambugerMenuPage.vue";
import TeaserPage from "./pages/TeaserPage.vue";
import AccordionPage from "./pages/AccordionPage.vue";
import TablistPage from "./pages/TablistPage.vue";

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
  {
    path: "/teaser",
    name: "pages.teaser",
    component: TeaserPage,
    meta: { label: "Teaser" },
  },
  {
    path: "/accordion",
    name: "pages.accordion",
    component: AccordionPage,
    meta: { label: "Accordion" },
  },
  {
    path: "/tablist",
    name: "pages.tablist",
    component: TablistPage,
    meta: { label: "Tablist" },
  },
];

export default routes;
