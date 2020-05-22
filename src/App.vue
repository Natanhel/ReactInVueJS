<template>
  <div id="app">
    <game-dice :value="value"/>
    <button @click="rerollDice" class="btn">reroll dice</button>
    <button @click="resetDice" class="btn">reset dice</button>
  </div>
</template>

<script>
import GameDice from '@/components/GameDice.vue';

export default {
  name: 'App',
  components: {
    GameDice
  },
  data () {
    return {
      value: undefined
    }
  },
  methods: {
    rerollDice() {
      this.value = 1 + Math.floor(Math.random() * 6)
    },
    resetDice(){
      this.value = undefined
    }
  },
}
</script>

<style>
#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn{
  max-width: 100px;
  justify-self: center;
}
</style>
