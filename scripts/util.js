
var RE_ICON = /.(?:prefix)([\-\w]+):(?:before|after)(?:[\w\-:\s{]+)(?:'|")([\\\w\d]+)(?:'|")/

function getIconRe (prefix) {
	return new RegExp(RE_ICON.source.replace('prefix', prefix), 'g');
}

function matchIcon(prefix, input) {
	var re = getIconRe(prefix);
	var ret = [];
	var mat = re.exec(input);
	while (mat) {
	    ret.push([mat[1], mat[2]]);
	    mat  = re.exec(input);
	}
	return ret;
}

function makeIcon(arr, prefix, after) {
	return arr.map(function(it){
		return '.' + prefix + it[0] + ':' + (after ? 'after' : 'before') + ' { content: "' + it[1] +'" }';
	}).join('\n');
}

function replaceIcon(input, prefixFrom, prefixTo, after) {
	return makeIcon(matchIcon(prefixFrom, input), prefixTo || prefixFrom, after);
}

module.exports = {
	replaceIcon : replaceIcon,
		getIconRe : getIconRe,
		matchIcon : matchIcon,
		makeIcon : makeIcon,
}

if (0) {

var textfa = `
.fa-inverse {
  color: #ffffff;
}
/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
   readers do not read off random characters that represent icons */
.fa-glass:before {
  content: "\\f000";
}
.fa-music:before {
  content: "\\f001";
}
.fa-search:before {
  content: "\\f002";
}
.fa-envelope-o:before {
  content: "\\f003";
}
.fa-heart:before {
  content: "\\f004";
}

.icon:before {
  position: relative;
}

.icon-note:before { content: '\\e800'; } /* '' */
.icon-note-beamed:before { content: '\\e801'; } /* '' */
.icon-music:before { content: '\\e802'; } /* '' */
.icon-search:before { content: '\\e803'; } /* '' */
.icon-flashlight:before { content: '\\e804'; } /* '' */

`

console.log(replaceIcon(textfa, 'fa', 'fx'));
console.log(replaceIcon(textfa, 'icon', 'bb'));

}



