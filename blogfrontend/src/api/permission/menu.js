/**
 * 菜单管理
 * 2019-08-23
 */
import request from '@/utils/request'

export default {

  // 获取菜单树
  getMenuTree() {
    return request({
      url: '/menu/getMenuTree',
      method: 'post',
      data: {}
    })
  },
  /**
   * 获取菜单列表
   */
  getMenuList() {
    return request({
      url: '/menu/queryUseMenus',
      method: 'post',
      data: {}
    })
  },
  /**
   * 保存菜单列表
   */
  saveMenu(data) {
    return request({
      url: '/menu/createMenu',
      method: 'post',
      data
    })
  },
  /**
   * 删除菜单列表
   */
  deleteMenu(params) {
    return request({
      url: '/menu/deleteMenu',
      method: 'post',
      data: params
    })
  },

  /**
   * 编辑菜单列表
   */
  updadteMenu(data) {
    return request({
      url: '/menu/updateMenu',
      method: 'post',
      data
    })
  }
}
