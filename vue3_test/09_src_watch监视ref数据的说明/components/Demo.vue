<template>
    <!-- Vue3组件中的模板结构可以没有根标签 -->
    <h1>和为: {{sum}}</h1>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='！'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}K</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
    import { reactive, ref, watch } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            let sum = ref(0)
            let msg = ref('你好啊')

            let person = ref({
                name: '张三',
                age: 8,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            console.log(person)

            watch(sum, (newValue, oldValue) => {
                console.log('sum的值变化了', newValue, oldValue)
            })
            // 这里如果是ref定义的person，监视的是person,只有当person.value的整个地址彻底改变后，才能监视成功，如果是person的属性值变了，是不会监视的
            // 要想监视成功，第一种方法：就得是监视person.value  ;第二种方法就是深度监视{deep:true}

            /* watch(person, (newValue, oldValue) => {
                console.log('person的值变化了', newValue, oldValue)
            }) */
            // 第一种解决方法,这种方法监视的就不是ref所定义的数据了，而是reactive所定义的数据
            /* watch(person.value, (newValue, oldValue) => {
                console.log('person的值变化了', newValue, oldValue)
            }) */

            // 第二种方法
            watch(person, (newValue, oldValue) => {
                console.log('person的值变化了', newValue, oldValue)
            }, { deep: true })

            return {
                sum,
                msg,
                person,
            }
        }
    }
</script>