<template>
    <div class="fade-left" id="reset-form">
        <div>
            <h3>Reset Password.</h3>
            <p>A reset link will be sent to you via email where you will be able to reset your password.</p>
        </div>
        <div :class="{ 'disabled' : submited }">
            <div v-if="resetEmailSent">
                <h4>Email sent.</h4>
                <p>An email has been sent to <strong>{{ email }}</strong>.</p>
                <p>Didn't receive anything? <a @click="resetEmailSent = false">Re-send email</a>.</p>
            </div>
            <div v-else >
                <label>Email</label>
                <input type="text" placeholder="current email" v-model="email">
                <button @click="sendResetLink()" class="btn large">Send Reset Email</button>
            </div>
            <p class="bottom">Go back to <router-link to="/authenticate/login"><a>login</a></router-link>.</p>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['submit'],
    data() {
        return {
            resetEmailSent: false,
            submited: false,
            email: '',
        }
    },
    methods: {
        sendResetLink: function() {
            this.submited = true;
            this.$emit('submit', true);

            setTimeout(() => {
                this.$emit('submit', false);
                this.submited = false;
                this.resetEmailSent = true;
            }, 3000);
        },
    }
}
</script>

<style lang="scss" scoped>

    #reset-form {
        display: grid;
        grid-auto-rows: auto 190px auto;
        height: 330px;
    }

</style>