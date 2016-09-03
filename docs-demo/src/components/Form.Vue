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
	<label :class="['radio', size]"><input type="radio" name="group1" checked><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size]"><input type="radio" name="group1" ><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size]"><input type="radio" name="group2"  disabled><span class="radio-text">Radio Demo</span></label>
	<label :class="['radio', size]"><input type="radio" name="group2"  checked disabled><span class="radio-text">Radio Demo</span></label>
<br>
<br>
	<label :class="['check', size]"><input type="checkbox"><span class="check-text">Check Demo</span></label>
	<label :class="['check', size]"><input type="checkbox" checked><span class="check-text">Check Demo</span></label>
	<label :class="['check', size]"><input type="checkbox" disabled><span class="check-text">Check Demo</span></label>
	<label :class="['check', size]"><input type="checkbox" checked disabled><span class="check-text">Check Demo</span></label>
<br>
<br>
	<input :class="['input', size]" type="text" placeholder="default" />
	<input :class="['input', size]" type="text" disabled value="disabled" />
<br>
<br>
	<input :class="['input','primary', size]" type="text" placeholder="primary" />
	<input :class="['input','access', size]" type="text" placeholder="access" />
	<input :class="['input','required', size]" type="text" placeholder="required" />
	<input :class="['input','success', size]" type="text" placeholder="success" />
	<input :class="['input','error', size]" type="text" placeholder="error" />
<br>
<br>
	<input :class="['input','primary', size]" type="text" placeholder="primary" disabled />
	<input :class="['input','access', size]" type="text" placeholder="access" disabled />
	<input :class="['input','required', size]" type="text" placeholder="required" disabled />
	<input :class="['input','success', size]" type="text" placeholder="success" disabled />
	<input :class="['input','error', size]" type="text" placeholder="error" disabled />

<br>
<br>
	<select :class="['select', size, colorTheme]" value= "2">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select', size, colorTheme]" disabled value="3">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
<br>
<br>
	<select :class="['select primary ', size, colorTheme]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select access ', size, colorTheme]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select required ', size, colorTheme]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select success ', size, colorTheme]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
	<select :class="['select error ', size, colorTheme]">
		<option v-for="it in defaultSelectOptions" :value="it.value">{{it.text}}</option>
	</select>
<br>
<br>


<br>
<br>
	<button :class="['btn', size, tick && 'meta-tick']" >Default Button</button>
	<button :class="['btn', size, tick && 'meta-tick']"  disabled>Default Button</button>
<br>
<br>
	<button :class="['btn','primary', size, tick && 'meta-tick']" >primary</button>
	<button :class="['btn','info', size, tick && 'meta-tick']" >info</button>
	<button :class="['btn','warn', size, tick && 'meta-tick']" >warn</button>
	<button :class="['btn','success', size, tick && 'meta-tick']" >success</button>
	<button :class="['btn','error', size, tick && 'meta-tick']" >error</button>

<br>
<br>
	<button :class="['btn','primary', size, tick && 'meta-tick']" disabled >primary</button>
	<button :class="['btn','info', size, tick && 'meta-tick']" disabled >info</button>
	<button :class="['btn','warn', size, tick && 'meta-tick']" disabled >warn</button>
	<button :class="['btn','success', size, tick && 'meta-tick']" disabled >success</button>
	<button :class="['btn','error', size, tick && 'meta-tick']" disabled >error</button>

<br>
<br>
	<button :class="['btn btn-drop', size, dropMenu &&'open icon-open']" @click.prevent="dropMenu=!dropMenu">
		<span>btn-drop + menu-group</span>
		<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		<ul :class="['group-col', 'menu-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</button>

	<div :class="['drop-group', dropMenu &&'open']">
		<button :class="['btn', size, dropMenu &&'icon-open']" @click="dropMenu=!dropMenu">
			<span>drop-group + menu-group</span>
			<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		</button>
		<ul :class="['group-col', 'menu-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</div>
	
	<button :class="['btn btn-drop', size, dropMenu &&'open icon-open']" @click.prevent="dropMenu=!dropMenu">
		<span>btn-drop + select-group</span>
		<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		<ul :class="['group-col', 'select-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
		</ul>
	</button>

	<div :class="['drop-group', dropMenu &&'open']">
		<button :class="['btn', size, dropMenu &&'icon-open']" @click="dropMenu=!dropMenu">
			<span>drop-group + select-group</span>
			<i :class="['icon-inline', 'icon-caret', colorTheme]"></i>
		</button>
		<ul :class="['group-col', 'select-group', size && ('group-' + size)]">
			<li :class="['group-item', colorTheme, selectValue==it.value && 'checked']" v-for="it in selectData" @click.stop="changeValue(it)">
				<span>{{it.text}}</span>
			</li>
			<li :class="['group-item', colorTheme]" >
				<label :class="['radio', size]">
					<input type="radio" name="select-radio1" checked>
					<span class="radio-text">Radio Demo</span>
				</label>
			</li>
			<li :class="['group-item', colorTheme]" >
				<label :class="['radio', size]">
					<input type="radio" name="select-radio1" >
					<span class="radio-text">Radio Demo</span>
				</label>
			</li>
			<label :class="['group-item radio', colorTheme]" >
				<input type="radio" name="select-radio1" >
				<span class="radio-text">Radio Demo</span>
			</label>
			<label :class="['group-item radio', colorTheme]" >
				<input type="radio" name="select-radio1" >
				<span class="radio-text">Radio Demo</span>
			</label>
			<li :class="['group-item', colorTheme]" >
				<label :class="['check', size]">
					<input type="checkbox" name="select-check1" >
					<span class="check-text">Radio Demo</span>
				</label>
			</li>
			<li :class="['group-item', colorTheme]" >
				<label :class="['check', size]">
					<input type="checkbox" name="select-check1" checked>
					<span class="check-text">Radio Demo</span>
				</label>
			</li>
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
		<i class="icon-inline fa-microphone"></i>
			<span>btn icon</span>
		<i class="icon-inline fa-apple"></i>
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
		<i class="icon-inline fa-microphone"></i><span>btn icon</span><i class="icon-inline fa-apple"></i>
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
			};
		},
		methods: {
			changeValue : function (it) {
				this.selectValue = it.value;
				this.dropMenu = false;
			}
		},
		components: {
			SizeControl,
			ColorControl,
		}
	}
</script>