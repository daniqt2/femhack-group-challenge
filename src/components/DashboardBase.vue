<template>
  <div class="bg-gray-200 h-full relative">
    <modal v-if="showModal" @close-modal="closeModal"></modal>
    <db-header @modal-click="modalClick"></db-header>
    <main-menu class="mx-auto my-20 w-10/12 md:w-6/12" v-if="currentView == VIEW.MENU" @selected="changeSection"></main-menu>
    <learn-view v-if="currentView == VIEW.LEARN" @go-menu="currentView=VIEW.MENU" @take-test="currentView=VIEW.TEST"></learn-view>
    <test-view v-if="currentView == VIEW.TEST" :test="true" @finish-test="currentView=VIEW.MENU" @go-menu="currentView=VIEW.MENU"></test-view>
  </div>
</template>

<script>
import DbHeader from "./Header.vue";
import Modal from './base/Modal.vue'
import MainMenu from  './Menu.vue'
import LearnView from './info/LearnView.vue'
import TestView from './info/TestView.vue'
import QuestionGroup from './questions/QuestionGroup.vue'

const VIEW = {
  LEARN: 'learn',
  TEST: 'test',
  MENU: 'menu'
}
export default {
  name: "DashboardBase",
  components: {
    DbHeader,
    MainMenu,
    LearnView,
    Modal,
    QuestionGroup,
    TestView

  },
  data(){
    return {
        showModal: false,
        VIEW,
        currentView: VIEW.MENU
    }
  },
  methods: {
    modalClick(){
      this.showModal = true
    },
    changeSection(val){
      this.currentView = this.VIEW[val]
    },
    closeModal(){
      this.showModal = false
    }
  }
};
</script>

<style></style>
