// store/auth.js
export const state = () => ({
    user: null,
    token: null,
  });
  
  export const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearAuthData(state) {
      state.user = null;
      state.token = null;
    },
  };
  
  export const actions = {
    login({ commit }, { user, token }) {
      commit('setUser', user);
      commit('setToken', token);
    //   this.$cookies.set('token', token, { path: '/' }); // set token in cookie
    },
    logout({ commit }) {
      commit('clearAuthData');
    //   this.$cookies.remove('token'); // remove token from cookie
    },
  };
  