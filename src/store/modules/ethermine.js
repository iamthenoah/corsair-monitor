import axios from 'axios';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const ethermine = 'https://api.ethermine.org/';


const actions = {
    async GET_INFO({ commit }, uris) {
        return await new Promise((resolve, reject) => {
            setTimeout(async () => {
                if (!uris) throw new Error('Invalid mining address provided.');
                const res = await axios.get(cors + ethermine + uris.join('/'))
                    .catch(err => reject(err));
                resolve(res.data.data);
                resolve(null);
            }, 1000);
        });
    }
};


export default {
    actions,
};