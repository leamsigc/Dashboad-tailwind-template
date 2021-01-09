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
export default defineComponent({
  name: "header-tw",
  props: {
    notificationOpen: {
      type: Boolean
    },
    sidebarOpen: {
      type: Boolean
    },
    dropdownOpen: {
      type: Boolean
    },
    headerClass: {
      type: String,
      default: "bg-white border-b-4 border-indigo-600"
    }
  }
});
</script>

<template>
  <header
    class="justify-between items-center   grid grid-cols-12"
    :class="`${headerClass}`"
  >
    <slot></slot>
  </header>
</template>

<style scoped></style>
