<template>
    <div class="app-container">
        <el-card>
            <div class="page-header">
                <el-alert
                    :title="'共有' + total.value + '条数据'"
                    type="success"
                    effect="dark"
                    :closable="false"
                    class="numtag"
                />
                <div class="">
                    <el-button type="primary" @click="$router.push('/importEmployees')"
                        >导入</el-button
                    >
                    <el-button type="warning">导出</el-button>
                    <el-button type="danger" @click="$router.push('/AddEmployees')"
                        >新增员工</el-button
                    >
                </div>
            </div>
        </el-card>
        <el-card class="table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" width="100px" />
                <el-table-column prop="username" label="姓名" />
                <el-table-column prop="avatar" label="头像">
                    <img
                        src="../../lab/login.jpg"
                        alt=""
                        style="width: 50px; height: 50px"
                    />
                </el-table-column>
                <el-table-column prop="workNumber" label="工号" />
                <el-table-column prop="enableState" label="聘用形式" />
                <el-table-column prop="departmentName" label="部门" />
                <el-table-column prop="correctionTime" label="入职时间" />
                <el-table-column prop="formOfEmployment" label="账号状态">
                    <el-switch v-model="value1" />
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row }">
                        <el-button type="text" size="small" @click="handleEdit(row)"
                            >编辑</el-button
                        >
                        <el-button type="text" size="small" @click="handleDelete(row)" 
                        class="delete-btn"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <div class="fengye">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total.value"
                    @current-change="handlePageChange"
                />
            </div>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import { getEmployeesList,deleteEmployee } from "@/api/employees";
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
const tableData = ref([]);
const total = reactive({
    value: 0,
});
const value1 = ref(true);
const page = ref(1);
const size = ref(10);
const handlePageChange = (val: number) => {
    page.value = val;
    fetchData();
};
const fetchData = async () => {
    const res = await getEmployeesList({
        page: page.value,
        size: size.value,
    });
    console.log(res);
    tableData.value = res.rows;
    total.value = res.total;
};
const handleEdit = (row: any) => {
    console.log(row);
};
const handleDelete = async (row: any) => {
        await deleteEmployee(row.id);
        ElMessage.success("删除成功");
        fetchData();
};
onMounted(fetchData);
</script>
<style scoped>
.page-header {
    display: flex;
    justify-content: space-between;
}

.app-container {
    padding: 20px;
}

.numtag {
    width: 130px;
    padding: 0px;
    padding-left: 15px;
}

.table {
    margin-top: 10px;
}

.fengye{
        margin-top: 10px;
        display: flex;
        justify-content: center;
}

.delete-btn{
        color: red;
}
</style>
