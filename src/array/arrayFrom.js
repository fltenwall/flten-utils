	
/**
 * 将类数组转化成数组
 *
 * @param  {Object} arrayLike 类数组对象
 * @return {Array} 转化后的数组
 */
export function arrayFrom (arrayLike) {
  return [].slice.call(arrayLike)
}