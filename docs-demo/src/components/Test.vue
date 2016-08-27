<template>
	<div>
		<div>
			<align-control v-model="textAlign"></align-control>
			<size-control 
				:prefix="'tab-size-'" 
				:suffix="''"
				v-model="tab_size"
				></size-control>
			<label><input type="checkbox" v-model="tabTitled"></input>.tab-titled</label>
			<label><input type="checkbox" v-model="tabBordered"></input>.tab-bordered</label>
			<label><input type="checkbox" v-model="tabOffseted"></input>.tab-offseted</label>
			<label><input type="checkbox" v-model="tabFlex"></input>.tab-flex</label>
		</div>
<br>
		<div :class="['tab-inlined', textAlign, tab_size, tabTitled && 'tab-titled', tabBordered && 'tab-bordered', tabOffseted && 'tab-offseted', tabFlex &&'tab-flex', tabFlex && flexAlign]">
			<div :class="['tab-item', (it == current) && 'selected']" v-for="it in tabdata">
				<span class="tab-title" @click="current = it">
					{{it.title}}
				</span><div class="tab-content">
					{{it.content}}
				</div>
			</div>
		</div>
<br>
		<div :class="['tab-nav', textAlign, tab_size, tabTitled && 'tab-titled', tabBordered && 'tab-bordered', tabOffseted && 'tab-offseted', tabFlex &&'tab-flex', tabFlex && flexAlign]">
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
	import FlexControl from '../controls/FlexControl'
	import AlignControl from '../controls/AlignControl'

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
				tabOffseted: false,
				tabFlex: false,
				flexAlign:'',
			};
		},
		created: function () {
			this.current = this.tabdata[0];
		},
		components: {
			SizeControl,
			AlignControl,
			FlexControl,
		}
	}
</script>