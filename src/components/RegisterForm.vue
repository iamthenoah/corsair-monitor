<template>
    <div>
        <h1>Sign up.</h1>
        <p>Registering is free and allows you to access all of Corsair's services.</p>
        <section>
            <label>Email</label>
            <input type="text" placeholder="name@domain.com">
            <label>Choose Password</label>
            <input type="text" placeholder="at least 6 characters">
            <label>Repeat Password</label>
            <input type="text" placeholder="at least 6 characters">
        </section>
        <section class="bottom">
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

</style>