<template>
  <base-table :table-columns="tableColumns" :table-data="tableData" :total="3" />
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
  }
])
const tableData = ref([
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '王五',
    age: 22
  }
])
</script>

<style>
@import '../../style/table-reset.css';
</style>
