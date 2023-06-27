<template>
    <div>
        <h1 @click="$emit('nihao','你好世界')">子组件数据:</h1>
        <button @click="fn">点击传参</button>
    </div>
</template>
<script setup lang="ts">
const nihao = defineEmits(['nihao'])
function fn(){
    nihao('nihao','你好世界') 
}
</script>