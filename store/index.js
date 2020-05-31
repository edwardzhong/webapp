export const state = () => ({
  user: null
})

export const actions = {
  fetchToken({ commit }, { token, source }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/authorize', {
          token,
          source
        })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  // 获取用户信息
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('/user')
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}
