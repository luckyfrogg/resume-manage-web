<template>
  <ApplyInfoBlock :title="title">
    ssssssddd
  </ApplyInfoBlock>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
import ApplyInfoBlock from './ApplyInfoBlock'

export default {
  name: "Edu",
  components: {
    ApplyInfoBlock
  },
  props:{
      title:{
          type:String,
          default:''
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

</style>
