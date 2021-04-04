<template>
	<div id="home-grid" :class="{ 'darkMode' : isDarkMode }">
		<div class="bg-theme-light" id="nav-container">
			<NavigationMenu/>
		</div>
		<div class="bg-theme-dark" id="page-container">
			<router-view class="fade-in"/>
			<AuthPrompt v-if="isAuthed" />
		</div>
	</div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';
import AuthPrompt from '@/components/AuthPrompt.vue';

export default {
    components: {
		NavigationMenu,
        AuthPrompt,
	},
	computed: {
		isDarkMode: function() { return this.$store.getters.isDarkModeEnabled; },
		isAuthed: function() { return this.$store.getters.isAuthenticated; },
	},
}
</script>

<style lang="scss" scoped>
	
	#home-grid {
		display: grid;
		grid-template-columns: 280px auto;
		height: 100vh;
	}

	#nav-container {
		-webkit-app-region: drag;
		position: relative;
		box-shadow: 5px 0px 10px -10px rgba(black, 0.5);
		z-index: 10;
	}

	#page-container {
		position: relative;
		padding-top: 40px;
		overflow-y: auto;
		overflow-x: hidden;
	}

</style>