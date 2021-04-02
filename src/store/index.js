import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user';
import theme from './modules/theme';

export default createStore({
    modules: {
        user,
        theme
    },
    plugins: [ createPersistedState() ],
});