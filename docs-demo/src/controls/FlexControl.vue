<template>
	<label>
		<span>flex 对齐</span>
		<select 
			:value="flex"
			@change="$emit('input', $event.target.value)"
			>
			<option v-for="(opt, id) in flexAligns" :value="id" >{{opt}} {{id}}</option>
		</select>
	</label>
</template>

<script type="text/javascript">
	export default {
		name:'flex-control',
		props: ['flex'],
		data: function () {
			return {
				flexAligns: {
					'': 'flex对齐',
					'flex-start': '左对齐',
					'flex-center': '居中对齐',
					'flex-end': '右对齐',
					'flex-space-between': '平铺 中间补空',
					'flex-space-around': '平铺 元素居中',
				},
			};
		}
	}
</script>