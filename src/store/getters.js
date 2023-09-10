import { defineStore } from 'pinia'

// 加载状态
export const useIsLoading = defineStore('loading', () => {
  // 状态
  const isLoading = ref(false)

  return isLoading
})

// 随机数
export const keyNumStore = defineStore('keyNum', () => {
  const keyNum = ref(0)

  return { keyNum }
})