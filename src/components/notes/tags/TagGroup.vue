<template>
  <div class="flex mt-6">
    <tag v-for="tag in noteTags" :key="tag" :tagText="tag" class="mr-2"></tag>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  name: " TagGroup",
  components: { Tag },
  props: {
    noteTags: {
      type: Array,
      default: null
    }
  }
};
</script>

<style></style>
