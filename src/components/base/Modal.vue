<template>
  <div>
      <div class="absolute w-full h-full bg-gray-700 bg cursor-pointer" @click="$emit('close-modal')">
      </div>
      <div class="bg-white rounded-lg centered mx-auto my-auto p-10 w-10/12 md:w-6/12 h-3/6 pb-20">
      <div class="w-full text-right">
          <p class="font-bold text-xl cursor-pointer"  @click="$emit('close-modal')">x</p>
      </div>
         <h1 class="text-4xl">Hello <span class="font-bold">{{userName}}</span>!</h1>
         <div class="md:w-8/12 bg-gray-200 mx-auto my-20 py-6">
         <p>TEST POINTS</p>
            <p class="text-2xl md:text-8xl text-google-blue font-bold">{{points}}</p>
            <p class="text-xl md:text-3xl text-google-green font-bold">Great Job</p>
            <p class="text-2xl md:text-xl text-gray-700 font-bold">Tests taken: {{tests}}</p>
         </div>
      </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import ClickOutside from 'vue-click-outside'
export default {
    name: "modals",
    directives: {
    ClickOutside
  },
    computed: {
        ...mapState('user',['userName','points','tests']),
        
    }
}
</script>

<style>
.bg {
    opacity: 60%;
}
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>