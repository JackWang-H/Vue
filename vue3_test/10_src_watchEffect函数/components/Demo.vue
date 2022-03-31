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
    import { reactive, ref, watch, watchEffect } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            let sum = ref(0)
            let msg = ref('你好啊')

            let person = reactive({
                name: '张三',
                age: 8,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            // 监视
            /*  watch(sum, (newValue, oldValue) => {
                 console.log('sum的值变化了', newValue, oldValue)
             }, { immediate: true }) */
            //  这种监视是监视回调函数中用到的那个属性，就监视那个属性
            watchEffect(() => {
                const x1 = sum.value
                const x2 = person.job.j1.salary
                console.log('watchEffect所指定的回调执行了')
            })


            return {
                sum,
                msg,
                person,
            }
        }
    }
</script>