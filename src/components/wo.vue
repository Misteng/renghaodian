// 主页界面，
<template>
	<div class="wo">
		<div class="t5top">
			<i>图</i>

		</div>
		<div style="margin-bottom:20px;">
			<p style="text-align: center;margin-top:70px;">点击头像，立即登录</p>
			<div  style="text-align: center;border:1px solid #ccc;margin:0 20px;">
				<mt-button type="default" size="normal" >收藏</mt-button>
				<mt-button type="default" size="normal" >晒单</mt-button>
				<mt-button type="default" size="normal" >足迹</mt-button>
				<mt-button type="default" size="normal" >消息</mt-button>				
			</div>
		</div>
		<mt-cell :title=item.title  to="" is-link icon="more" class="" v-for="(item,index) in arr" :key="index"></mt-cell>
<!-- 
//● title，标题文字//● label，描述信息//● to，导航到哪里//
//● is-link，显示右边箭头，搭配to使用//● icon，前面图标//
//● class，搭配类名添加样式//
-->
		


		
	</div>
</template>
<script>
// import zs from '@/components/zs';
	export default {
		data(){
			return {
				arr:[
					{
						title:"我想要的",
						icon:"",
						to:'',
					},
					{
						title:"我的推荐",
						icon:"",
						to:'',
					},
					{
						title:"收货地址",
						icon:"",
						to:'',
					},
					{
						title:"推荐给朋友",
						icon:"",
						to:'',
					},
					{
						title:"商家自荐",
						icon:"",
						to:'',
					},
					{
						title:"意见反馈",
						icon:"",
						to:'',
					}
				]
			}
		},
// 监听属性，只要有修改，则执行函数中的代码
		watch:{

		},
		components: {  },
// 钩子函数，发送请求
		created(){
		
		},
// 函数内容
		methods:{
			
		}
	}
</script>
<style scoped>
.t5top{height: 150px;background-color: #f55;}
mt-tab-item{border:1px solid #ccc;}
</style>
