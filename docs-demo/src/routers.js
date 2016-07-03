import Vue from 'vue'

import Button from './components/Button'
import Table from './components/Table'
import IconPhoton from './components/IconPhoton'
import IconFontAwesome from './components/IconFontAwesome'

export default {
    '/Table': { component: Table, title:'Table', },
    '/Button': { component: Button, title:'Button', },
    '/IconPhoton': { component: IconPhoton, title:'IconPhoton', },
    '/IconFontAwesome': { component: IconFontAwesome, title:'IconFontAwesome', },
}