<template>
	<size-control :prefix="'table-size'" :value.sync="table_size"></size-control>

	<label><input type="checkbox" v-model="table_hover">table-hover</label>
	<label><input type="checkbox" v-model="table_active">table-active</label>
	<label><input type="checkbox" v-model="table_lined">table-lined</label>
	<label><input type="checkbox" v-model="table_bordered">table-bordered</label>
	<label><input type="checkbox" v-model="table_striped">table-striped</label>

	<table 
		class="ak-table {{tableClasses}}"
		>
		<thead>
			<tr>
				<th>Header Cell 1</th>
				<th>Header Cell 2</th>
				<th>Header Cell 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Row Cell 1</td>
				<td>Row Cell 2</td>
				<td>Row Cell 3</td>
			</tr>
			<tr>
				<td>Row Cell 1</td>
				<td>Row Cell 2</td>
				<td>Row Cell 3</td>
			</tr>
			<tr class="active">
				<td>Row Cell 1</td>
				<td>Row Cell 2</td>
				<td>Row Cell 3</td>
			</tr>
			<tr>
				<td>Row Cell 1</td>
				<td>Row Cell 2</td>
				<td>Row Cell 3</td>
			</tr>
		</tbody>
	</table>
	{{ $data | json}}
</template>

<script type="text/javascript">
	import SizeControl from '../controls/SizeControl'
	let classMaps = {
		table_hover: 'table-hover',
		table_active: 'table-active',
		table_lined: 'table-lined',
		table_bordered: 'table-bordered',
		table_striped: 'table-striped',
	};
	let classKeys = Object.keys(classMaps);
	export default {
		data: function () {
			return {
				table_size: '',
				table_hover: false,
				table_active: false,
				table_lined: false,
				table_bordered: false,
				table_striped: false,
			}
		},
		computed:{
			tableClasses: function() {
				var ret =  [this.table_size].concat(classKeys.map(function(it){
					return this[it] ? classMaps[it] : ''
				}.bind(this))).join(' ');
				return ret;
			}
		},
		components: {
			SizeControl : SizeControl
		}
	}
</script>