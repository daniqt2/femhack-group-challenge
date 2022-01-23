<template>
  <div>
    <div class="field">
      <p>Username</p>
      <input @input="emitUsername" v-model="user" />
    </div>
    <div class="field">
      <p>Password</p>
      <input type="password" @input="emitPassword" v-model="pswrd" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: null,
      pswrd: null
    };
  },
  methods: {
    emitUsername() {
      this.$emit("userSet", this.user);
    },
    emitPassword() {
      this.$emit("pswrdSet", this.pswrd);
    }
  }
};
</script>

<style scoped lang="scss">
.field {
  @apply mt-6;
  > p {
    @apply font-bold text-left text-gray-600 text-lg;
  }
}

input {
  @apply bg-gray-200 p-1 w-full border border-gray-300 focus:outline-none;
}
</style>
