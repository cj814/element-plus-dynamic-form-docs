<template>
  <form-render :form-items="formItems" :form-data="formData" ref="formRenderRef" />
  <div>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
  </div>
</template>

<script setup lang="tsx">
import { computed, ref } from 'vue'
import { ElForm, ElMessage, ElMessageBox } from 'element-plus'

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
        default: () => (
          <>
            <el-button type="primary">{imageText.value}</el-button>
          </>
        )
      }
    }
  }
])

const formData = ref({
  name: '',
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

const imageText = ref('上传头像')

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
