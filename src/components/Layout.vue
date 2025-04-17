<template>
  <a-layout>
    <a-layout-sider class="aside"><Aside/></a-layout-sider>
    <a-layout>
      <!-- <a-layout-header class="header"><Header/></a-layout-header> -->
      <a-layout-content class="main"><Main/></a-layout-content>
    </a-layout>
  </a-layout>
</template>


<script lang="ts" setup>
import Main from './Main.vue'
// import Header from './Header.vue'
import Aside from './Aside.vue'
</script>

<style scoped>
.aside {
  height: 100vh;
}

.main {
  height: 100vh;
}
</style>