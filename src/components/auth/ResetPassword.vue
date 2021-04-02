<template>
    <div class="fade-left">
        <div v-if="resetEmailSent">
            <h3>Reset link sent.</h3>
            <p>An email should appear in your inbox. If you didn't receive an email, please wait a minute or two.</p>
            <p>Otherwise we can <a @click="sendResetLink()">send the email</a> again.</p>
        </div>
        <div v-else>
            <h3>Reset Password.</h3>
            <p>A reset link will be sent to you via email where you will be able to reset your password.</p>
            <section>
                <input type="text" placeholder="enter current email">
                <button @click="sendResetLink()" class="btn large">Send Reset Email</button>
            </section>
            <p>go back to <router-link to="/authenticate?form=login"><a>login</a></router-link>.</p>
        </div>
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
            if (this.resetEmailSent) this.$router.push('/authenticate?form=login')
            this.resetEmailSent = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    
    @import '@/assets/styles/variables.scss';

    .fade-left {
        animation: fade_in ease-out 150ms forwards; 
    }

    @keyframes fade_in {
        0% {
            transform: translateX(2.5%);
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>