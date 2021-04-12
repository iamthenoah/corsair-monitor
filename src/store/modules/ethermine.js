import axios from 'axios';

const cors = process.env.VUE_APP_CORS;
const ethermine = process.env.VUE_APP_ETHERMINE;

const state = {
    workers: null,
    workerStatistics: null,
};

const getters = {
    Workers: state => state.workers,
    WorkerStats: state => state.workerStatistics
};

const actions = {
    async GET_INFO({ commit }, uris) {
        return await getEthermineData(uris);
    },

    async GET_WORKERS({ commit }, address) {
        const data = await getEthermineData(['miner', address, 'workers']);
        commit('SET_WORKERS', data);
        return;
    },

    async GET_WORKER_STATISTICS({ commit }, info) {
        const { address, worker } = info;
        const stats = await getEthermineData(['miner', address, 'worker', worker.worker, 'history']);
        commit('SET_WORKER_STATISTICS', { stats, worker });
    },

    RESET_WORKERS({ commit }) {
        commit('SET_WORKERS', null);
        commit('SET_WORKER_STATISTICS', null);
    }
};

const mutations = {
    SET_WORKERS(state, workers) {
        state.workers = workers;
    },

    SET_WORKER_STATISTICS(state, stats) {
        state.workerStatistics = stats;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};


async function getEthermineData(uris) {
    return await new Promise((resolve, reject) => {
        setTimeout(async () => {
            if (!uris) throw new Error('Invalid mining address provided.');
            const url = cors + ethermine + uris.join('/');
            const res = await axios.get(url)
                .catch(err => reject(err));
            // console.log(url);
            resolve(res.data.data);
        }, 1000);
    });
} 