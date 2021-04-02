<template>
    <div class="fade-left" id="reset-form">
        <h3>Reset Password.</h3>
        <p>A reset link will be sent to you via email where you will be able to reset your password.</p>
        <div v-if="resetEmailSent">
            <section>
                <p id="reset-sent">Email sent.</p>
                <p>Didn't receive anything? <a @click="sendResetLink()">Re-send email</a>.</p>
            </section>
        </div>
        <div v-else>
            <section>
                <input type="text" placeholder="current email">
                <button @click="sendResetLink()" class="btn large">Send Reset Email</button>
            </section>
        </div>
        <p class="bottom">go back to <router-link to="/authenticate?form=login"><a>login</a></router-link>.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            resetEmailSent: false
        }
    },
    methods: {
        sendResetLink: function() {
            this.resetEmailSent = true;
        }
    }
}
</script>

<style lang="scss" scoped>

    #reset-form {
        height: 280px;
    }

    #reset-sent {
        margin-top: 40px;
        font-size: 20px;
        font-weight: 500;
    }

</style>