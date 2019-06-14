import types from './actionTypes';
import * as actions from './action';
const state = {
    cityList: [],
    zoneList:[],
    assignWorkshop:[],
    getCorporateAgreement:[],
    getBrand:[],
    getUsage:[]
}

const getters = {
  cityList: state => state.cityList,
  zoneList:state => state.zoneList,
  assignWorkshop:state =>state.assignWorkshop,
  getCorporateAgreement:state=>state.getCorporateAgreement,
  getBrand:state=>state.getBrand,
  getUsage:state=>state.getUsage
}

const mutations = {
  [types.GET_CITY](state, data, msg) {
    state.cityList = data
  },
  [types.GET_ZONE](state, data, msg) {
    state.zoneList = data
  },
  [types.ASSIGN_WORKSHOP](state, data, msg) {
    state.assignWorkshop = data
  },
  [types.get_Corporate_Agreement](state,data,msg){
    state.getCorporateAgreement = data
  },
  [types.GET_BRAND](state,data,msg){
    state.getBrand = data
  },
  [types.GET_USAGE](state,data,msg){
    state.getUsage = data
  }
  
}

export default {
  state,
  actions,
  getters,
  mutations

}