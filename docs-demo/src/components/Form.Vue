<template>
	<div>
		<div>
			<size-control 
				:prefix="'size-'" 
				:suffix="''"
				v-model="size"
				></size-control>
			<label><input type="checkbox" v-model="tick"/>按下移动</label>
			图标 <color-control v-model="colorTheme"></color-control>
		</div>
<br>
	<label :class="['radio', size, colorTheme]"><input type="radio" name="group1" checked><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size, colorTheme]"><input type="radio" name="group1" ><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size, colorTheme]"><input type="radio" name="group2"  disabled><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size, colorTheme]"><input type="radio" name="group2"  checked disabled><span class="radio-text">Radio Demo</span></label>
<br>
<br>
	<label :class="['check', size, colorTheme]"><input type="checkbox"><span class="check-text">Check Demo</span></label>
	<label :class="['check', size, colorTheme]"><input type="checkbox" checked><span class="check-text">Check Demo</span></label>
	<label :class="['check', size, colorTheme]"><input type="checkbox" disabled><span class="check-text">Check Demo</span></label>
	<label :class="['check', size, colorTheme]"><input type="checkbox" checked disabled><span class="check-text">Check Demo</span></label>
<br>
<br>
	<input :class="['input', size]" type="text" placeholder="default" />
	<input :class="['input', size]" type="text" disabled value="disabled" />
<br>
<br>
	<input :class="['input','primary', size]" type="text" placeholder="primary" />
	<input :class="['input','secondary', size]" type="text" placeholder="secondary" />
	<input :class="['input','warn', size]" type="text" placeholder="warn" />
	<input :class="['input','success', size]" type="text" placeholder="success" />
	<input :class="['input','error', size]" type="text" placeholder="error" />
<br>
<br>
	<input :class="['input','primary', size]" type="text" placeholder="primary" disabled />
	<input :class="['input','secondary', size]" type="text" placeholder="secondary" disabled />
	<input :class="['input','warn', size]" type="text" placeholder="warn" disabled />
	<input :class="['input','success', size]" type="text" placeholder="success" disabled />
	<input :class="['input','error', size]" type="text" placeholder="error" disabled />

<br>
<br>
	<label :class="['label','primary', size]" >primary</label>
	<label :class="['label','secondary', size]" >secondary</label>
	<label :class="['label','warn', size]" >warn</label>
	<label :class="['label','success', size]" >success</label>
	<label :class="['label','error', size]" >error</label>
<br>
<br>
	<select :class="['select', size]" value= "2">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select', size]" disabled value="3">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
<br>
<br>
	<select :class="['select primary ', size]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select secondary ', size]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select warn ', size]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select success ', size]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select error ', size]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
<br>
<br>
	<button :class="['btn', size, tick && 'meta-tick']" >Default Button</button>
	<button :class="['btn', size, tick && 'meta-tick']"  disabled>Default Button</button>

	<button :class="['btn','primary', size, tick && 'meta-tick']" >primary</button>
	<button :class="['btn','secondary', size, tick && 'meta-tick']" >secondary</button>
	<button :class="['btn','warn', size, tick && 'meta-tick']" >warn</button>
	<button :class="['btn','success', size, tick && 'meta-tick']" >success</button>
	<button :class="['btn','error', size, tick && 'meta-tick']" >error</button>

	<button :class="['btn','primary', size, tick && 'meta-tick']" disabled >primary</button>
	<button :class="['btn','secondary', size, tick && 'meta-tick']" disabled >secondary</button>
	<button :class="['btn','warn', size, tick && 'meta-tick']" disabled >warn</button>
	<button :class="['btn','success', size, tick && 'meta-tick']" disabled >success</button>
	<button :class="['btn','error', size, tick && 'meta-tick']" disabled >error</button>

<br>
<br>
	<div :class="['menu-drop', dropMenu &&'open']">
		<button :class="['btn', size, dropMenu &&'icon-open']" @click="dropMenu=!dropMenu">
			<span>align-left check-left</span>
			<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		</button>
		<ul :class="['group-col align-left check-left menu-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</div>
	<div :class="['menu-drop', dropMenu &&'open']">
		<button :class="['btn', size, dropMenu &&'icon-open']" @click="dropMenu=!dropMenu">
			<span>align-right check-right</span>
			<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		</button>
		<ul :class="['group-col align-right check-right menu-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</div>
	<div :class="['menu-drop', dropMenu &&'open']">
		<button :class="['btn', size, dropMenu &&'icon-open']" @click="dropMenu=!dropMenu">
			<span>最小宽度</span>
			<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		</button>
		<ul :class="['group-col', 'menu-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</div>
	<div :class="['menu-drop', dropMenu &&'open']">
		<input :class="['input', size]" type="text" placeholder="输入选择" 
			@focus="dropMenu = true"
			:value="selectItem && selectItem.text"
			/>
		<ul :class="['group-col', 'menu-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</div>
	<div :class="['menu-drop', dropMenu &&'open']">
		<button :class="['btn', size, dropMenu &&'icon-open']" @click="dropMenu=!dropMenu">
			<span>组合选择</span>
			<i :class="['icon-inline', 'icon-arrow', colorTheme]"></i>
		</button>
		<ul :class="['group-col', 'menu-group', size && ('group-' + size)]">
			<span class="group-title">单选</span>
			<label :class="['group-item radio', colorTheme]" >
				<input type="radio" name="select-radio1" >
				<span class="radio-text">Radio Demo</span>
			</label>
			<label :class="['group-item radio', colorTheme]" >
				<input type="radio" name="select-radio1" >
				<span class="radio-text">Radio Demo</span>
			</label>
			<span class="group-title">多选</span>
			<label :class="['group-item check', colorTheme]" >
				<input type="checkbox" name="select-check1" >
				<span class="check-text">Radio Demo</span>
			</label>
			<label :class="['group-item check', colorTheme]" >
				<input type="checkbox" name="select-check1" >
				<span class="check-text">Radio Demo</span>
			</label>
		</ul>
	</div>

