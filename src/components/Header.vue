<template>
  <header>
    <main class="header-main">
      <aside>
        <h2>大华招聘</h2>
      </aside>
    </main>
  </header>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "Header",
  components: {},
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
header {
    position: relative;
    width: 100%;
    background: #fff;
    .header-main{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 1200px;
        height: 60px;
        margin: 0 auto;
        &>aside{
            
            h2{
                color: @priColor;
            }
        }
    }
}
</style>
