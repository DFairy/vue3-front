<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isVisiable"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
        @click="isVisiable = false"
      ></div>
    </transition>
    <transition name="popup-down-up">
      <div
        class="w-screen bg-white dark:bg-zinc-800 z-50 fixed bottom-0"
        v-if="isVisiable"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { useVModel, useScrollLock } from '@vueuse/core'
import { watch, defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

// const emits = defineEmits(['update:modelValue'])
const isVisiable = useVModel(props)

// ------ 滚动锁定 ------
const isLocked = useScrollLock(document.body)
watch(
  isVisiable,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true,
  },
)
</script>
<style lang="scss" scoped>
// fade 展示动画
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// popup-down-up 展示动画
.popup-down-up-enter-active {
  transition: all 0.3s;
}

.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