<br>
<br>
	<button :class="['btn', size, tick && 'meta-tick']" >
		<i :class="['icon-inline fa-microphone', colorTheme]"></i>
			<span>btn icon</span>
		<i :class="['icon-inline fa-apple', colorTheme]"></i>
	</button>
	<button :class="['btn icon-hover', size, tick && 'meta-tick']" >
		<span>btn icon-caret</span>
		<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
	</button>
	<button :class="['btn', size, tick && 'meta-tick']" >
		<span>btn icon-right</span>
		<i :class="['icon-inline', 'icon-right', colorTheme]"></i>
	</button>
	<button :class="['btn icon-hover', size, tick && 'meta-tick']" >
		<span>btn icon-arrow</span>
		<i :class="['icon-inline', 'icon-arrow', colorTheme]"></i>
	</button>
<br>
<br>
	<button :class="['btn', size, tick && 'meta-tick']" >
		<span>btn icon-close</span><i :class="['icon-inline', 'icon-close', colorTheme]"></i>
	</button>
	<button :class="['btn icon-open', size, tick && 'meta-tick']" ><span>btn icon-caret</span><i :class="['icon-inline', 'icon-caret', colorTheme]"></i></button>
	<button :class="['btn', size, tick && 'meta-tick']" ><span>btn icon-right</span><i :class="['icon-inline', 'icon-right', colorTheme]"></i></button>
	<button :class="['btn icon-open', size, tick && 'meta-tick']" ><span>btn icon-arrow</span><i :class="['icon-inline', 'icon-arrow', colorTheme]"></i></button>
<br>
<br>
	<div :class="['btn-group-col']">
		<button :class="['btn', btnSelected == 1 && ('selected ' + colorTheme)]" @click="btnSelected=1">btn1</button>
		<button :class="['btn', btnSelected == 2 && ('selected ' + colorTheme)]" @click="btnSelected=2">btn1</button>
		<button :class="['btn', btnSelected == 3 && ('selected ' + colorTheme)]" @click="btnSelected=3">btn1</button>
		<button :class="['btn', btnSelected == 4 && ('selected ' + colorTheme)]" @click="btnSelected=4">btn1</button>
		<button :class="['btn', btnSelected == 5 && ('selected ' + colorTheme)]" @click="btnSelected=5">btn1</button>
	</div>
	<div :class="['btn-group-row']">
		<button :class="['btn', btnSelected == 1 && ('selected ' + colorTheme)]" @click="btnSelected=1">btn1</button>
		<button :class="['btn', btnSelected == 2 && ('selected ' + colorTheme)]" @click="btnSelected=2">btn1</button>
		<button :class="['btn', btnSelected == 3 && ('selected ' + colorTheme)]" @click="btnSelected=3">btn1</button>
		<button :class="['btn', btnSelected == 4 && ('selected ' + colorTheme)]" @click="btnSelected=4">btn1</button>
		<button :class="['btn', btnSelected == 5 && ('selected ' + colorTheme)]" @click="btnSelected=5">btn1</button>
	</div>


</div>
</template>

<script type="text/javascript">
	import SizeControl from '../controls/SizeControl'
	import ColorControl from '../controls/ColorControl'
	import { makeArray } from './help'
	export default {
		data: function () {
			return {
				size: '',
				tick: true,
				colorTheme: '',
				btnSelected: '',
				dropMenu: false,
				defaultSelectOptions : makeArray(5, {
					text: '默认选择框--测试选项',
					value: 0,
				}),
				selectData : makeArray(5, {
					text: '选项',
					value: 0,
				}),
				selectValue: null,
				selectItem: null,
			};
		},
		methods: {
			changeValue : function (it) {
				this.selectValue = it.value;
				this.selectItem = it;
				this.dropMenu = false;
			}
		},
		components: {
			SizeControl,
			ColorControl,
		}
	}
</script>