<template>
  <div class="w-full">
    <div class="bg-white hover:shadow-2xl">
      <note
        class="text-left mt-4 cursor-pointer"
        :show-desc="false"
        v-for="note in notes"
        :key="note"
        :note="note"
      ></note>
    </div>
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  name: "ListView",
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
