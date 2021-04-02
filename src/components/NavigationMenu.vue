<template>
    <nav class="bg-theme-light">
        <MenuButton route="/" text="Dashboard" icon="space_dashboard" v-bind:selected="isCurrent('/')"/>
        <MenuButton route="/rig" text="Mining Rig" icon="assessment" v-bind:selected="isCurrent('/rig')"/>
        <MenuButton route="/wallet" text="My Wallet" icon="account_balance_wallet" v-bind:selected="isCurrent('/wallet')"/>
        <section class="bottom content">
            <router-link to="/authenticate?form=login"><button class="btn-action large">Login</button></router-link>
        </section>
    </nav>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';

export default {
    components: {
        MenuButton,
    },
    methods: {
        isCurrent: function(path) {
            return this.$route.path == path;
        }
    }
}
</script>

<style lang="scss" scoped>

	nav {
		position: absolute;
        padding-top: 35px;
        height: 100%;
    }

</style>