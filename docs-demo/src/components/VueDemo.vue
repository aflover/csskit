<template>
	<div>
		<radio v-model="radioValue" >Radio Demo</radio>{{radioValue}}
	</div>
</template>

<script type="text/javascript">
	import Radio from '../../components/Radio';

	export default {
		data: function () {
			return {
				radioValue: false,
			};
		},
		method: {
			change: function (newVal) {
				console.log('changed', newVal);
			}
		},
		components: {
			Radio
		}
	}

</script>