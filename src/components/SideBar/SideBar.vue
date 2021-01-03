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
import { defineComponent } from "vue";
import { setup } from "vue-class-component";
export default defineComponent({
  name: "side-bar-tw",
  props: {
    sidebarOpen: Boolean
  },
  setup(props, ctx) {
    const navItems = [
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
    ];

    return {
      navItems
    };
  }
});
</script>

<template>
  <div
    :class="
      sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
    "
    class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
  >
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <svg
          class="h-12 w-12"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
            fill="#4C51BF"
            stroke="#4C51BF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
            fill="white"
          ></path>
        </svg>

        <span class="text-white text-2xl mx-2 font-semibold">Overview</span>
      </div>
    </div>

    <nav class="mt-10">
      <a
        v-for="(navLink, index) in navItems"
        :key="index"
        class="flex items-center mt-4 py-2 px-6   bg-opacity-25  transform hover:translate-x-2 transition-transform ease-in duration-200"
        :href="navLink.to"
        :class="{
          'bg-gray-700 text-gray-100': navLink.active,
          'text-gray-500': !navLink.active
        }"
      >
        <svg
          v-if="navLink.svgIcon"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-for="(item, index) in navLink.svgIcon"
            :key="index"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :fill="item.fill ? item.fill : ''"
            :stroke="navLink.active ? navLink.activeStrokeColor : item.stroke"
            :d="item.path"
          ></path>
        </svg>

        <span class="mx-3">{{ navLink.name }}</span>
        <span
          v-if="navLink.alerts.value"
          :class="
            `ml-auto mr-6 text-sm rounded-full px-3 py-px text-gray-200 ${navLink.alerts.type}`
          "
        >
          {{ navLink.alerts.value }}
        </span>
      </a>
    </nav>
  </div>
</template>
<style scoped></style>
