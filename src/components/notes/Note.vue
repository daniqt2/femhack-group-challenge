<template>
  <div class="bg-white shadow-lg rounded-md">
    <div class="text-right p-2">
      <a
        @click="enterEditMode"
        class="text-google-yellow mr-0 font-bold m-4 cursor-pointer"
        >{{ !editMode ? "edit" : "close edit" }}</a
      >
      <a
        @click="deleteNote"
        class="text-google-red font-bold m-4 cursor-pointer"
        >delete</a
      >
    </div>
    <edit-note
      :note="note"
      v-if="editMode"
      @close-edit="closeEditMode"
    ></edit-note>
    <note-view
      :note="note"
      v-else
      @open-edit="editMode = true"
      :show-desc="showDesc"
    ></note-view>
  </div>
</template>

<script>
import NoteView from "./NoteView.vue";
import EditNote from "./EditNote.vue";
export default {
  name: "NoteBase",
  components: { EditNote, NoteView },
  props: {
    showDesc: {
      type: Boolean,
      default: true
    },
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editMode: false
    };
  },
  methods: {
    closeEditMode() {
      this.editMode = false;
    },
    enterEditMode() {
      this.editMode = !this.editMode;
    },
    deleteNote() {
      this.$store.commit("notes/deleteNote", this.note.id);
    }
  }
};
</script>

<style></style>
