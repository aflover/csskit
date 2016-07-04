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
	<hr>
	浮动格子
	<hr>
	<div class="grid-row grid-demo"
		v-for="x in gridSize"
		>
		<div class="grid-col-{{x+1}}">col-{{x+1}}</div>
		<div class="grid-col-{{gridSize-x-1}}" v-if="x!=gridSize-1">col-{{gridSize-x-1}}</div>
	</div>

	<hr>
	偏移
	<hr>
	<div class="grid-row grid-demo"
		v-for="x in gridSize-1"
		>
		<div class="grid-offset-{{x+1}} grid-col-{{gridSize-x-1}} " v-if="x!=gridSize-1">offset-{{x+1}}</div>
	</div>

	<hr>
	反序排列，掣肘明显
	<hr>
	<div class="grid-row grid-demo"
		v-for="x in gridSize-1"
		>
		<div class="grid-col-{{gridSize-x-1}} grid-push-{{x+1}} " v-if="x!=gridSize-1">push-{{x+1}}</div>
		<div class="grid-col-{{x+1}} grid-pull-{{gridSize-x-1}} ">pull-{{gridSize-x-1}}</div>
	</div>

	<hr>
	<label>
		<span>flex 对齐</span>
		<select v-model='flex'>
			<option v-for="opt in flexAligns" value="{{$key}}">{{opt}}</option>
		</select>
	</label>

	<hr>
	<div class="grid-row-flex grid-demo {{flex}}"
		v-for="i in 1"
		>
		<div class="grid-col-{{gridSize/6}}" v-for="x in 4">flex-{{gridSize/6}}</div>
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