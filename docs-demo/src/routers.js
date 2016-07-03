import Vue from 'vue'

import Button from './components/Button'
import Table from './components/Table'

export default {
    '/table': {
        component: Table,
        title:'Table',
    },
    '/button': {
        component: Button,
        title:'Button',
    },
}