<template>
    <div>
        <section class="content">
            <div id="menu-toggle-container" @click="toggleMenu()">
                <span class="material-icons">menu</span>
            </div>
        </section>
        <section>
            <div id="main-nav-options">
                <MenuButton route="/" text="Dashboard" icon="space_dashboard" v-bind:selected="isCurrent('/')"/>
                <MenuButton route="/rig" text="Rig Monitoring" icon="leaderboard" v-bind:selected="isCurrent('/rig')"/>
                <MenuButton route="/wallet" text="Wallet" icon="account_balance_wallet" v-bind:selected="isCurrent('/wallet')"/>
                <MenuButton route="/profile" text="My Profile" icon="account_circle" v-bind:selected="isCurrent('/profile')"/>
            </div>
        </section>
        <div class="bottom large">
            <div class="content" :class="{ 'hide-on-collapse' : !openMenu }">
                <router-link to="/authenticate?form=login"><button class="btn-action large">Login</button></router-link>
            </div>
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
    data() {
        return {
            openMenu: null
        }
    },
    mounted() {
        this.toggleMenu(!this.$store.getters.isMenuOpened);
    },
    methods: {
        isCurrent: function(path) {
            return this.$route.path == path;
        },
        toggleMenu: function(opened = this.$store.getters.isMenuOpened) {
            this.$store.dispatch('TOGGLE_MENU', !opened);
            this.openMenu = opened;
            document.getElementById('nav-container').style.width = opened ? '280px' : '80px';
            document.getElementById('page-container').style.marginLeft = opened ? '280px' : '80px';
            document.getElementById('page-container').style.width = opened ? 'calc(100% - 280px)' : 'calc(100% - 80px)';
        },
    }
}
</script>

<style lang="scss" scoped>

	@import '@/assets/styles/variables.scss';

    #menu-toggle-container {
        position: relative;
        height: 40px;
        width: 40px;
        border-radius: 5px;
        float: right;
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
        height: 65vh;
        width: 100%;
        overflow: auto;
    }

    .hide-on-collapse {
        display: none;
    }

</style>