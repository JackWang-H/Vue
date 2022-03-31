<template>
    <!-- Vue3组件中的模板结构可以没有根标签 -->
    <h1>和为: {{sum}}</h1>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
    import { ref } from 'vue'
    import usePoint from '../hooks/usePoint'
    export default {
        name: 'Demo',
        setup() {
            let sum = ref(0)
            let point = usePoint()
            /* let point = reactive({
                x: 0,
                y: 0
            })

            function savePoint(event) {
                point.x = event.pageX
                point.y = event.pageY
                console.log(event.pageX, event.pageY)
            }

            onMounted(() => {
                window.addEventListener('click', savePoint)
            })

            onBeforeUnmount(() => {
                window.removeEventListener('click', savePoint)
            }) */


            return {
                sum,
                point
            }
        },

    }
</script>