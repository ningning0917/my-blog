import request from '@/utils/request'

/**
 * @Description: 标签管理
 * @author wangke
 * @date 2019-12-24
 */

export function addLabel(data) {
  return request({
    url: '/label/addLabel',
    method: 'post',
    data
  })
}

export function labelList(data) {
  return request({
    url: '/label/labelList',
    method: 'post',
    data
  })
}
