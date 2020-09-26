<template>
  <div class="side-bar-container" :class="{'is-collapse':collapse}">
    <div class="logo-container">
      <router-link to="/index">
        <span>简历管理系统</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, computed, reactive, provide, inject } from "vue";
import { useStore } from "vuex";
export default {
  name: "SideBar",

  setup() {
    const store = useStore();
    const state = reactive({});
    const collapse = computed(() => store.state.collapse);
    return {
      collapse,
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
.side-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 256px;
  height: 100vh;
  overflow: hidden;
  background: #001529;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width 0.2s;
  color: rgba(255, 255, 255, 0.95);
  .logo-container {
    position: relative;
    overflow: hidden;
    background: #001529;
    height: 75px;
    line-height: 75px;
    text-align: center;
    a {
      display: block;
      span {
        display: inline-block;
        overflow: hidden;
        font-size: 20px;
        font-weight: 600;
        line-height: 55px;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
        max-width: calc(256px - 60px);
      }
    }
  }
}
</style>