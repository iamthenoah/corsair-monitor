<template>
    <div id="nav">
        <div class="content">
            <section>
                <MenuButton route="/" text="Dashboard"/>
                <MenuButton route="/rig" text="Mining Rig"/>
                <MenuButton route="/wallet" text="My Wallet"/>
            </section>
        </div>
        <router-link to="/authenticate?type=login">Login</router-link>
        <router-link to="/authenticate?type=register">Register</router-link>
    </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';

export default {
    components: {
        MenuButton
    }
}
</script>

<style lang="scss">

	#nav {
		position: absolute;
		top: 35px;
    }
    
</style>