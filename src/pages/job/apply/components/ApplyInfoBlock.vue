<template>
  <div class="block">
    <p class="block-title">{{title}}</p>
    <div class="block-form">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "ApplyInfoBlock",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.block {
  .block-title {
    position: relative;
    font-size: 16px;
    font-weight: bold;
    padding: 0 20px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 16px;
      background-color: @priColor;
    }
  }
  .block-form {
    padding: 0px 16px;
  }
}
</style>
