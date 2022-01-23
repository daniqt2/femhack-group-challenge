<template>
  <div class="bg-gray-200 h-full">
    <db-header class=""></db-header>
    <note-dashboard class="mb-4"></note-dashboard>
    <!-- <div class="py-6 text-center w-full h-20">-</div> -->
  </div>
</template>

<script>
import DbHeader from "./Header.vue";
import NoteDashboard from "./notes/Dashboard.vue";
export default {
  name: "DashboardBase",
  components: {
    DbHeader,
    NoteDashboard
  }
};
</script>

<style></style>
