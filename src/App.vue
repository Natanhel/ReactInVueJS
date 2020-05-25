<template>
  <div id="app">
    <react :component="component" :greeting="greeting" :fatherText="fatherText" :event="AlertBtnFromFather"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import { ReactWrapper } from 'vuera'
import MyReactComponent from '@/components/ReactComponent'

export default {
  name: 'App',
  components: {
    react: ReactWrapper
  },
  data () {
    return {
      greeting: 'This is an example on using React as a Vues\' child',
      fatherText: 'This is a text from the Father component App',
      component: MyReactComponent,
      text: ''
    }
  },
  methods: {
    AlertBtnFromFather(){
      if (this.text === '') {
        this.text = 'Father - Vue'
      } else {
        this.text = ''
      }
    }
  }
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

</style>
