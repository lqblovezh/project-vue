import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
      component: () => import('@/App'),
      redirect: 'index',
			children: [
				{
					path: 'index',
					component: () => import('@/components/index')
				},
				{
					path: 'test',
					component: () => import('@/components/imageTest')
				},
				{
					path: 'test2',
					component: () => import('@/components/VidoeRtmp')
				},
				{
					path: 'flv',
					component: () => import('@/components/flv')
				},
				{
					path: 'code',
					component: () => import('@/components/code')
				},
			]
		}
	]
});
