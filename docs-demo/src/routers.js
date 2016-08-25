import Vue from 'vue'

import Button from './components/Button'
import Table from './components/Table'
import IconPhoton from './components/IconPhoton'
import IconFontAwesome from './components/IconFontAwesome'
import Grid from './components/Grid'
import List from './components/List'
import Test from './components/Test'
import Popup from './components/popup'

export default {
    '/IconPhoton': { component: IconPhoton, title:'Icon Photon', },
    '/IconFontAwesome': { component: IconFontAwesome, title:'Icon FontAwesome', },
    '/Grid': { component: Grid, title:'Grid 格子系统', },
    '/Table': { component: Table, title:'Table 表格', },
    
    '/Button': { component: Button, title:'Button 按钮', },
    '/List': { component: List, title:'List 列表项', },
    '/Popup': { component: Popup, title:'Popup', },
    
    '/Test': { component: Test, title:'Test 测试', },
}