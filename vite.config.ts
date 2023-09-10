import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// Vue3自动引入插件 ref reactive watch 等 无须import 导入 可以直接使用 
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			imports: ['vue'],
			dts: "src/auto-import.d.ts"
		})
	],
	// 配置样式的bem架构
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/bem.scss";`
			}
		}
	},
	// 文件别名前缀
	resolve: {
		alias: {
			'@': '/src'
		},
	},
	// 配置服务
	server: {
		https: false,
		// port: 3399,
		proxy: {
			'/api': {
				// 后端请求地址
				target: '',
				changeOrigin: true,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});