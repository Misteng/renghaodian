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
import shouye from '@/components/shouye';
import haowu from '@/components/haowu';
import geinixiangyao from '@/components/geinixiangyao';
import fuli from '@/components/fuli';
import wo from '@/components/wo';
import tuijian from '@/components/tuijian';
import shaidan from '@/components/shaidan';
import laodao from '@/components/laodao';

import haowu2 from '@/components/haowu2';
import meiyi from '@/components/meiyi';
import xiebao from '@/components/xiebao';
import rengreng from '@/components/rengreng';
import rengmeishi from '@/components/rengmeishi';
import shenghuo from '@/components/shenghuo';
import rengnanzhuang from '@/components/rengnanzhuang';

import geinixiangyao2 from '@/components/geinixiangyao2';
import woxiangyao from '@/components/woxiangyao';

import quanbu from '@/components/quanbu';
import choujiang from '@/components/choujiang';
import fuyougou from '@/components/fuyougou';
import baicaimiao from '@/components/baicaimiao';

export default new Router({
	linkActiveClass: 'is-active',
// 配置理由参数
// 新项目，修改url及组件引入，组件使用！！！！！！！！！！！！！！！！！！！！！！
  	routes: [
    	{
		path: '/shouye',
		name: 'shouye',
		component: shouye,
		props:true,
		// 子路由的匹配方式：
		// /user/子路由
		children:[
				{
				path: '/shouye/tuijian',
				name: 'tuijian',
				component: tuijian,
				props:true
				},
				{
				path:'/shouye/shaidan',
				name:'shaidan',
				component:shaidan
				},
				{
				path:'/shouye/laodao',
				name:'laodao',
				component:laodao
				},
				{
				path: '/shouye',
				name: 'tuijian',
				component: tuijian,
				props:true
				},
				{
				path: '/shouye/',
				name: 'tuijian',
				component: tuijian,
				props:true
				},
				{
				path: '',
				name: 'tuijian',
				component: tuijian,
				props:true
				}
			]
		},
		{
		path: '/',
		name: 'shouye',
		component: shouye,
		props:true,
		children:[
				{
				path: '/',
				name: 'tuijian',
				component: tuijian,
				}
				]
		},
		{
		path:'/haowu',
		name:'haowu',
		component:haowu,
		props:true,
		children:[
			{
			path: '/haowu/haowu2',
			name: 'haowu2',
			component: haowu2,
			props:true
			},
			{
			path:'/haowu/meiyi',
			name:'meiyi',
			component:meiyi
			},
			{
			path:'/haowu/xiebao',
			name:'xiebao',
			component:xiebao
			},
			{
			path:'/haowu/rengreng',
			name:'rengreng',
			component:rengreng,	
			},
			{
			path:'/haowu/rengmeishi',
			name:'rengmeishi',
			component:rengmeishi
			},
			{
			path:'/haowu/shenghuo',
			name:'shenghuo',
			component:shenghuo
			},
			{
			path:'/haowu/rengnanzhuang',
			name:'rengnanzhuang',
			component:rengnanzhuang
			},
			{
			path: '',
			name: 'haowu2',
			component: haowu2,
			props:true
			},
		]
		},
		{
		path:'/geinixiangyao',
		name:'geinixiangyao',
		component:geinixiangyao,
		children:[
			{
			path: '/geinixiangyao/geinixiangyao2',
			name: 'geinixiangyao2',
			component: geinixiangyao2,
			props:true
			},
			{
			path:'/geinixiangyao/woxiangyao',
			name:'woxiangyao',
			component:woxiangyao
			},
			{
			path: '/geinixiangyao',
			name: 'geinixiangyao2',
			component: geinixiangyao2,
			props:true
			}
		]
		},
		{
		path:'/fuli',
		name:'fuli',
		component:fuli,
		children:[
				{
				path: '/fuli/quanbu',
				name: 'quanbu',
				component: quanbu,
				props:true
				},
				{
				path:'/fuli/choujiang',
				name:'choujiang',
				component:choujiang
				},
				{
				path:'/fuli/fuyougou',
				name:'fuyougou',
				component:fuyougou
				},
				{
				path:'/fuli/baicaimiao',
				name:'baicaimiao',
				component:baicaimiao,	
				},
				{
				path: '',
				name: 'quanbu',
				component: quanbu,
				props:true
				},
			]
		},
		{
		path:'/wo',
		name:'wo',
		component:wo,
		}
  	]
})
