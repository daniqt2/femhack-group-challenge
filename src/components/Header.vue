<template>
  <div class="bg-google-yellow w-full py-6 flex px-4">
    <app-title class="w-60 text-3xl self-center"></app-title>
    <div class="px-6 bg-white rounded-full self-center cursor-pointer hover:shadow-md hover:bg-blue-500" @click="$emit('modal-click')">
      <p class="my-auto">Profile</p>
    </div>
  </div>
</template>

<script>
import AppTitle from "./AppTlte.vue";
export default {
  name: "Header",
  components: { AppTitle }
};
</script>

<style></style>
