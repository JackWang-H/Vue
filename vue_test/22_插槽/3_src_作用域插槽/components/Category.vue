<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 想插槽的使用者传递数据 -->
        <slot :games="games"></slot>
    </div>
</template>
<script>
    export default {
        name: 'Category',
        props: ['title', 'listData'],
        data() {
            return {
                games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            }
        },
    }
</script>
<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        background-color: orange;
        text-align: center;
    }
</style>