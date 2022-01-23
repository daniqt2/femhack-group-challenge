<template>
  <div class="w-full h-full">
    <init v-if="!logged" @login="logged = true"></init>
    <dashboard-base v-else></dashboard-base>
  </div>
</template>

<script>
import Init from "./components/initUser/InitBase.vue";
import DashboardBase from "./components/DashboardBase.vue";
export default {
  name: "App",
  components: { DashboardBase, Init },
  data() {
    return {
      logged: false
    };
  },
  mounted() {
    const localLogged = localStorage.getItem("logged-femhack");
    if (localLogged) this.logged = localLogged;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
.body {
  height: 100%;
}
</style>
