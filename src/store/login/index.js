import types from './actionTypes';
import * as actions from './action';
const state = {
  userLists: [],
  deleteLists: [],
  userAddSuccess: [],
  providerList: [],
  loginUser:[],
  registerExternal:[],
 
}

const getters = {
  userLists: state => state.userLists,
  userAddSuccess: state => state.userAddSuccess,
  userUpdateSuccess: state => state.userUpdateSuccess,
  editUser:state=>state.editUser,
  deleteLists:state => state.deleteLists,
  loginUser:state => state.loginUser,
  registerExternal:state => state.registerExternal,
  
}

const mutations = {
  [types.GET_USER_LIST_SUCCESS](state, data, msg) {
    state.userLists = data
  },
  [types.DELETE_LIST_SUCCESS](state, data, msg) {
    state.deleteLists = data
  },
  [types.EDIT_USER_SUCCESS](state, data, msg) {
    state.editUser = data
  },
  [types.ADD_USER_SUCCESS](state, data, msg) {
 
    state.userAddSuccess = data
  },
  [types.USER_UPDATE_SUCCESS](state, data, msg) {
    state.userUpdateSuccess = data
  },
  [types.USER_LOGIN](state, data, msg) {
    state.loginUser =data
  },

  [types.REGISTER_EXTERNAL_SUCCESS](state, data, msg) {
    state.registerExternal =data
  },
  
  
  [types.CLEAR_LOGIN](state, data, msg) {
    state.loginUser = ""
  }
}

export default {
  state,
  actions,
  getters,
  mutations

}
