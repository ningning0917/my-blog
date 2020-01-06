/**
 * @Description: 主要配置一些常用函数
 * @author wangke
 * @date 2019-12-13
 */

export function dni() {
  var urodz = new Date('2019-12-10')
  var now = new Date()
  var ile = now.getTime() - urodz.getTime()
  return Math.floor(ile / (1000 * 60 * 60 * 24))
}
