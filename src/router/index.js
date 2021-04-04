import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
	{
		path: '/',
		component: () => import('../views/Home.vue'),
		meta: {
			redirect: {
				from: '/',
				to: '/dashboard'
			}
		},
		children: [
			{
				path: '/dashboard',
				component: () => import('../views/home/Dashboard.vue'),
				meta: { 
					// requiresAuth: true 
				}		
			},
			{
				path: '/rig',
				component: () => import('../views/home/RigMonitor.vue'),
				meta: { 
					// requiresAuth: true 
				}		
			},
			{
				path: '/wallet',
				component: () => import('../views/home/Wallet.vue'),
				meta: { 
					// requiresAuth: true 
				}		
			},
			{
				path: '/profile',
				component: () => import('../views/home/Profile.vue'),
				meta: { 
					// requiresAuth: true 
				}		
			},
			{
				path: '/dashboard',
				component: () => import('../views/home/Dashboard.vue'),
				meta: { 
					// requiresAuth: true 
				}		
			},
		]
	},
	{
		path: '/authenticate',
		component: () => import('../views/Auth.vue'),
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
    if (to.matched.some(r => r.meta.requiresAuth))
		if (!store.getters.isAuthenticated) return next('/authenticate');
	if (to.matched.some(r => r.meta.redirect))
		if (to.path === to.meta.redirect.from)
			return next(to.meta.redirect.to);
    return next();
});

export default router;