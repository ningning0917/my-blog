/**
 * @Description: 上传文件
 * @author wangke
 * @date 2019-09-05
 */
import request from '@/utils/request'

export function uploadFile(data) {
  return request({
    url: '/uploadFile',
    method: 'post',
    data
  })
}
