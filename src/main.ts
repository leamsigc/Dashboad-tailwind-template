import { createApp } from "vue";
import App from "./app-test/App.vue";
import router from "./app-test/router";
import store from "./app-test/store";
import "tailwindcss/tailwind.css";
import "./app-test/css/styles.scss";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
