<template>
	<!-- 这里v-show是为了删除完后不出现footer -->
	<div class="todo-footer" v-show="total">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<!-- 这里可以合并的<=初始化和以后的交互 -->
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name: 'MyFooter',
		props: ['todos', 'checkAllTodo', 'clearAllTodo'],
		computed: {
			//总数
			total() {
				return this.todos.length
			},
			//已完成数
			doneTotal() {
				//此处使用reduce方法做条件统计
				/* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
				//简写
				return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
			},
			//控制全选框
			isAll: {
				//全选框是否勾选
				get() {
					// 这里this.total>0是为了防止删除完后 也勾选
					return this.doneTotal === this.total && this.total > 0
				},
				//isAll被修改时set被调用
				set(value) {
					this.checkAllTodo(value)
				}
			}
		},
		methods: {
			/* checkAll(e){
				this.checkAllTodo(e.target.checked)
			} */
			//清空所有已完成
			clearAll() {
				this.clearAllTodo()
			}
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>