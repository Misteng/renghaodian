// 路由页面
// 引入使用路由
// 引入所有组件
// 配置路由routes，参数path(匹配当前url，符合则渲染)，name，component（需要渲染的组件名）
// props为子级

// 引入插件
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 引入各组件
// 路由中@的含义，只是个别名
		// alias: {
		// 	'vue$': 'vue/dist/vue.esm.js',
		// 	'@': resolve('src'),
		//   }
import tab1 from '@/components/tab1';
import tab2 from '@/components/tab2';
import tab3 from '@/components/tab3';
import tab4 from '@/components/tab4';
import tab5 from '@/components/tab5';
import taba from '@/components/taba';
import tabb from '@/components/tabb';
import tabc from '@/components/tabc';
import tabd from '@/components/tabd';
import tabe from '@/components/tabe';
export default new Router({
	linkActiveClass: 'is-active',
// 配置理由参数
// 新项目，修改url及组件引入，组件使用！！！！！！！！！！！！！！！！！！！！！！
  	routes: [
    	{
		path: '/tab1',
		name: 'tab1',
		component: tab1,
		props:true,
		// 子路由的匹配方式：
		// /user/子路由
		children:[
				{
				path: '/tab1/taba',
				name: 'taba',
				component: taba,
				props:true
				},
				{
				path:'/tab1/tabb',
				name:'tabb',
				component:tabb
				},
				{
				path:'/tab1/tabc',
				name:'tabc',
				component:tabc
				},
				{
				path:'/tab1/tabd',
				name:'tabd',
				component:tabd,	
				},
				{
				path:'/tab1/tabe',
				name:'tabe',
				component:tabe
				},
				{
				path: '/tab1',
				name: 'taba',
				component: taba,
				props:true
				}
			]
		},
		{
		path: '/',
		name: 'tab1',
		component: tab1,
		props:true,
		children:[
				{
				path: '/',
				name: 'taba',
				component: taba,
				props:true
				}
				]
		},
		{
		path:'/tab2',
		name:'tab2',
		component:tab2
		},
		{
		path:'/tab3',
		name:'tab3',
		component:tab3
		},
		{
		path:'/tab4',
		name:'tab4',
		component:tab4
		},
		{
		path:'/tab5',
		name:'tab5',
		component:tab5,
		}
  	]
})
