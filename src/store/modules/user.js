import axios from 'axios';

const version = process.env.VUE_APP_AUTHVERSION;
const auth = process.env.VUE_APP_AUTH;
const cors = process.env.VUE_APP_CORS;

const state = {
    user: null,
};

const getters = {
    isAuthenticated: state => !!state.user,
    User: state => state.user,
};

const actions = {
    async REGISTER({ commit }, payload) {
        let res = await axios.post(cors + auth + `${version}/register`, payload);
        commit('SET_USER', res.data);
    },

    async LOGIN({ commit }, payload) {
        let res = await axios.post(cors + auth + `${version}/login`, payload);
        commit('SET_USER', res.data);
    },

    LOGOUT({ commit }) {
        commit('SET_USER', null);
    },
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};