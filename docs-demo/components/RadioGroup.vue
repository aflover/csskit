<template>
	<div :class="[]">
		<label
			v-for="(opt, index) in options" 
			v-if="!opt[hiddenField]"
			:class="['radio', size, theme]" 
			>
			<input type="radio" :value="index" @input="$emit('change', index)" :name="name" :disabled="opt[disabledField]"/>
			<span class="radio-text">{{opt[textField]}}</span>
		</label>
	</div>
</template>

<script type="text/javascript">
	import Radio from './Radio'
	let index = 0;
	function getName() {
		return 'uuid-' + index++;
	}
	export default {
		props: {
			size: {
				type: String,
				default: '',
			},
			theme: {
				type: String,
				default: '',
			},
			options: {
				type: Array,
				default: {},
			},
			textField: {
				type: String,
				default: 'text'
			},
			valueField: {
				type: String,
				default: 'value'
			},
			hiddenField: {
				type: String,
				default:'hidden'
			},
			disabledField: {
				type: String,
				default: 'disabled'
			},
		},
		data: function () {
			return {
				name: getName(),
			}
		}
	}
</script>