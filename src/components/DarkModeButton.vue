<template>
    <button @click="toggleDarkMode()" class="btn large">Dark Mode</button>
</template>

<script>
export default {
    methods: {
        toggleDarkMode: function() {
            console.log(this.$store.getters.isDarkModeEnabled);
            this.$store.dispatch('TOGGLE_DARK_MODE');
        }
    },
}
</script>

<style lang="scss" scoped>

    button {
        margin-top: 10px;
    }

</style>