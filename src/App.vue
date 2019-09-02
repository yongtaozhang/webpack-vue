<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <img height="100" src="./img/123.jpg">
    <img height="100" src="./img/111.jpg">
    <img height="100" src="./img/222.jpg">
    <input type="text" v-model="msg">
  </div>
</template>

<script>

import getData from './until.js';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created() {
    this.fetchData()
    console.log(11111)
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>

<style lang="stylus">
.app
  background #eee
  h1
    color #f00
</style>
