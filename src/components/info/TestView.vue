<template>
  <div class="p-4 md:p-32">
      <span v-if="index < profiles.length-1">
         <div class="text-left">
              <button  class="bg-google-blue" @click="finishTest">Escape test</button>
         </div>
          <card class="md:w-6/12" :text="profiles[index].question" :isTest="true"></card>
        <div v-if="optionPicked" class="md:w-5/12 mx-auto rounded-lg py-10 font-bold text-xl text-white my-10" :class="correctAnswer.id == optionPicked.id ? 'bg-google-green':'bg-google-red'">
            {{correctAnswer.id == optionPicked.id ? 'Correct! ':'Oops!'}} The correct answer is {{correctAnswer.text}}
        </div>
        <question-group :options="profiles[index].options" @picked="pickedOption" v-if="!optionPicked"></question-group>
      </span>
      <span v-else>
          <div class="bg-gray-400 md:w-5/12 mx-auto rounded-lg py-10 font-bold text-2xl my-10">
                <p class="text-gray-900">Total Points</p>
                <p class="text-8xl text-google-blue">{{points}}</p>
          </div>
      </span>
      <div class="flex justify-center">
          <button v-if="index == profiles.length-1" class="bg-google-red" @click="finishTest">Finish</button>
      </div>
  </div>
</template>

<script>
import Card from '../base/Card.vue'
import { mapState } from 'vuex'
import QuestionGroup from '../questions/QuestionGroup.vue'
export default {
    name: 'TestView',
    components: {Card,QuestionGroup},
    props: {
        test: {
            type:Boolean,
            default: false,
        }
    },
    computed: {
        ...mapState('info',['info']),
        profiles(){
            return Object.values(this.info)
        },
        isDisabled(){
            if (!this.test) return false
            else return !this.optionPicked
        },
        correctAnswer(){
            return this.profiles[this.index].options.find(opt => opt.correct)
        }
    },
    data(){
        return {
            colors: ['red','blue','green','yellow'],
            index:0,
            optionPicked: null,
            points: 0
        }
    },
    methods: {
        next(){
            this.index += 1 ;
        },
        pickedOption(val){
            if (!this.optionPicked) this.optionPicked = val
            if(this.optionPicked.id === this.correctAnswer.id) this.points += 10
            setTimeout(()=> {
                this.optionPicked= null;
                this.next()
            },2000)
        },
        finishTest(){
            this.$store.commit('user/addPoints', this.points)
            this.$emit('finish-test')
        }
    }

}
</script>