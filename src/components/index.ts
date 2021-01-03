import { defineComponent, h } from "vue";
import DashboardHeader from "@/components/HelloWorld.vue";

const DashboardTwd = defineComponent({
  name: "dashboard",
  components: {
    DashboardHeader
  },
  render() {
    return h(DashboardHeader);
  }
});

export default DashboardTwd;
