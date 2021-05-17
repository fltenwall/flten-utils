
export function slice(arr,begin,end){
	const len = arr.length;
	const result = [];

	if(len === 0){
		return [];
	}

	begin = begin || 0;
	if(begin >= len){
		return [];
	}

	end = end || len;
	if(end < begin){
		end = len;
	}

	for(let i =0;i<len;i++){
		if(i >= begin && i < end){
			result.push(arr[i])
		}
	}
	return result;
}