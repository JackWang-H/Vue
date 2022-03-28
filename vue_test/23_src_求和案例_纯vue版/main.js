//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入插件
import VueResource from 'vue-resource'
//关闭Vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)
// 使用这个插件在所有的vm与vc的this中出现了一个$http
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})