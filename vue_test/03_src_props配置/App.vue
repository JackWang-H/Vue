<template>
	<div>
		<!-- 如果想输入的age是18，但是我在显示的时候+1 怎么做？
        按照这种<Student name="lisi" sex="nv" age="18" />，写法，传入的是字符串
        但是，按照这种<Student name="lisi" sex="nv" :age="18" />，传入的就是数字，
        因为，v-bind 后  ""里是 js表达式
        -->
		<Student name="李四" sex="女" :age="18" />
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name: 'App',
		components: { Student }
	}
</script>