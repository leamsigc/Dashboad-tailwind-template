import { App } from "vue";
import Dashboard from "./Dashboard.vue";

Dashboard.install = (Vue: App) => {
  Vue.component(Dashboard.name, Dashboard);
};
export default Dashboard;

export { Dashboard };
