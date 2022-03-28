<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 定义一个插槽（） -->
        <slot name="center">hahhahahha</slot>
        <slot name="footer">hahhahahha</slot>
    </div>
</template>
<script>
    export default {
        name: 'Category',
        props: ['title', 'listData']
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