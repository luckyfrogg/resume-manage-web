import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/style/common.less'
import '@/assets/style/reset.less'
import '@/assets/style/style.less'
import '@/assets/style/cover_antd.less'
import "@/config/permission";//权限验证
createApp(App).use(store).use(router).use(Antd).mount('#app')
