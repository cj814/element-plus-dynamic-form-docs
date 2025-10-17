<template>
  <base-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :is-form="true"
    :is-virtual="true"
    :width="700"
    :height="400"
    expand-column-key="name"
    ref="tableRef"
  >
    <!-- <template #action="scope">
        <el-button type="text" @click="handleBtnEdit(scope.rowData)"
          >修改</el-button
        >
      </template> -->
    <!-- <template #overlay>
        <div
          class="el-loading-mask"
          style="display: flex; align-items: center; justify-content: center"
        >
          <el-icon class="is-loading" color="red" :size="26">
            <loading-icon />
          </el-icon>
        </div>
      </template> -->
  </base-table>
  <div style="margin-top: 16px">
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button type="primary" @click="handleScroll">滚动</el-button>
  </div>
</template>

<script lang="tsx" setup name="Issuer">
import { computed, ref } from 'vue'

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
    width: 100,
    comProps: {
      slots: {
        default: (scope: any) => (
          <el-button type="text" onClick={() => handleBtnEdit(scope.rowData)}>
            修改11
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

const handleBtnEdit = (row: any) => {
  debugger
}

const handleSubmit = () => {
  tableRef.value.validate((valid) => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })

  setTimeout(() => {
    nameRequired.value = !nameRequired.value
  }, 1000)
}

const handleScroll = () => {
  tableRef.value.scrollTo({
    scrollTop: 5000
  })
}
</script>
