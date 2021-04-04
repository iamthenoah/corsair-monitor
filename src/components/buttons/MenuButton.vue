<template>
    <div @click="onClick" class="menu-button noselect" :class="{ 'selected' : selected }">
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
        onClick: function() {
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

    .selected-indicator {
        position: absolute;
        height: 100%;
        width: 5px;
        background: $theme;
    }

    .selected-indicator-bg {
        position: absolute;
        background: linear-gradient(to right, rgba($theme, 0.1), transparent);
        width: 100px;
        height: 60px;
        left: 0;
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
        left: 27.5px;
        top: 50%;
        transform: translateY(-50%);
    }

    .selected {
        color: $theme !important;

        // span, h2 {
        //     color: $theme !important;
        // }
    }

</style>