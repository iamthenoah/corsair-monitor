import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user';
import rig from './modules/rig';
import ui from './modules/ui';

export default createStore({
    modules: {
        user,
        rig,
        ui
    },
    plugins: [ createPersistedState() ],
});