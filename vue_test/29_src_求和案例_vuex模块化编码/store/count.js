// 求和相关配置
export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA',value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA',value)
            }, 500);
        },
    },
    mutations: {
        JIA(state,value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '一中',
        subject: '英语',
    },
    getters: {
        bigSum(state){
            return state.sum*10
        }
    }
}