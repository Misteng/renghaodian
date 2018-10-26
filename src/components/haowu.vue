// 主页界面，
<template>
	<div class="haowu">
		<!-- 可视区 -->
        <!-- 编程式导航也要有router-view -->
		<mt-cell></mt-cell>

<mt-header fixed title="好物" class="dingbu">
	<router-link to="/" slot="left">
	<mt-button icon="">搜索</mt-button>
	</router-link>
	<router-link to="/" slot="right">
	<mt-button @click="handleClose">提供线索</mt-button>
	<mt-button icon="more" slot="right"></mt-button>
	</router-link>
</mt-header>

<!-- 
//● fixed，吸顶//● title，标题//● to，导航到//
//● slot，左右边//● icon，图标// 
-->
        <!-- 库导航 -->
        <!-- 外标签  两个标签是一样的上面是navbar，下面是tabbar标签-->
        <mt-navbar>
            <!-- 父级-->
            <mt-navbar v-model="nowtab" fixed class="dingweibbb">
<!-- 子级，注意循环的时候，加key，加bind -->
<!-- 编程式导航，带入当时的id -->
                <mt-tab-item :id="tab.id" v-for="(tab,idx) in tabs" :key="idx" @click.native="tochild2(tab.id)" >
                    {{tab.title}}
                </mt-tab-item>
            </mt-navbar>
        </mt-navbar>
		 <router-view/>
		
	</div>
</template>
<script>
// import zs from '@/components/zs';
// 引入库
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
// 引入axios
import axios from 'axios';
Vue.use(axios);
Vue.prototype.$axios = axios;
import '@/sass/base.scss';
// 单独引入样式
import 'mint-ui/lib/style.css';
// ？？？？？？？？？？？？？？？？？？？？？？？？？？？？
import { Indicator } from 'mint-ui';
Vue.prototype.$loading = Indicator;
	export default {
		data(){
            return{
                // 当前路由名字，方便后面识别
				// nowtab:this.$route.name,
                // 导航数据
                nowtab:this.$route.name,
                tabs:[
                    {
                    title:'好物',
                    id:'haowu2',
                    icon:'home'
                    },
                    {
                    title:'美衣搭配',
                    id:'meiyi',
                    icon:'eye'
                    },
                    {
                    title:'鞋包配饰',
                    id:'xiebao',
                    icon:'watch'
                    },
                    {
                    title:'扔扔护肤团',
                    id:'rengreng',
                    icon:'star'
                    },
                    {
                    title:'扔美食',
                    id:'rengmeishi',
                    icon:'telescope'
                    },
                    {
                    title:'生活的品味',
                    id:'shenghuo',
                    icon:'star'
                    },
                    {
                    title:'扔男装',
                    id:'rengnanzhuang',
                    icon:'telescope'
                    }
                ]
            }
        },
// 监听属性，只要有修改，则执行函数中的代码
		watch:{

		},
		components: {  },
        methods:{
// 编程式导航跳转
			tochild2(id){
				// 在当前导航push点击的id，实现路由跳转
            	console.log(id)
            	console.log(this.$router)

            	console.log(666)
				this.$router.push({name:id});
					// 记录当前页
					this.nowtab = id
				},
			handleClose(){
				console.log(555)
			},
        },
        created(){
        }
	}
</script>
<style scoped>
.dingbu{background-color: #fff;color:red;}
.dingweibbb{position: relative;left: 0;top: 0px;}
</style>
