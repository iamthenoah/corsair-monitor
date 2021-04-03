<template>
    <div class="mode-icon-container" :class="getBGClass" @click="toggleDarkMode()">
        <div v-if="isDarkMode">
            <span class="material-icons">light_mode</span>
        </div>
        <div v-else>
            <span class="material-icons dark">dark_mode</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backgroundClass: String,
    },
    computed: {
        isDarkMode: function() {
            return this.$store.getters.isDarkModeEnabled;
        },
        getBGClass: function() {
            return this.backgroundClass ? this.backgroundClass : 'bg-theme-light';
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
		-webkit-app-region: no-drag;
        position: relative;
        height: 35px;
        width: 35px;
        margin: 22.5px;
        border-radius: 5px;
        cursor: pointer;
    }

    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
    }

    .dark {
        color: $navy !important;
    }

</style>