import { RouteRecordRaw } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SkipLinkPage from "./pages/SkipLinkPage.vue";
import NavigationPage from "./pages/NavigationPage.vue";
import HambugerMenuPage from "./pages/HambugerMenuPage.vue";
import TeaserPage from "./pages/TeaserPage.vue";
import AccordionPage from "./pages/AccordionPage.vue";
import TablistPage from "./pages/TablistPage.vue";
import SliderPage from "./pages/SliderPage.vue";
import DialogPage from "./pages/DialogPage.vue";
import FormPage from "./pages/FormPage.vue";

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
  {
    path: "/slider",
    name: "pages.slider",
    component: SliderPage,
    meta: { label: "Slider" },
  },
  {
    path: "/dialog",
    name: "pages.dialog",
    component: DialogPage,
    meta: { label: "Dialog" },
  },
  {
    path: "/form",
    name: "pages.form",
    component: FormPage,
    meta: { label: "Form" },
  },
];

export default routes;
