import { App } from "vue";
import * as allComponents from "@/components/";

function install(Vue: App) {
  // tslint:disable-next-line:
  for (const component in allComponents) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component]);
  }
}

export default { install };

export * from "@/components/";
