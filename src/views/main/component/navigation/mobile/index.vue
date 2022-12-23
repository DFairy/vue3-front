<template>
  <div class="bg-white dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <li
        @click="isVisiable = true"
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!--滑块-->
      <li
        :style="slideStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100 ': currentIndex === index,
        }"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisiable">
      <menu-vue :category="data" @onItemClick="selectItem"></menu-vue>
    </m-popup>
  </div>
</template>

<script setup>
import { defineProps, ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '../../menu/index.vue'
const isVisiable = ref(false)
defineProps({
  data: {
    type: Array,
    required: true,
  },
})
// 获取填充的所有 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
const slideStyle = ref({
  transform: 'translateX(0px)',
  width: '60px',
})
const ulTarget = ref(null)
const currentIndex = ref(0)
const { x: ulScrollLeft } = useScroll(ulTarget)

watch(currentIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  slideStyle.value = {
    transform: `translateX(${ulScrollLeft.value + left - 10 + 'px'})`,
    width: width + 'px',
  }
})

const onItemClick = (index) => {
  currentIndex.value = index
}

const selectItem = (item) => {
  console.log(item)
}
</script>
