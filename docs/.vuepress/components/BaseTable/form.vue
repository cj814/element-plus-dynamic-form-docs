<template>
  <base-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :is-form="true"
    @row-click="handleRowClick"
    ref="baseTableRef"
  />
  <div style="margin-top: 16px">
    <el-button type="primary" @click="handleSave">保存</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
    <el-button type="primary" @click="handleClearValidate">清除校验</el-button>
    <el-button type="primary" @click="handleClear"> 清空所选项 </el-button>
    <el-button type="primary" @click="handleGetSelectionRows"> 获取选中行 </el-button>
    <el-button type="primary" @click="hanldeClearSecondRowBirthValidate"> 清空第二行生日字段校验 </el-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const baseTableRef = ref()
const tableColumns = computed(() => [
  {
    renderType: 'selection',
    width: 55
  },
  {
    prop: 'name',
    label: '姓名',
    renderType: 'el-input',
    width: 220,
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
    width: 220,
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
    width: 200,
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
      valueFormat: 'YYYY-MM-DD',
      placeholder: '请选择生日'
    }
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
  baseTableRef.value?.clearValidate()
}

const handleRowClick = (row: Record<string, any>) => {
  console.log('row:', row)
}

const handleClear = () => {
  baseTableRef.value?.clearSelection()
}

const handleGetSelectionRows = () => {
  const selectionRows = baseTableRef.value?.getSelectionRows() || []
  console.log('selectionRows:', selectionRows)
}

const hanldeClearSecondRowBirthValidate = () => {
  const birthField = baseTableRef.value?.getField('tableData.1.birthday')
  birthField?.clearValidate()
}
</script>
