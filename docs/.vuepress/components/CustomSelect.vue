<template>
  <el-select v-model="selectedValue" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every((item) => item.hasOwnProperty('value') && item.hasOwnProperty('label'))
    }
  }
})

const selectedValue = ref('')
</script>
