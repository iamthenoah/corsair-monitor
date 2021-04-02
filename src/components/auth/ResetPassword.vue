<template>
    <div class="fade-left" id="reset-form">
        <div>
            <h3>Reset Password.</h3>
            <p>A reset link will be sent to you via email where you will be able to reset your password.</p>
        </div>
        <div v-if="resetEmailSent">
            <h4>Email sent.</h4>
            <p>An email has been sent to <strong>{{ email }}</strong>.</p>
            <p>Didn't receive anything? <a @click="resetEmailSent = false">Re-send email</a>.</p>
        </div>
        <div v-else>
            <input @focus="invalid.email = null" :class="{ 'invalid-input' : invalid.email }" type="text" :placeholder="invalid.email || 'current email'" v-model="email">
            <button @click="sendResetLink()" class="btn large">Send Reset Email</button>
        </div>
        <div>
            <p class="bottom">go back to <router-link to="/authenticate?form=login"><a>login</a></router-link>.</p>
        </div>
    </div>
</template>

<script>
import * as EmailValidator from 'email-validator';

export default {
    data() {
        return {
            resetEmailSent: false,
            email: '',
            invalid: {
                email: null
            }
        }
    },
    methods: {
        sendResetLink: function() {
            this.invalid.email = null;
            if (EmailValidator.validate(this.email)) {
                this.resetEmailSent = true;
            } else {
                this.invalid.email = 'invalid email';
                throw new Error('Invalid email.')
            }
        },
    }
}
</script>

<style lang="scss" scoped>

    #reset-form {
        display: grid;
        grid-auto-rows: 40% auto 5%;
        height: 280px;
    }

</style>