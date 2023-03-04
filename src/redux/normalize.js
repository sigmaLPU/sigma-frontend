// it will convert special char to non special

export function normalize(obj) {

	if (typeof(obj)==='string'){
		return obj.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
	}
	var ans = {}
	let keys = Object.keys(obj)

	for(var i=0;i<keys.length;i++){
		let val = obj[keys[i]]
		if ( typeof val === 'object' && !Array.isArray(val) && val !== null){
			ans[keys[i]]=normalize(obj[keys[i]])
		}else if(typeof(val)==='string'){
			ans[keys[i]] = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
		}else{
			ans[keys[i]] = val
		}
	}

	return ans
}