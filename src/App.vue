<template>
	<div id="app-container">		
		<div id="nav-container">
			<NavigationMenu/>
		</div>
		<div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
    components: {
        NavigationMenu,
	},
	mounted() {
		if (!this.$store.getters.isAuthenticated) this.$router.push('/authenticate?form=login');
	},
}
</script>

<style lang="scss">
	
    @import '@/assets/styles/variables.scss';
    @import '@/assets/styles/global.scss';
    @import '@/assets/styles/main.scss';

	#app-container { 
		-webkit-app-region: drag;
		position: absolute;
		display: grid;
		grid-template-columns: 280px auto;
		height: 100%;
		width: 100%;
	}

	#nav-container {
		background: whitesmoke;
	}

</style>