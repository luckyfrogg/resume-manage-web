<template>
  <div>
ResumeList
  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "ResumeList",
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