export function flat(arr){
	let result = [...arr];
	while(result.some(item => Array.isArray(item))){
		result = [].concat(...result);
	}
}