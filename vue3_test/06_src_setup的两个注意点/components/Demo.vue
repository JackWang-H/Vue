<template>
    <!-- Vue3组件中的模板结构可以没有根标签 -->
    <h1>一个人的信息</h1>
    <!-- 这里不用.value ,vue3自动读取value值-->
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
    import { ref, reactive } from 'vue'
    export default {
        name: 'Demo',
        props: ['msg', 'school'],
        emits: ['hello'],
        /* beforeCreate() {
            console.log('---brforeCreate---');
        }, */
        // setup可以接收两个参数,第一个为父传的参数
        setup(props, context) {
            // setup比beforeCreate先执行，且this为undefined
            // console.log('---setup---', this);
            // console.log('---setup---', props);
            // console.log('---setup---', context);
            // console.log('---setup---', context.attrs) //相当与Vue2中的$attrs,上面不用props声明接收，就会在这里面
            // console.log('---setup---',context.emit) //触发自定义事件的。
            console.log('---setup---', context.slots);

            let person = reactive({
                name: '王五',
                age: 44,
            })

            function test() {
                context.emit('hello', 777)
            }
            // setup返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用
            return {
                person,
                test
            }
        }
    }
</script>