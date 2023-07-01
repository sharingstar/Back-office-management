<!-- 首页 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <div class="logo">
          <img src="../../assets/common/logo.png" alt="" />
        </div>
        <el-row class="tac">
          <el-col class="routerbar">
            <el-menu class="el-menu-vertical-demo">
              <el-menu-item @click="$router.push('/dashboard')">
                <span>Dashboard</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/departments')">
                <span>组织架构</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/employees')">
                <span>员工</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/setting')">
                <span>公司设置</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/salarys')">
                <span>工资</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/social')">
                <span>社保</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/attendances')">
                <span>考勤</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/approvals')">
                <span>审批</span>
              </el-menu-item>
              <el-menu-item @click="$router.push('/permission')">
                <span>权限管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="main">
        <div class="headerbar">
          <div class="header-text">江苏传智播客教育科技股份有限公司</div>
          <div class="user-info">
            <el-button type="text" @click="logout">退出登录</el-button>
          </div>
        </div>
        <div class="chiledpage">
          <RouterView></RouterView>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
const router = useRouter();
const userStore = useUserStore();
const logout = () => {
  userStore.logout();
  router.push("/login");
};
</script>
<style>
.common-layout {
  height: 100%;
}
.header {
  background-color: #3d6df8;
  display: flex;
}

.logo img {
  width: 100px;
  margin-left: 40px;
  margin-top: 10px;
}

.aside {
  height: 100vh;
  background-color: #5b8cff;
  position: fixed;
  top: 0;
  left: 0;
}
.headerbar {
  background-color: #3d6df8;
  height: 60px;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding-right: 20px;
  position: fixed;
  top: 0;
  left: 200px;
  z-index: 999;
}

.user-info {
  position: fixed;
  right: 20px;
  top: 15px;
}

.el-main {
  padding: 0px;
}

.el-menu-vertical-demo {
  background-color: #5b8cff;
  width: 100%;
}

.routerbar {
  margin-top: 10px;
}

.el-menu-item {
  color: #fff;
}

.header-text {
  color: #fff;
  font-size: 16px;
  margin-left: 20px;
}

.main {
  margin-left: 200px;
  padding: 0px;
}

.chiledpage {
  margin-top: 50px;
}
</style>
