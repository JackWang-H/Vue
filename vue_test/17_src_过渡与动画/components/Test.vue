<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- appear属性让界面已刷新，就自动播放，下面的下面是简写  -->
        <!-- <transition name="hello" :appear="true"> -->
        <!-- transition 最终没有形成一个真正的元素 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>

    </div>
</template>
<script>
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
    /* 用动画写 */
    h1 {
        background-color: orange;
    }

    /*当上面的transition中有了name属性，则这里就不能用v-enter-active  */
    .hello-enter-active {
        animation: atguigu 1s linear;
    }

    .hello-leave-active {
        animation: atguigu 1s linear reverse;
    }

    @keyframes atguigu {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0px);
        }
    }
</style>