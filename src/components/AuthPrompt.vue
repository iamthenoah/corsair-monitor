<template>
    <div id="prompt-container" class="bg-theme-light">
        <router-link to="/authenticate?form=login"><button class="btn-action">Login</button></router-link>
        <router-link to="/authenticate?form=register"><button class="btn">Register</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
    
    #prompt-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: center;
    }

    button {
        width: 180px;
        margin: 0 5px;
    }

</style>