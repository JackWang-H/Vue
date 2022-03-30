<template>
    <!-- Vue3组件中的模板结构可以没有根标签 -->
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名：<input type="text" v-model="person.lastName">
    <br>
    <span>全名: {{person.fullName}}</span>
    <br>
    全名：<input type="text" v-model="person.fullName">
</template>

<script>
    import { reactive, computed } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            let person = reactive({
                firstName: '王',
                lastName: '仨',
            })
            //计算属性——简写（没有考虑计算属性被修改的情况）
            /* person.fullName = computed(() => {
                return person.firstName + '-' + person.lastName
            }) */

            //计算属性——完整写法（考虑读和写）
            person.fullName = computed({
                get() {
                    return person.firstName + '-' + person.lastName
                },
                set(value) {
                    const nameArr = value.split('-')
                    person.firstName = nameArr[0]
                    person.lastName = nameArr[1]
                }
            })

            // setup返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用
            return {
                person,
            }
        }
    }
</script>