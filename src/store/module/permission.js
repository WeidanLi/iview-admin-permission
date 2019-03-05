/**
 * Description：
 * @author liweidan
 * @date   2019/1/22 5:12 PM
 * @email  toweidan@126.com
 * @version 1.0
 */

export default {
  state: {
    // { operatorCode: 'ProductEndpoint#upload', name: '产品上传' }
    operatorList: []
  },
  getters: {
    hasPermission: (state) => (queryOpcode) => {
      if (!state.operatorList || !state.operatorList.length) {
        return false
      }
      return state.operatorList.map(operatInfo => operatInfo.operatorCode).indexOf(queryOpcode) > -1
    }
  },
  mutations: {
    setPermissionList (state, opList) {
      state.operatorList = opList
    }
  }
}
