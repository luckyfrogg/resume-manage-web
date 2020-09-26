<template>
  <div class="layout-container">
    <div class="layout-wrapper fixed">
      <side-bar></side-bar>
      <div class="layout-main">
        <div class="layout-header">
          <nav-bar></nav-bar>
        </div>
        <div class="layout-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, toRefs, reactive, provide, inject } from "vue";
import { SideBar, NavBar } from "./components";
export default {
  name: "Layouts",
  components: {
    SideBar,
    NavBar
  },
  setup() {
    //beforeCreate,created生命周期
    //初始化数据reactive相当于observer()对传入数据处理为可观测的
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
.layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  .layout-wrapper.fixed {
    padding-top: 60px;
  }
  .layout-wrapper {
    .layout-main {
      position: relative;
      min-height: 100%;
      margin-left: 256px;
      background: #f6f8f9;
      transition: all 0.2s;
      .layout-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 997;
        width: 100%;
        overflow: hidden;
        left: 256px;
        width: calc(100% - 256px);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        transition: all 0.2s;
      }
      .layout-content {
        width: calc(100% - 20px - 20px);
        margin: 20px auto;
        background: #fff;
        border-radius: 2px;
      }
    }
  }
}
</style>