<script lang="ts">
/**
 * Description
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import { Options, Vue } from "vue-class-component";

@Options({
  name: "Footer"
})
export default class Footer extends Vue {}
</script>

<template>
  <footer class=" bg-gray-900 col-span-12  py-10  text-gray-400 mt-auto  px-5">
    <div class="container m-auto ">
      leamsigc garcia
    </div>
  </footer>
</template>
<style scoped lang="scss" scope>
.custom-btn {
  background-color: #4c51bf;
  background-image: linear-gradient(315deg, #0653c7 0%, #4c51bf 74%);
  box-shadow: 0 0 0 0 #4c51bf, 0.2rem 0.2rem 30px #0653c7;

  &:hover {
    box-shadow: 0 0 0 0 #4c51bf, 0.2rem 0.2rem 60px #0653c7;
  }
}
</style>
