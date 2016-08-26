<template>
<div>
	<hr>
		<size-control :prefix="'group-size-'" :value.sync="tableSize" :val="''"></size-control>
	<hr>

	<ul :class="['group-col', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span>Home</span><span class="ak-inline-icon pt-home float-right"></span>
		</li>
		<li class="group-item active">
			<span>Photo</span><span class="ak-inline-icon pt-picture float-right"></span>
		</li>
		<li class="group-item" >
			<span>Download</span><span class="ak-inline-icon pt-download float-right"></span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span>Document</span><span class="ak-inline-icon pt-folder float-right"></span>
		</li>
		<li class="group-item" >
			<span>Application</span><span class="ak-inline-icon pt-window float-right"></span>
		</li>
		<li class="group-item" >
			<span>AirDrop</span><span class="ak-inline-icon pt-signal float-right"></span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item">
			<span>Desktop</span><span class="ak-inline-icon pt-monitor float-right"></span>
		</li>
	</ul>

	<ul :class="['group-col', 'ak-nav-group', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span class="ak-inline-icon pt-home"></span><span>Home</span>
		</li>
		<li class="group-item active">
			<span class="ak-inline-icon pt-picture"></span><span>Photo</span>
		</li>
		<li class="group-item" >
			<span class="ak-inline-icon pt-download"></span><span>Download</span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span class="ak-inline-icon pt-folder"></span><span>Document</span>
		</li>
		<li class="group-item" >
			<span class="ak-inline-icon pt-window"></span><span>Application</span>
		</li>
		<li class="group-item" >
			<span class="ak-inline-icon pt-signal"></span><span>AirDrop</span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item" >
			<span class="ak-inline-icon pt-monitor"></span><span>Desktop</span>
		</li>
	</ul>


	<ul :class="['group-col', 'ak-menu-group', tableSize]">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<span>Home</span><span class="ak-inline-icon pt-home float-right"></span>
		</li>
		<li class="group-item active">
			<span>Photo</span><span class="ak-inline-icon pt-picture float-right"></span>
		</li>
		<li class="group-item" >
			<span>Download</span><span class="ak-inline-icon pt-download float-right"></span>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<span>Document</span><span class="ak-inline-icon pt-folder float-right"></span>
		</li>
		<li class="group-item" >
			<span>Application</span><span class="ak-inline-icon pt-window float-right"></span>
		</li>
		<li class="group-item" >
			<span>AirDrop</span><span class="ak-inline-icon pt-signal float-right"></span>
		</li>
		<span class="group-divider"></span>
		<li class="group-item">
			<span>Desktop</span><span class="ak-inline-icon pt-monitor float-right"></span>
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