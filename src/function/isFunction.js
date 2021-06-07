
/**
 * 是否是函数
 *
 * @param  {Any} func 判断对象
 * @return {Boolean}
 */
export function isFunction (func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}
