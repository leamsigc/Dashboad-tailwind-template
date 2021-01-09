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
    sidebarOpen: Boolean,
    headerbg: {
      type: String,
      default: "bg-gray-700"
    },
    navItems: {
      type: Object,
      default: () => ({})
    }
  }
});
</script>

<template>
  <div
    :class="
      sidebarOpen
        ? 'translate-x-0 ease-out lg:translate-x-0 lg:static lg:inset-0'
        : '-translate-x-full ease-in'
    "
    class="sidebar fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto  text-gray-500"
  >
    <h1 class="py-5 flex px-3 text-white font-black bg-gray-900">
      <slot name="logo"></slot>
    </h1>

    <div class="sidebar-header  py-5 px-4" :class="`${headerbg}`">
      <slot name="header"></slot>
    </div>
    <div class="sidebar_nav bg-gray-900 text-xs">
      <div v-if="navItems">
        <div class="mt-4" v-for="(item, i) in navItems" :key="i">
          <p class="py-2 px-4 text-gray-700 uppercase mb-1">{{ item.title }}</p>
          <router-link
            v-for="(navLink, index) in item.nav"
            :key="index"
            class="flex items-center py-2 px-4 text-gray-500 hover:text-green-400 hover:bg-black transition-colors ease-in-out duration-100"
            :to="navLink.to"
            :class="{
              'bg-black text-green-500': navLink.active
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
                :stroke="
                  navLink.active ? navLink.activeStrokeColor : item.stroke
                "
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
          </router-link>
        </div>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
