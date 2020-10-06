<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <a-form ref="loginRef" :model="state.ruleForm" :rules="state.rules" class="form-wrap">
          <div class="title">您好！</div>
          <div class="title-tips">欢迎登录简历管理系统</div>
          <a-form-item has-feedback name="name" class="form-item">
            <a-input
              placeholder="工号/工作邮箱"
              v-model:value="state.ruleForm.name"
              autocomplete="off"
              @focus.stop="resetValidate"
            >
              <template v-slot:prefix>
                <UserOutlined style="color:rgba(0,0,0,.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item required has-feedback name="password" class="form-item">
            <a-input-password
              placeholder="密码"
              v-model:value="state.ruleForm.password"
              autocomplete="off"
            >
              <template v-slot:prefix>
                <LockOutlined style="color:rgba(0,0,0,.25)" />
              </template>
            </a-input-password>
          </a-form-item>
          <div class="btn-group">
            <a-button
              type="primary"
              @click="handleClickLogin"
              class="btn-login"
              :loading="state.loadingStatus===1"
            >
              <template v-slot:icon>
                <CheckOutlined v-if="state.loadingStatus===2" />
                <CloseOutlined v-if="state.loadingStatus===3" />
              </template>
              {{loginBtnText}}
            </a-button>
            <a-button
              style="margin-left: 10px"
              @click="forgetPassword"
              type="link"
              class="btn-forgetpsw"
            >忘记密码？</a-button>
          </div>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { doLogin } from "@/api/login";
import { encriptPass,encryptVal,decryptVal } from "@/utils/tools";
import { ref, unref, toRefs, reactive, computed, onMounted,getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'
import {
  UserOutlined,
  LockOutlined,
  CheckOutlined,
  CloseOutlined
} from "@ant-design/icons-vue";
export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined,
    CheckOutlined,
    CloseOutlined
  },
  setup(props, context) {
    const { ctx } = getCurrentInstance();
    const store = useStore()
    let router = useRouter()
    onMounted(() => {
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      console.log('message=>',getCurrentInstance())
      console.log(loginRef.value); // <div/>
    });
    const loginRef = ref(null);
    async function checkName(rule, value, callback) {
      if (!value) {
        return Promise.reject("工号/工作邮箱不能为空！");
      }
      if (
        !/(^\d{1,}$)|(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/g.test(value)
      ) {
        return Promise.reject("工号/工作邮箱格式不正确！");
      }
      return Promise.resolve();
    }

    const state = reactive({
      loadingStatus: 0, //0：未点击登录，1：登录中，2：登录成功，2s跳转
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ validator: checkName, whitespace: true, trigger: "blur" }],
        password: [
          {
            required: true,
            message: "密码不能为空！",
            whitespace: true,
            trigger: "change"
          }
        ]
      }
    });
    const loginBtnText = computed(() => {
      let text = "";
      console.log("state.loadingStatus", state.loadingStatus);
      switch (state.loadingStatus) {
        case 0:
          text = "登录";
          break;
        case 1:
          text = "登录中";
          break;
        case 2:
          text = "登录成功";
          break;
        case 3:
          text = "登录失败";
          break;
      }
      return text;
    });
    function resetValidate() {
      loginRef.value.clearValidate();
    }
    async function handleClickLogin() {
      //点击登录
      loginRef.value
        .validate()
        .then(async ruleForm => {
          state.loadingStatus = 1;
          let encryptPassword = encriptPass(ruleForm.password);
          let params = {
            name: ruleForm.name,
            password: encryptPassword
          };
          let loginRes = await doLogin(params)
            .then(res => {
              ctx.$message.success(res.msg)
              let encryptRole=encryptVal(res.data.role)
              ctx.$cookies.set('access_token', res.data.accessToken, { expires: 1 });
              ctx.$cookies.set('role', encryptRole, { expires: 1 });
              store.dispatch('setMenuList',encryptRole)
              router.push('/admin')
              state.loadingStatus = 2;
            })
            .catch(err => {
              state.loadingStatus = 0;
            });
          setTimeout(() => {
            state.loadingStatus = 0;
          }, 1800);
        })
        .catch(error => {
            state.loadingStatus = 0;
          console.log("error", error);
        });

      console.log(state.loadingStatus);
    }
    function forgetPassword() {
      console.log(2);
    }

    return {
      state,
      loginRef,
      loginBtnText,
      resetValidate,
      handleClickLogin,
      forgetPassword
    };
  }
};
</script>
<style lang="less" scoped>
.login-container {
  height: 100vh;
  background: url("../../assets/imgs/bg_login.jpg") center center fixed
    no-repeat;
  background-size: cover;
  .form-wrap {
    position: relative;
    max-width: 100%;
    margin: calc((100vh - 425px) / 2) 10% 10%;
    overflow: hidden;
    .title {
      font-size: 54px;
      font-weight: 500;
      color: #0e121a;
      animation: smoothUp 2s ease forwards;
      //   transition: all 2s ease;
    }

    .title-tips {
      margin-top: 24px;
      margin-bottom: 24px;
      font-size: 26px;
      font-weight: 400;
      color: #0e121a;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 0;
      transform: translateY(100px);
      animation: smoothUp 1.8s 0.2s ease forwards;
    }
    @keyframes smoothUp {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      20% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .form-item {
      position: relative;
      padding-right: 0;
      margin: 34px 0;
      color: #454545;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 2px;
      .ant-input-affix-wrapper {
        border: 1px solid transparent;
        border-radius: 2px;
      }
      ::v-deep .ant-form-explain {
        position: absolute;
        margin-top: 2px;
      }
      ::v-deep .has-error {
        .ant-input-affix-wrapper {
          border: 1px solid #f5222d;
        }
      }
      ::v-deep input {
        height: 58px;
        padding-left: 45px;
        font-size: 14px;
        line-height: 58px;
        color: #606266;
        background: #f6f4fc;
        border: 0;
        caret-color: #606266;
      }
    }
    .btn-group {
      .btn-login {
        width: 220px;
        height: 60px;
        font-size: 16px;
        border-radius: 2px;
      }
      .btn-forgetpsw {
        margin-left: 10px;
      }
    }
  }
}
</style>