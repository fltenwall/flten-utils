export function throttle(callback,timer){
 let startTime = 0;
 return function(e){
  let nowTime = Date.now();
  if(nowTime - startTime >= timer){
   callback.call(this,e);
   startTime = nowTime;
  }
 }
}