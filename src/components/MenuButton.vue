<template>
    <div @click="onClick" class="button">
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
    
    .button {
        width: 100%;
        height: 50px;
        background: red;
    }

    .button:hover {
        opacity: 0.5;
        cursor: pointer;
    }

</style>