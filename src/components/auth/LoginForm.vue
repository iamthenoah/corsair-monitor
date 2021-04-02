<template>
    <div class="fade-right">
        <h1>Sign In.</h1>
        <p>You are current not logged in. Please login to see your ETH wallet value & ethosOS rig stats.</p>
        <section>
            <input type="text" placeholder="email">
            <input type="text" placeholder="password">
            <router-link to="/authenticate?form=resetPassword"><a id="forgot-password">forgot password?</a></router-link>
        </section>
        <section>
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
    
    #forgot-password {
        float: right;
        font-size: 14px;
        right: 0;
        margin-bottom: 20px;
    }

</style>