import "../../dist/css/csskit.css"

import Vue from 'vue'
import App from './App'
import routers from './routers'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var newRouters = Object.keys(routers).map(function (path) {
	return {
		path: path,
		component: routers[path].component,
	}
});

// newRouters.unshift({
// 	path: '/',
// 	component: App,
// })

let router = new VueRouter({
	routes: newRouters
});

let app = new Vue({
	router: router,
	render: function (h) {
		return h(App)
	}
});

app.$mount('#app');
