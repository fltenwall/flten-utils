export function chunk(arr,num=1){
	const result = [];

	if(arr.length === 0){
		return [];
	}

	for(let i=0;i<arr.length;i+=num){
		result.push(arr.slice(i,i+num))
	}

	return result;
}