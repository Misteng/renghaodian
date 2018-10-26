// 主页界面，
<template>
	<div class="tuijian">
		<mt-swipe :auto="3000" style="width: 100%;height: 150px;" Continuous class="banner">
			<mt-swipe-item v-for="(item) in banner" :key="item.typeId">
				<a href="#"><img :src="['https://ocdgvcjln.qnssl.com/upload/ad/'+item.cover]" class="banner" /></a>
			</mt-swipe-item>
		</mt-swipe>
		<ul class="uk-list">
			<li class="section-item" v-for="(item) in datu" :key="item.typeid">
				<div class="uk-flex uk-flex-wrap uk-flex-space-around">
					<div class="uk-width-1-1">
						<a class="links" href="//tttell.com/xmx/prodRecommend/5bceee75fb4ffecf3b483d43" target="_blank">
							<div class="item">
								<img id="cover" :src="['https://ocdgvcjln.qnssl.com/upload/prodRecommend/'+item.cover]">
								<div class="uk-text-break uk-text-muted uk-margin-small-top">{{item.title}}</div>
							</div>
						</a>
							<div class="row-item" v-for="(list) in list.slice(0,5)" :key="list.objectid">
								<a href="//tttell.com/xmx/prod/5bced77cfb4ffecf3b46d430" target="_blank">
								<div class="item">
									<img id="cover" :src="['https://ocdgvcjln.qnssl.com/upload/prod/'+list.cover]"> 
									<div class="uk-text-break uk-text-muted uk-margin-small-top uk-text-truncate">{{list.title}}</div> 
										<div id="label-price" class="uk-text-truncate uk-text-small uk-margin-small-top">¥<span>{{list.price}}</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<!-- 
//● Auto,滚动时间间隔，为0时，取消滚动//● Speed，动画时间//
//● :show-indicators，显示下端图标，默认true//
//● Continuous，是否循环播放//● defaultIndex，初始索引值//
● Prevent，是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能
● stopPropagation，是否在 touchstart 事件触发时阻止冒泡
● change 事件，轮播图切换时会触发 change 事件，参数为切入轮播图的索引
-->



	</div>
</template>
<script>
	// import zs from '@/components/zs';
	export default {
		data() {
			return {
				banner: [],
				datu: [],
				list: [],
				header:[
					{
						title:'今日扔扔团官方优惠团'
					},
					{
						title:'精致办公|提升幸福感的办公物件'
					},
					{
						title:'入冬保暖棉被+四件套'
					},
					{
						title:'保暖打底裤有颜有温度'
					},
					{
						title:'一人食|租房用的锅碗瓢盆'
					},
					{
						title:'一周回顾口碑TOP10'
					},
					{
						title:'围巾也要好搭配'
					},
					{
						title:'适合各种身高的保暖小外套'
					},
					{
						title:'六款温暖又温柔的针织连衣裙'
					},
					{
						title:'包包也要换季哒，选了五款'
					},
					{
						title:'精选五条万搭小黑裤'
					},
					{
						title:'阻挡寒冷|可以当作厚外套的针织开衫'
					},
				],
			}
		},
		// 监听属性，只要有修改，则执行函数中的代码
		watch: {

		},
		components: {},
		// 钩子函数，发送请求
		created() {

		},
		// 函数内容
		methods: {
			gethome() {
				this.$axios.get('../../../static/api/banner.json').then(res => {
					let data = res.data;
					this.banner.push(...data.results);
				})
			},
			getdatu() {
				this.$axios.get('../../../static/api/home-datu.json').then(res => {
					let data = res.data;
					this.datu.push(...data.results.reverse());
				})
			},
			gethomelist() {
				this.$axios.get('../../../static/api/home.json').then(res => {
					let data = res.data[0].success;
					console.log(data);
					this.list.push(...data.results);
					console.log(this.list);
				})
			}

		},
		created() {
			this.gethome();
			this.getdatu();
			this.gethomelist();
		}
	}
</script>
<style scoped>

</style>
