import axios from 'axios';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const ethermine = 'https://api.ethermine.org/';


const actions = {
    async GET_INFO({ commit }, info) {
        return await new Promise((resolve, reject) => {
            setTimeout(async () => {
                const suffix = info.suffix || '/dashboard';
                const prefix = info.prefix || '/miner';
                const address = info.address;

                if (!address) throw new Error('Invalid mining address provided.');
                const res = await axios.get(cors + ethermine + `${prefix}/${address}${suffix}`)
                    .catch(err => reject(err));

                resolve(res.data.data);
            }, 1000);
        });
    }
};


export default {
    actions,
};