<template>
  <base-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :is-form="true"
    :is-virtual="true"
    :width="700"
    :height="400"
    :estimated-row-height="64"
    expand-column-key="name"
    ref="tableRef"
  />
  <div style="margin-top: 16px">
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleScroll">滚动</el-button>
  </div>
</template>

<script lang="tsx" setup name="Issuer">
import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus'

const nameRequired = ref(true)
const tableColumns = computed(() => [
  {
    renderType: 'selection',
    width: 50
  },
  {
    prop: 'index',
    renderType: 'index',
    label: '序号',
    width: 50
  },
  {
    prop: 'name',
    label: '姓名',
    width: 200,
    renderType: 'el-input',
    itemProps: {
      rules: [
        {
          required: nameRequired.value,
          message: '请输入姓名',
          trigger: ['blur']
        }
      ]
    },
    comProps: {
      placeholder: '请输入姓名'
    }
  },
  {
    prop: 'age',
    label: '年龄',
    width: 100
  },
  {
    renderType: 'slot',
    prop: 'action',
    label: '操作',
    width: 150,
    comProps: {
      slots: {
        default: (scope: any) => (
          <el-button type="text" onClick={() => handleGetRowData(scope.rowData)}>
            获取当前行数据
          </el-button>
        )
      }
    }
  }
])

const tableRef = ref()
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
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  },
  {
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 20
  }
])

const handleGetRowData = (row: any) => {
  console.log('row:', row)
}

const handleSubmit = () => {
  tableRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('submit!')
    } else {
      ElMessage.error('error submit!!')
      return false
    }
  })
}

const handleScroll = () => {
  tableRef.value.scrollTo({
    scrollTop: 5000
  })
}
</script>
