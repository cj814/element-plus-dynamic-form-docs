<template>
  <base-table :table-columns="tableColumns" :table-data="tableData" />
</template>

<script setup lang="tsx">
import { ref, computed } from 'vue'
const tableColumns = computed(() => [
  {
    prop: 'name',
    label: '姓名'
  },
  {
    prop: 'age',
    label: '年龄'
  },
  {
    prop: 'sex',
    label: '性别',
    formatter: (row) => {
      return row.sex === 'male' ? '男' : '女'
    }
  },
  {
    prop: 'status',
    label: '状态',
    formatter: (row) => {
      if (row.status === 1) {
        return <el-tag type="success">正常</el-tag>
      } else {
        return <el-tag type="danger">异常</el-tag>
      }
    }
  }
])
const tableData = ref([
  {
    name: '张三',
    age: 18,
    sex: 'male',
    status: 1
  },
  {
    name: '李四',
    age: 20,
    sex: 'female',
    status: 0
  },
  {
    name: '王五',
    age: 22,
    sex: 'male',
    status: 1
  }
])
</script>

<style>
@import '../../style/table-reset.css';
</style>
