<style lang="scss">
	@import "@/uni_modules/uview-plus/index.scss";
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #fff;
	}
</style>

<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

	onLaunch(() => {
		console.log("App Launch");
	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>
<style>

@import "/colorui/main.css";
@import "/colorui/icon.css";

</style>