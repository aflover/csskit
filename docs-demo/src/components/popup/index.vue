<template>
<div>
	<div id="button-wrapper" @click="clicked=!clicked" :class="[clicked&&'clicked', clicked&&success&&'success']">
	  <button>
	      <p>Upload Something</p>
	      <div class="fill"></div>
	      <div class="fa fa-check"></div>
	  </button>
	</div>
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
</div>
</template>

<script type="text/javascript">
	export default {
		data : function () {
			return {
				open: false,
				clicked: false,
				success: false,
			}
		},
		watch:{
			clicked: function (clicked) {
				// http://codepen.io/balapa/pen/VYVedm
				if (clicked) {
					this.success = false;
					setTimeout(function () {
						if (this.clicked) {
							this.success = true
						}
						console.log(JSON.stringify(this.$data))
					}.bind(this), 2600);
				}
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



#button-wrapper > button:focus {
    outline: none;
}

#button-wrapper > button:hover {
    background: #9b59b6;
}

#button-wrapper {
    width: 450px;
    text-align: center;
    padding: 0 100px;
    box-sizing: border-box;
    -webkit-transition: .3s all ease .3s;
    transition: .3s all ease .3s;

    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    height: 50px;
}

#button-wrapper > button {
    width: 100%;
    background: #8e44ad;
    border: none;
    border-radius: 50px;
    padding: 5px 0;
    cursor: pointer;
    -webkit-transition: .3s all ease;
    transition: .3s all ease;
    position: relative;
}

#button-wrapper > button p {
    color: white;
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
    max-height: 40px;
    -webkit-transition: .3s all ease;
    transition: .3s all ease;
}

#button-wrapper > button .fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 0%;
    background: #8e44ad;
    border-radius: 50px;
}

#button-wrapper > button .fa {
    font-size: 25px;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 50px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
}

#button-wrapper.clicked {
    padding: 0;
}

#button-wrapper.clicked button {
    background: #ccc;
    margin-top: 25px;
}

#button-wrapper.clicked button p {
    max-height: 0;
    overflow: hidden
}

#button-wrapper.clicked button .fill {
    width: 100%;
    -webkit-transition: .3s all ease .3s;
    transition: 2s all ease .6s;
    height: 50px;
}

#button-wrapper.success button {
    margin: 0;
    padding: 25px;
    width: 50px;
    height: 50px;
}

#button-wrapper.success button .fa {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s all ease .3s;
    transition: .3s all ease .3s;
}

</style>