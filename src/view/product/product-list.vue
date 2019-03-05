<template>
    <div>
      <toolbars></toolbars>
      <Table :columns="prodColumns" :data="prodData"></Table>
    </div>
</template>

<script>
import Toolbars from './components/toolbars'
/**
   * Description：
   * @author liweidan
   * @date   2019/3/4 3:44 PM
   * @email  toweidan@126.com
   * @version 1.0
   */
export default {
  name: 'product-list',
  components: { Toolbars },
  data () {
    return {
      prodColumns: [
        {
          title: '商品名称',
          key: 'pname',
          align: 'center',
          width: 300
        },
        {
          title: '操作',
          key: 'operator',
          align: 'center',
          render: (h, params) => {
            return h('a', {
              attrs: {
                href: 'javascript:;'
              },
              on: {
                click: () => {
                  this.handleEditProduct(params.row)
                }
              },
              directives: [
                {
                  name: 'opcode',
                  value: 'ProductManageEndpoint#updateByUuid'
                }
              ]
            }, '编辑')
          }
        }
      ],
      prodData: [{
        pname: 'iPhone'
      }]
    }
  },
  methods: {
    handleEditProduct () {
      this.$Modal.info({ content: '删除产品' })
    }
  }
}
</script>

<style scoped>

</style>
