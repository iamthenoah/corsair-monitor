<template>
    <nav class="bg-theme-light">
        <MenuButton route="/" text="Dashboard"/>
        <MenuButton route="/rig" text="Mining Rig"/>
        <MenuButton route="/wallet" text="My Wallet"/>
        <section class="bottom content">
            <router-link to="/authenticate?form=login"><button class="btn-action large">Login</button></router-link>
            <DarkModeButton />
        </section>
    </nav>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';

export default {
    components: {
        MenuButton,
        DarkModeButton
    },
}
</script>

<style lang="scss" scoped>

	nav {
		position: absolute;
        padding-top: 35px;
        height: 100%;
    }

</style>