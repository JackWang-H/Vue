<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 这里不用.value ,vue3自动读取value值-->
  <h2 v-show="person.name">姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2 v-show="person.sex">性别:{{person.sex}}</h2>
  <h2>工作:{{person.job.type}}</h2>
  <h2>薪水:{{person.job.salary}}</h2>
  <h3>爱好：{{person.hobby}}</h3>
  <h3>测试的数据c：{{person.job.a.b.c}}</h3>
  <button @click="changeInfo">更新</button>
  <button @click="addSex">添加sex属性</button>
  <button @click="deleteName">删除name属性</button>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 将基本数据类型数据交给ref，生成的是一个RefImpl的引用实现的实例对象，简称引用对象,所以这里是name 为RefImpl实例对象
      let name = ref('王五')
      let age = ref(55)
      // 引用对象数据交给reactive函数，生成的是proxy
      // reactive处理对象类型响应式是一个深层次的
      // let job = reactive({
      //   type: '前端工程师',
      //   salary: '30k',
      //   a: {
      //     b: {
      //       c: 222
      //     }
      //   }
      // })

      // let hobby = reactive(['抽烟', '喝酒', '烫头'])
      // 虽然基本数据类型不能直接使用reactive，但是我们可以包装在一个对象中
      let person = reactive({
        name: '王五',
        age: 44,
        job: {
          type: '前端工程师',
          salary: '30k',
          a: {
            b: {
              c: 222
            }
          }
        },
        hobby: ['抽烟', '喝酒', '烫头']
      })
      function changeInfo() {
        // 输出是RefImpl = reference(引用) + implement(实现)
        // console.log(name, age);
        // 必须通过 .value 才能修改值，但是在模板中使用却不用
        person.name = '历史'
        person.age = 10
        person.job.type = 'UI设计师'
        person.job.salary = '90k'
        person.hobby[0] = '学习'
        person.job.a.b.c = 888
      }
      function addSex() {
        person.sex = '男'
      }
      function deleteName() {
        delete person.name
      }
      // setup返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用
      return {
        person,
        changeInfo,
        addSex,
        deleteName
      }
    }
  }
</script>