<template>
    <div>
        <!-- 插值语法中，可以直接调用，不是this -->
        <h1>当前求和为：{{$store.state.sum}} </h1>
        <!-- 加: 是为了不返回字符串，也可以v-model.number -->
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
            }
        },
        methods: {
            increment() {
                // this.$store.dispatch('jia', this.n)
                // 这里可以跳过actions ，直接提交
                this.$store.commit('JIA', this.n)
            },
            decrement() {
                // this.$store.dispatch('jian', this.n)
                this.$store.commit('JIAN', this.n)
            },
            incrementOdd() {
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('jiaWait', this.n)
            }
        },
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>