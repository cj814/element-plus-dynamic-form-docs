<template>
  <base-table :table-columns="tableColumns" :table-data="tableData">
    <template #action="{ row }">
      <el-button type="primary" size="small" @click="handleUpdate(row)">修改</el-button>
      <el-button type="danger" size="small" @click="handleDelete(row)">删除</el-button>
    </template>
  </base-table>
</template>

<script setup lang="tsx">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

const tableColumns = computed(() => [
  {
    renderType: 'selection'
  },
  {
    prop: 'name',
    label: '姓名',
    width: 200
  },
  {
    prop: 'age',
    label: '年龄'
  },
  {
    prop: 'sex',
    label: '性别'
  },
  {
    prop: 'tel',
    label: '手机号',
    width: 200
  },
  {
    renderType: 'slot',
    prop: 'action',
    label: '操作',
    fixed: 'right',
    width: 180
  }
])
const tableData = ref([
  {
    name: '张三',
    age: 18,
    sex: 'male',
    tel: '13800000000'
  },
  {
    name: '李四',
    age: 20,
    sex: 'female',
    tel: '13900000000'
  },
  {
    name: '王五',
    age: 22,
    sex: 'male',
    tel: '13700000000'
  }
])

const handleUpdate = (row) => {
  ElMessage.primary(`修改${JSON.stringify(row)}`)
}

const handleDelete = (row) => {
  ElMessage.error(`删除${JSON.stringify(row)}`)
}
</script>

<style>
@import '../../style/table-reset.css';
</style>
