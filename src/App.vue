<template>
	<div :class="{ 'darkMode' : isDarkMode }">
		<div id="nav-container">
			<div class="bg-theme-light" id="nav-content">
				<NavigationMenu/>
			</div>
		</div>
		<div class="bg-theme">
			<div id="page-container">
				<router-view/>
			</div>
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
		width: 280px;
		overflow: hidden;
		transition: all 200ms ease-out;
	}

	#nav-content {
        padding-top: 20px;
		width: 100%;
		height: 100vh;
	}

	#page-container {
		transition: all 200ms ease-out;
		overflow-y: auto;
		overflow-x: hidden;
		width: calc(100% - 280px);
		padding-top: 40px;
		height: 100vh;
		margin-left: 280px;
	}

</style>