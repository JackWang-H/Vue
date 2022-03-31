<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
  import { ref, customRef } from 'vue'
  export default {
    name: 'App',
    setup() {

      function myRef(value, delay) {
        let timer
        // 这里的return是因为，这个函数必须要有返回值
        return customRef((track, trigger) => {
          // 这里是因为语法必须返回一个对象
          return {
            get() {
              console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`)
              track()//通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
              return value
            },
            set(newValue) {
              console.log(`有人把myRef这个容器中数据改为了：${newValue}`)
              // 写上这个是为了防止抖动，在每次开启定时器之前都先清除已有定时器
              clearTimeout(timer)
              timer = setTimeout(() => {
                value = newValue
                trigger()//通知vue去重新解析模板
              }, delay);
            }
          }
        })
      }


      // let keyWord = ref('hello')//使用vue提供的ref
      let keyWord = myRef('hello', 500)//使用程序员自定义的的ref
      return {
        keyWord
      }
    }
  }
</script>