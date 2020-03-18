import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: () => import('@/App'),
			children: [
				{
					path: 'test',
					component: () => import('@/components/imageTest')
				},
				{
					path: 'test2',
					component: () => import('@/components/VidoeRtmp')
				},
			]
		}
	]
});
