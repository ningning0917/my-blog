/**
 * 角色管理权限配置
 * 2019-08-23
 * END
 */
import request from '@/utils/request'

export default {
  /**
   * 获取角色列表
   * @returns
   * @param data
   */
  getRoleList(data) {
    return request({
      url: '/grade/queryGrades',
      method: 'post',
      data
    })
  },

  /**
   * 创建角色
   * @returns
   * @param data
   */
  saveRoleInfo(data) {
    return request({
      url: '/grade/createGradePage',
      method: 'post',
      data
    })
  },
  /**
   * 修改角色
   * @param data
   */
  updateRole(data) {
    return request({
      url: '/grade/updateGradePage',
      method: 'post',
      data
    })
  },
  /**
   * 获取角色权限
   * @returns
   * @param data
   */
  getRolePermission(data) {
    return request({
      url: '/grade/queryGradeTask',
      method: 'post',
      data
    })
  },
  /**
   * 删除角色
   * @returns
   * @param data
   */
  deleteRole(data) {
    return request({
      url: '/grade/deleteGrade',
      method: 'post',
      data
    })
  }
}
