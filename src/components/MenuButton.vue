<template>
    <div @click="onClick" class="button">
        <div v-if="selected" class="selected-indicator"></div>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        route: String,
        text: String,
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

    .button {
        width: 280px;
        height: 60px;
    }

    .button:hover {
        background: white;
        cursor: pointer;
    }

    .selected-indicator {
        height: 100%;
        width: 5px;
        background: $theme;
    }

    p {
        transform: translateY(100%);
        font-size: 16px;
        margin-left: 40px;
        text-transform: uppercase;
        font-weight: 500;
    }

</style>