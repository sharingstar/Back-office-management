<template>
  <div>
    <h1>{{ store.count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

function increment() {
  store.increment()
}

function decrement() {
  store.decrement()
}
</script>