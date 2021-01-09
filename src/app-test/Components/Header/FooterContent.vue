<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "FooterContent"
})
export default class FooterContent extends Vue {
  dropdownOpen = false;
  notificationOpen = false;
}
</script>

<template>
  <footer class=" bg-gray-900 col-span-12  py-10  text-gray-400 mt-auto ">
    <div class="container m-auto">
      leamsigc garcia
    </div>
  </footer>
</template>
