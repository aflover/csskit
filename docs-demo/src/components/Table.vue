<template>
<div>
	<div>
		<size-control 
			:prefix="'table-size-'" 
			:suffix="''"
			v-model="table_size"
			></size-control>
	</div>
	<br>
	<table 
		:class="['table',table_size]"
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
			<tr class="selected">
				<td>tr.selected</td>
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
</div>
</template>

<script type="text/javascript">
	import SizeControl from '../controls/SizeControl'
	export default {
		data: function () {
			return {
				table_size: '',
			}
		},
		components: {
			SizeControl : SizeControl
		}
	}
</script>