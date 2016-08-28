<template>
	<label>
		<span>颜色主题</span>
		<select 
			:value="val"
			@change="$emit('input', $event.target.value)"
			>
			<option v-for="(opt, id) in opts" :value="id" >{{opt}} {{id}}</option>
		</select>
	</label>
</template>

<script type="text/javascript">
	export default {
		name:'icon-control',
		props: ['val'],
		data: function () {
			return {
				opts: {
					'': '无',
					'primary': '主色调',
					'info': '信息',
					'warn': '警告',
					'success': '成功',
					'error': '错误',
				},
			};
		}
	}
</script>