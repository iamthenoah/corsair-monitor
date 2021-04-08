<template>
    <div @click="redirect()" class="menu-button noselect" :class="{ 'selected' : selected }">
        <div v-if="selected">
            <div class="selected-indicator-bg"></div>
            <div class="selected-indicator"></div>
        </div>
        <span class="material-icons">{{ icon }}</span>
        <h2>{{ text }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        route: String,
        text: String,
        icon: String,
        selected: Boolean
    },
    methods: {
        redirect: function() {
            this.$router.push(this.route);
        }
    },
}
</script>

<style lang="scss" scoped>
    
    @import '@/assets/styles/variables.scss';

    .menu-button {
        position: relative;
        width: 100%;
        height: 60px;
        color: $grey !important;
        -webkit-app-region: no-drag;
    }

    .menu-button:hover {
        cursor: pointer;
        background: rgba($grey, 0.1);
    }

    h2 {
        position: absolute;
        min-width: 100vw;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        margin-left: 80px;
        text-transform: capitalize;
        font-weight: 500;
    }

    span {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }

    .selected {
        color: $theme !important;

        // span, h2 {
        //     color: $theme !important;
        // }
    }

</style>