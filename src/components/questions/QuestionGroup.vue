<template>
  <div class="md:p-6">
      <div class="md:w-6/12 grid grid-cols-2 mx-auto md:mt-10 gap-6">
        <card v-for="(card,i) in options" :key="card" :color="colors[i]" :is-big="false" :text="card.text" :card-id="card.id" class="font-bold" @click="picked(card)" :isPicked="pickedCard"></card>
      </div>
  </div>
</template>

<script>
import Card from '../base/Card.vue'
import { mapState } from 'vuex'
export default {
    name: 'QuestionGroup',
    components: {Card},
    props: {
      options: {
        type: Array,
        default: null,
      }
    },
    data(){
        return {
            colors: ['red','blue','green','yellow'],
            index: 0,
            pickedCard: null
        }
    },
    computed: {
        ...mapState('info',['info']),
        profiles(){
            return Object.values(this.info)
        },
    },
    methods: {
      picked(opt){
        this.$emit('picked',opt)
      },
      
    }

}
</script>

<style>

</style>