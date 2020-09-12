<template>
  <ApplyInfoBlock :title="title">
    <div class="upload-form">
      <label for="uploadResume">
        上传简历
        <span class="red mgl4">*</span>
      </label>
      <div>
        <a-upload name="file" :multiple="true" :action="''">
          <a-button>
            <upload-outlined />上传简历
          </a-button>
        </a-upload>
        <span class="tips">仅支持pdf格式文件</span>
      </div>
    </div>
    <div class="upload-form">
      <label for="uploadZuoPin">上传作品</label>
      <div>
        <a-upload name="file" :multiple="true" :action="''">
          <a-button>
            <upload-outlined />上传作品
          </a-button>
        </a-upload>
        <span class="tips">支持文档、图片、压缩包、视频、音频、设计文件等格式文件，所有附件大小总和不超过50MB</span>
      </div>
    </div>
  </ApplyInfoBlock>
</template>

<script>
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref, toRefs, reactive } from "vue";
import ApplyInfoBlock from "./ApplyInfoBlock";
export default {
  name: "UploadResume",
  components: {
    ApplyInfoBlock,
    UploadOutlined
  },
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
.upload-form {
  margin-bottom: 24px;
  & > label {
    padding-bottom: 4px;
    display: block;
  }
  .tips {
    font-size: 12px;
  }
  /deep/ .ant-upload {
    margin: 12px 0;
    border-radius: 4px;
    .ant-btn {
      background: @priColor;
      color: #fff;
      border: 1px solid @priColor;
      border-radius: 4px;
      span{
        color: #fff;
      }
    }
  }
}
</style>
