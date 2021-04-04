<template>
    <div id="nav-content">
        <section class="content">
            <div id="menu-toggle-container" @click="toggleMenu()">
                <span class="material-icons">menu</span>
            </div>
        </section>
        <section>
            <div id="main-nav-options">
                <MenuButton @click="toggleMenu(false)" route="/dashboard" text="Dashboard" icon="space_dashboard" v-bind:selected="isCurrent('dashboard')"/>
                <MenuButton @click="toggleMenu(false)" route="/rig" text="Rig Monitoring" icon="leaderboard" v-bind:selected="isCurrent('rig')"/>
                <MenuButton @click="toggleMenu(false)" route="/wallet" text="Wallet" icon="account_balance_wallet" v-bind:selected="isCurrent('wallet')"/>
                <MenuButton v-if="isAuthed" @click="toggleMenu(false)" route="/profile" text="My Profile" icon="account_circle" v-bind:selected="isCurrent('profile')"/>
                <MenuButton v-else @click="toggleMenu(false)" route="/authenticate" text="Login / Register" icon="login" v-bind:selected="isCurrent('authenticate')"/>
            </div>
        </section>
        <div class="bottom large">
            <DarkModeButton/>
        </div>
    </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';

export default {
    components: {
        MenuButton,
        DarkModeButton
    },
    computed: {
		isAuthed: function() { return this.$store.getters.isAuthenticated; },
    },
    mounted() {
        this.toggleMenu(!this.$store.getters.isMenuOpened);
    },
    methods: {
        isCurrent: function(path) { return this.$route.path.includes(path); },
        toggleMenu: function(opened = this.$store.getters.isMenuOpened) {
            this.$store.dispatch('TOGGLE_MENU', !opened);
            document.getElementById('nav-container').style.width = opened ? '280px' : '80px';
            document.getElementById('page-container').style.width = opened ? 'calc(100% - 280px)' : 'calc(100% - 80px)';
            document.getElementById('page-container').style.marginLeft = opened ? '280px' : '80px';
        },
    }
}
</script>

<style lang="scss" scoped>

	@import '@/assets/styles/variables.scss';

    #nav-content {
        position: fixed;
        padding-top: 20px;
		width: 100%;
        height: 100vh;
        overflow: hidden;
	}

    #menu-toggle-container {
        position: relative;
        height: 40px;
        width: 40px;
        border-radius: 5px;
        cursor: pointer;
        transition: all ease-in 150ms;
        color: $grey;
        
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

    #main-nav-options {
        overflow: auto;
        height: 65vh;
        width: 100%;
    }

    .hide-on-collapse {
        display: none;
    }

</style>