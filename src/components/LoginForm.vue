<template>
    <div>
        <h1>Sign In.</h1>
        <p>You are current not logged in. Please login to see your <strong>ETH/ETC wallet</strong> value & <strong>ethosOS rig</strong> stats.</p>
        <section>
            <label>Email</label>
            <input type="text" placeholder="name@domain.com">
            <label>Password</label>
            <input type="text" placeholder="at least 6 characters">
        </section>
        <section class="bottom">
            <button @click="Login" class="btn-action large">Sign In</button>
            <p>Don't have an account yet? <router-link to="/authenticate?form=register"><a>Sign up</a></router-link>.</p>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        Login: function() {
            this.$router.push('/')
        }
    },
}
</script>

<style lang="scss" scoped>
    
    @import '@/assets/styles/variables.scss';

    h1 {
        font-weight: 800;
        margin-bottom: 15px;
        font-size: 40px;
    }

    p {
        color: $grey-light;
        line-height: 20px;
        font-size: 14px;
        margin: 15px 0;
    }

</style>