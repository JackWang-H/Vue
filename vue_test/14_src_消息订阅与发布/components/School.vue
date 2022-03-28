<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name: 'School',
		data() {
			return {
				name: '尚硅谷',
				address: '北京',
			}
		},
		mounted() {
			// console.log('School',this)
			// this.$bus.$on('hello',(data)=>{
			// 	console.log('我是School组件，收到了数据',data)
			// })
			// 
			this.pubid = pubsub.subscribe('hello', (msgName, data) => {//回调函数中第一参数时订阅名称，第二个才是数据
				console.log(this);//通过普通函数写的是undefined，箭头函数写的是vc
				console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data);
			})
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			// 这里的取消订阅，不是通过名字，而是通过订阅id
			pubsub.unsubscribe(this.pubid)
		},
	}
</script>

<style scoped>
	.school {
		background-color: skyblue;
		padding: 5px;
	}
</style>