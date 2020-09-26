<template>
  <div>

  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "AdminList",
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