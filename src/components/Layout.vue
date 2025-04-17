<template>
  <a-layout>
    <a-layout-sider class="aside"><Aside/></a-layout-sider>
    <a-layout>
      <a-layout-header class="header"><Header/></a-layout-header>
      <a-layout-content class="main"><Main/></a-layout-content>
    </a-layout>
  </a-layout>
</template>


<script lang="ts" setup>
import Main from './Main.vue'
import Header from './Header.vue'
import Aside from './Aside.vue'
</script>

<style scoped>
.aside {
  background-color: #f0f2f5;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
}
.header {
  color: #fff;
  position: fixed;
  left: 200px;
  top: 0;
  right: 0;
  height: 64px;
}
.main {
  margin-left: 200px;
  margin-top: 64px;
  padding: 24px;
  background: #f0f2f5;
  min-height: calc(100vh - 64px);
}
</style>