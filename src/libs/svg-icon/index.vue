<template>
  <svg>
    <use :xlink:href="symbolId" :class="fillClass" :fill="color" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  fillClass: {
    type: String,
  },
})

const symbolId = computed(() => {
  return `#icon-${props.name}`
})
</script>

<style></style>
