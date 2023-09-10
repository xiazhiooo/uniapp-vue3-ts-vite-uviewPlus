import { defineStore } from 'pinia'

// 系统信息
export const useSystemStore = defineStore('system', {
	state: () => {
		return {
            // 获取当前屏幕高度
            windowHeight: 0,
            // 获取当前屏幕宽度
            windowWidth: 0,
            // 获取当前系统
            uniPlatform: ''
		}
	},
    getters: {
    },
	persist: {
		storage: {
			getItem: uni.getStorageSync,
			setItem: uni.setStorageSync
		}
	},
	actions: {
		handleWindowGetters() {
            uni.getSystemInfo({
              success: (res) => {
                this.windowHeight = res.windowHeight + res.windowTop;
                this.windowWidth = res.windowWidth;
                this.uniPlatform = res.uniPlatform;
                console.log(res ,"屏幕高度为：", this.windowHeight, "屏幕宽度为：", this.windowWidth, "当前系统:", res.uniPlatform);
              },
            });
        },
	},
})