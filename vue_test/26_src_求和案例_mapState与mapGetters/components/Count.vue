<template>
    <div>
        <!-- 插值语法中，可以直接调用，不是this -->
        <h1>当前求和为：{{sum}} </h1>
        <h1>当前和的10倍为:{{bigSum}} </h1>
        <h1>我在{{school}},学习{{subject}} </h1>
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
    import { mapState, mapGetters } from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
            }
        },
        computed: {
            //靠程序员自己亲自去写计算属性
            // sum() {
            //     return this.$store.state.sum
            // },
            // school() {
            //     return this.$store.state.school
            // },
            // subject() {
            //     return this.$store.state.subject
            // },
            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),

            //借助mapState生成计算属性，从state中读取数据。（数组写法,只能是生成的计算属性名和从state中读取数据名是一样）
            ...mapState(['sum', 'school', 'subject']),


            // bigSum() {
            //     return this.$store.getters.bigSum
            // },

            //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            // ...mapGetters({bigSum:'bigSum'})

            //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters(['bigSum'])
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
        mounted() {
            const x = mapState({ sum: 'sum', school: 'school', subject: 'subject' })
            console.log(x);
        },
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>