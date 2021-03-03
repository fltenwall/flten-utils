export function dropLeftItem(arr,num){
	if(num <= 0) return arr;

	return arr.filter((item,index) => index >= num )
}