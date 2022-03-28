<template>
	<div class="container">
		<Category title="美食分类">
			<img slot="center"
				src="https://tse1-mm.cn.bing.net/th/id/R-C.12f6751c8e45940eb7608d81aacbb56f?rik=m%2f0Rh7ExqzZADQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180423%2fe8f8d27fda3b471f8c3576b02e559b58.png&ehk=zYQh7QRrl6n5TjI4Lr4cMSevoFn6DV%2bSFd0ZJIDL5%2bM%3d&risl=&pid=ImgRaw&r=0"
				alt="">
			<a slot="footer" href="#">更多美食</a>
		</Category>
		<Category title="游戏分类">
			<ul slot="center">
				<li v-for="(item, index) in games" :key="index">{{item}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">单机游戏</a>
				<a href="http://www.atguigu.com">网络游戏</a>
			</div>
		</Category>
		<Category title="电影分类">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<!-- 这里用template 是为了不额外生成div -->
			<!-- <template slot="footer"> -->
			<!-- 下面这种是只有template的时候才能用的一种方法，最新的具名插槽的写法 -->
			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.atguigu.com">经典</a>
					<a href="http://www.atguigu.com">热门</a>
					<a href="http://www.atguigu.com">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	export default {
		name: 'App',
		components: { Category },
		data() {
			return {
				foods: ['火锅', '烧烤', '小龙虾', '牛排'],
				games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
				films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
			}
		},
	}
</script>

<style scoped>
	.container,
	.foot {
		display: flex;
		justify-content: space-around;
	}

	video {
		width: 100%;
	}

	img {
		width: 100%;
	}

	h4 {
		text-align: center;
	}
</style>