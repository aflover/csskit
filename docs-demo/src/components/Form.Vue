<template>
	<div>
		<div>
			<size-control 
				:prefix="'size-'" 
				:suffix="''"
				v-model="size"
				></size-control>
			<label><input type="checkbox" v-model="tick"/>按下移动</label>
		</div>
<br>
	<label :class="['radio', size]"><input type="radio" name="group1" ><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size]"><input type="radio" name="group1" ><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size]"><input type="radio" name="group1"  disabled><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size]"><input type="radio" name="group1"  checked disabled><span class="radio-text">Radio Demo</span></label>
<br>
<br>
	<label :class="['check', size]"><input type="checkbox" name="group1" ><span class="check-text">Check Demo</span></label>
	<label :class="['check', size]"><input type="checkbox" name="group1" ><span class="check-text">Check Demo</span></label>
	<label :class="['check', size]"><input type="checkbox" name="group1"  disabled><span class="check-text">Check Demo</span></label>
	<label :class="['check', size]"><input type="checkbox" name="group1"  checked disabled><span class="check-text">Check Demo</span></label>
<br>
<br>
	<input :class="['input', size]" type="text" placeholder="default" />
	<input :class="['input', size]" type="text" disabled value="disabled" />
<br>
<br>
	<input :class="['input','primary', size]" type="text" placeholder="primary" />
	<input :class="['input','access', size]" type="text" placeholder="access" />
	<input :class="['input','required', size]" type="text" placeholder="required" />
	<input :class="['input','success', size]" type="text" placeholder="success" />
	<input :class="['input','error', size]" type="text" placeholder="error" />
<br>
<br>
	<input :class="['input','primary', size]" type="text" placeholder="primary" disabled />
	<input :class="['input','access', size]" type="text" placeholder="access" disabled />
	<input :class="['input','required', size]" type="text" placeholder="required" disabled />
	<input :class="['input','success', size]" type="text" placeholder="success" disabled />
	<input :class="['input','error', size]" type="text" placeholder="error" disabled />
<br>
<br>
	<button :class="['btn', size, tick && 'meta-tick']" >Default Button</button>
	<button :class="['btn', size, tick && 'meta-tick']"  disabled>Default Button</button>
<br>
<br>
	<button :class="['btn','primary', size, tick && 'meta-tick']" type="text" >primary</button>
	<button :class="['btn','info', size, tick && 'meta-tick']" type="text" >info</button>
	<button :class="['btn','warn', size, tick && 'meta-tick']" type="text" >warn</button>
	<button :class="['btn','success', size, tick && 'meta-tick']" type="text" >success</button>
	<button :class="['btn','error', size, tick && 'meta-tick']" type="text" >error</button>
<br>
<br>
	<button :class="['btn','primary', size, tick && 'meta-tick']" type="text" disabled >primary</button>
	<button :class="['btn','info', size, tick && 'meta-tick']" type="text" disabled >info</button>
	<button :class="['btn','warn', size, tick && 'meta-tick']" type="text" disabled >warn</button>
	<button :class="['btn','success', size, tick && 'meta-tick']" type="text" disabled >success</button>
	<button :class="['btn','error', size, tick && 'meta-tick']" type="text" disabled >error</button>



</div>
</template>

<script type="text/javascript">
	import SizeControl from '../controls/SizeControl'
	export default {
		data: function () {
			return {
				size: '',
				tick: true,
			};
		},
		components: {
			SizeControl,
		}
	}
</script>