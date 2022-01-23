<template>
  <div>
    <div class="field">
      <p>Email</p>
      <input @input="emitUsername" v-model="user" />
    </div>
    <div class="field">
      <p>Name</p>
      <input @input="emitName" v-model="name" />
    </div>
    <div class="field">
      <p>Password</p>
      <input type="password" v-model="firstPswrd" />
    </div>
    <div class="field">
      <p>Repeat Password</p>
      <input type="password" @input="emitPassword" v-model="pswrd" />
    </div>
    <p class="text-google-red" v-if="!samePassword">Passwords don't match</p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: null,
      name: null,
      pswrd: null,
      firstPswrd: null,
      passwordError: null
    };
  },
  computed: {
    samePassword() {
      if (this.firstPswrd && this.pswrd) {
        return this.firstPswrd === this.pswrd;
      } else return true;
    }
  },
  methods: {
    emitUsername() {
      this.$emit("userSet", this.user);
    },
    emitName() {
      this.$emit("nameSet", this.name);
    },
    emitPassword() {
      if (this.samePassword) this.$emit("pswrdSet", this.pswrd);
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
