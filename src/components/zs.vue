<template>
	<div id="zs">		
		<li class="danyuange">
			<div class="tupian">
				<img :src="res.src" alt="">
			</div>
			<span>{{res.title}}</span>
		</li>
	</div>
</template>

<script>
	export default {
		name: 'zs',
		data () {
			return {
				res:{
					src:'/static/img/QQ截图20181019092528.bcde561.png',
					title:'fgasdg 00000000'
				},
			}
		},
		methods:{

		},
	}
</script>

<style>
	.danyuange{height: 250px;margin: 0;padding: 0;list-style: none;padding:10px;}
	.danyuange img{height: 100px;width: 100%;}
</style>
