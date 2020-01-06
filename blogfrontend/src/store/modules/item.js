
const state = {
  platformOpt: '',
  platformVal: localStorage.getItem('platformVal') ? JSON.parse(localStorage.getItem('platformVal')) : '',
  diseaseOpt: '',
  diseaseVal: localStorage.getItem('diseaseVal') ? JSON.parse(localStorage.getItem('diseaseVal')) : '',
  checkInOpt: '',
  checkInVal: localStorage.getItem('checkInVal') ? JSON.parse(localStorage.getItem('checkInVal')) : ''
}

const mutations = {
  SET_PLATFORM_OPT: (state, platformOpt) => {
    state.platformOpt = platformOpt
  },
  SET_PLATFORM_VAL: (state, platformVal) => {
    localStorage.setItem('platformVal', JSON.stringify(platformVal))
    state.platformVal = platformVal
  },
  SET_DISEASE_OPT: (state, diseaseOpt) => {
    state.diseaseOpt = diseaseOpt
  },
  SET_DISEASE_VAL: (state, diseaseVal) => {
    localStorage.setItem('diseaseVal', JSON.stringify(diseaseVal))
    state.diseaseVal = diseaseVal
  },
  SET_CHECKIN_OPT: (state, checkInOpt) => {
    state.checkInOpt = checkInOpt
  },
  SET_CHECKIN_VAL: (state, checkInVal) => {
    localStorage.setItem('checkInVal', JSON.stringify(checkInVal))
    state.checkInVal = checkInVal
  }
}

const actions = {
  setPlatformOpt({ commit }, platformOpt) {
    commit('SET_PLATFORM_OPT', platformOpt)
  },
  setPlatformVal({ commit }, platformVal) {
    commit('SET_PLATFORM_VAL', platformVal)
  },
  setDiseaseOpt({ commit }, diseaseOpt) {
    commit('SET_DISEASE_OPT', diseaseOpt)
  },
  setDiseaseVal({ commit }, diseaseVal) {
    commit('SET_DISEASE_VAL', diseaseVal)
  },
  setCheckInOpt({ commit }, checkInOpt) {
    commit('SET_CHECKIN_OPT', checkInOpt)
  },
  setCheckInVal({ commit }, checkInVal) {
    commit('SET_CHECKIN_VAL', checkInVal)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
