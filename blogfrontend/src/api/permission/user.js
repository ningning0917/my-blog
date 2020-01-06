// 用户管理
import request from '@/utils/request'

export function userList(data) {
  return request({
    url: '/login/queryUsers',
    method: 'post',
    data
  })
}
export function addUser(data) {
  return request({
    url: '/login/register',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/login/update',
    method: 'post',
    data
  })
}

export function delList(data) {
  return request({
    url: '/login/delete',
    method: 'post',
    data
  })
}

export function selectCode(data) {
  return request({
    url: '/code/selectCode',
    method: 'post',
    type: 'noLoading',
    data
  })
}
