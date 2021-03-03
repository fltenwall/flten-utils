export function find(arr,callback){
 for(let i =0;i<arr.length;i++){
  let res = callback(arr[i],i);
  if(res){
   return arr[i];
  }
 }
 return undefined
}