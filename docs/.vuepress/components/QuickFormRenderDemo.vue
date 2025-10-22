<template>
  <form-render :form-items="formItems" :form-data="formData" ref="formRenderRef" />
  <div>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
    <el-button type="primary" @click="handleClearValidate">清除校验</el-button>
    <el-button type="primary" @click="handleGetField">获取年龄字段</el-button>
  </div>
</template>

<script setup lang="tsx">
import { computed, ref } from 'vue'
import { ElForm, ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps } from 'element-plus'

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
  },
  {
    renderType: 'el-select', // select建议结合具体项目封装成组件，便于动态传递下拉选项
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
      style: {
        width: '100%'
      },
      slots: {
        default: () => (
          <>
            <el-option value="0" label="男"></el-option>
            <el-option value="1" label="女"></el-option>
          </>
        )
      }
    }
  },
  {
    renderType: 'el-upload',
    itemProps: {
      prop: 'image',
      label: '头像',
      rules: [
        {
          required: true,
          message: '请上传头像',
          trigger: ['change']
        }
      ]
    },
    comProps: {
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
      multiple: true,
      modelName: 'fileList',
      fileList: formData.value.image,
      onPreview: handlePreview,
      onRemove: handleRemove,
      beforeRemove: beforeRemove,
      onExceed: handleExceed,
      limit: 3,
      slots: {
        default: () => <el-button type="primary">上传头像</el-button>
      }
    }
  }
])

const formData = ref({
  name: '',
  age: 0,
  sex: '',
  image: [
    {
      name: 'element-plus-logo.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg'
    },
    {
      name: 'element-plus-logo2.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg'
    }
  ]
})

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false
  )
}

const handleSubmit = () => {
  formRenderRef.value?.validate((valid) => {
    if (valid) {
      console.log('formData:', formData.value)
    }
  })
}

const handleReset = () => {
  formRenderRef.value?.resetFields()
}

const handleClearValidate = () => {
  formRenderRef.value?.clearValidate()
}

const handleGetField = () => {
  const ageFieldRef = formRenderRef.value?.getField('age')
  console.log('ageFieldRef:', ageFieldRef)
  // ageFieldRef?.resetField()
}
</script>
