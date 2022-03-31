<template>
    <!-- Vue3组件中的模板结构可以没有根标签 -->
    <h1>和为: {{sum}}</h1>
    <button @click="sum++">点我++</button>
</template>

<script>
    import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            let sum = ref(0)
            //通过组合式API的形式去使用生命周期钩子,组合式的调用比配置项的快
            onBeforeMount(() => {
                console.log('---onBeforeMount---')
            })
            onMounted(() => {
                console.log('---onMounted---')
            })
            onBeforeUpdate(() => {
                console.log('---onBeforeUpdate---')
            })
            onUpdated(() => {
                console.log('---onUpdated---')
            })
            onBeforeUnmount(() => {
                console.log('---onBeforeUnmount---')
            })
            onUnmounted(() => {
                console.log('---onUnmounted---')
            })
            return {
                sum,
            }
        },
        //通过配置项的形式使用生命周期钩子
        //#region 
        beforeCreate() {
            console.log('---beforeCreate---')
        },
        created() {
            console.log('---created---')
        },
        beforeMount() {
            console.log('---beforeMount---')
        },
        mounted() {
            console.log('---mounted---')
        },
        beforeUpdate() {
            console.log('---beforeUpdate---')
        },
        updated() {
            console.log('---updated---')
        },
        // 这里beforeDestory不好使了
        beforeUnmount() {
            console.log('---beforeUnmount---')
        },
        unmounted() {
            console.log('---unmounted---')
        },
        //#endregion
    }
</script>