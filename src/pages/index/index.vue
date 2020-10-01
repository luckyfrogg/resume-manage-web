<template>
  <div>首页</div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "Index",
  setup() {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
</style>