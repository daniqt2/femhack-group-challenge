<template>
  <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
    <note
      class="col-span-1 w-full my-2"
      v-for="note in notes"
      :key="note.title"
      :note="note"
    ></note>
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  name: "GridView",
  components: { Note },
  props: {
    notes: {
      type: Object,
      default: null
    }
  }
};
</script>

<style></style>
