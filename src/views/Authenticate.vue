<template>
    <div id="auth-container">
        <div id="auth-banner">
            <img src="https://www.sia-partners.com/sites/default/files/offers/cover_picture/2020-07/iStock-1145592947-1_1.jpg">
        </div>
        <div id="auth-form">
            <div id="auth-inputs" class="content noselect">
                <div v-if="showRegisterForm">
                    <RegisterForm />
                </div>
                <div v-else>
                    <LoginForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
    components: {
        LoginForm,
        RegisterForm
    },
    computed: {
        showRegisterForm: function() {
            return this.$route.query.form == 'register';
        }
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
        height: 500px;
        transform: translate(-50%, -50%);
    }

</style>