<template>
    <div id="auth-container">
        <div id="auth-banner" class="noselect bg-theme">
            <!-- <img class="fade-left" src="https://www.sia-partners.com/sites/default/files/offers/cover_picture/2020-07/iStock-1145592947-1_1.jpg"> -->
            <!-- <img class="fade-left" src="https://www.itl.cat/pngfile/big/45-450360_ice-iphone-x-tumblr-wallpaper-hd.jpg"> -->
            <img class="fade-left" src="https://wimg.rule34.xxx//images/4022/1dcab858752e45aa0dd6f25bacaa7422.png" alt="">
            <!-- <img class="fade-left" src="https://pbs.twimg.com/media/ExZbWm0U4AIFW8O?format=jpg&name=medium" alt=""> -->
        </div>
        <main id="auth-form" class="bg-theme">
            <div id="auth-inputs">
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
            <div class="bottom right">
                <DarkModeButton />
            </div>
        </main>
    </div>
</template>

<script>

import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import ResetPassword from '@/components/auth/ResetPassword.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';

export default {
    components: {
        LoginForm,
        RegisterForm,
        ResetPassword,
        DarkModeButton
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
    },
    errorCaptured(err, vm, info) {
        this.error = err.message;
        setTimeout(() => {
            this.error = null
        }, 3000);
    }
}

</script>

<style lang="scss" scoped>

	@import '@/assets/styles/variables.scss';
    
    #auth-container {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100;
        background: white;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #auth-form {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 50%;
        height: 100%;
        overflow: hidden;
        box-shadow: 5px 0px 15px -10px rgba(black, 0.5);

    }

    #auth-banner {
        position: absolute;
        right: 0;
        top: 0;
        object-fit: cover;
        width: 50%;
        height: 100%;
        overflow: hidden;
		-webkit-app-region: drag;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    #auth-inputs {
        position: absolute;
        width: 300px;
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