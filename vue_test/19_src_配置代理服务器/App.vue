<template>
	<div>
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'App',
		methods: {
			getStudents() {
				// public就相当于8080本地服务器，我们在vue.config.js中设置了一台向5000端口号服务器取数据的8080代理服务器
				// 如果public中有我们需要的东西，那么就不会向5000发送请求
				// 只用public中没有需要的东西，才会走代理
				// axios.get('http://localhost:8080/students').then(
				// 这里需要加上前缀,在端口号后面加上前缀
				axios.get('http://localhost:8080/atguigu/students').then(
					response => {
						console.log('请求成功了,', response.data);
					},
					error => {
						console.log('请求失败了！', error.message);
					}
				)
			},
			getCars() {
				// public就相当于8080本地服务器，我们在vue.config.js中设置了一台向5000端口号服务器取数据的8080代理服务器
				// 如果public中有我们需要的东西，那么就不会向5000发送请求
				// 只用public中没有需要的东西，才会走代理
				// axios.get('http://localhost:8080/students').then(
				// 这里需要加上前缀,在端口号后面加上前缀
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功了,', response.data);
					},
					error => {
						console.log('请求失败了！', error.message);
					}
				)
			},
		},
	}
</script>