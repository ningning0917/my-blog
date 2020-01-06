import request from '@/utils/request'
import { JSEncrypt } from 'jsencrypt'
import { public_key } from '@/utils/config'

export function login(username, password) {
  var encrypt = new JSEncrypt()
  encrypt.setPublicKey(public_key)
  var json = { username, password }
  var str = JSON.stringify(json)
  var encrpted = encrypt.encrypt(str)
  const data = {
    content: encrpted
  }
  return request({
    url: '/study/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/study/info',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/study/logout',
    method: 'post'
  })
}

export function register({ username, password, avatar }) {
  var encrypt = new JSEncrypt()
  encrypt.setPublicKey(public_key)
  var json = { username, password }
  var str = JSON.stringify(json)
  var encrpted = encrypt.encrypt(str)
  const data = {
    content: encrpted,
    avatar: avatar
  }
  return request({
    url: '/study/register',
    method: 'post',
    data
  })
}
export function userList(data) {
  return request({
    url: '/study/userList',
    method: 'post',
    data
  })
}

export function github(data) {
  return request({
    url: '/study/github',
    method: 'post',
    data
  })
}

export function githubLogin() {
  return request({
    url: '/study/githubLogin',
    method: 'get'
  })
}
export function getTest() {
  return request({
    url: '/home/index',
    method: 'get'
  })
}

