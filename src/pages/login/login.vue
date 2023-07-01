<template>
  <div class="loginbox">
    <el-form class="login-form" :model="form" :rules="rules">
      <div class="title-container">
        <h3 class="title">
          <img src="../../lab/login-logo.png" alt="" />
        </h3>
      </div>

      <el-form-item prop="userPhone">
        <el-input placeholder="手机号" type="text" v-model="form.mobile" />
      </el-form-item>

      <el-form-item prop="userPassword">
        <el-input
          placeholder="Password"
          v-model="form.password"
          show-password
        />
      </el-form-item>

      <el-button
        class="login-btn"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="submitForm"
        >登录</el-button
      >

      <div class="tips">
        <span style="margin-right: 20px">账号: 13800000002</span>
        <span>密码: 123456</span>
      </div>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { login } from "../../api/user";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { defineStore } from 'pinia'

const form = ref({
  mobile: "13800000002",
  password: "123456",
});
const rules = ref({
  userPhone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  userPassword: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
  ],
});
const userStore = useUserStore();
const router = useRouter();

const submitForm = async () => {
  try {
    userStore.token = await login(form.value)
    ElMessage.success("登录成功");
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};

const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})

const loginStore = useLoginStore()

</script>
<style scoped>
.loginbox {
  background-image: url("../../lab/login.jpg");
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-position: center center;
}

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.title-container {
  padding-bottom: 50px;
}

:deep() .el-input__inner {
  padding: 25px;
}

.login-btn {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background-color: rgb(64, 127, 254);
}

.tips {
  color: #fff;
  font-size: 14px;
}
</style>
