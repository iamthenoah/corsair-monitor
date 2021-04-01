<template>
    <div class="fade-left">
        <h1>Sign up.</h1>
        <p>Registering is free and allows you to access all of Corsair's services.</p>
        <section>
            <input type="text" placeholder="email">
            <input type="text" placeholder="choose password">
            <input type="text" placeholder="repeat password">
        </section>
        <section>
            <button class="btn-action large">Create Account</button>
            <p>Already have an account? <router-link to="/authenticate?form=login"><a>Sign in</a></router-link>.</p>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    
    @import '@/assets/styles/variables.scss';

    h1 {
        font-weight: 800;
        margin-bottom: 15px;
        font-size: 40px;
    }

    p {
        color: $grey-light;
        line-height: 20px;
        font-size: 14px;
        margin: 15px 0;
    }

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