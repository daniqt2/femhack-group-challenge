<template>
  <div class="px-4">
      <div class="option" @click="$emit('selected','LEARN')">Learn</div>
      <div class="option" @click="$emit('selected','TEST')">Take Test</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.option {
    @apply bg-white rounded p-6 my-4 hover:bg-purple-base hover:text-white text-2xl hover:font-bold cursor-pointer;
}

</style>