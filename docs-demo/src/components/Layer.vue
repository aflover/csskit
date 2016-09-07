<template>
	<div>
	
		<div>
			<flex-control v-model="flexAlign"></flex-control>
			<label><input type="checkbox" v-model="noHeader"></input>no header</label>
			<label><input type="checkbox" v-model="noFooter"></input>no footer</label>
			<label><input type="checkbox" v-model="noBorder"></input>no border</label>
		</div>

		<button @click="backdrop=!backdrop">layer backdrop</button>
		<div :class="['layer backdrop', backdrop && 'open']" @click="backdrop=!backdrop">
			
		</div>

		<br>
		<br>

		<div :class="['panel', noBorder && 'no-border']" style=" display: inline-block;   min-width: 30%;">
			<div class="panel-header" v-show="!noHeader">
				<div class="panel-title">Panel-Title</div>
			</div>
			<div class="panel-body">
				Panel-body
			</div>
			<div :class="['panel-footer', flexAlign]" v-show="!noFooter">
				<button class="btn">取消</button>
				<button class="btn primary">确定</button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import FlexControl from '../controls/FlexControl'
	export default {
		data: function () {
			return {
				backdrop: false,
				flexAlign: '',
				noHeader: false,
				noFooter: false,
				noBorder: false,
			}
		},
		components: {
			FlexControl,
		}
	}
</script>