<script setup lang="ts">
import { defineOptions, computed } from "vue";
import {
  // 消息气泡
  Bubble,
  // 发送框
  Sender,
} from "ant-design-x-vue";

defineOptions({ name: "SampleChat" });

const messages = [
  {
    content: "Hello, Ant Design X Vue!",
    role: "user",
  },
];
const style = computed(() => ({
  width: '256px',


}));
</script>

<template>
  <div class="main">
    <div class="chatContainer">
      <Bubble.List :items="messages"  />
    </div>
    <div class="inputContainer" :style="style">
      <Sender />
    </div>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  background-color: #2b3442;
  margin: 0;
}
.chatContainer {
  flex: 1;
  background-color: #3f2a2a;
  border-radius: 8px;
}
.inputContainer {
  background-color: #7a2424;
  border-radius: 8px;

}
</style>
