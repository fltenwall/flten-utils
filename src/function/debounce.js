export function debounce(callback,timer){
 let timeId = null;

 return function(e){
  if(timeId !== null){
   clearInterval(timeId);
  };

  timeId = setTimeout(()=>{
   callback.call(this,e);
   timeId = null;
  },timer);
 }
}