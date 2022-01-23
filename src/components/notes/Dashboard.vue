<template>
  <div class="px-4 md:px-6 semi-width">
    <div>
      <div class="text-right">
        <button class="bg-google-green" @click="openInput">Add Note</button>
      </div>
      <div>
        <div class="w-12/12 md:w-6/12 mx-auto mb-10 md:mb-4" v-if="inputOpen">
          <create-note @created="inputOpen = false"></create-note>
        </div>
      </div>
      <div class="flex justify-center md:justify-start">
        <button
          class="bg-gray-500 w-20 mr-0"
          :class="{
            'active ': currentView == VIEWS.LIST
          }"
          @click="switchView(VIEWS.LIST)"
        >
          List
        </button>
        <button
          class="bg-gray-500 w-20"
          :class="{ active: currentView == VIEWS.GRID }"
          @click="switchView(VIEWS.GRID)"
        >
          Grid
        </button>
      </div>
    </div>
    <div v-if="!noteLength > 0">
      <p class="text-3xl text-gray-600">
        You don't have any notes! Go add some :)
      </p>
    </div>
    <div v-else>
      <grid-view v-if="currentView == VIEWS.GRID" :notes="notes"></grid-view>
      <list-view v-else :notes="notes"></list-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CreateNote from "../notes/CreateNote.vue";
import GridView from "../notes/Grid.vue";
import ListView from "../notes/List.vue";

const VIEWS = {
  LIST: "list",
  GRID: "grid"
};
export default {
  name: "NoteDashboard",
  components: { GridView, ListView, CreateNote },
  data() {
    return {
      VIEWS,
      currentView: VIEWS.GRID,
      inputOpen: false
    };
  },
  computed: {
    ...mapState("notes", ["notes"]),
    noteLength() {
      return Object.keys(this.notes).length;
    }
  },
  methods: {
    switchView(view) {
      this.currentView = view;
    },
    openInput() {
      this.inputOpen = !this.inputOpen;
    }
  }
};
</script>

<style scoped lang="scss">
button {
  &.active {
    @apply bg-google-blue;
  }
}
</style>
