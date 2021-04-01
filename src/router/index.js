import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: () => import('../views/Dashboard.vue')
	},
	{
		path: '/rig',
		name: 'Rig',
		component: () => import('../views/Rig.vue')
	},	
	{
		path: '/wallet',
		name: 'Wallet',
		component: () => import('../views/Wallet.vue')
	},	
	{
		path: '/authenticate',
		name: 'Authenticate',
		component: () => import('../views/Authenticate.vue')
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;