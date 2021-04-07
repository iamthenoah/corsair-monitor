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
                const res = await axios.get(`http://${rigId}.ethosdistro.com/?json=yes`)
                    .catch(err => reject(err));

                const rigs = res.data.rigs;
                const rigsWithInfo = []

                for (const key of Object.keys(rigs)) {
                    const info = await getRigGraphInfo(rigId, key);
                    rigsWithInfo.push({
                        name: key,
                        rig: rigs[key],
                        info: info
                    });
                }

                resolve(commit('SET', rigsWithInfo));
            }, 500);
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


async function getRigGraphInfo(rigId, rigName) {
    const cors = 'https://cors-anywhere-app.herokuapp.com/';
    const request = async(type) => await axios.get(cors + `http://ethosdistro.com/graphs/?rig=${rigName}&panel=${rigId}&type=${type}&json=yes`)
        .then(res => res.data);

    const temps = await request('temp');
    const hashs = await request('hash');
    const watts = await request('watts');
    const mems = await request('mem');
    
    return { temps, hashs, watts, mems };
}