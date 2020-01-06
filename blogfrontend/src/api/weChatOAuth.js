import request from '@/utils/request'

export function weChatOAuth() {
  return request({
    url: '/weChatOAuth',
    method: 'get',
    credentials: 'include'
  })
}
export function getFollowers() {
  return request({
    url: '/getFollowers',
    method: 'get',
    credentials: 'include'
  })
}
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
    credentials: 'include'
  })
}
export function sendInfo(data) {
  return request({
    url: '/',
    method: 'post',
    data
  })
}

export function chatLogin(data) {
  return request({
    url: '/chatLogin',
    method: 'post',
    data
  })
}

export function userList() {
  return request({
    url: '/userList',
    method: 'get'
  })
}

export function chatList() {
  return request({
    url: '/chatList',
    method: 'get'
  })
}

