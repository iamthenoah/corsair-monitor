<template>
    <div class="fade-right">
        <h2>Sign In.</h2>
        <p>You are current not logged in. Please login to see your ETH wallet value & ethosOS rig stats.</p>
        <div :class="{ 'disabled' : submited }">
            <section>
                <label>Email</label>
                <input type="text" placeholder="name@domain.com">
                <label>Password</label>
                <input type="text" placeholder="password">
                <router-link to="/authenticate?form=resetPassword"><a id="forgot-password">forgot password?</a></router-link>
            </section>
            <section>
                <button @click="Login" class="btn-action large">Sign In</button>
                <p>Don't have an account yet? <router-link to="/authenticate?form=register"><a>Sign up</a></router-link>.</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['submit'],
    data() {
        return {
            submited: false,
        }
    },
    methods: {
        Login: async function() {
            this.submited = true;
            this.$emit('submit', true);
            await setTimeout(() => {
                this.submited = false;
                this.$emit('submit', false);
                this.$router.push('/');
            }, 3000);
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