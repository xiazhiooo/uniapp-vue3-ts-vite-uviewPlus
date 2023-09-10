import { createSSRApp } from "vue";
import App from "./App.vue";
// CSS common style sheet
import "@/styles/common.scss";
import "@/styles/index.scss";
import pinia from '@/store'
import request from '@/utils/request.js'
import uViewPlus from '@/uni_modules/uview-plus'

export function createApp() {
	const app = createSSRApp(App);

	app.use(pinia)
	app.use(uViewPlus)
	app.config.globalProperties.$request = request

	uni.$u.config.unit = 'rpx'

	return {
		app,
	};
}