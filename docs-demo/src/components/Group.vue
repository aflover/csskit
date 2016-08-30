<template>
<div>
	<hr>
		<size-control
			:prefix="'group-size-'" 
			:suffix="''"
			v-model="tableSize"></size-control>
	<hr>

	<ul :class="['group-col', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span class="icon-inline pt-home"></span><span>Home</span>
		</li>
		<li class="group-item active">
			<span class="icon-inline pt-picture"></span><span>Photo</span>
		</li>
		<li class="group-item" >
			<span class="icon-inline pt-download"></span><span>Download</span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span class="icon-inline pt-folder"></span><span>Document</span>
		</li>
		<li class="group-item disabled" >
			<span class="icon-inline pt-window"></span><span>Application</span>
		</li>
		<li class="group-item" >
			<span class="icon-inline pt-signal"></span><span>AirDrop</span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item">
			<span class="icon-inline pt-monitor"></span><span>Desktop</span>
		</li>
	</ul>

	<ul :class="['group-col', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span>Home</span><span class="icon-inline pt-home float-right"></span>
		</li>
		<li class="group-item active">
			<span>Photo</span><span class="icon-inline pt-picture float-right"></span>
		</li>
		<li class="group-item" >
			<span>Download</span><span class="icon-inline pt-download float-right"></span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span>Document</span><span class="icon-inline pt-folder float-right"></span>
		</li>
		<li class="group-item disabled" >
			<span>Application</span><span class="icon-inline pt-window float-right"></span>
		</li>
		<li class="group-item" >
			<span>AirDrop</span><span class="icon-inline pt-signal float-right"></span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item">
			<span>Desktop</span><span class="icon-inline pt-monitor float-right"></span>
		</li>
	</ul>

	<ul :class="['group-col', 'ak-nav-group', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span class="icon-inline pt-home"></span><span>Home</span>
		</li>
		<li class="group-item active">
			<span class="icon-inline pt-picture"></span><span>Photo</span>
		</li>
		<li class="group-item" >
			<span class="icon-inline pt-download"></span><span>Download</span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span class="icon-inline pt-folder"></span><span>Document</span>
		</li>
		<li class="group-item disabled" >
			<span class="icon-inline pt-window"></span><span>Application</span>
		</li>
		<li class="group-item" >
			<span class="icon-inline pt-signal"></span><span>AirDrop</span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item" >
			<span class="icon-inline pt-monitor"></span><span>Desktop</span>
		</li>
	</ul>

	<ul :class="['group-col', 'menu-group', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span>Home</span><span class="icon-inline pt-home float-right"></span>
		</li>
		<li class="group-item active">
			<span>Photo</span><span class="icon-inline pt-picture float-right"></span>
		</li>
		<li class="group-item" >
			<span>Download</span><span class="icon-inline pt-download float-right"></span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span>Document</span><span class="icon-inline pt-folder float-right"></span>
		</li>
		<li class="group-item disabled has-sub" >
			<span>Application</span><span class="icon-inline pt-window float-right"></span>
			<ul :class="['group-col', 'menu-group', tableSize]">
				<li class="group-item" >
					<span>选项1</span>
				</li>
				<li class="group-item">
					<span>选项2</span>
				</li>
			</ul>
		</li>
		<li class="group-item" >
			<span>AirDrop</span><span class="icon-inline pt-signal float-right"></span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item has-sub">
			<span>Desktop</span><span class="icon-inline pt-monitor float-right"></span>
			<ul :class="['group-col', 'menu-group', tableSize]">
				<li class="group-item" >
					<span>选项1</span>
				</li>
				<li class="group-item">
					<span>选项2</span>
				</li>
			</ul>
		</li>
	</ul>



	</div>
</template>
<script type="text/javascript">
	import SizeControl from '../controls/SizeControl'

	export default {
		data: function () {
			return {
				tableSize: '',
			};
		},
		components: {
			SizeControl : SizeControl
		}
	}
</script>