<template>
  <div class="p-4 md:p-32">
      <div class="flex justify-center">
          <button v-if="!test" class="bg-google-blue" @click="index > 0 ? index -= 1 : null">Back</button>
          <button  v-if="index < profiles.length-1" class="bg-google-green" @click="next">Next</button>
      </div>
      <card class="md:w-6/12" :text="profiles[index].info" :text-name="profiles[index].name"></card>
      <div >
          <button class="bg-google-yellow" @click="$emit('go-menu')">Go to Menu</button>
          <button v-if="index == profiles.length-1" class="bg-google-red" @click="$emit('take-test')">Take test</button>
      </div>
  </div>
</template>

<script>
import Card from '../base/Card.vue'
import { mapState } from 'vuex'
export default {
    name: 'LearnView',
    components: {Card},
    props: {
        test: {
            type:Boolean,
            default: false,
            optionPicked: false
        }
    },
    computed: {
        ...mapState('info',['info']),
        profiles(){
            return Object.values(this.info)
        },
    },
    data(){
        return {
            colors: ['red','blue','green','yellow'],
            index:0
        }
    },
    methods: {
        next(){
            this.index += 1 ;}
    }

}
</script>