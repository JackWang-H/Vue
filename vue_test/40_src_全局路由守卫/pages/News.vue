<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习Vue</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'News',
        data() {
            return {
                opacity: 1
            }
        },
        // beforeDestroy() {
        //     console.log('News组件即将被销毁了')
        //     clearInterval(this.timer)
        // },
        // mounted() {
        //     this.timer = setInterval(() => {
        //         // console.log('@')
        //         this.opacity -= 0.01
        //         if (this.opacity <= 0) this.opacity = 1
        //     }, 16)
        // },
        // activated是出现在页面就激活了
        activated() {
            console.log('激活了');
            this.timer = setInterval(() => {
                console.log('@')
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            }, 16)
        },
        // deactivated是不出现在页面就失活了
        deactivated() {
            console.log('失活了');
            clearInterval(this.timer)
        },
    }
</script>