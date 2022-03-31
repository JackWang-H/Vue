<template>
    <!-- Vue3组件中的模板结构可以没有根标签 -->
    <h1>和为: {{sum}}</h1>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='！'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}K</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
    import { reactive, ref, watch } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            let sum = ref(0)
            let msg = ref('你好啊')

            let person = reactive({
                name: '张三',
                age: 8,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })
            // watch只能监视function, a ref, a reactive object, or an array
            // 第一个参数是监视对象，第二个是监视回调，第三个是监视的配置
            //情况一：监视ref所定义的一个响应式数据
            /* watch(sum, (newValue, oldValue) => {
                console.log('sum变了', newValue, oldValue);
            }, { immediate: true }) */


            //情况二：监视ref所定义的多个响应式数据,newValue是新值的数组，oldValue是旧值的数组
            /* watch([sum,msg],(newValue,oldValue)=>{
                console.log('sum或msg变了',newValue,oldValue)
            },{immediate:true}) */

            /* 
                情况三：监视reactive所定义的一个响应式数据的全部属性
                        1.注意：此处无法正确的获取oldValue,ref可以，但是如果是对象数据，ref也不行，因为底层都是reactive
                        2.注意：强制开启了深度监视（deep配置无效）
            */
            /* watch(person, (newValue, oldValue) => {
                console.log('person变化了', newValue, oldValue)
            }, { deep: false }) //此处的deep配置无效 */


            //情况四：监视reactive所定义的一个响应式数据中的某个属性,用函数
            /* watch(()=>person.name, (newValue, oldValue) => {
                console.log('person的name变化了', newValue, oldValue)
            }) */

            //情况五：监视reactive所定义的一个响应式数据中的某些属性
            /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
                console.log('person的name或age变化了',newValue,oldValue)
            })  */

            //特殊情况
            /* watch(()=>person.job,(newValue,oldValue)=>{
                console.log('person的job变化了',newValue,oldValue)
            },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效 ,这里的oldValue也不正确*/

            return {
                sum,
                msg,
                person,
            }
        }
    }
</script>