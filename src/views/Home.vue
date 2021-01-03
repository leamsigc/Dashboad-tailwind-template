<template>
  <Dashboard msg="Hello from the app" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Dashboard } from "../lib";

@Options({
  components: { Dashboard }
})
export default class Home extends Vue {}
</script>
