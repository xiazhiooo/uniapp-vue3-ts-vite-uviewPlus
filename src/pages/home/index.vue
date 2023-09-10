<template>
  <view class="card pd30">
  	uview-plus组件库
  </view>
  <view style="padding: 20px;">
  		<up-button type="primary" text="确定"></up-button>
  		<up-button type="primary" :plain="true" text="镂空"></up-button>
  		<up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
  		<up-button type="primary" :disabled="true" text="禁用"></up-button>
  		<up-button type="primary" loading loadingText="加载中"></up-button>
  		<up-button type="primary" icon="map" text="图标按钮"></up-button>
  		<up-button type="primary" shape="circle" text="按钮形状"></up-button>
  		<up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></up-button>
  		<up-button type="primary" size="small" text="大小尺寸"></up-button>
  	</view>
	<u-button @click="show = true">打开</u-button>
	 <u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"></u-picker>
</template>

<script lang="ts" setup>
	
	const show = ref(false);
	const columns = reactive([
	  ['中国', '美国'],
	  ['深圳', '厦门', '上海', '拉萨']
	]);
	const columnData = reactive([
	  ['深圳', '厦门', '上海', '拉萨'],
	  ['得州', '华盛顿', '纽约', '阿拉斯加']
	]);
	
	const changeHandler = (e) => {
	  const {
	    columnIndex,
	    value,
	    values,
	    index,
	    picker
	  } = e;
	
	  if (columnIndex === 0) {
	    picker.setColumnValues(1, columnData[index]);
	  }
	};
	
	const confirm = (e) => {
	  console.log('confirm', e);
	  show.value = false;
	};
</script>

<style lang="scss">

</style>