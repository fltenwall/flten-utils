export function every(arr,callback){
 for(let i=0;i<arr.length;i++){
  if(!callback(arr[i],i)){
   return false
  }
 }
 return true;
}