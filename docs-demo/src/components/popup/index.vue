<template>
	<label>
		<input type="checkbox" v-model="open"></input>弹出
	</label>
	<div :class="['popup', open && 'open']">
		<ul>
			<li>hello</li>
			<li>word</li>
			<li>mmx</li>
			<li>bbx</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data : function () {
			return {
				open: false
			}
		}
	}
</script>

<style type="text/css">
	.popup {
		position: relative;
	}
	.popup > ul {
		background-color: gray;
		width: 300px;
		position: absolute;
		margin: 0;

		transform-origin: top right;
		transition: all 0.15s;
		transform: scale(0.95);
		opacity: 0;
		visibility: hidden;
	}

	.popup.open > ul {
		opacity: 1;
		visibility: visible;
		transform: scale(1);
	}

</style>