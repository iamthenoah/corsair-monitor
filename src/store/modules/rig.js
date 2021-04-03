import axios from 'axios';


const ethosEndpoint = 'ethosdistro.com';


const state = {
    rigs: null,
};

const getters = {
    Rigs: state => state.rigs,
};

const actions = {
    async GET_RIGS({ commit }, rigId) {
        setTimeout(async() => {            
            const res = await axios.get(`http://${rigId}.${ethosEndpoint}/?json=yes`);
            commit('SET', res.data);
        }, 10);
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