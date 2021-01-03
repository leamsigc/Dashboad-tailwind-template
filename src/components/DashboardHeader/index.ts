import { App } from "vue";
import HeaderTw from "./HeaderTw.vue";

HeaderTw.install = (Vue: App) => {
  Vue.component(HeaderTw.name, HeaderTw);
};
export default HeaderTw;

export { HeaderTw };
