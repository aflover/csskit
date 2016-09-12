<template>
	<div>
		<radio name="m1" :value="new Boolean(false)" @change="updateRadio">Radio Demo</radio>--{{radioValue}}
		<radio name="m1" :value="1" @change="updateRadio">Radio Demo</radio>--{{radioValue}}

		<radio-group :options="options" @change="updateRadio">
			
		</radio-group>
	</div>
</template>

<script type="text/javascript">
	import Radio from '../../components/Radio'
	import RadioGroup from '../../components/RadioGroup'

	export default {
		data: function () {
			return {
				radioValue: '',
				options: [
					{text:'opt1', value:'val1', },
					{text:'opt2', value:'val2', hidden: true},
					{text:'opt3', value:'val3', disabled: false},
				]
			};
		},
		methods: {
			updateRadio: function (newVal) {
				this.radioValue = newVal;
				console.log('changed', typeof newVal, newVal);
			}
		},
		components: {
			Radio,
			RadioGroup
		}
	}

</script>