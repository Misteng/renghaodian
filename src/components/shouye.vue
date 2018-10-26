// 主页界面，
<template>
	<div class="shouye">
		<!-- 可视区 -->
        <!-- 编程式导航也要有router-view -->

        <!-- 库导航 -->
        <!-- 外标签  两个标签是一样的上面是navbar，下面是tabbar标签-->
				<mt-search v-model="value" placeholder="搜索 好物/好文/晒单/唠嗑"></mt-search>
        <!-- <mt-field class=""  placeholder="搜索 好物/好文/晒单/唠嗑" type="text" style="width:85%;margin:3px 30px;border:1px solid #ccc; border-radius:15px;" ></mt-field>       -->
            <!-- 父级-->
        <mt-navbar v-model="nowtab" fixed class="aaa">
            <mt-tab-item :id="tab.id" v-for="(tab,idx) in tabs" :key="idx" @click.native="tochild(tab.id)" >
                {{tab.title}}
            </mt-tab-item>
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
import { Indicator,Search } from 'mint-ui';
Vue.component(Search.name,Search);
Vue.prototype.$loading = Indicator;
	export default {
		data(){
            return{
                // 当前路由名字，方便后面识别
				nowtab:this.$route.name,
                tabs:[
                    {
                    title:'推荐',
                    id:'tuijian',
                    icon:'home'
                    },
                    {
                    title:'晒单',
                    id:'shaidan',
                    icon:'eye'
                    },
                    {
                    title:'唠嗑',
                    id:'laodao',
                    icon:'watch'
                    }
                ],
								banner:[]
            }
        },
// 监听属性，只要有修改，则执行函数中的代码
		watch:{

		},
		components: {  },
        methods:{
// 编程式导航跳转
			tochild(id){
				// 在当前导航push点击的id，实现路由跳转
            console.log(666)
            console.log(this.$router)

				this.$router.push({name:id});
					// 记录当前页
					this.nowtab = id
				},
// 				getHome(){
// 					this.$axios.get('../../../static/api/banner.json').then(res=>{
// 						let data=res.data;
// 						console.log(data);
// 					})
// 				}
        },
        created(){
					this.getHome();
        }
	}
</script>
<style scoped>
    .aaa{position: relative;left: 0;top: 0px;}
</style>
