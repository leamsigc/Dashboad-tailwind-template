import { App } from "vue";
import SideBar from "./SideBar.vue";

SideBar.install = (Vue: App) => {
  Vue.component(SideBar.name, SideBar);
};
export default SideBar;

export { SideBar };
