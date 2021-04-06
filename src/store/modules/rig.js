import axios from 'axios';

const state = {
    rigs: null,
};

const getters = {
    Rigs: state => state.rigs,
};

const actions = {
    async GET_RIGS({ commit }, rigId) {
        await new Promise((resolve, reject) => {
            setTimeout(async() => {
                const res = await axios.get(`http://${rigId}.ethosdistro.com/?json=yes`);
                resolve(commit('SET', res.data));
            }, 3000);
        })
    },

    RESET({ commit }) {
        commit('SET', null);
    }
};

const mutations = {
    SET(state, rigs) {
        state.rigs = rigs;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};