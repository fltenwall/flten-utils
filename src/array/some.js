export function some(arr,callback){
 for(let i=0;i<arr.length;i++){
  if(callback(arr[i],i)){
   return ture;
  }
 }
 return false;
}
