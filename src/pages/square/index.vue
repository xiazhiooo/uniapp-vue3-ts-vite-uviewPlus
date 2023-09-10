<template>
	<view class="card pd30">
		uv-ui组件库的瀑布流
	</view>
	<view class="waterfall">
		<uv-waterfall ref="waterfall"
			v-model="list"
			left-gap="10"
			right-gap="10"
			column-gap="8"
			@changeList="changeList">
			<!-- 第一列数据 -->
			<template v-slot:list1>
				<!-- 为了磨平部分平台的BUG，必须套一层view -->
				<view>
					<view v-for="(item, index) in list1"
						:key="item.id"
						class="waterfall-item">
						<view class="waterfall-item__image">
							<image :src="item.image" mode="widthFix" :style="{width:item.width+'px'}"></image>
						</view>
						<view class="waterfall-item__ft">
							<view class="waterfall-item__ft__title">
								<text class="value">{{item.title}}</text>
							</view>
							<view class="waterfall-item__ft__desc uv-line-2">
								<text class="value">{{item.desc}}</text>
							</view>
						</view>
					</view>
				</view>
			</template>
			<!-- 第二列数据 -->
			<template v-slot:list2>
				<!-- 为了磨平部分平台的BUG，必须套一层view -->
				<view>
					<view v-for="(item, index) in list2"
						:key="item.id"
						class="waterfall-item">
						<view class="waterfall-item__image">
							<image :src="item.image" mode="widthFix" :style="{width:item.width+'px'}"></image>
						</view>
						<view class="waterfall-item__ft">
							<view class="waterfall-item__ft__title">
								<text class="value">{{item.title}}</text>
							</view>
							<view class="waterfall-item__ft__desc uv-line-2">
								<text class="value">{{item.desc}}</text>
							</view>
						</view>
					</view>
				</view>
			</template>
		</uv-waterfall>
	</view>
</template>
<script>
	import { guid } from '@/uni_modules/uv-ui-tools/libs/function/index.js'
	export default {
		data() {
			return {
				list: [],// 瀑布流全部数据
				list1: [],// 瀑布流第一列数据
				list2: []// 瀑布流第二列数据
			}
		},
		async onLoad() {
			const { data } = await this.getData();
			this.list = data;
		},
		methods: {
			// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e){
				this[e.name].push(e.value);
			},
			// 模拟的后端数据
			getData() {
				return new Promise((resolve)=>{
					const imgs = [
						'https://cdn.uviewui.com/uview/album/1.jpg',
						'https://cdn.uviewui.com/uview/album/2.jpg',
						'https://cdn.uviewui.com/uview/album/3.jpg',
						'https://cdn.uviewui.com/uview/album/4.jpg',
						'https://cdn.uviewui.com/uview/album/5.jpg',
						'https://cdn.uviewui.com/uview/album/6.jpg',
						'https://cdn.uviewui.com/uview/album/7.jpg',
						'https://cdn.uviewui.com/uview/album/8.jpg',
						'https://cdn.uviewui.com/uview/album/9.jpg',
						'https://cdn.uviewui.com/uview/album/10.jpg',
					];
					let list = [];
					const doFn = (i)=>{
						const randomIndex = Math.floor(Math.random() * 10);
						return {
							id: guid(),
							allowEdit: i==0,
							image: imgs[randomIndex],
							title: i % 2 == 0 ? `(${this.list.length + i + 1})体验uv-ui框架`: `(${this.list.length + i +1})uv-ui支持多平台`,
							desc: i % 2 == 0 ? `(${this.list.length + i + 1})欢迎使用uv-ui，uni-app生态专用的UI框架` : 
							`(${this.list.length + i})开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序`
						}
					};
					// 模拟异步
					setTimeout(() => {
						for (let i = 0; i < 20; i++) {
							list.push(doFn(i));
						}
						resolve({data:list});
					}, 200)
				})
			}
		}
	}
</script>
<style>
	page {
		background: #f1f1f1;
	}
</style>
<style scoped lang="scss">
	$show-lines: 1;
	@import '@/uni_modules/uv-ui-tools/libs/css/variable.scss';
	.waterfall-item {
		overflow: hidden;
		margin-top: 10px;
		border-radius: 6px;
	}
	.waterfall-item__ft {
		padding: 20rpx;
		background: #fff;
		&__title {
			margin-bottom: 10rpx;
			line-height: 48rpx;
			font-weight: 700;
			.value {
				font-size: 32rpx;
				color: #303133;
			}
		}
		&__desc .value {
			font-size: 28rpx;
			color: #606266;
		}
		&__btn {
			padding: 10px 0;
		}
	}
</style>