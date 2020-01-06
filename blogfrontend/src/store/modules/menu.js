/**
 * @Description: 菜单
 * @author wangke
 * @date 2019-08-16
 */
import menuApi from '@/api/permission/menu'
import * as types from '../types'

const state = {
  menuList: ''
}

const mutations = {
  [types.MENU_LIST]: (state, data) => {
    state.menuList = data
  }
}

const actions = {
  // 获取菜单列表数据
  getMenuTree({ commit }, params) {
    return new Promise((resolve, reject) => {
      menuApi.getMenuTree(params)
        .then(res => {
          commit(types.MENU_LIST, res.resultObj.menuTree)
          sessionStorage.setItem('menuList', JSON.stringify(res.resultObj.menuTree))
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const getters = {
  menuList: state => state.menuList
}

export default {
  state,
  mutations,
  actions,
  getters
}
