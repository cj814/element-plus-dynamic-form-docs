<template>
  <form-render :form-items="formItems" :form-data="formData" :baseColSpan="24" ref="formRenderRef" />
  <div>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
  </div>
</template>

<script setup lang="tsx">
import { computed, ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'

const ageLabel = ref('年龄')
const ageRequired = ref(true)
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
    },
    comEvents: {
      onBlur: () => {
        if (!formData.value.name) {
          ElMessage.error('请输入姓名')
        }
      }
    }
  },
  {
    renderType: 'el-input-number',
    itemProps: {
      prop: 'age',
      label: ageLabel.value,
      rules: [
        {
          required: ageRequired.value,
          message: '请输入年龄',
          trigger: ['blur']
        }
      ]
    },
    comProps: {
      placeholder: '请输入年龄',
      style: {
        width: '100%'
      }
    }
  }
])

const formData = ref({
  name: '',
  age: 0
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
