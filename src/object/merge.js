/**
 * merge
 *
 * @param  {Object} src
 * @param  {Object} dest
 * @return {Object}
 */
export function merge (src, dest) {
  for (var item in src) {
    dest[item] = src[item]
  }

  return dest
}
