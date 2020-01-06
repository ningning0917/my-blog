import store from '@/store'
import { selectCode } from '../api/permission/user'

const selfExecute = {
  // 交易来源
  'consumerNo': function() {
    const data = { 'codeType': 'consumerNo' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setConsumerNo', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },

  // 交易状态
  'transStatus': function() {
    const data = { 'codeType': 'transStatus' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setTransStatus', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },

  // 医院码表
  'hospitalNo': function() {
    const data = { 'codeType': 'hospitalNo' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setHospitalNo', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },

  // 证件类型
  'IdentifyType': function() {
    const data = { 'codeType': 'IdentifyType' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setIdentifyType', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },

  // 省
  'province': function() {
    const data = { 'codeType': 'provinceI' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setProvince', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },

  // 机构代码
  'agentCode': function() {
    const data = { 'codeType': 'agentCode' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setAgentCode', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },
  // 授权文件名称
  'seriousAuthor': function() {
    const data = { 'codeType': 'seriousAuthor' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setSeriousAuthor', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  },
  // 供应商
  'supplierNo': function() {
    const data = { 'codeType': 'supplierNo' }
    return new Promise((resolve, reject) => {
      selectCode(data).then(response => {
        store.dispatch('execute/setSupplierNo', response.codeData)
      }).catch(e => {
        return reject(e)
      })
    })
  }

}

export default selfExecute
