<template>
    <div>
        <h1>{{ time }}</h1>
    </div>
</template>
<script setup lang="ts">
import useTimer from './timer';
const { time } = useTimer();
</script>