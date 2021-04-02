<template>
    <div id="nav">
        <div class="content">
            <section>
                <MenuButton route="/" text="Dashboard"/>
                <MenuButton route="/rig" text="Mining Rig"/>
                <MenuButton route="/wallet" text="My Wallet"/>
            </section>
        </div>
        <section class="bottom">
            <div id="auth-options">
                <router-link to="/authenticate?form=login"><button class="btn-action large">Login</button></router-link>
                <router-link to="/authenticate?form=register"><button class="btn-action large">Register</button></router-link>
            </div>
        </section>
    </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';

export default {
    components: {
        MenuButton
    },
}
</script>

<style lang="scss" scoped>

	#nav {
		position: absolute;
        padding-top: 35px;
        height: 100%;
    }

    #auth-options {
        margin: 0 15px;

        button {
            margin-top: 10px;
        }
    }

</style>