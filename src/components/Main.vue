<script setup lang="ts">
import { Bubble, Sender, useXAgent, useXChat,Attachments } from "ant-design-x-vue"
import type { AttachmentsProps, BubbleListProps, ConversationsProps, PromptsProps } from 'ant-design-x-vue'
import { UserOutlined } from "@ant-design/icons-vue"
import { Flex, Avatar } from "ant-design-vue"
import type { CSSProperties } from "vue"
import { h, computed, ref } from "vue"
import { message } from "ant-design-vue"
import type { VNode } from 'vue'

defineOptions({ name: "AXChat" })
// defineOptions({ name: 'AXSenderSubmitTypeSetup' });

const defaultConversationsItems = [
  {
    key: '0',
    label: 'What is Ant Design X?',
  },
]


const headerOpen = ref(false)
const content = ref('')
const conversationsItems = ref(defaultConversationsItems)
const activeKey = ref(defaultConversationsItems[0].key)
const attachedFiles = ref<AttachmentsProps['items']>([])
const agentRequestLoading = ref(false)

const [agent] = useXAgent({
    request: async ({ message }, { onSuccess }) => {
        try {
            const response = await fetch("https://api.example.com/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            })
            const data = await response.json()
            onSuccess(data)
        } catch (error) {
            console.error("Error:", error)
        }
    },
})


const [messageApi, contextHolder] = message.useMessage()
const { onRequest, messages, setMessages } = useXChat({
    agent: agent.value,
})

const onSubmit = (nextContent: string) => {
    if (!nextContent) return
    onRequest(nextContent)
    content.value = ""
}

const fooAvatar: CSSProperties = {
    color: "#f56a00",
    backgroundColor: "#fde3cf",
}

const style = computed(() => ({
    width: "512px",
}))
</script>

<template>
    <div class="main">
        <div class="chatContainer">
            <Flex gap="middle" vertical>
                <Bubble
                    placement="start"
                    content="你好，我能为你做什么"
                    :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
                    :style="{ margin: '16px' }"
                />
            </Flex>
        </div>
        <div class="inputContainer" :style="style">
            <Sender @submit="onSubmit" :content="content" />
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
