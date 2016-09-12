<template>
	<label :class="['radio', size, theme]">
		<input type="radio" :value="value" @change="$emit('change', $event.target.value)" :name="name"/>
		<span class="radio-text"><slot></slot></span>
	</label>
</template>

<script type="text/javascript">
	export default {
		props:{
			size: {
				type: String,
				default: '',
			},
			theme: {
				type: String,
				default: '',
			},
			value: {},
			name: {
				type: String,
				default: '',
			},
		}
	}
</script>