import {
	defineStore
} from 'pinia'


// 用户信息
export const useUserStore = defineStore('user', {
	state: () => {
		return {
			
		}
	},
	persist: {
		storage: {
			getItem: uni.getStorageSync,
			setItem: uni.setStorageSync
		}
	},
	actions: {
		
	},
})