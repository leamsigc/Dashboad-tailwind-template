import { App } from "vue";
import DashboardTwd from "@/components/";

const install = (app: App) => {
  app.component(DashboardTwd.name, DashboardTwd);
};

DashboardTwd.install = install;

export default DashboardTwd;
