<template>
	<label>
		<span>大小</span>
		<select 
			:value="suffix"
			@change='updateVal'
			>
			<option value="">无</option>
			<optgroup label="小尺寸">
				<option value="ss">ss</option>
				<option value="sd">sd</option>
				<option value="sl">sl</option>			
			</optgroup>
			<optgroup label="中尺寸">
				<option value="ds">ds</option>
				<option value="dd">dd</option>
				<option value="dl">dl</option>			
			</optgroup>
			<optgroup label="大尺寸">
				<option value="ls">ls</option>
				<option value="ld">ld</option>
				<option value="ll">ll</option>
			</optgroup>
		</select>
	</label>
</template>

<script type="text/javascript">
	export default {
		name:'size-control',
		props: {
			prefix: {
				type:String
			},
			suffix: {
		      type: String,
			},
		},
		methods: {
			updateVal(e) {
				var newVal = e.target.value;
				this.$emit('input', this.prefix + newVal)
			}
		},
	}
</script>