<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName" />

		<!-- 给student的实例对象绑定事件 -->
		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref）,这种方式更加灵活 -->
		<!-- native使用原生事件 -->
		<Student ref="student" @click.native="show" />
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name: 'App',
		components: { School, Student },
		data() {
			return {
				msg: '你好啊！',
				studentName: ''
			}
		},
		methods: {
			getSchoolName(name) {
				console.log('App收到了学校名：', name)
			},
			getStudentName(name, ...params) {
				console.log('App收到了学生名：', name, params)
				this.studentName = name
			},
			m1() {
				console.log('demo事件被触发了！')
			},
			show() {
				alert(123)
			}
		},
		mounted() {
			/*
				谁触发的atguigu事件，那么这个事件的回调函数中的this就是谁，但是：
					this.$refs.student.$on('atguigu', this.getStudentName)这种方式中，因为上面的methods的getStudentName
					函数是普通函数，所以this指向当前的vc，
					如果是上面没有getStudentName函数，直接在这里面用：
					this.$refs.student.$on('atguigu',function(name, ...params){
						console.log('App收到了学生名：', name, params)
						this.studentName = name
					}) //绑定自定义事件 
					那么这里的this就会指向student那个vc。。。。解决方法就是将function写成箭头函数的形式
			*/
			this.$refs.student.$on('atguigu', this.getStudentName) //绑定自定义事件 
			// this.$refs.student.$on('atguigu',function(name, ...params){
			// 	console.log('App收到了学生名：', name, params)
			// 	this.studentName = name
			// }) //绑定自定义事件 
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>

<style scoped>
	.app {
		background-color: gray;
		padding: 5px;
	}
</style>