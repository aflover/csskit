
function makeItem(val, index) {
	if (typeof val === 'string') {
		return val + index;
	}
	return val;
}

export function makeObject(fields, index) {
	var ret = {};
	Object.keys(fields).forEach(function (key, i) {
		ret[key] = makeItem(fields[key], index);
	});
	return ret;
}

export function makeArray(count, fields) {
	var ret = [];
	for(var i=0; i<count; ++i) {
		ret.push(makeObject(fields, i));
	}
	return ret;
}

// export default {
// 	makeObject,
// 	makeArray,
// }