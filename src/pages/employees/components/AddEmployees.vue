<template>
  <div class="app-container">
    <h1 style="text-align: center">新增员工列表</h1>
    <el-card class="card-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="工号" prop="workNumber">
          <el-input v-model="form.workNumber" />
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="form.mobile" />
        </el-form-item>
        <el-form-item label="部门" prop="departmentName">
          <el-input
            v-model="form.departmentName"
          />
        </el-form-item>
        <el-form-item label="员工头像">
          <upLoad v-model="form.staffPhoto" />
        </el-form-item>
      </el-form>
      <div class="card-btn">
        <el-button type="primary" @click="save">新增员工</el-button>
        <el-button>返回</el-button>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { ElMessage } from "element-plus";


const form = reactive({
  username: "",
  workNumber: "",
  mobile: "",
  departmentName: "",
  staffPhoto: "",
});


const save = () => {
  ElMessage.success("保存成功");
};
</script>
<style scoped>
.card-box {
  width: 50%;
  /* 居中对齐 */
  margin: 0 auto;
}

.card-btn {
  text-align: right;
  margin-top: 20px;
}

::v-deep .form-control {
  width: 200px;
}

.app-container {
  margin-top: 100px;
}
</style>
