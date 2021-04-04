import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/Dashboard.vue'),
		meta: { 
			// requiresAuth: true 
		}
	},
	{
		path: '/rig',
		name: 'Rig',
		component: () => import('../views/RigMonitor.vue'),
		meta: { 
			// requiresAuth: true 
		}
	},	
	{
		path: '/wallet',
		name: 'Wallet',
		component: () => import('../views/Wallet.vue'),
		meta: { 
			// requiresAuth: true 
		}
	},	
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/Profile.vue'),
		meta: { 
			// requiresAuth: true 
		}
	},	
	{
		path: '/authenticate',
		name: 'Authenticate',
		component: () => import('../views/Authenticate.vue'),
		meta: {
			navigation: false
		},
		children: [
			{
				path: '',
				component: () => import('../views/auth/LoginForm.vue')
			},
			{
				path: 'login',
				component: () => import('../views/auth/LoginForm.vue')
			},
			{
				path: 'register',
				component: () => import('../views/auth/RegisterForm.vue')
			},
			{
				path: 'resetPassword',
				component: () => import('../views/auth/ResetPasswordForm.vue')
			}
		]
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth))
		if (!store.getters.isAuthenticated) return next('/authenticate?form=login');
    next();
});

export default router;