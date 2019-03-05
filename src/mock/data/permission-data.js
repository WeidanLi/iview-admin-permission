/**
 * Description：
 * @author liweidan
 * @date   2019/3/4 4:33 PM
 * @email  toweidan@126.com
 * @version 1.0
 */
export const getPermissionCodeList = (userName) => {
  if (userName === 'zhangsan') {
    return [{ operatorCode: 'ProductManageEndpoint#list', name: '产品列表' },
      { operatorCode: 'ProductManageEndpoint#createProduct', name: '产品上传' },
      { operatorCode: 'ProductManageEndpoint#putawayProduct', name: '产品上架' },
      { operatorCode: 'ProductManageEndpoint#delistProduct', name: '产品下架' }]
  } else {
    return [{ operatorCode: 'ProductManageEndpoint#createProduct', name: '产品上传' },
      { operatorCode: 'ProductManageEndpoint#delistProduct', name: '产品下架' },
      { operatorCode: 'ProductManageEndpoint#deleteByUuid', name: '产品删除' }]
  }
}
