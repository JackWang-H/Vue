<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- 底层就是插槽,有两个插槽，一个用于放置真正需要展示的,叫default插槽，一个用于加载中要展示的叫fallback插槽 -->
    <!-- Suspense用于解决异步引入时产生的抖动 -->
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>
<script>
  // import Child from './components/Child'//静态引入，都渲染完毕后在一起出来
  // 异步引入，谁先渲染完毕，谁就先出来
  import { defineAsyncComponent } from 'vue'
  const Child = defineAsyncComponent(() => import('./components/Child')) //动态引入（异步引入）
  export default {
    name: 'App',
    components: {
      Child
    },
  }
</script>
<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>