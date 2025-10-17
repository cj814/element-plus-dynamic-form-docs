<template>
  <base-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :is-form="true"
    @row-click="handleRowClick"
    ref="baseTableRef"
  >
    <template #action="{ row }">
      <el-button type="text">编辑</el-button>
    </template>
  </base-table>
  <div style="margin-top: 16px">
    <el-button type="primary" @click="handleSave">保存</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
    <el-button type="primary" @click="handleClearValidate">清除校验</el-button>
    <el-button type="primary" @click="handleClear"> 清空所选项 </el-button>
    <el-button type="primary" @click="handleGetSelectionRows"> 获取选中行 </el-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const ageRequired = ref(true)
const baseTableRef = ref()

const tableColumns = computed(() => [
  {
    renderType: 'selection',
    width: 55
  },
  {
    prop: 'name',
    label: '姓名',
    width: 150,
    renderType: 'el-input',
    itemProps: {
      rules: [
        {
          required: true,
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
    renderType: 'el-input-number',
    width: 240,
    itemProps: {
      rules: [
        {
          required: true,
          message: '请输入年龄',
          trigger: ['blur', 'change']
        }
      ]
    },
    comProps: {
      placeholder: '请输入年龄',
      style: {
        width: '100%'
      }
    }
  },
  {
    renderType: 'el-date-picker',
    prop: 'birthday',
    label: '生日',
    width: 180,
    itemProps: {
      rules: [
        {
          required: true,
          message: '请选择生日',
          trigger: ['change']
        }
      ]
    },
    comProps: {
      type: 'date',
      valueFormat: 'yyyy-MM-dd',
      placeholder: '请选择生日'
    }
  },
  {
    prop: 'action',
    label: '操作',
    renderType: 'slot'
  }
])
const tableData = ref([
  {
    name: '',
    age: null,
    birthday: ''
  },
  {
    name: '',
    age: null,
    birthday: ''
  },
  {
    name: '',
    age: null,
    birthday: ''
  }
])

const handleSave = () => {
  baseTableRef.value?.validate((valid: boolean) => {
    if (valid) {
      console.log('校验通过')
      console.log(tableData.value)
    } else {
      console.log('校验不通过')
    }
  })
}

const handleReset = () => {
  baseTableRef.value?.resetFields()
}

const handleClearValidate = () => {
  // tableRef.value?.clearValidate();
  // const ageFieldRef = tableRef.value?.getField("tableData.0.age");
  // console.log("ageFieldRef:", ageFieldRef);
  // ageFieldRef
  baseTableRef.value?.scrollToField('tableData.0.age')
}

const handleRowClick = (row: Record<string, any>) => {
  // console.log(row);
  // ageRequired.value = !ageRequired.value;
}

const handleClear = () => {
  baseTableRef.value?.clearSelection()
}

const handleGetSelectionRows = () => {
  const selectionRows = baseTableRef.value?.getSelectionRows() || []
  console.log('选中行:', selectionRows)
}
</script>
