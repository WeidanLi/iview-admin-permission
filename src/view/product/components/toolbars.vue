<template>
  <div>
    <Row type="flex" justify="start" class="search-tool">
      <Col span="6">
        <span class="search-title">商品名称：</span>
        <Input class="search-input" v-model="search.pname" @on-enter="handleSearch"></Input>
      </Col>
      <Col span="5" class="clearfix">
        <span class="search-title">商品状态：</span>
        <Select class="search-input" v-model="search.status" @on-query-change="handleStatusChange">
          <Option :value="''" :key="-1">所有商品状态</Option>
          <Option value="VALID" key="VALID">上架</Option>
          <Option value="INVALID" key="INVALID">下架</Option>
          <Option value="UNFINISH" key="UNFINISH">导入待编辑</Option>
        </Select>
      </Col>
      <Col span="9" class="clearfix">
        <Button type="primary" shape="circle" icon="ios-search" @click="handleSearch">查询</Button>
      </Col>
    </Row>
    <Row class="tool-btn">
      <Col span="3">
        <Button v-opcode="'ProductManageEndpoint#createProduct'" type="primary" class="btn" icon="ios-arrow-up" @click="$router.push('/product/add')">上传新商品</Button>
      </Col>
      <Col span="2">
        <Button v-opcode="'ProductManageEndpoint#putawayProduct'" class="btn" icon="ios-play" @click="handleProductUp">商品上架</Button>
      </Col>
      <Col span="2">
        <Button v-opcode="'ProductManageEndpoint#delistProduct'" class="btn" icon="ios-pause" @click="handleProductDown">商品下架</Button>
      </Col>
      <Col span="2">
        <Button v-opcode="'ProductManageEndpoint#deleteByUuid'" type="error" ghost class="btn" icon="md-trash" @click="handleProductDel">删除商品</Button>
      </Col>
      <Col span="2">
        <Button v-opcode="'ProductImportManageEndpoint#selectImportProductList'" type="primary" ghost class="btn" icon="ios-download" @click="$router.push('/vendor-manage/products-import')">导入商品</Button>
      </Col>
      <Col span="1">
      </Col>
    </Row>
  </div>
</template>

<script>
/**
 * Description：产品管理工具栏
 * @author liweidan
 * @date   2018/10/19 3:22 PM
 * @email  toweidan@126.com
 * @version 1.0
 */
export default {
  name: 'toolbars',
  props: {
    lockBtn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      search: {
        pname: '',
        brandcode: '',
        status: ''
      }
    }
  },
  methods: {
    handleStatusChange () {
    },
    handleSearch () {
    },
    handleProductUp () {
      this.$Modal.info({ content: '商品上架' })
    },
    handleProductDown () {
      this.$Modal.info({ content: '商品下架' })
    },
    handleProductDel () {
      this.$Modal.info({ content: '商品删除' })
    }
  }
}
</script>

<style lang="less" scoped>
.search-tool {
  .search-title, .search-input {
    float: left;
  }
  .search-input {
    width: 72%;
  }
  .search-title {
    padding-top: 5px;
  }
}
.tool-btn {
  margin-top: 12px;
  .btn {
    width: 90%;
  }
}
</style>
