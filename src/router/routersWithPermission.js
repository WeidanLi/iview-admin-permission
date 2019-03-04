/**
 * Description：需要有权限控制的路由
 * @author liweidan
 * @date   2019/3/4 3:43 PM
 * @email  toweidan@126.com
 * @version 1.0
 */
import Main from '@/components/main'

export default [
  {
    path: '/product',
    name: 'product',
    component: Main,
    meta: {
      title: '产品管理',
      showAlways: true,
      icon: ''
    },
    children: [
      {
        path: 'list',
        name: 'list',
        meta: {
          icon: '',
          title: 'product-list',
          requireCode: ['ProductManageEndpoint#list', 'ProductManageEndpoint#createProduct',
            'ProductManageEndpoint#putawayProduct', 'ProductManageEndpoint#delistProduct', 'ProductManageEndpoint#deleteByUuid']
        },
        component: () => import('@/view/product/product-list.vue')
      },
      {
        path: 'add',
        name: 'add',
        meta: {
          icon: '',
          title: 'product-add',
          requireCode: ['ProductManageEndpoint#createProduct']

        },
        component: () => import('@/view/product/product-form.vue')
      }
    ]
  }
]
