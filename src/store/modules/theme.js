
const state = {
    darkMode: null,
};

const getters = {
    isDarkModeEnabled: state => !!state.darkMode,
};

const actions = {
    TOGGLE_DARK_MODE({ commit, state }) {
        commit('SET_DARK_MODE', !state.darkMode);
    },
};

const mutations = {
    SET_DARK_MODE(state, val) {
        state.darkMode = val;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};