export function concat(arr,...args){
	const result = [...arr];
	args.forEach(item => {
		if(Array.isArray(item)){
			result.push(...item)
		}else{
			result.push(item)
		}
	})
	return result;
}