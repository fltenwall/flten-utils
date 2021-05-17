export function filter(arr,callback){
	let result = [];
	for(let i =0;i<arr.length;i++){
		let res = callback(arr[i],i);
		if(res){
		result.push(arr[i]);
		}
	}
	return result;
}