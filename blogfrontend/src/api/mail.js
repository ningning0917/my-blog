import request from '@/utils/request'

export function sendMail(data) {
  return request({
    url: '/mail/sendMail',
    method: 'post',
    data
  })
}

export function captcha(data) {
  return request({
    url: '/mail/captcha',
    method: 'post',
    data
  })
}
