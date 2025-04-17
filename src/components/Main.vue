<script setup lang="ts">
import { Bubble ,Sender} from "ant-design-x-vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { Flex, Avatar } from "ant-design-vue";
import type { CSSProperties } from "vue";
import { h ,computed} from "vue";
import { App, message } from 'ant-design-vue';

defineOptions({ name: "AXBubbleAvatarAndPlacementSetup" });
// defineOptions({ name: 'AXSenderSubmitTypeSetup' });

const [messageApi, contextHolder] = message.useMessage();

const submit = () => {
  messageApi.success('Send message successfully!'); 
}

const fooAvatar: CSSProperties = {
  color: "#f56a00",
  backgroundColor: "#fde3cf",
};

const barAvatar: CSSProperties = {
  color: "#fff",
  backgroundColor: "#87d068",
};

const hideAvatar: CSSProperties = {
  visibility: "hidden",
};

const style = computed(()=>{
  width:'512px'
})
</script>

<template>
  <div class="main">
    <div class="chatContainer">
      <Flex gap="middle" vertical>
        <Bubble
          placement="start"
          content="Good morning, how are you?"
          :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
        />
        <Bubble placement="end" content="Hi, good morning, I'm fine!">
          <template #avatar>
            <Avatar :icon="h(UserOutlined)" :style="barAvatar" />
          </template>
        </Bubble>
        <Bubble
          placement="end"
          content="Thank you!"
          :styles="{ avatar: hideAvatar }"
          :avatar="{}"
        />
      </Flex>
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
  background-color: #f8f7f6;
  margin: 0;
}
.chatContainer {
  flex: 1;
  background-color: #f8f7f6;
  border-radius: 8px;
}
.inputContainer {
  background-color: #f8f7f6;
  border-radius: 8px;
  align-self: center; /* 水平居中 */
  margin: 20px;
}
</style>
