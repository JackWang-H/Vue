<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <!-- vue3中有a，vue2中有a，以vue3为主 -->
  <h2>a的值是：{{a}}</h2>
  <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
  <br>
  <br>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>
</template>

<script>
  // import { h } from 'vue'
  export default {
    name: 'App',
    // vue3中兼容一下
    data() {
      return {
        sex: '男',
        a: 100
      }
    },
    methods: {
      sayWelcome() {
        alert('欢迎来到尚硅谷学习')
      },
      test1() {
        // 可以在 vue2 中， 使用 vue3 的数据
        console.log(this.sex)
        console.log(this.name)
        console.log(this.age)
        console.log(this.sayHello)
      }
    },
    //此处只是测试一下setup，暂时不考虑响应式的问题。
    setup() {
      let name = '王五'
      let age = 56
      let a = 200

      function test2() {
        console.log(name)
        console.log(age)
        console.log(sayHello)
        console.log(this.sex)
        console.log(this.sayWelcome)
      }
      // 方法
      function sayHello() {
        alert(`我叫${name}，今年${age}岁了，你好啊`)
      }
      // setup返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用
      return {
        name,
        age,
        a,
        sayHello,
        test2
      }
      //返回一个函数（渲染函数）。需要引入,第一个参数为标签名，第二个为标签的内容
      // return () => h('h1', 'love') 
    }
  }
</script>