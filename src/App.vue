<template>
	<div :class="{ 'darkMode' : isDarkMode }">
		<span id="drag-handle"></span>
		<div v-if="showMenu" class="bg-theme-light" id="nav-container">
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
		showMenu: function() { return this.$route.meta.navigation === undefined; }
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
		position: relative;
        height: 100vh;
		overflow: hidden;
		box-shadow: 5px 0px 10px -10px rgba(black, 0.5);
		float: left;		
	}

	#page-container {
		position: relative;
		padding-top: 40px;
		height: 100vh;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}

	#page-container,
	#nav-container {
		transition: all 150ms ease-out !important;
	}

	#drag-handle {
		-webkit-app-region: drag;
		position: fixed;
		width: 100%;
		height: 40px;
	}

</style>