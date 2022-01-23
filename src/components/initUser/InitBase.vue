<template>
  <div class="w-full h-full flex bg-google-yellow">
    <div class="bg-white mx-auto my-auto p-10 rounded-md shadow-md md:w-6/12">
      <app-title class="text-3xl md:text-5xl"></app-title>
      <div class="my-6">
        <button
          class="bg-blue-500 w-32"
          :class="{ active: current === ACTIVE.LOGIN }"
          @click="changeCurrent(ACTIVE.LOGIN)"
        >
          Login
        </button>
        <button
          class="bg-blue-500 w-32"
          :class="{ active: current === ACTIVE.REGISTER }"
          @click="changeCurrent(ACTIVE.REGISTER)"
        >
          Register
        </button>
      </div>
      <div class="max-w-sm mx-auto pb-10">
        <login
          v-if="current === ACTIVE.LOGIN"
          @userSet="setUser"
          @pswrdSet="setPassword"
        ></login>
        <register v-else @userSet="setUser" @pswrdSet="setPassword"></register>
        <div class="mt-6">
          <p class="text-google-red" v-if="showError">
            Oops! Please check you username and password
          </p>
          <button class="bg-google-green" @click="loginOrRegister">
            {{ current === ACTIVE.LOGIN ? "Login" : "Register and login" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "../AppTlte.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

const ACTIVE = {
  LOGIN: "login",
  REGISTER: "register"
};
export default {
  name: "LoginRegisterBase",
  components: {
    Login,
    Register,
    AppTitle
  },
  data() {
    return {
      ACTIVE,
      current: ACTIVE.LOGIN,
      user: null,
      pswrd: null,
      showError: false
    };
  },
  methods: {
    changeCurrent(val) {
      this.current = val;
    },
    loginOrRegister() {
      if (this.user && this.pswrd) {
        if (this.current === ACTIVE.LOGIN) this.loginUser();
        else this.registerUser();
      }
    },
    loginUser() {
      this.error = false;
      const u = localStorage.getItem("userName-femhack");
      const p = localStorage.getItem("paswrd-femhack");
      if (u == this.user && p == this.pswrd) {
        localStorage.setItem("logged-femhack", true);
        this.$emit("login");
      } else {
        this.showError = true;
      }
    },
    registerUser() {
      localStorage.setItem("userName-femhack", this.user);
      localStorage.setItem("paswrd-femhack", this.pswrd);
      this.current = ACTIVE.LOGIN;
    },
    setUser(username) {
      this.user = username;
    },
    setPassword(password) {
      this.pswrd = password;
    }
  }
};
</script>

<style scoped lang="scss">
button {
  &.active {
    @apply bg-google-red;
  }
}
</style>
