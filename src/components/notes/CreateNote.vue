<template>
  <div class="p-4 md:p-6 md:px-10 rounded-lg shadow-md bg-white">
    <p class="mb-2 field">Title</p>
    <input
      v-model="noteTitle"
      class="
        w-full
        p-2
        bg-gray-100
        border border-gray-300
        rounded-md
        focus:outline-none
      "
      placeholder="Note's title"
    />
    <p class="mt-4 field">Description</p>
    <textarea
      v-model="noteDesc"
      class="
        w-full
        p-4
        bg-gray-100
        border border-gray-300
        rounded-md
        focus:outline-none
      "
      placeholder="Enter description"
    ></textarea>
    <p class="mb-2 field">
      Tags <span class="text-gray-500 text-sm">(divide by comma)</span>
    </p>
    <input
      v-model="tagText"
      @change="editTags"
      class="
        w-full
        p-2
        bg-gray-100
        border border-gray-300
        rounded-md
        focus:outline-none
      "
      placeholder="Divide each tag by comma"
    />
    <button class="bg-google-yellow" @click="createNote">
      {{ edit ? "Save" : "Create" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateNote",
  props: {
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: null
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      noteTitle: null,
      noteDesc: null,
      noteTags: [],
      tagText: null
    };
  },
  created() {
    if (this.title) {
      this.noteTitle = this.title;
      this.noteDesc = this.desc;
      this.noteTags = this.tags;
      if (this.tags) this.tagText = this.tags.join(",");
    }
  },
  methods: {
    createNote() {
      if (!this.title) {
        this.$store.commit("notes/addNote", {
          title: this.noteTitle,
          desc: this.noteDesc,
          tags: this.noteTags
        });
      } else {
        this.$store.commit("notes/editNote", {
          id: this.id,
          title: this.noteTitle,
          desc: this.noteDesc,
          tags: this.noteTags
        });
      }
      this.$emit("created");
    },
    editTags() {
      this.noteTags = this.tagText.split(",");
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
  height: 150px;
}

.field {
  @apply font-bold text-left text-gray-600;
}
</style>
