<template>
  <div>
InterviewList
  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "InterviewList",
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