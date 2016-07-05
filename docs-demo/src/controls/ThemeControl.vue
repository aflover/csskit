<template>
	<label>
		<span>风格</span>
		<select v-model="val" >
			<option value="">无</option>
			<optgroup label="flat">
				<option value="flat-default">flat-default</option>
				<option value="flat-primary">flat-primary</option>
				<option value="flat-secondary">flat-secondary</option>
				<option value="flat-info">flat-info</option>
				<option value="flat-danger">flat-danger</option>
			</optgroup>
			<optgroup label="outline">
				<option value="outline-default">outline-default</option>
				<option value="outline-primary">outline-primary</option>
				<option value="outline-secondary">outline-secondary</option>
				<option value="outline-info">outline-info</option>
				<option value="outline-danger">outline-danger</option>
			</optgroup>
		</select>
	</label>
</template>

<script type="text/javascript">
	export default {
		props: ['prefix', 'value'],
		data: function () {
			return {
				val:''
			};
		},
		watch:{
			'val': function() {
				// console.log(this.val, ':', this.prefix, ':', this.value);
				this.value = !this.val ? '' : (this.prefix + this.val)
			}
		}
	}
</script>