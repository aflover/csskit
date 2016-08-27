<template>
	<label>
		<span>文本对齐</span>
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
		name:'align-control',
		props: ['val'],
		data: function () {
			return {
				opts: {
					'': '无',
					'text-left': '左对齐',
					'text-center': '居中对齐',
					'text-right': '右对齐',
				},
			};
		}
	}
</script>