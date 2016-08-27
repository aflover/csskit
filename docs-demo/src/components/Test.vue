<template>
	<div>
		<div>
			<select v-model="textAlign">
				<option value="">对齐方式</option>
				<option value="text-left">text-left</option>
				<option value="text-center">text-center</option>
				<option value="text-right">text-right</option>
			</select>
			<size-control 
				:prefix="'tab-size-'" 
				:suffix="''"
				v-model="tab_size"
				></size-control>
		</div>
<br>
		<div :class="['tab-inlined', textAlign, tab_size, tabTitled && 'tab-titled', tabBordered && 'tab-bordered', tabOffseted && 'tab-offseted']">
			<div :class="['tab-item', (it == current) && 'selected']" v-for="it in tabdata">
				<span class="tab-title" @click="current = it">
					{{it.title}}
				</span><div class="tab-content">
					{{it.content}}
				</div>
			</div>
		</div>
<br>
		<div :class="['tab-nav', textAlign, tab_size, tabTitled && 'tab-titled', tabBordered && 'tab-bordered', tabOffseted && 'tab-offseted']">
			<div :class="['tab-title', (it == current) && 'selected']" v-for="it in tabdata"  @click="current = it">
				{{it.title}}
			</div>
		</div>
		<div :class="['tab-container']">
			<div :class="['tab-content', (it == current) && 'selected']" v-for="it in tabdata">
				{{it.content}}
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	.tab-content {
		min-height: 100px;
	}
</style>

<script type="text/javascript">
	import { makeArray } from './help'
	import SizeControl from '../controls/SizeControl'

	export default {
		data: function () {
			return {
				tabdata: makeArray(5, {
					selected: false,
					title: 'tab-title',
					content: 'tab-content',
				}),
				current: null,
				textAlign: '',
				tab_size: '',
				tabTitled: true,
				tabBordered: true,
				tabOffseted: true,
			};
		},
		created: function () {
			this.current = this.tabdata[0];
		},
		components: {
			SizeControl : SizeControl
		}
	}
</script>