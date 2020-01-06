
const state = {
  topInfo: {} // 页面顶部信息
}

const mutations = {
  SET_TOP_INFO: (state, topInfo) => {
    state.topInfo = topInfo
  }
}

const actions = {
  setTopInfo({ commit }, topInfo) {
    commit('SET_TOP_INFO', topInfo)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
