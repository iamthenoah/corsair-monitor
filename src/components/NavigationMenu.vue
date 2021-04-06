<template>
    <nav>
        <section class="content">
            <div id="menu-toggle-container" @click="toggleMenu()">
                <span class="material-icons">menu</span>
            </div>
        </section>
        <section>
            <MenuButton 
                @click="toggleMenu(false)" 
                route="/dashboard" 
                text="Dashboard" 
                icon="space_dashboard" 
                :selected="isCurrent('dashboard')"
            />
            <MenuButton 
                @click="toggleMenu(false)" 
                route="/rigs" 
                text="Rig Monitoring" 
                icon="leaderboard" 
                :selected="isCurrent('rig')"
            />
            <MenuButton 
                @click="toggleMenu(false)" 
                route="/wallet" 
                text="Wallet" 
                icon="account_balance_wallet" 
                :selected="isCurrent('wallet')"
            />
            <MenuButton 
                v-if="isAuthed" 
                @click="toggleMenu(false)" 
                route="/profile" 
                text="My Profile" 
                icon="account_circle" 
                :selected="isCurrent('profile')"
            />
        </section>
        <div class="bottom large">
            <div class="content">
                <router-link to="/authenticate">
                    <button v-if="isMenuOpened" class="btn btn-icon large"><span class="material-icons">login</span></button>
                    <button v-else class="btn btn-icon-left large"><span class="material-icons">login</span>Login</button>
                </router-link>
            </div>
            <DarkModeButton/>
        </div>
    </nav>
</template>

<script>
import MenuButton from '@/components/buttons/MenuButton.vue';
import DarkModeButton from '@/components/buttons/DarkModeButton.vue';

export default {
    components: {
        MenuButton,
        DarkModeButton
    },
    computed: {
        isAuthed: function() { return this.$store.getters.isAuthenticated; },
        isMenuOpened: function() { return this.$store.getters.isMenuOpened; },
    },
    mounted() {
        this.toggleMenu(!this.$store.getters.isMenuOpened);
    },
    methods: {
        isCurrent: function(path) { return this.$route.path.includes(path); },
        toggleMenu: function(opened = this.$store.getters.isMenuOpened) {
            this.$store.dispatch('TOGGLE_MENU', !opened);
            document.getElementById('main-container').scrollTo(0, 0);
            document.getElementById('nav-container').style.width = opened ? '280px' : '80px';
        },
    }
}
</script>

<style lang="scss" scoped>

    @import '@/assets/styles/variables.scss';

    nav {
        position: relative;
        height: 100%;
        width: 100%;
    }

    #menu-toggle-container {
        position: relative;
        height: 40px;
        width: 40px;
        z-index: 10;
        transition: all ease-in 150ms;
        color: $grey;
        cursor: pointer;
        
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 28px;
        }
    }

    #menu-toggle-container:hover {
        opacity: 0.75;
    }

</style>