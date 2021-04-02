<template>
    <div @click="onClick" class="menu-button noselect">
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
        width: 280px;
        height: 60px;
        color: $grey;
        margin-bottom: 10px;
		-webkit-app-region: no-drag;
    }

    .menu-button:hover {
        color: lighten($theme, 20%);
        cursor: pointer;
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
        width: 50%;
        height: 60px;
        left: 0;
    }

    h2 {
        transform: translateY(100%);
        font-size: 16px;
        margin-left: 70px;
        text-transform: capitalize;
        font-weight: 500;
    }

    span {
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
    }

</style>