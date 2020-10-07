<template>
  <div class="side-bar-container" :class="{'is-collapse':collapse}">
    <div class="logo-container">
      <router-link to="/">
        <span>简历管理系统</span>
      </router-link>
    </div>
    <div class="menu-container">
      <a-menu
        mode="inline"
        :inline-collapsed="collapse"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:defaultOpenKeys="openKeys"
        v-model:defaultSelectedKeys="selectedKeys"
        @click="handleClickMenuItem"
        class="menu-list"
      >
        <template v-for="item in menus">
          <a-menu-item v-if="!item.children" :key="item.name" :data-key="item.name">
            <!-- <a-icon :type="item.icon" /> -->
            <span>{{item.title}}</span>
          </a-menu-item>
          <a-sub-menu v-else :menu-info="item" :key="item.name" :data-key="item.name">
            <template v-slot:title>
              <!-- <a-icon :type="item.icon" /> -->
              <span>{{item.title}}</span>
            </template>
            <a-menu-item-group v-for="sub_item in item.children" :key="sub_item.name">
              <!-- <a-icon :type="sub_item.icon" /> -->
              <a-menu-item :key="sub_item.name">{{sub_item.title}}</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script>
import {
  ref,
  toRefs,
  computed,
  reactive,
  provide,
  inject,
  getCurrentInstance
} from "vue";
import { menuList } from "@/config/menu";
import { filterMenuList } from "@/utils/handleRoutes";
import { decryptVal } from "@/utils/tools";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "SideBar",

  setup() {
    const store = useStore();
    const { ctx } = getCurrentInstance();
    let role = ctx.$cookies.get("role");
    // 获取当前路由
    const route = useRoute();
    // 获取路由实例
    const router = useRouter();
    const state = reactive({
      openKeys: [],
      selectedKeys: []
    });
    const menus = ref(filterMenuList(menuList, decryptVal(role)));
    console.log("route=>", route);
    state.openKeys = [route.matched[0].name];
    state.selectedKeys = [route.name];
    // debugger
    console.log(state.openKeys, state.selectedKeys);
    const collapse = computed(() => store.state.collapse);
    function handleClickMenuItem({ item, key, keyPath }) {
      // console.log(item, key, keyPath);
      state.openKeys = keyPath.length > 1 ? [keyPath[1]] : [keyPath[0]];
      state.selectedKeys = [keyPath[0]];
      router.push({ name: keyPath[0] });
    }
    // debugger
    return {
      collapse,
      menus,
      handleClickMenuItem,
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
  background: @themeColor;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width 0.2s;
  color: rgba(255, 255, 255, 0.95);
  .logo-container {
    position: relative;
    overflow: hidden;
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
  .menu-container {
    .menu-list {
      background: transparent;
      border-right: 1px solid transparent;
      ::v-deep(.ant-menu-item-group-title) {
        padding: 0;
      }
      .ant-menu-item {
        margin-top: 0;
        margin-bottom: 0;
      }
      ::v-deep(.ant-menu-submenu-arrow){
        &::before,
        &::after
        {
          background-image: none !important;
          background: #fff !important;
        }
        
      }
      span,
      i {
        color: #fff;
      }
    }
  }
}
</style>