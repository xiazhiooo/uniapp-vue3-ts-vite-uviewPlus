<template>
	<view class="card pd30">
		官方的uni-ui组件库
	</view>
	<!-- 基本用法 -->
	<!-- 需要在 script 中绑定 value 变量 -->
	<uni-rate v-model="value" @change="onChange" />

	<!-- 不支持滑动手势选择评分 -->
	<uni-rate :touchable="false" :value="5" />
	<!-- 设置尺寸大小 -->
	<uni-rate :size="18" :value="5" />

	<!-- 设置评分数 -->
	<uni-rate :max="10" :value="5" />

	<!-- 设置星星间隔 -->
	<uni-rate :value="4" :margin="20" />

	<!-- 设置颜色 -->
	<uni-rate :value="3" color="#bbb" active-color="red" />

	<!-- 选择半星 -->
	<uni-rate allow-half :value="3.5" />

	<!-- 只读状态 -->
	<uni-rate :readonly="true" :value="2" />

	<!-- 禁用状态 -->
	<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

	<!-- 未选中的星星为镂空状态 -->
	<uni-rate :value="3" :is-fill="false" />
</template>

<script setup lang="ts">
	const value = ref(2)
	const onChange = e => {
		console.log('rate发生改变:' + JSON.stringify(e))
	}
</script>