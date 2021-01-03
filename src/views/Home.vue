<template>
  <DashboardTailwind msg="hello from " />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardTailwind from "../lib";

@Options({
  components: { DashboardTailwind }
})
export default class Home extends Vue {}
</script>
