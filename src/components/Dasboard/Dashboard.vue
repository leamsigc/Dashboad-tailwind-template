<script lang="ts">
/**
 * SIde bar for the dashboard
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { defineComponent, ref } from "vue";
import SideBarTw from "../SideBar/SideBar.vue";
import HeaderTw from "../DashboardHeader/HeaderTw.vue";

export default defineComponent({
  props: {
    background: {
      type: String,
      default: "bg-gray-200"
    },
    navItems: {
      type: Array,
      default: () => []
    }
  },
  name: "dashboard-tw",
  components: {
    SideBarTw,
    HeaderTw
  },
  setup() {
    const sidebarOpen = ref(true);

    return {
      sidebarOpen
    };
  },
  methods: {
    handleSideBarOpen(status: boolean) {
      this.sidebarOpen = status;
    }
  }
});
</script>

<template>
  <div class="flex h-screen " :class="`${background}`">
    <div
      :class="sidebarOpen ? 'block' : 'hidden'"
      @click="sidebarOpen = !sidebarOpen"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>

    <SideBarTw
      :sidebarOpen="sidebarOpen"
      v-on:open-side-bar="handleSideBarOpen"
      :navItems="navItems"
    >
      <template v-slot:logo>
        <slot
          name="sidebar-logo"
          v-bind:sidebarOpen="sidebarOpen"
          :open="handleSideBarOpen"
        ></slot>
      </template>
      <template v-slot:header>
        <slot name="sidebar-header"> </slot>
      </template>
      <template v-slot:content>
        <slot name="sidebar-content-extra"> </slot>
      </template>
    </SideBarTw>

    <div
      class="flex-1 flex flex-col overflow-hidden transition-all ease-in-out duration-700"
    >
      <HeaderTw
        :sidebarOpen="sidebarOpen"
        v-on:open-side-bar="handleSideBarOpen"
      >
        <slot
          name="headerNav"
          v-bind:sidebarOpen="sidebarOpen"
          :open="handleSideBarOpen"
        >
        </slot>
      </HeaderTw>
      <main
        class="main_content flex-1 overflow-x-hidden overflow-y-auto grid grid-cols-1"
      >
        <div class="container mx-auto  py-8">
          <slot name="main-content"></slot>
        </div>
        <slot name="footer"> </slot>
      </main>
    </div>
  </div>
</template>
