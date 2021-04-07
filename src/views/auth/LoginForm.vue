<template>
    <div class="fade-right">
        <h2>Sign In.</h2>
        <p>You are current not logged in. Please login to see your ETH wallet value & ethosOS rig stats.</p>
        <div :class="{ 'disabled' : submited }">
            <section>
                <label>Email</label>
                <input type="text" placeholder="name@domain.com" v-model="form.email">
                <label>Password</label>
                <input type="text" placeholder="password" v-model="form.password">
                <router-link to="/authenticate/resetPassword"><a id="forgot-password">forgot password?</a></router-link>
            </section>
            <section>
                <button @click="Login" class="btn-action large">Sign In</button>
                <p>Don't have an account yet? <router-link to="/authenticate/register"><a>Sign up</a></router-link>.</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['submit', 'success'],
    data() {
        return {
            submited: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        Login: async function() {
            // throw new Error('Invalid email or password.');
            this.submited = true;
            this.$emit('submit', true);
            await setTimeout(() => {
                this.submited = false;
                this.$emit('submit', false);
                this.$emit('success');
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