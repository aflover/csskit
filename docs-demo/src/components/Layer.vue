<template>
	<div>
	
		<div>
			<flex-control v-model="flexAlign"></flex-control>
			<label><input type="checkbox" v-model="noHeader"></input>no header</label>
			<label><input type="checkbox" v-model="noFooter"></input>no footer</label>
		</div>

		<button @click="backdrop=!backdrop">layer backdrop</button>
		<br>
		<br>
		<div :class="['panel']" style="width:300px">
			<button class="btn btn-dismiss">
				<i class="icon-inline icon-close"></i>
			</button>
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
		<div :class="['layer backdrop', backdrop && 'open']" @click.self="backdrop=false">
			<div :class="['panel']" style="min-width:300px">
				<button class="btn btn-dismiss" @click="backdrop=false">
					<i class="icon-inline icon-close"></i>
				</button>
				<div class="panel-header" v-show="!noHeader">
					<div class="panel-title">Panel-Title</div>
				</div>
				<div class="panel-body">
					Panel-body
				</div>
				<div :class="['panel-footer', flexAlign]" v-show="!noFooter">
					<button class="btn" @click="backdrop=false">取消</button>
					<button class="btn primary" @click="backdrop=false">确定</button>
				</div>
			</div>
		</div>

		<br>
		<br>

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
			}
		},
		components: {
			FlexControl,
		}
	}
</script>