import request from '@/utils/request'

export function downloadFile(data) {
  return request({
    url: '/download/xlsx',
    method: 'post',
    data
  })
}
export function download(data) {
  return request({
    url: '/download/fileXls',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}

export function downloadUserInfo(data) {
  return request({
    url: '/download/userInfo',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}
