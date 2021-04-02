<template>
    <div class="fade-left">
        <h2>Sign up.</h2>
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