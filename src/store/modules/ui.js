
const state = {
    darkMode: null,
    menuOpened: true
};

const getters = {
    isDarkModeEnabled: state => !!state.darkMode,
    isMenuOpened: state => state.menuOpened
};

const actions = {
    TOGGLE_DARK_MODE({ commit, state }) {
        commit('SET_DARK_MODE', !state.darkMode);
    },

    TOGGLE_MENU({ commit }, opened) {
        commit('SET_MENU', opened);
    },
};

const mutations = {
    SET_DARK_MODE(state, val) {
        state.darkMode = val;
    },

    SET_MENU(state, val) {
        state.menuOpened = val;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};