<template>
  <div class="bg-white shadow-lg rounded-md">
    <create-note
      :title="note.title"
      :desc="note.desc"
      :tags="note.tags"
      :id="note.id"
      :edit="true"
      @created="$emit('close-edit')"
    ></create-note>
  </div>
</template>

<script>
import TagGroup from "./tags/TagGroup.vue";
import CreateNote from "./CreateNote.vue";
export default {
  name: "NoteBase",
  components: { TagGroup, CreateNote },
  props: {
    showDesc: {
      type: Boolean,
      default: true
    },
    note: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
