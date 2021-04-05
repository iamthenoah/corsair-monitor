<template>
	<div id="home-container" :class="{ 'darkMode' : isDarkMode }">
		<div class="bg-theme-light">
			<div id="nav-container">
				<NavigationMenu />
			</div>
		</div>
		<div class="bg-theme-dark" id="main-container">
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
		isDarkMode: function() { return this.$store.getters.isDarkModeEnabled; },
	}
}
</script>

<style lang="scss" scoped>

	#home-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		position: fixed;
	}

	#nav-container {
		-webkit-app-region: drag;
		height: 100vh;
		padding-top: 20px;
		transition: all 200ms ease-out;
		display: inline-flex;
		overflow: hidden;
		box-shadow: 5px 0px 10px -10px rgba(black, 0.5);
	}

	#main-container {
		padding-top: 40px;
		width: 100%;
		display: inline-flex;
		z-index: -10;
		overflow: auto;
	}

</style>