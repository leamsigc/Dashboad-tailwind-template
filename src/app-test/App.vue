<template>
  <Dashboard background="bg-blue-200" :navItems="navItems">
    <template #headerNav="item">
      <HeaderContent
        :sidebarOpen="item.sidebarOpen"
        v-on:open-side-bar="item.open"
      />
    </template>
    <template #sidebar-logo="item">
      <span>PLANT-IT </span>
      <svg
        @click="item.open(false)"
        class="block cursor-pointer h-6 w-6 ml-auto text-gray-700 hover:text-green-400 transition-colors ease-in-out duration-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </template>
    <template #sidebar-header>
      <div class="text-center py-5">
        <span class="block text-xs text-gray-300"> WELCOME BACK </span>
        <span class=" text-base  font-thin text-gray-50"> leamsigc</span>
      </div>
    </template>

    <template #sidebar-content-extra>
      <!-- <ExtraItemSideBar /> -->
    </template>

    <template #main-content>
      <router-view />
    </template>
    <template #footer>
      <FooterContent />
    </template>
  </Dashboard>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Dashboard } from "../lib/";
import HeaderContent from "./Components/Header/HeaderContent.vue";
import FooterContent from "./Components/Header/FooterContent.vue";
import ExtraItemSideBar from "./Components/Header/ExtraItemSideBar.vue";
@Options({
  name: "App",
  components: { Dashboard, HeaderContent, FooterContent, ExtraItemSideBar }
})
export default class App extends Vue {
  navItems = [
    {
      title: "Custom",
      nav: [
        {
          to: "/",
          alerts: {
            type: "bg-green-500",
            value: ""
          },
          name: "Home",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/header",
          alerts: {
            type: "bg-blue-500",
            value: "1"
          },
          name: "Headers",
          active: false,
          activeStrokeColor: "",
          svgIcon: [
            {
              path:
                "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/footers",
          alerts: {
            type: "",
            value: ""
          },
          name: "Footers",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/tables",
          alerts: {
            type: "",
            value: ""
          },
          name: "Tables",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/alerts",
          alerts: {
            type: "",
            value: ""
          },
          name: "Alerts",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/edit",
          alerts: {
            type: "bg-yellow-500",
            value: "4"
          },
          name: "Edits",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/logout",
          alerts: {
            type: "bg-red-500",
            value: ""
          },
          name: "Logout",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
              fill: "",
              stroke: ""
            }
          ]
        }
      ]
    },
    {
      title: "Extra users",
      nav: [
        {
          to: "/",
          alerts: {
            type: "bg-green-500",
            value: ""
          },
          name: "Home",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/schedule",
          alerts: {
            type: "bg-blue-500",
            value: "1"
          },
          name: "Schedule",
          active: true,
          activeStrokeColor: "",
          svgIcon: [
            {
              path:
                "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/ui-elements",
          alerts: {
            type: "",
            value: ""
          },
          name: "UI Elements",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
              fill: "",
              stroke: ""
            }
          ]
        },
        {
          to: "/alerts",
          alerts: {
            type: "",
            value: ""
          },
          name: "Alerts",
          active: false,
          activeStrokeColor: "#4C51BF",
          svgIcon: [
            {
              path:
                "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
              fill: "",
              stroke: ""
            }
          ]
        }
      ]
    }
  ];
}
</script>
<style lang="scss">
.router-link-exact-active {
  @apply bg-black;
  @apply text-green-500;
}
</style>
