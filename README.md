## 简历管理端功能
- 简历管理模块
  - 简历列表
  - 新增简历信息
  - 修改简历信息
  - 删除简历信息 

resume表：
  - id:简历id
  - file:简历附件
  - name:姓名
  - gender:性别
  - age:年龄
  - work_year:工作年限
  - location:所在地
  - school_name:毕业院校
  - school_type:学校类型（本科，专科，研究生）
  - graduate_date：毕业时间
  - work_type:工作性质（正式，实习，策软。。）
  - evaluation:评估（text类型富文本）
  - status:简历状态（0：未录用，1：初试，）
  - interview_way:面试方式（电话面试，现场面试，视频面试）
  - create_date:创建日期
  - update_date:修改日期

1. 新增简历时 选择工作类型时表单支持没有对应工作类型就新增

- 面试安排
  - 面试安排列表
  - 编辑面试安排（弹框修改）
  
  面试安排表：
    - id：面试安排id
  
  1. 面试安排列表无新增，初始数据通过新增简历时生成，初始状态为初试