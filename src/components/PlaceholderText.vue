<template>
    <div :class="backgroundClass" class="placeholder" :style="style">
        <span :class="isDarkMode ? 'shine-dark' : 'shine-light'"></span>
    </div>
</template>

<script>
export default {
    props: {
        backgroundClass: {
            type: String,
            default: 'bg-theme-dark'
        },
        radius: {
            type: String,
            default: '5px'
        },
        width: {
            type: String,
            default: '50%'
        },
        height: {
            type: String,
            default: '25px'
        },
    },
    data() {
        return {
            style: {
                width: this.width,
                height: this.height,
                borderRadius: this.radius
            }
        }
    },
    computed: {
		isDarkMode: function() { return this.$store.getters.isDarkModeEnabled; },
    }
}
</script>

<style lang="scss" scoped>

	@import '@/assets/styles/variables.scss';

    .placeholder {
        height: 220px;
        width: 100%;
        z-index: 0;
        position: relative;
        overflow: hidden;
    }

    .shine-light,
    .shine-dark {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        content: '';
        transform: translateX(100%);
        animation: slide 1s infinite;
    }

    .shine-light {
        background: linear-gradient(0.25turn, transparent, white, transparent) !important;
    }

    .shine-dark {
        background: linear-gradient(0.25turn, transparent, $dark, transparent) !important;
    }

    @keyframes slide {
        0% { transform:translateX(-100%); }
        100% { transform:translateX(100%); }
    }

</style>