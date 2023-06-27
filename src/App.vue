<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="inputValue" type="text">
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

const inputValue = ref('');
const message = ref('');

// 使用 watchEffect 创建副作用函数
watchEffect(() => {
  message.value = `你输入了：${inputValue.value}`;
  console.log('watchEffect', inputValue.value);
});

// 使用 watch 创建侦听器
watch(inputValue, (newValue, oldValue) => {
  console.log('watch', newValue, oldValue);
});
</script>