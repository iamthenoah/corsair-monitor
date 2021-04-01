<template>
    <div id="nav">
        <section>
            <router-link to="/">Dashboard</router-link>
            <router-link to="/rig">Rig</router-link>
            <router-link to="/wallet">Wallet</router-link>
        </section>
        <section>
            <router-link to="/authenticate?type=login">Login</router-link>
            <router-link to="/authenticate?type=register">Register</router-link>
        </section>
    </div>
</template>

<script>

</script>

<style lang="scss">

	#nav {
		position: absolute;
		top: 35px;
    }
    
</style>