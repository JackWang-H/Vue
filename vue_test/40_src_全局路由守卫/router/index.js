// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'


// 解决一种报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace( location) {
return originalReplace.call(this,location).catch(err => err);};

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name:'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'},
        },
        {
            name:'zhuye',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name:'xinwen',
                    // 这里不需要加‘/’,因为遍历的时候自动加上
                    path: 'news',
                    component: News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            // params传参
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,
                            meta:{isAuth:true,title:'详情'},

                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // 需要在Detail组件中接收
							// props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // 这只适用于params,如果是query不好使
							// props:true

                            //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
							// props($route){
							// 	return {
							// 		id:$route.query.id,
							// 		title:$route.query.title,
							// 	}
                            // }
                            // 也可以用结构赋值
                            props({query}){
								return {
									id:query.id,
									title:query.title,
								}
                            }
                        }
                    ]
                },
                
            ]
        }
    ]
})

//全局前置路由守卫--初始化的时候呗调用、 每次路由切换之前呗调用
// to是目的路由，from是传过来的路由，next()代表可以跳转
router.beforeEach((to, from, next) => {
    // if (to.path === '/home/news' || to.path === '/home/message'),也可以是to.name
    // 当有多个需要配置路由守卫的时候没这样写十分的麻烦，所以，需要在路由中配饰meta属性
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert("学校名不对，无权限！")
        }
    } else {
        next()
    }
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '硅谷系统'
})
export default router
