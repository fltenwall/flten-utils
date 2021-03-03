export function findIndex(arr,callback){
 for(let i=0;i<arr.length;i++){
  let res = callback(arr[i],i)
  if(res){
   return i;
  }
 }
 return -1;
}