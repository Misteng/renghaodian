// 根组件，主要制作导航栏，可视区域

<template>
    <div id="app">
        <!-- 可视区 -->
        <!-- 编程式导航也要有router-view -->
        <router-view/>
        <!-- 库导航 -->
        <!-- 外标签  两个标签是一样的上面是navbar，下面是tabbar标签-->
        <mt-tabbar>
            <!-- 父级-->
            <mt-tabbar v-model="nowtab" fixed>
<!-- 子级，注意循环的时候，加key，加bind -->
<!-- 编程式导航，带入当时的id -->
                <mt-tab-item :id="tab.id" v-for="(tab,idx) in tabs" :key="idx" @click.native="goto(tab.id)">
                    <!-- 注意图片加bind -->
                    <img :src="tab.icon" slot="icon">
                    {{tab.title}}
                </mt-tab-item>
            </mt-tabbar>
        </mt-tabbar>
    </div>
</template>

<script>
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
        // 组件名字
        name: 'App',
        data(){
            return{
                // 当前路由名字，方便后面识别
                nowtab:this.$route.name,
                // 导航数据
// 新项目，修改数据！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
                tabs:[
                    {
                    title:'tab1',
                    id:'tab1',
                    icon:'home'
                    },
                    {
                    title:'tab2',
                    id:'tab2',
                    icon:'eye'
                    },
                    {
                    title:'tab3',
                    id:'tab3',
                    icon:'watch'
                    },
                    {
                    title:'tab4',
                    id:'tab4',
                    icon:'star'
                    },
                    {
                    title:'tab5',
                    id:'tab5',
                    icon:'telescope'
                    }
                ]
            }
        },
        computed:{

        },
        watch:{

        },
        methods:{
// 编程式导航跳转
        goto(id){
            // 在当前导航push点击的id，实现路由跳转
            console.log(666)
            this.$router.push({name:id});
                // 记录当前页
                this.nowtab = id
            },

        },
// 加载图标的钩子函数，使用octicons库，拼接生成
        created(){
            console.log(this.tabs);
            this.tabs.forEach(item=>{
                item.icon = 'static/assets/octicons/build/svg/'+item.icon + '.svg';
            });
        }
    }
</script>

<style lang="scss">

</style>

<!-- 在全局引入 -->

