<template>
  <div
    v-if="tagText.length"
    class="
      bg-google-blue
      rounded-full
      p-1
      px-4
      text-white
      font-bold
      fit-content
    "
  >
    <p>{{ tagText }}</p>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tagText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.fit-content {
  width: fit-content;
}
</style>
