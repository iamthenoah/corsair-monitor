<template>
	<div :class="{ 'darkMode' : isDarkMode }">
		<span id="drag-handle"></span>
		<router-view/>
	</div>
</template>

<script>
export default {
	computed: {
		isDarkMode: function() { return this.$store.getters.isDarkModeEnabled; },
	},
}
</script>

<style lang="scss">
	
	@import '@/assets/styles/variables.scss';
	@import '@/assets/styles/global.scss';
	@import '@/assets/styles/main.scss';
	@import '@/assets/styles/animations.scss';
	@import '@/assets/styles/darkMode.scss';

	#drag-handle {
		-webkit-app-region: drag;
		position: fixed;
		width: 100%;
		height: 40px;
	}

</style>