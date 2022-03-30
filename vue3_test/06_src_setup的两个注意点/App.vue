<template>
  <Demo @hello="showHelloMsg" msg="nihao" school="几天">
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components: { Demo },
    setup() {
      function showHelloMsg(value) {
        alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`)
      }
      return {
        showHelloMsg
      }
    }
  }
</script>