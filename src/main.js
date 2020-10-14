import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd,{message} from 'ant-design-vue';
import Cookies from 'js-cookie'
import '@/assets/iconfont/iconfont.css'
import 'ant-design-vue/dist/antd.css';
import '@/assets/style/common.less'
import '@/assets/style/reset.less'
import '@/assets/style/style.less'
import '@/assets/style/cover_antd.less'
import "@/config/permission";//权限验证
const app = createApp(App);
app.config.globalProperties.$message = message;//全局属性 通过getCurrentInstance调用
app.config.globalProperties.$cookies = Cookies;
app.use(store).use(router).use(Antd).mount('#app')
