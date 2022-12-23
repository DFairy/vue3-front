import { PC_DEVICE_WIDTH } from '@/constant'
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

/**
 * 是否移动端
 */
const { width } = useWindowSize()
export const isMobile = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/**
 * 初始化 rem 基准值，最大为 40px
 */
const MAX_fONTSIZE = 40
export const useRem = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontsize = window.innerWidth / 10
    fontsize = fontsize > MAX_fONTSIZE ? MAX_fONTSIZE : fontsize
    html.style.fontSize = fontsize + 'PX'
  })
}
