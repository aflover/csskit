<template>
	<label :class="['radio', size, theme]">
		<input type="radio" :value="value" @change="$emit('input', $event.target.checked)"/>
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
			value: {
				type: Boolean,
			}
		}
	}
</script>