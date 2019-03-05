// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import { Modal } from 'iview'
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

/**
 * 注册权限控制指令
 */
Vue.directive('opcode', {
  bind: function (el, opcode, vnode, oldVNode) {
    const requireOpCode = opcode.value
    // 如果用户没有这个操作Code的权限，那么劫持click事件，赋予弹出无权限弹窗的事件
    console.log(requireOpCode);
    if (vnode.componentInstance === undefined || vnode.componentInstance === null) {
      if (!vnode.context.$store.getters.hasPermission(requireOpCode)) {
        vnode.data.on.click.fns = function () {
          Modal.warning({
            title: '无权限',
            content: '很抱歉，您没有这项操作的权限'
          })
        }
      }
    } else {
      if (!vnode.componentInstance.$store.getters.hasPermission(requireOpCode)) {
        vnode.componentInstance.$off('click')
        vnode.componentInstance.$on('click', function () {
          Modal.warning({
            title: '无权限',
            content: '很抱歉，您没有这项操作的权限'
          })
        })
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
