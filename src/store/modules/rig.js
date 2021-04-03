import axios from 'axios';


const ethosEndpoint = 'ethosdistro.com';


const state = {
    rigs: [],
};

const getters = {
    Rigs: state => state.rigs,
};

const actions = {
    async ADD_RIG({ commit }, rigId) {
        setTimeout(async() => {            
            const res = await axios.get(`http://${rigId}.${ethosEndpoint}/?json=yes`);
            const rig = res.data;
            commit('ADD', rig);
        }, 3000);
    },

    RESET({ commit }) {
        commit('SET', []);
    }
};

const mutations = {
    ADD(state, rig) {
        if (state.rigs.indexOf(rig) == -1)
            state.rigs.push(rig);
    },

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