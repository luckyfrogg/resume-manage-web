<template>
  <div class="container">
    <div class="apply-box">
      <main>
        <div class="apply-top">
          <div class="job-info">
            <div class="title">前端开发工程师</div>
            <div class="job-des">
              <p>岗位描述：管理端富文本生成导出</p>
              <span>发布时间：2020-09-09</span>
            </div>
          </div>
        </div>
        <div class="apply-main">
          <UploadResume title="上传"></UploadResume>
          <PersonalInfo title="个人信息"></PersonalInfo>
          <Intension title="求职意向"></Intension>
          <WorkExperience title="工作经历"></WorkExperience>
          <EduExperience title="教育背景"></EduExperience>
          <Internship title="实习经历"></Internship>
          <ProjectExperience title="项目经验"></ProjectExperience>
          <Introduce title="自我描述"></Introduce>
        </div>
      </main>
      <aside>
        从第三方网站导入简历
        （node端爬取第三方简历生成）
      </aside>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
import UploadResume from "./components/UploadResume";
import PersonalInfo from "./components/PersonalInfo";
import Intension from "./components/Intension";
import WorkExperience from "./components/WorkExperience";
import EduExperience from "./components/EduExperience";
import Internship from "./components/Internship";
import ProjectExperience from "./components/ProjectExperience";
import Introduce from "./components/Introduce";

export default {
  name: "JobApply",
  components: {
    UploadResume,
    PersonalInfo,
    Intension,
    WorkExperience,
    EduExperience,
    Internship,
    ProjectExperience,
    Introduce
  },
  setup() {
    //beforeCreate,created生命周期
    //初始化数据reactive相当于observer()对传入数据处理为可观测的
    const state = reactive({
      form: {
        name: ""
      }
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 40px 0;
  .apply-box {
    display: flex;
    flex-flow: row nowrap;
    & > main {
      flex-shrink: 0;
      width: 900px;
      margin-right: 20px;
      background: #fff;
      .apply-top {
        padding: 32px 20px 16px;
        border-bottom: 1px solid #eee;
        .job-info {
          .title {
            font-size: 20px;
            line-height: 30px;
            font-weight: bold;
          }
          .job-des {
            margin: 12px 0;
            p {
              margin: 0;
            }
            & > span {
              float: right;
            }
          }
        }
      }
      .apply-main {
        padding: 20px;
        /deep/ .block {
          margin-bottom: 24px;
        }
      }
    }
    & > aside {
      flex: 1;
    }
  }
}
</style>
