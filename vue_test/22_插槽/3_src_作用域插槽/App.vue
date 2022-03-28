<template>
	<div class="container">
		<Category title="游戏分类">
			<!-- 这里的data是一个对象。因为slot中传过来的数据可能有很多 -->
			<template scope="data">
				<ul>
					<li v-for="(item, index) in data.games" :key="index">{{item}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏分类">
			<template scope="data">
				<ol>
					<li v-for="(item, index) in data.games" :key="index">{{item}}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏分类">
			<!-- 结构赋值 -->
			<template scope="{games}">
				<h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	export default {
		name: 'App',
		components: { Category },
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