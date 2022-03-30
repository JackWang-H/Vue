<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <!-- 这里不用.value ,vue3自动读取value值-->
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>工作:{{job.type}}</h2>
  <h2>薪水:{{job.salary}}</h2>
  <button @click="changeInfo">更新</button>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 将基本数据类型数据交给ref，生成的是一个RefImpl的引用实现的实例对象，简称引用对象,所以这里是name 为RefImpl实例对象
      let name = ref('王五')
      let age = ref(55)
      // 引用对象数据交给reactive函数，生成的是proxy
      let job = ref({
        type: '前端工程师',
        salary: '30k'
      })

      function changeInfo() {
        // 输出是RefImpl = reference(引用) + implement(实现)
        console.log(name, age);
        // 必须通过 .value 才能修改值，但是在模板中使用却不用
        name.value = '历史'
        age.value = 10
        console.log(job.value); //proxy
        job.value.type = 'UI设计师'
        job.value.salary = '90k'
        // 这里输出才是更新后的值
        console.log(name, age);
      }
      // setup返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用
      return {
        name,
        age,
        job,
        changeInfo
      }
    }
  }
</script>