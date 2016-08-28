<style lang="scss" >
	.grid-demo {
		[class*="grid-col-"] {
			background-color: #C9DAE8;
			border-radius: 24px;
		}
		&.grid-row,
		&.grid-row-flex,
		{
			margin-bottom: 2px;
		}
	}
</style>
<template>
<div>
	<hr>
	浮动格子
	<hr>
	<div class="grid-row grid-demo"
		v-for="x in gridSize"
		>
		<div :class="['grid-col-'+(x)]">col-{{x}}</div>
		<div :class="['grid-col-'+(gridSize-x)]" v-if="x!=gridSize">col-{{gridSize-x}}</div>
	</div>

	<hr>
	偏移
	<hr>
	<div class="grid-row grid-demo"
		v-for="x in gridSize-1"
		>
		<div :class="['grid-offset-'+(x), 'grid-col-'+(gridSize-x)]" v-if="x!=gridSize">offset-{{x}}</div>
	</div>
 
	<hr>
	<label>
		<span>flex 对齐</span>
		<select v-model='flex'>
			<option v-for="(opt, id) in flexAligns" :value="id" >{{opt}} {{id}}</option>
		</select>
	</label>

	<hr>
	<div :class="['grid-row-flex','grid-demo',flex]"
		v-for="i in 1"
		>
		<div :class="['grid-col-'+(gridSize/6)]" v-for="x in 4">flex-{{gridSize/6}}</div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default {
		data: function () {
			return {
				gridSize: 12,
				flexAligns: {
					'flex-start': '左对齐',
					'flex-center': '居中对齐',
					'flex-end': '右对齐',
					'flex-space-between': '平铺 中间补空',
					'flex-space-around': '平铺 元素居中',
				},
				flex: 'flex-start',
			};
		}
	}
</script>