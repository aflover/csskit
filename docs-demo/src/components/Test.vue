<template>
	<div class="tab-inlined">
		<div :class="['tab-item', (it == current) && 'selected']" v-for="it in tabdata">
			<span class="tab-title" @click="current = it">{{it.title}}</span>
			<div class="tab-content">{{it.content}}</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import makeArray from './help'

	export default {
		data: function () {
			return {
				tabdata: makeArray(5, {
					selected: false,
					title: 'tab-title',
					content: 'tab-content',
				}),
				current: null,
			};
		}
	}
</script>