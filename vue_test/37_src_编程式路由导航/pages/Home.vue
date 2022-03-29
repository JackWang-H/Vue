<template>
    <div>
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <router-link class="list-group-item" active-class="active" to="/home/news">News
                        </router-link>
                    </li>
                    <li>
                        <router-link class="list-group-item" active-class="active" to="/home/message">Message
                        </router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        // 路由转换的时候，没有使用的那些将会被销毁
        /* beforeDestroy() {
            console.log('Home组件即将被销毁了')
        }, */
        // 组件挂在完毕后，会有$route、$router两个属性，$route两者不一样，但是，$router是一样的
        // mounted() {
        //     console.log('Home组件挂载完毕了', this)
        //     window.homeRoute = this.$route
        //     window.homeRouter = this.$router
        // },
    }
</script>
<style>

</style>