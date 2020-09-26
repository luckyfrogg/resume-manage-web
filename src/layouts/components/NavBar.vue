<template>
  <div class="nav-bar-container">
    <div class="nav-bar-wrapper">
      <a-button @click="toggleCollapse">折叠</a-button>
      <section class="breadcrumb-container">面包屑</section>
      <div>个人中心</div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, toRefs, reactive, provide, inject } from "vue";
export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const state = reactive({});
    function toggleCollapse() {
      store.commit("toggleCollapse");
    }
    return {
      ...toRefs(state),
      toggleCollapse
    };
  }
};
</script>
<style lang="less" scoped>
.nav-bar-container {
  position: relative;
  height: 60px;
  padding-right: 20px;
  padding-left: 20px;
  overflow: hidden;
  user-select: none;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>