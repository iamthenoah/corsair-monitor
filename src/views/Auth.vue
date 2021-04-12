<template>
    <div id="auth-container">
        <div id="auth-banner" class="noselect bg-theme-light-opposite">
            <!-- <img class="fade-left" src="https://www.sia-partners.com/sites/default/files/offers/cover_picture/2020-07/iStock-1145592947-1_1.jpg"> -->
            <!-- <img class="fade-left" src="https://www.itl.cat/pngfile/big/45-450360_ice-iphone-x-tumblr-wallpaper-hd.jpg"> -->
            <img class="fade-left" src="https://pbs.twimg.com/media/ExGYfNTXAAU8IZ8.jpg:large">
            <!-- <img class="fade-left" src="https://rule34.xxx//samples/2262/sample_afd012684f4801fb93fd835cb856880b.jpg?2652671" alt=""> -->
            <!-- <img class="fade-left" src="https://rule34.xxx//samples/3466/sample_545fffcf078dab4df454ad1c72528c12.jpg?3907285" alt=""> -->
            <!-- <img class="fade-left" src="https://wimg.rule34.xxx//images/4022/1dcab858752e45aa0dd6f25bacaa7422.png" alt=""> -->
            <!-- <img class="fade-left" src="https://pbs.twimg.com/media/ExZbWm0U4AIFW8O?format=jpg&name=medium" alt=""> -->
        </div>
        <main id="auth-form" class="bg-theme-light-opposite">
            <div id="auth-inputs">
                <router-view @submit="onSubmit($event)" @error="onError($event)" @success="onSuccess()"></router-view>
            </div>
            <div id="error-container">
                <p v-if="error" class="error-msg">{{ error }}</p>
            </div>
            <div class="bottom">
                <DarkModeButton/> <!--backgroundClass="bg-theme-dark-opposite"-->
            </div>
            <LoadingBar v-show="submit"/>
        </main>
    </div>
</template>

<script>

import DarkModeButton from '@/components/buttons/DarkModeButton.vue';
import LoadingBar from '@/components/LoadingBar.vue';

export default {
    components: {
        DarkModeButton,
        LoadingBar
    },
    data() {
        return {
            error: null,
            submit: false,
        }
    },
    methods: {
        onSubmit: function(submited) {
            this.submit = submited; 
            this.error = null; 
        },
        onSuccess: function() {
            this.$router.push('/dashboard');
        },
        onError: function(error) {
            this.submit = false;
            this.error = error;
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
        width: 100vw;
        height: 100vh;
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
        // box-shadow: 5px 0px 10px -10px rgba(black, 0.5);
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