import Vue from 'vue'
import { Button ,Container,Header,Aside,Main} from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input} from 'element-ui'
import {Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
vue.use(Main)
Vue.prototype.$message=Message   //全局挂载挂载到vue全局组建上，可以用this