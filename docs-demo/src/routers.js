import Vue from 'vue'

import Table from './components/Table'
import IconPhoton from './components/IconPhoton'
import IconFontAwesome from './components/IconFontAwesome'
import Grid from './components/Grid'
import Group from './components/Group'
import Test from './components/Test'
import Popup from './components/popup'
import Tab from './components/Tab'
import Form from './components/Form'
import Layer from './components/Layer'

export default {
    '/IconPhoton/': { component: IconPhoton, title:'Icon Photon', },
    '/IconFontAwesome/': { component: IconFontAwesome, title:'Icon FontAwesome', },
    '/Grid/': { component: Grid, title:'Grid 格子系统', },
    '/Table/': { component: Table, title:'Table 表格', },
    
    '/Group/': { component: Group, title:'Group 分组', },
    '/Popup/': { component: Popup, title:'Popup', },
    
    '/Tab/': { component: Tab, title:'Tab', },
    '/Form/': { component: Form, title:'Form', },
    '/Layer/': { component: Layer, title:'Layer', },
    '/Test/': { component: Test, title:'Test 测试', },
}

