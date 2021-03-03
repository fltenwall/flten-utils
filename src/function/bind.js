import {call} from './call'

export function bind(Fn,obj,...args){
 return function(...args2){
  return call(Fn,obj,...args,...args2);
 }
}