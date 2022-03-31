<template>
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
    import { ref, reactive, toRef, toRefs } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            //数据
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            return {
                person,
                // 这种修改没法响应式
                // name: person.name,
                // age: person.age,
                // salary: person.job.j1.salary
                // 变为以下这种
                // name: toRef(person, 'name'),
                // age: toRef(person, 'age'),
                // salary: toRef(person.job.j1, 'salary'),
                // 如果是多个属性,toRefs(person)，返回是个对象(只是将第一层的数据变为对象),所以要用...toRefs(person)
                ...toRefs(person)
                // 但是为什么不用ref呢,用这种的话，原来person里的数据是不会发生改变的，因为变化的是新的ref(person.name)
                // 不是原始的
                // name: ref(person.name),
                // age: ref(person.age),
                // salary: ref(person.job.j1.salary)

            }
        }
    }
</script>