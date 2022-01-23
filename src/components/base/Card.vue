<template>
  <div class="w-full mx-auto min shadow-sm p-10 px-4 md:px-16 text-xl text-center" :class="color">
      <p class="mx-auto font-bold text-4xl my-4" v-if="textName">{{textName}}</p>
      <div class="h-full middle flex" :class="{'my-8 mx-5': !name && isBig, 'md:text-3xl': isTest}">
          <p class="mx-auto my-auto" >
          {{text}}
      </p>
      </div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        text: {
            type: String,
            required:true
        },
        textName: {
            type: String,
            required:true
        },
        color: {
            type: String,
            default: 'white'
        },
        isBig: {
            type: Boolean,
            default: true
        },
        isTest: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        color(){
            const rounded = this.isBig ? 'rounded-md md:rounded-4xl' : 'rounded-lg cursor-pointer hover:shadow-2xl hover:text-white'
            return `bg-${this.color} ${rounded}`
        }
    }

}
</script>

<style scoped>
.min {
    min-height: 250px !important;
}

.bg-blue {
    background-color: #4285F4;
}
.bg-green {
    background-color: #0F9D58;
}
.bg-yellow {
    background-color: #F4B400;
}
.bg-red {
    background-color: #DB4437;
}
</style>