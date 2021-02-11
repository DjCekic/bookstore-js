<template>
  <div id="app" style="margin: 0px;">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/layouts/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  background: #2c3e50;
  margin-top: 60px;
}
</style>
