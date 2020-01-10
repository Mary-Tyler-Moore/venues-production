const state = {
  darkMode: true,
  isDark: true
};

const getters = {
  isDark: s => s.isDark
};

const mutations = {
  toggleDarkMode: state => {
    state.isDark = !state.isDark;
  }
};

export default {
  state,
  getters,
  mutations
};