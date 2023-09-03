<template>
  <div id="app">
      <navbar></navbar>

      <div class="p-5 mx-auto md:max-w-[1100px]">
      <router-view :key="$route.fullPath"></router-view>
      </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'

export default {
  
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body{
  background-color: #f1f5f9;
}
</style>
