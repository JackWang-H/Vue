<template>
    <h4>当前的x:{{x.y}}</h4>
    <button @click="x.y++">点我++</button>
    <hr>
    <h4>{{person}}</h4>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <!-- <h2>薪资：{{salary}}K</h2> -->
    <!-- 这是用toRefs -->
    <h2>薪资：{{job.j1.salary}}K</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <!-- <button @click="salary++">涨薪</button> -->
    <!-- 这是用toRefs -->
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
    import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            //shallowReactive只考虑对象第一层的响应式
            // let person = shallowReactive({
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            // let x = ref({
            //     y: 0
            // })
            // shallowRef只能对基本数据响应式
            let x = shallowRef({
                y: 0
            })

            return {
                x,
                person,
                ...toRefs(person)

            }
        }
    }
</script>