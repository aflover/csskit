<template>
	<hr>
		<theme-control :prefix="'group-'" :value.sync="groupStyle"></theme-control>
		<size-control :prefix="'group-size-'" :value.sync="tableSize" :val="'dd'"></size-control>
	<hr>
	<ul class="group-col {{groupStyle}} {{tableSize}}">
		<li class="group-item">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-home"></span><span>Home</span>
			</a>
		</li>
		<li class="group-item active">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-picture"></span><span>Photo</span>
			</a>
		</li>
		<li class="group-item">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-download"></span><span>Download</span>
			</a>
		</li>
		<li class="group-item">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-folder"></span><span>Document</span>
			</a>
		</li>
		<li class="group-item">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-window"></span><span>Application</span>
			</a>
		</li>
		<li class="group-item">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-signal"></span><span>AirDrop</span>
			</a>
		</li>
		<li class="group-item">
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-monitor"></span><span>Desktop</span>
			</a>
		</li>
	</ul>

	<ul class="group-col ak-nav-group {{tableSize}}">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-home"></span><span>Home</span>
			</a>
		</li>
		<li class="group-item active">
			<a  href='javascript:null'>
				<span class="ak-inline-icon pt-picture"></span><span>Photo</span>
			</a>
		</li>
		<li class="group-item" >
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-download"></span><span>Download</span>
			</a>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-folder"></span><span>Document</span>
			</a>
		</li>
		<li class="group-item" >
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-window"></span><span>Application</span>
			</a>
		</li>
		<li class="group-item" >
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-signal"></span><span>AirDrop</span>
			</a>
		</li>
		<span class="group-divider"></span>
		<li class="group-item" >
			<a href='javascript:null'>
				<span class="ak-inline-icon pt-monitor"></span><span>Desktop</span>
			</a>
		</li>
	</ul>


	<ul class="group-col ak-menu-group {{tableSize}}">
		<span class="group-title">Favorites</span>
		<li class="group-item" >
			<a href='javascript:null'>
				<span>Home</span><span class="ak-inline-icon pt-home float-right"></span>
			</a>
		</li>
		<li class="group-item active">
			<a  href='javascript:null'>
				<span>Photo</span><span class="ak-inline-icon pt-picture float-right"></span>
			</a>
		</li>
		<li class="group-item" >
			<a href='javascript:null'>
				<span>Download</span><span class="ak-inline-icon pt-download float-right"></span>
			</a>
		</li>
		<span class="group-title">Others</span>
		<li class="group-item" >
			<a href='javascript:null'>
				<span>Document</span><span class="ak-inline-icon pt-folder float-right"></span>
			</a>
		</li>
		<li class="group-item" >
			<a href='javascript:null'>
				<span>Application</span><span class="ak-inline-icon pt-window float-right"></span>
			</a>
		</li>
		<li class="group-item" >
			<a href='javascript:null'>
				<span>AirDrop</span><span class="ak-inline-icon pt-signal float-right"></span>
			</a>
		</li>
		<span class="group-divider"></span>
		<li class="group-item">
			<a  href='javascript:null'>
				<span>Desktop</span><span class="ak-inline-icon pt-monitor float-right"></span>
			</a>
		</li>
	</ul>

</template>
<script type="text/javascript">
	import ThemeControl from '../controls/ThemeControl'
	import SizeControl from '../controls/SizeControl'

	export default {
		data: function () {
			return {
				tableSize: '',
				groupStyle: '',
			};
		},
		components: {
			ThemeControl : ThemeControl ,
			SizeControl : SizeControl
		}
	}
</script>