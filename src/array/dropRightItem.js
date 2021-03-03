export function dropRightItem(arr,num){
	if(num <= 0) return arr;

	return arr.filter((item,index)=> index < arr.length - num )
}