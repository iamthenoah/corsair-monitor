<template>
    <div id="auth-container">
        <div id="auth-banner" class="noselect">
            <!-- <img src="https://www.sia-partners.com/sites/default/files/offers/cover_picture/2020-07/iStock-1145592947-1_1.jpg"> -->
            <img src="https://www.itl.cat/pngfile/big/45-450360_ice-iphone-x-tumblr-wallpaper-hd.jpg" alt="">
        </div>
        <div id="auth-form" class="content">
            <div id="auth-inputs" class="noselect">
                <div v-if="showRegisterForm">
                    <RegisterForm />
                </div>
                <div v-else-if="showResetPasswordForm">
                    <ResetPassword />
                </div>
                <div v-else>
                    <LoginForm />
                </div>
            </div>
            <div id="error-container">
                <p v-if="error" class="error-msg">{{ error }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import ResetPassword from '@/components/auth/ResetPassword.vue';

export default {
    components: {
        LoginForm,
        RegisterForm,
        ResetPassword
    },
    data() {
        return {
            error: null
        }
    },
    computed: {
        showRegisterForm: function() {
            return this.$route.query.form == 'register';
        },
        showResetPasswordForm: function() {
            return this.$route.query.form == 'resetPassword';
        }
    }
}

</script>

<style lang="scss" scoped>

    #auth-container {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100;
        background: white;
        width: 100%;
        height: 100%;
    }

    #auth-form {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 50%;
        height: 100%;
        overflow: hidden;
    }

    #auth-banner {
        position: absolute;
        right: 0;
        top: 0;
        object-fit: cover;
        width: 50%;
        height: 100%;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    #auth-inputs {
        width: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    #error-container {
        position: absolute;
        width: auto;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
    }

</style>