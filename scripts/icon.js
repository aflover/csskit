// 提取 photonkit 库的图标
var path = require('path'),
	fs = require('fs'),
	photon = path.dirname(require.resolve('photon/package.json')),
	fonts = path.resolve(photon, 'fonts'),
	css = path.resolve(photon, 'dist/photon.css')
	;

var icons = {
	photon : {
		resolve : 'photon/package.json',
		fonts : 'fonts',
		css : 'dist/photon.css'
	}
}
