<template>
    <div>
        <h1>人员列表</h1>
        <h1>上方组件求和为:{{sum}}</h1>
        <h1>列表中第一个人的名字是:{{firstPersonName}}</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个人,随机</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>
<script>
    // import { mapState } from 'vuex'
    import { nanoid } from 'nanoid'
    export default {
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        computed: {
            personList() {
                return this.$store.state.personAbout.personList
            },
            sum() {
                return this.$store.state.countAbout.sum
            },
            firstPersonName() {
                return this.$store.getters['personAbout/firstPersonName']
            }
            // ...mapState(['personList'])
        },
        methods: {
            add() {
                const personObj = { id: nanoid(), name: this.name }
                // console.log(personObj);
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.name = ''
            },
            addWang() {
                const personObj = { id: nanoid(), name: this.name }
                // console.log(personObj);
                this.$store.dispatch('personAbout/addPersonWang', personObj)
                this.name = ''
            },
            addPersonServer() {
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
    }
</script>
<style>

</style>