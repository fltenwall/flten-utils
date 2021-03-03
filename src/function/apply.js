export function apply(Fn,obj,args){
 if(obj === null || obj === undefined){
  obj = globalThis;
 }

 obj.tempMethod = Fn;
 let result = obj.tempMethod(...args);
 delete obj.tempMethod;
 return result;
}