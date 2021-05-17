export function delSomeArrayItem(arr,...args){
	if(args.length === 0){
		return [];
	}

	if(Array.isArray(args)){
		args = args.flat();
	}

	const result = [];

	for(let i =0;i<arr.length;i++){
		if(args.includes(arr[i])){
			result.push(arr[i]);
			arr.splice(i,1);
			// 注意自减，避免跳过
			i--;
		}
	}

	return result;
}