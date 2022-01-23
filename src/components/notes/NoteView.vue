<template>
  <div class="bg-white shadow-lg rounded-md">
    <div class="p-4 flex" :class="{ 'border border-b-gray-300': showdesc }">
      <h1 class="font-bold md:text-2xl flex-1">{{ note.title }}</h1>
    </div>
    <div class="p-6 text-left text-gray-800">
      <h1>{{ note.desc }}</h1>
      <div>
        <tag-group :note-tags="note.tags"></tag-group>
      </div>
    </div>
  </div>
</template>

<script>
import TagGroup from "./tags/TagGroup.vue";
export default {
  name: "NoteBase",
  components: { TagGroup },
  props: {
    showDesc: {
      type: Boolean,
      default: false
    },
    note: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
