import "../../dist/css/csskit.css"

import Vue from 'vue'
import App from './App'
import routers from './routers'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter()

router.map(routers)

router.start(App, '#app')