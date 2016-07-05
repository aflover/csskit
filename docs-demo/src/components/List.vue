<template>
	<hr>
		<theme-control :prefix="'group-'" :value.sync="groupStyle"></theme-control>
		<size-control :prefix="'group-size-'" :value.sync="tableSize"></size-control>
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
		<div class="nav-group-title">Favorites</div>
		<a  class="group-item" href='javascript:null'>
			<span class="ak-inline-icon pt-home"></span><span>Home</span>
		</a>
		<a  class="group-item active" href='javascript:null'>
			<span class="ak-inline-icon pt-picture"></span><span>Photo</span>
		</a>
		<a  class="group-item" href='javascript:null'>
			<span class="ak-inline-icon pt-download"></span><span>Download</span>
		</a>
		<a  class="group-item" href='javascript:null'>
			<span class="ak-inline-icon pt-folder"></span><span>Document</span>
		</a>
		<a  class="group-item" href='javascript:null'>
			<span class="ak-inline-icon pt-window"></span><span>Application</span>
		</a>
		<a  class="group-item" href='javascript:null'>
			<span class="ak-inline-icon pt-signal"></span><span>AirDrop</span>
		</a>
		<a  class="group-item" href='javascript:null'>
			<span class="ak-inline-icon pt-monitor"></span><span>Desktop</span>
		</a>
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