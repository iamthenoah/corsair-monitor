<template>
	<div id="app-container" :class="{ 'darkMode' : isDarkMode }">
		<div id="nav-container">
			<NavigationMenu/>
		</div>
		<div>
			<main>
				<router-view/>
			</main>
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

	#app-container { 
		position: absolute;
		display: grid;
		grid-template-columns: 280px auto;
		height: 100%;
		width: 100%;
	}

	#nav-container {
		-webkit-app-region: drag;
		background: whitesmoke;
	}

</style>