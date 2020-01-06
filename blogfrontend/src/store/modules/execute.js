
const state = {
  consumerNo: sessionStorage.getItem('consumerNo') ? JSON.parse(sessionStorage.getItem('consumerNo')) : '',
  transStatus: sessionStorage.getItem('transStatus') ? JSON.parse(sessionStorage.getItem('transStatus')) : '',
  hospitalNo: sessionStorage.getItem('hospitalNo') ? JSON.parse(sessionStorage.getItem('hospitalNo')) : '',
  IdentifyType: sessionStorage.getItem('IdentifyType') ? JSON.parse(sessionStorage.getItem('IdentifyType')) : '',
  province: sessionStorage.getItem('province') ? JSON.parse(sessionStorage.getItem('province')) : '',
  agentCode: sessionStorage.getItem('agentCode') ? JSON.parse(sessionStorage.getItem('agentCode')) : '',
  seriousAuthseor: sessionStorage.getItem('seriousAuthor') ? JSON.parse(sessionStorage.getItem('seriousAuthor')) : '',
  supplierNo: sessionStorage.getItem('supplierNo') ? JSON.parse(sessionStorage.getItem('supplierNo')) : ''
}

const mutations = {
  SET_CONSUMER_NO: (state, consumerNo) => {
    sessionStorage.setItem('consumerNo', JSON.stringify(consumerNo))
    state.consumerNo = consumerNo
  },

  SET_TRANS_STATUS: (state, transStatus) => {
    sessionStorage.setItem('transStatus', JSON.stringify(transStatus))
    state.transStatus = transStatus
  },

  SET_HOSPITAL_NO: (state, hospitalNo) => {
    sessionStorage.setItem('hospitalNo', JSON.stringify(hospitalNo))
    state.hospitalNo = hospitalNo
  },

  SET_IDENTIFY_TYPE: (state, IdentifyType) => {
    sessionStorage.setItem('IdentifyType', JSON.stringify(IdentifyType))
    state.IdentifyType = IdentifyType
  },

  SET_PROVINCE: (state, province) => {
    sessionStorage.setItem('province', JSON.stringify(province))
    state.province = province
  },

  SET_AGENT_CODE: (state, agentCode) => {
    sessionStorage.setItem('agentCode', JSON.stringify(agentCode))
    state.agentCode = agentCode
  },

  SET_SERIOUS_AUTHOR: (state, seriousAuthor) => {
    sessionStorage.setItem('seriousAuthor', JSON.stringify(seriousAuthor))
    state.seriousAuthor = seriousAuthor
  },

  SET_SUPPLIER_NO: (state, supplierNo) => {
    sessionStorage.setItem('supplierNo', JSON.stringify(supplierNo))
    state.supplierNo = supplierNo
  }
}

const actions = {
  setConsumerNo({ commit }, consumerNo) {
    commit('SET_CONSUMER_NO', consumerNo)
  },

  setTransStatus({ commit }, transStatus) {
    commit('SET_TRANS_STATUS', transStatus)
  },

  setHospitalNo({ commit }, hospitalNo) {
    commit('SET_HOSPITAL_NO', hospitalNo)
  },

  setIdentifyType({ commit }, IdentifyType) {
    commit('SET_IDENTIFY_TYPE', IdentifyType)
  },

  setProvince({ commit }, province) {
    commit('SET_PROVINCE', province)
  },

  setAgentCode({ commit }, agentCode) {
    commit('SET_AGENT_CODE', agentCode)
  },

  setSeriousAuthor({ commit }, seriousAuthor) {
    commit('SET_SERIOUS_AUTHOR', seriousAuthor)
  },

  setSupplierNo({ commit }, supplierNo) {
    commit('SET_SUPPLIER_NO', supplierNo)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
