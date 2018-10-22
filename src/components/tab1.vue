// 主页界面，
<template>
	<div class="tab1">
		<!-- 可视区 -->
        <!-- 编程式导航也要有router-view -->
		<mt-cell></mt-cell>
		1
        <router-view/>
        <!-- 库导航 -->
        <!-- 外标签  两个标签是一样的上面是navbar，下面是tabbar标签-->
        <mt-navbar>
            <!-- 父级-->
            <mt-navbar v-model="nowtab" fixed>
<!-- 子级，注意循环的时候，加key，加bind -->
<!-- 编程式导航，带入当时的id -->
                <mt-tab-item :id="tab.id" v-for="(tab,idx) in tabs" :key="idx" @click.native="tochild(tab.id)">
                    {{tab.title}}
                </mt-tab-item>
            </mt-navbar>
        </mt-navbar>
		
		
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
				nowtab:this.$route.name,
                // 导航数据
// 新项目，修改数据！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
                tabs:[
                    {
                    title:'taba',
                    id:'taba',
                    icon:'home'
                    },
                    {
                    title:'tabb',
                    id:'tabb',
                    icon:'eye'
                    },
                    {
                    title:'tabc',
                    id:'tabc',
                    icon:'watch'
                    },
                    {
                    title:'tabd',
                    id:'tabd',
                    icon:'star'
                    },
                    {
                    title:'tabe',
                    id:'tabe',
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
			tochild(id){
				// 在当前导航push点击的id，实现路由跳转
            console.log(666)

				this.$router.push({name:id});
					// 记录当前页
					this.nowtab = id
				},

        },
        created(){

        }
	}
</script>
<style scoped>

</style>
