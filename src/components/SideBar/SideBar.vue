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
      }
    ];

    return {
      navItems
    };
  }
});
</script>

<template>
  <!-- <div
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
  </div> -->

  <div
    :class="
      sidebarOpen
        ? 'translate-x-0 ease-out lg:translate-x-0 lg:static lg:inset-0'
        : '-translate-x-full ease-in'
    "
    class="sidebar fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto  text-gray-500"
  >
    <h1 class="py-5 flex px-3 text-white font-black bg-gray-900">
      <span>PLANT-IT </span>
      <svg
        @click="$emit('open-side-bar', !sidebarOpen)"
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
    </h1>
    <div class="sidebar-header bg-gray-800 py-5 px-4">Header</div>
    <div class="sidebar_nav bg-gray-900 text-xs">
      <div class="mt-5" v-for="(item, i) in navItems" :key="i">
        <p class="py-2 px-4 text-gray-700 uppercase mb-4">{{ item.title }}</p>
        <a
          v-for="(navLink, index) in item.nav"
          :key="index"
          class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
          :href="navLink.to"
          :class="{
            'bg-black text-green-500': navLink.active,
            'text-gray-500': !navLink.active
          }"
        >
          <svg
            v-if="navLink.svgIcon"
            class="block h-4 w-4"
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

          <span class="mx-3 ">{{ navLink.name }}</span>
          <span
            v-if="navLink.alerts.value"
            :class="
              ` inline-block ml-auto text-sm rounded-full px-3  text-gray-200 ${navLink.alerts.type}`
            "
          >
            {{ navLink.alerts.value }}
          </span>

          <svg
            :class="{
              'ml-auto': !navLink.alerts.value,
              'ml-2': navLink.alerts.value
            }"
            class="block h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      <!--- header -->
      <p class="py-2 px-4 text-gray-700 uppercase">Custom</p>
      <!--- Active link -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
            fill="currentColor"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
            fill="currentColor"
            opacity="0.5"
          ></path>
        </svg>

        <span class="mx-3">Dashboard</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <!--- Regular links -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>

        <span class="mx-3">Aplications</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>

      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-all ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>

        <span class="mx-3">Pages</span>
        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>

      <!--- header -->
      <p class="py-2 px-4 mt-6 text-gray-700 uppercase">Layouts</p>
      <!--- Active link -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span class="mx-3">Themes</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <!--- Regular links -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
        <span class="mx-3">Sub-headers</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-all ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
          />
        </svg>
        <span class="mx-3">General</span>
        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>

      <!--- header -->
      <p class="py-2 px-4 mt-6 text-gray-700 uppercase">Crud</p>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12.173,16.086c0.72,0,1.304-0.584,1.304-1.305V6.089c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v8.692C10.868,15.502,11.452,16.086,12.173,16.086z M11.738,6.089c0-0.24,0.194-0.435,0.435-0.435s0.435,0.194,0.435,0.435v8.692c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V6.089zM16.52,16.086c0.72,0,1.304-0.584,1.304-1.305v-11.3c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v11.3C15.215,15.502,15.799,16.086,16.52,16.086z M16.085,3.481c0-0.24,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v11.3c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V3.481z M3.48,16.086c0.72,0,1.304-0.584,1.304-1.305v-3.477c0-0.72-0.584-1.304-1.304-1.304c-0.72,0-1.304,0.584-1.304,1.304v3.477C2.176,15.502,2.76,16.086,3.48,16.086z M3.045,11.305c0-0.24,0.194-0.435,0.435-0.435c0.24,0,0.435,0.194,0.435,0.435v3.477c0,0.24-0.195,0.436-0.435,0.436c-0.24,0-0.435-0.195-0.435-0.436V11.305z M18.258,16.955H1.741c-0.24,0-0.435,0.194-0.435,0.435s0.194,0.435,0.435,0.435h16.517c0.24,0,0.435-0.194,0.435-0.435S18.498,16.955,18.258,16.955z M7.826,16.086c0.72,0,1.304-0.584,1.304-1.305V8.696c0-0.72-0.584-1.304-1.304-1.304S6.522,7.977,6.522,8.696v6.085C6.522,15.502,7.106,16.086,7.826,16.086z M7.392,8.696c0-0.239,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v6.085c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V8.696z"
          ></path>
        </svg>
        <span class="mx-3">Forms</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <!--- Regular links -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span class="mx-3">Files Upload</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-all ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        <span class="mx-3">Tables</span>
        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>

      <!--- Features-->
      <!--- header -->
      <p class="py-2 px-4 mt-6 text-gray-700 uppercase">Features</p>
      <!--- Active link -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span class="mx-3">Themes</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <!--- Regular links -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
        <span class="mx-3">Sub-headers</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-all ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
          />
        </svg>
        <span class="mx-3">General</span>
        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12.173,16.086c0.72,0,1.304-0.584,1.304-1.305V6.089c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v8.692C10.868,15.502,11.452,16.086,12.173,16.086z M11.738,6.089c0-0.24,0.194-0.435,0.435-0.435s0.435,0.194,0.435,0.435v8.692c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V6.089zM16.52,16.086c0.72,0,1.304-0.584,1.304-1.305v-11.3c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v11.3C15.215,15.502,15.799,16.086,16.52,16.086z M16.085,3.481c0-0.24,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v11.3c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V3.481z M3.48,16.086c0.72,0,1.304-0.584,1.304-1.305v-3.477c0-0.72-0.584-1.304-1.304-1.304c-0.72,0-1.304,0.584-1.304,1.304v3.477C2.176,15.502,2.76,16.086,3.48,16.086z M3.045,11.305c0-0.24,0.194-0.435,0.435-0.435c0.24,0,0.435,0.194,0.435,0.435v3.477c0,0.24-0.195,0.436-0.435,0.436c-0.24,0-0.435-0.195-0.435-0.436V11.305z M18.258,16.955H1.741c-0.24,0-0.435,0.194-0.435,0.435s0.194,0.435,0.435,0.435h16.517c0.24,0,0.435-0.194,0.435-0.435S18.498,16.955,18.258,16.955z M7.826,16.086c0.72,0,1.304-0.584,1.304-1.305V8.696c0-0.72-0.584-1.304-1.304-1.304S6.522,7.977,6.522,8.696v6.085C6.522,15.502,7.106,16.086,7.826,16.086z M7.392,8.696c0-0.239,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v6.085c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V8.696z"
          ></path>
        </svg>
        <span class="mx-3">Forms</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <!--- Regular links -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span class="mx-3">Files Upload</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-all ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        <span class="mx-3">Tables</span>
        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12.173,16.086c0.72,0,1.304-0.584,1.304-1.305V6.089c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v8.692C10.868,15.502,11.452,16.086,12.173,16.086z M11.738,6.089c0-0.24,0.194-0.435,0.435-0.435s0.435,0.194,0.435,0.435v8.692c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V6.089zM16.52,16.086c0.72,0,1.304-0.584,1.304-1.305v-11.3c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v11.3C15.215,15.502,15.799,16.086,16.52,16.086z M16.085,3.481c0-0.24,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v11.3c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V3.481z M3.48,16.086c0.72,0,1.304-0.584,1.304-1.305v-3.477c0-0.72-0.584-1.304-1.304-1.304c-0.72,0-1.304,0.584-1.304,1.304v3.477C2.176,15.502,2.76,16.086,3.48,16.086z M3.045,11.305c0-0.24,0.194-0.435,0.435-0.435c0.24,0,0.435,0.194,0.435,0.435v3.477c0,0.24-0.195,0.436-0.435,0.436c-0.24,0-0.435-0.195-0.435-0.436V11.305z M18.258,16.955H1.741c-0.24,0-0.435,0.194-0.435,0.435s0.194,0.435,0.435,0.435h16.517c0.24,0,0.435-0.194,0.435-0.435S18.498,16.955,18.258,16.955z M7.826,16.086c0.72,0,1.304-0.584,1.304-1.305V8.696c0-0.72-0.584-1.304-1.304-1.304S6.522,7.977,6.522,8.696v6.085C6.522,15.502,7.106,16.086,7.826,16.086z M7.392,8.696c0-0.239,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v6.085c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V8.696z"
          ></path>
        </svg>
        <span class="mx-3">Forms</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <!--- Regular links -->
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span class="mx-3">Files Upload</span>

        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
      <a
        class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-all ease-in-out duration-100"
        href="/"
      >
        <svg
          class="block h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        <span class="mx-3">Tables</span>
        <svg
          class="block h-4 w-4 ml-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<style scoped></style>
