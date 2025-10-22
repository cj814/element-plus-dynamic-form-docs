<template>
  <form-render :form-items="formItems" :form-data="formData" ref="formRenderRef" />
  <div>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
  </div>
</template>

<script setup lang="tsx">
import { computed, ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'

const formRenderRef = ref<InstanceType<typeof ElForm>>()
const formItems = computed(() => [
  {
    renderType: 'el-input',
    itemProps: {
      prop: 'name',
      label: '姓名',
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
    renderType: 'custom-select',
    itemProps: {
      prop: 'sex',
      label: '性别',
      rules: [
        {
          required: true,
          message: '请选择性别',
          trigger: ['change']
        }
      ]
    },
    comProps: {
      placeholder: '请选择性别',
      options: [
        {
          value: 'male',
          label: '男'
        },
        {
          value: 'female',
          label: '女'
        }
      ]
    }
  }
])

const formData = ref({
  name: '',
  sex: ''
})

const handleSubmit = () => {
  formRenderRef.value?.validate((valid) => {
    if (valid) {
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('提交失败')
    }
  })
}

const handleReset = () => {
  formRenderRef.value?.resetFields()
}
</script>
