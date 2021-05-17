
export function map(arr,callback){
	let resultArr = [];
	for(let i=0;i<arr.length;i++){
	resultArr.push(callback(arr[i],i));
	}
	return resultArr;
}