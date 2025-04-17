import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css"

const app = createApp(App);
// app.config.productionTip = false;

app.use(Antd);
app.mount('#app'); // 必须添加这一行！