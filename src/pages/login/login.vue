<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <a-form ref="ruleForm" :model="state.ruleForm" :rules="state.rules" class="form-wrap">
          <div class="title">您好！</div>
          <div class="title-tips">欢迎登录简历管理系统</div>
          <a-form-item has-feedback name="name" class="form-item">
            <a-input placeholder="工号/工作邮箱" v-model:value="state.ruleForm.name" autocomplete="on">
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
              <template v-slot:icon v-if="state.loadingStatus===2">
                <CheckOutlined />
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
import { ref, unref, toRefs, reactive, computed } from "vue";
import {
  UserOutlined,
  LockOutlined,
  CheckOutlined
} from "@ant-design/icons-vue";
export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined,
    CheckOutlined
  },
  setup() {
    let checkName = async (rule, value, callback) => {
      console.log();
      if (!value) {
        return Promise.reject("工号/工作邮箱不能为空！");
      }
      if (
        !/(^\d{1,}$)|(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/g.test(value)
      ) {
        return Promise.reject("工号/工作邮箱格式不正确！");
      }
      return Promise.resolve();
    };
    
    const state = reactive({
      loadingStatus: 0,//0：未点击登录，1：登录中，2：登录成功，2s跳转
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        password: [
          {
            required: true,
            message: "密码不能为空！",
            trigger: "change"
          }
        ]
      }
    });
    const loginBtnText=computed(()=>{
        let text=''
        console.log('state.loadingStatus',state.loadingStatus);
        switch (state.loadingStatus) {
            case 0:
                text='登录'
                break;
            case 1:
                text='登录中'
                break;
            case 2:
                text='登录成功'
                break;
        }
        console.log('te=>',text)
        return text
    })
    function handleClickLogin() {
      state.loadingStatus = 1;
      console.log(state.loadingStatus);
      setTimeout(() => {
        state.loadingStatus = 2;
         setTimeout(() => {
        state.loadingStatus = 0;
      }, 1000);
      }, 3000);
     
    }
    function forgetPassword() {
      console.log(2);
    }
    return {
      state,
      loginBtnText,
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
    }
    .title-tips {
      margin-top: 24px;
      margin-bottom: 24px;
      font-size: 26px;
      font-weight: 400;
      color: #0e121a;
      text-overflow: ellipsis;
      white-space: nowrap;
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