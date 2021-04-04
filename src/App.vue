<template>
	<div :class="{ 'darkMode' : isDarkMode }">
		<span id="drag-handle"></span>
		<div class="bg-theme-light" id="nav-container">
			<NavigationMenu/>
		</div>
		<div class="bg-theme-dark" id="page-container">
			<router-view class="fade-in"/>
		</div>
	</div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
    components: {
        NavigationMenu,
	},
	computed: {
		isDarkMode: function() { return this.$store.getters.isDarkModeEnabled; }
	},
}
</script>

<style lang="scss">
	
	@import '@/assets/styles/variables.scss';
	@import '@/assets/styles/global.scss';
	@import '@/assets/styles/main.scss';
	@import '@/assets/styles/animations.scss';
	@import '@/assets/styles/darkMode.scss';
	
	#nav-container {
		-webkit-app-region: drag;
		position: fixed;
        height: 100vh;
		overflow: hidden;
		box-shadow: 5px 0px 10px -10px rgba(black, 0.5);
		z-index: 100;
	}

	#page-container {
		padding-top: 40px;
		height: 100vh;
		overflow: auto;
        transition: all 150ms ease-out !important;
	}

	#drag-handle {
		-webkit-app-region: drag;
		position: fixed;
		width: 100%;
		height: 40px;
	}

</style>