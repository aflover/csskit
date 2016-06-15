var path = require('path'),
	fs = require('fs'),
	util = require('./util'),
	Stream = require("stream")
	;

var configs = {
	'photon' : {
		resolve : 'photon/package.json',
		fonts : 'fonts',
		css : 'dist/css/photon.css',
		prefixFrom: 'icon',
		prefixTo: 'pt',
		taskName: 'photon',
	},
	'font-awesome' : {
		resolve : 'font-awesome/package.json',
		fonts : 'fonts',
		css : 'css/font-awesome.css',
		prefixFrom: 'fa',
		taskName: 'font-awesome',
	}
}

function getConfig(config) {
	if (typeof config == 'string') {
		config = configs[config];
	}
	return config;
}

function resolve (config) {
	config = getConfig(config);

	var dir = require.resolve(config.resolve);
	var stat = fs.statSync(dir);
	if (!stat.isDirectory()) {
		dir = path.dirname(dir);
	}
	var fontsDir = path.resolve(dir, config.fonts);
	var cssFile = path.resolve(dir, config.css);
	// var fontsDirs = fs.readdirSync(fontsDir).map(function (it) {
	// 	return path.resolve(fontsDir, it);
	// });
	return {
		cssFile : cssFile,
		toSass : function (content) {
			return util.replaceIcon(content, config.prefixFrom, config.prefixTo);
		},
		fontsDir : fontsDir,
		// fontsDirs : fontsDirs,
	};
}

function gulpContentFilter(cb) {
	var stream = new Stream.Transform({objectMode: true});
	stream._transform = function(file, unused, callback) {
		cb.call(this, file);
		callback(null, file);
	}
	return stream;
}

exports.resolve = resolve;
exports.gulpContentFilter = gulpContentFilter ; 