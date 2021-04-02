<template>
    <div class="mode-icon-container bg-theme-light" @click="toggleDarkMode()">
        <div v-if="isDarkMode">
            <span class="material-icons light">light_mode</span>
        </div>
        <div v-else>
            <span class="material-icons dark">dark_mode</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isDarkMode: function() {
            return this.$store.getters.isDarkModeEnabled;
        }
    },
    methods: {
        toggleDarkMode: function() {
            this.$store.dispatch('TOGGLE_DARK_MODE');
        }
    },
}
</script>

<style lang="scss" scoped>

	@import '@/assets/styles/variables.scss';

    .mode-icon-container {
        position: relative;
        height: 38px;
        width: 38px;
        background: whitesmoke;
        margin: 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .light {
        color: $yellow !important;
    }

    .dark {
        color: $navy !important;
    }

</style>