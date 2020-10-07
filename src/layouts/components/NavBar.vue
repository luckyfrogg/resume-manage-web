<template>
  <div class="nav-bar-container">
    <div class="nav-bar-wrapper">
      <!-- <a-button @click="toggleCollapse">折叠</a-button> -->
      <section class="breadcrumb-container">
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item in breadcrumbList" :key="item.key">
            <router-link :to="item.path" v-if="item.path!==null">
              {{item.title}}
            </router-link>
            <template v-else>
              {{item.title}}
            </template>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </section>
      <div class="personal-center-container">个人中心</div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, toRefs, reactive, provide, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    // 获取当前路由
    const route = useRoute();
    // 获取路由实例
    const router = useRouter();
    const state = reactive({
      breadcrumbList:[]
    });
    console.log('matched=>',route.matched)
    route.matched.forEach((item,index,arr)=>{
      state.breadcrumbList.push({
        key:item.name+index,
        title:item.meta.title,
        path:index===arr.length-1?null:item.path,
        name:item.name
      })
    })
    console.log(state.breadcrumbList)
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
  .nav-bar-wrapper{
    height: 60px;
    display: flex;
    align-items: center;
    .personal-center-container{
      margin-left: auto;
    }
  }
}
</style>