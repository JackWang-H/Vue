<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- appear属性让界面已刷新，就自动播放，下面的下面是简写  -->
        <!-- <transition name="hello" :appear="true"> -->
        <!-- transition 最终没有形成一个真正的元素,并且transition里面只能有一个儿子元素，想要有多个用transition-group
            并且元素必须带有key值
         -->
        <transition-group name="animate__animated animate__bounce" appear enter-active-class="animate__jello"
            leave-active-class="animate__backOutUp">
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">好吗好的</h1>
        </transition-group>

    </div>
</template>
<script>
    // 引入第三方库 可以直接调用
    import 'animate.css'
    export default {
        name: 'Test',
        data() {
            return {
                isShow: true
            }
        },
    }
</script>
<style scoped>
    h1 {
        background-color: orange;
    }

    /*当上面的transition中有了name属性，则这里就不能用v-enter-active  */
    /* 进去的起点,离开的终点 */
    /* .hello-enter,
    .hello-leave-to {
        transform: translateX(-100%);
    } */

    /* .hello-enter-active,
    .hello-leave-active {
        transition: 1s linear;
    } */

    /* 进去的终点,离开的起点 */
    /* .hello-enter-to,
    .hello-leave {
        transform: translateX(0);
    } */
</style>