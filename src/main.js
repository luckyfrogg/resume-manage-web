import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import '@/assets/style/common.less'
import '@/assets/style/reset.less'
import '@/assets/style/style.less'
import Antd from 'ant-design-vue';

createApp(App).use(store).use(router).use(Antd).mount('#app')
