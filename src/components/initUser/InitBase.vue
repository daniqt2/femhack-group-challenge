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
        <register v-else @userSet="setUser" @pswrdSet="setPassword" @nameSet="setName"></register>
        <div class="mt-6">
          <p class="text-google-red" v-if="showError">
            Oops! Please check you username and password
          </p>
          <button :class="isDisbaled ? 'bg-gray-300 cursor-not-allowed' :'bg-google-green'" @click="loginOrRegister" :disabled="isDisbaled">
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
      name:null,
      pswrd: null,
      showError: false
    };
  },
  computed: {
    isDisbaled(){
      if (this.current === ACTIVE.LOGIN){
        return !this.user || !this.pswrd
      }
      else {
        return !this.user || !this.pswrd || !this.name
      }
    }
  },
  methods: {
    changeCurrent(val) {
      this.current = val;
    },
    loginOrRegister() {
      if (!this.isDisbaled) {
        if (this.current === ACTIVE.LOGIN) this.loginUser();
        else this.registerUser();
      }
    },
    loginUser() {
      this.error = false;
      const u = localStorage.getItem("femhoot-username");
      const p = localStorage.getItem("femhoot-pswrd");
      if (u == this.user && p == this.pswrd) {
        localStorage.setItem("logged-femhoot", true);
        this.$store.commit('user/setName',this.name);
        this.$emit("login");
      } else {
        this.showError = true;
      }
    },
    registerUser() {
      localStorage.setItem("femhoot-username", this.user);
      localStorage.setItem("femhoot-pswrd", this.pswrd);
      localStorage.setItem("femhoot-name", this.name);
      this.current = ACTIVE.LOGIN;
    },
    setUser(username) {
      this.user = username;
    },
    setName(name) {
      this.name = name;
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
