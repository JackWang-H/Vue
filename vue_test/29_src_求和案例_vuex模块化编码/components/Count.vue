<template>
    <div>
        <!-- 插值语法中，可以直接调用，不是this -->
        <h1>当前求和为：{{sum}} </h1>
        <h1>当前和的10倍为:{{bigSum}} </h1>
        <h1>我在{{school}},学习{{subject}} </h1>
        <h1>下方组件总人数是:{{personList.length}}</h1>
        <!-- 加: 是为了不返回字符串，也可以v-model.number -->
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
            }
        },
        computed: {
            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),

            //借助mapState生成计算属性，从state中读取数据。（数组写法,只能是生成的计算属性名和从state中读取数据名是一样）
            // ...mapState(['sum', 'school', 'subject', 'personList']),
            // 用命名空间写,但是这种写就会出现 a.什么 ， b.什么 ，所以下面的是简写方法，在自己写的空间内写一个namespace:true
            // ...mapState(['a', 'b']),
            // 这种方法是简写方式
            ...mapState('countAbout', ['sum', 'school', 'subject']),
            ...mapState('personAbout', ['personList']),

            //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            // ...mapGetters({bigSum:'bigSum'})

            //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters('countAbout', ['bigSum'])
        },

        methods: {
            //程序员亲自写方法
            // increment() {
            //     // this.$store.dispatch('jia', this.n)
            //     // 这里可以跳过actions ，直接提交
            //     this.$store.commit('JIA', this.n)
            // },
            // decrement() {
            //     // this.$store.dispatch('jian', this.n)
            //     this.$store.commit('JIAN', this.n)
            // },
            // 如果只这样写，上面函数不传参的话，将会出现错误，因为mapMutations会默认生成一下函数模式,
            // 而如果你上面不传参的话，默认有个event参数就是你点+号时的点击事件
            // increment(value){
            //     this.$store.commit('JIA', this.n)
            // },

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            ...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
            // 写法与mapState一样
            // ...mapMutations(['JIA','JIAN']),


            //程序员亲自写方法
            // incrementOdd() {
            //     this.$store.dispatch('jiaOdd', this.n)
            // },
            // incrementWait() {
            //     this.$store.dispatch('jiaWait', this.n)
            // }
            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            ...mapActions('countAbout', { incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' })

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
            // ...mapActions(['jiaOdd','jiaWait'])
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