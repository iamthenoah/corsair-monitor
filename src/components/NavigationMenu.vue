<template>
    <div id="nav-content">
        <section class="content">
            <div id="menu-toggle-container" @click="toggleMenu()">
                <span class="material-icons">menu</span>
            </div>
            <div v-if="!isMenuOpened" id="nav-dark-mode-button">
                <DarkModeButton/>
            </div>
        </section>
        <section>
            <div id="main-nav-options">
                <MenuButton 
                    @click="toggleMenu(false)" 
                    route="/dashboard" 
                    text="Dashboard" 
                    icon="space_dashboard" 
                    :selected="isCurrent('dashboard')"
                />
                <MenuButton 
                    @click="toggleMenu(false)" 
                    route="/rig" 
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
            </div>
        </section>
        <div class="bottom">
            <MenuButton 
                v-if="isAuthed" 
                @click="toggleMenu(false)" 
                route="/profile" 
                text="My Profile" 
                icon="account_circle" 
                :selected="isCurrent('profile')"
            />
            <MenuButton 
                v-else
                @click="toggleMenu(false)" 
                route="/authenticate" 
                text="Login / Register" 
                icon="login" 
                :selected="isCurrent('authenticate')"
            />
        </div>
    </div>
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
            document.getElementById('home-grid').style.gridTemplateColumns = opened ? '280px auto' : '80px auto';

            // document.getElementById('page-container').style.width = opened ? 'calc(100% - 280px)' : 'calc(100% - 80px)';
            // document.getElementById('page-container').style.marginLeft = opened ? '280px' : '80px';
        },
    }
}
</script>

<style lang="scss" scoped>

	@import '@/assets/styles/variables.scss';

    #nav-content {
        position: relative;
        padding-top: 20px;
		width: 100%;
        height: 100vh;
        overflow: hidden;
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

    #nav-dark-mode-button {
        position: absolute;
        top: 20px;
        right: 0;
    }

</style>