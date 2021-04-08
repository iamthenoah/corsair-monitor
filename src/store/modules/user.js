// import axios from 'axios';
import Vue from 'vue';


const state = {
    user: null,
};

const getters = {
    isAuthenticated: state => !!state.user,
    User: state => state.user,
};

const actions = {
    async REGISTER({ commit }, payload) {
        // let res = await axios.post(cors + registerEndpoint, payload);
        // let user = res.data;
        // Vue.$cookies.set('Authorization', user['token']);
        commit('SET_USER', payload);
    },

    async LOGIN({ commit }, payload) {
        // let res = await axios.post(cors + loginEndpoint, payload);
        // let user = res.data;
        commit('SET_USER', payload);
    },

    LOGOUT({ commit, dispatch }) {
        Vue.$cookies.remove('Authorization');
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