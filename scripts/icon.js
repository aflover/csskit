var path = require('path'),
	fs = require('fs'),
	util = require('./util'),
	Stream = require("stream")
	;

var configs = {
	'photon' : {
		resolve : 'photon/package.json',
		fonts : 'fonts/photon-entypo.*',
		css : 'dist/css/photon.css',
		prefixFrom: 'icon',
		prefixTo: 'pt',
		name: 'photon',
		htmlFile : 'docs-demo/src/components/IconPhoton.vue',
		htmlFormat : '<label title="%content"><i class="%name"></i><span>%name</span></label>',
	},
	'font-awesome' : {
		resolve : 'font-awesome/package.json',
		fonts : 'fonts/fontawesome-webfont.*',
		css : 'css/font-awesome.css',
		prefixFrom: 'fa',
		prefixTo: 'fa',
		name: 'font-awesome',
		htmlFile : 'docs-demo/src/components/IconFontAwesome.vue',
		htmlFormat : '<label title="%content"><i class="%name"></i><span>%name</span></label>',
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
			var mat = util.matchIcon(config.prefixFrom, content);
			var html = fs.readFileSync(config.htmlFile).toString();
			html = util.replaceHtmlBlock(html, mat, config.prefixTo, config.htmlFormat);
			fs.writeFileSync(config.htmlFile, html);
			var sassText =  util.replaceIcon(mat, config.prefixTo);
			sassText = '@mixin make-icons-' + config.name + '() {\r\n' + sassText + '\r\n}';
			return sassText;
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