<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><br />
    <div>
      <router-link to="/commodity/management">商品管理</router-link> |
      <router-link to="/commodity/classification">商品分类</router-link><br />
    </div>
    <br />
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
