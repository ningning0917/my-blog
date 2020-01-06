/**
 * 操作日志
 * 2019-08-23
 * END
 */
import request from '@/utils/request'

export default {
  /**
   * 获取操作日志列表
   * @returns
   * @param data
   */
  operationLogList(data) {
    return request({
      url: '/operateLog/queryUserOperateLog',
      method: 'post',
      data
    })
  },

  /**
   * 删除日志
   * @param { int } id 主键ID 日志id
   * @returns
   */
  deleteOperationLog(params) {
    return request({
      url: '/apis/glbsrmcenter/operationLog/delete',
      method: 'get',
      params
    })
  }
}
