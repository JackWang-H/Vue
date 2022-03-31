<template>
    <h4>当前的sum:{{sum}}</h4>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}K</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
    import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            let sum = ref(0)
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })
            // readonly(响应式数据),这里不会变化是数据根本没改变
            // person = readonly(person)
            // 这是浅只读，第一层，深层改变还是能读出来
            person = shallowReadonly(person)

            return {
                sum,
                ...toRefs(person)

            }
        }
    }
</script>