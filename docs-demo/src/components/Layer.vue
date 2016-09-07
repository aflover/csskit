<template>
	<div>
		<button @click="backdrop=!backdrop">layer backdrop</button>
		<div :class="['layer backdrop', backdrop && 'open']" @click="backdrop=!backdrop">
			
		</div>

		<br>
		<br>

		<div class="panel" style=" display: inline-block;   min-width: 30%;">
			<div class="panel-header">
				<div class="panel-title">Panel-Title</div>
			</div>
			<div class="panel-body">
				Panel-body
			</div>
			<div class="panel-footer">
				<button class="btn">取消</button>
				<button class="btn primary">确定</button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function () {
			return {
				backdrop: false,
			}
		}
	}
</script>