import types from './actionTypes';
import * as actions from './action';
const state = {
  CorporateAgreementLists: [],
  getDriverLists:[],
  getWorkshopLists:[],
  getSpecialistList:[],
  getCustomerList:[],
  addcorporate:[],
  addrating:[],
  addcustomer:[],
  getCorporate:[],
  getCustomer:[],
  addtallercommunity:[],
  getTallerCommunityLists:[],
  getTallerCommunityListsedit:[],
  addSpecialist:[],
  getspecialist:[],
  getdriver:[],
  getworkshop:[],
  getworkshopService:[],
  QuoteLists:[],
  getquotedetails:[],
  WorkingServiceLists:[],
  WorkingServiceDetail:[],
  WorkshopServicesLists:[],
  getMainServiceList:[],
  getCompletedServicelist: [],
  getCompletedServiceView: [],
  getInboxMessage:[],
  getvehicleList:[],
  getvehicleedit:[],
  getvehicleview:[],
  getscheduleserviceList:[],
  getssdetailview:[],
  getchecklist:[],
  getworkshoplist:[],
  getScheduleImages:[],
  addcontactUs:[],
  getrequestedquoteList:[],
  getrequestedquoteDetailView:[],
  gethistoryList:[],
  gethistoryview:[],
  getcarownerScheduleService:[],
  getcarownerLastServiceDetail:[],
  getcarownerTMRAlert:[],
  getDashBoardCount:[],
  getRatingList:[],
  getLocationTracking:[],
  getInboxMessage:[],
  getReplyMessage:[],
  postChatMessage:[],
  updateReadMessage:[],
  cityZoneList:[],
  getSAvehicleList:[],
  CustomerVehicleDetailView:[],
  getSAServiceList:[],
  GetVehicleService:[],
  getCalculatedHealthIndex:[],
  getMasterVehicles:[],
  ServicesByType:[],
  ServiceByBrand:[],
  ServiceByWorkshop:[],
  ServiceByPayment:[],
  ServiceByAgreement:[],
  healthIndexMaster:[],
  indicatorGroupList:[]

}

const getters = {
  CorporateAgreementLists: state => state.CorporateAgreementLists,
  getDriverLists: state => state.getDriverLists,
  getWorkshopLists: state => state.getWorkshopLists,
  getSpecialistList: state => state.getSpecialistList,
  getCustomerList: state => state.getCustomerList,
  addcorporate:  state => state.addcorporate,
  addrating:state => state.addcorporate,
  addcustomer:  state => state.addcustomer,
  getCustomer: state => state.getCustomer,
  getCorporate:state=>state.getCorporate,
  addtallercommunity:state => state.addtallercommunity,
  getTallerCommunityLists:state => state.getTallerCommunityLists,
  getTallerCommunityListsedit:state => state.getTallerCommunityListsedit,
  addSpecialist: state => state.addSpecialist,
  getspecialist:state=>state.getspecialist,
  getworkshop:state=>state.getworkshop,
  getdriver:state=>state.getdriver,
  getworkshopService:state=>state.getworkshopService,
  QuoteLists:state=>state.QuoteLists,
  getquotedetails:state=>state.getquotedetails,
  WorkingServiceLists:state=>state.WorkingServiceLists,
  WorkingServiceDetail:state=>state.WorkingServiceDetail,
  WorkshopServicesLists:state=>state.WorkshopServicesLists,
  getMainServiceList:state=>state.getMainServiceList,
  getCompletedServicelist: state => state.getCompletedServicelist,
  getCompletedServiceView: state => state.getCompletedServiceView,
  getInboxMessage:state=>state.getInboxMessage,
  getvehicleList:state=>state.getvehicleList,
  getvehicleedit:state=>state.getvehicleedit,
  getvehicleview:state=>state.getvehicleview,
  getscheduleserviceList:state=>state.getscheduleserviceList,
  getssdetailview:state=>state.getssdetailview,
  getchecklist:state=>state.getchecklist,
  getworkshoplist:state=>state.getworkshoplist,
  getScheduleImages:state=>state.getScheduleImages,
  addcontactUs:state=>state.addcontactUs,
  getrequestedquoteList:state=>state.getrequestedquoteList,
  getrequestedquoteDetailView:state=>state.getrequestedquoteDetailView,
  gethistoryList:state=>state.gethistoryList,
  gethistoryview:state=>state.gethistoryview,
  getcarownerScheduleService:state=>state.getcarownerScheduleService,
  getcarownerLastServiceDetail:state=>state.getcarownerLastServiceDetail,
  getcarownerTMRAlert:state=>state.getcarownerTMRAlert,
  getDashBoardCount:state=>state.getDashBoardCount,
  getRatingList:state=>state.getRatingList,
  getLocationTracking:state=>state.getLocationTracking,
  getInboxMessage:state=>state.getInboxMessage,
  getReplyMessage: state => state.getReplyMessage,
  postChatMessage: state => state.postChatMessage,
  updateReadMessage:state=>state.updateReadMessage,
  cityZoneList:state=>state.cityZoneList,
  getSAvehicleList:state=>state.getSAvehicleList,
  CustomerVehicleDetailView:state=>state.CustomerVehicleDetailView,
  getSAServiceList:state=>state.getSAServiceList,
  GetVehicleService:state=>state.GetVehicleService,
  getCalculatedHealthIndex:state=>state.getCalculatedHealthIndex,
  getMasterVehicles:state=>state.getMasterVehicles,
  ServicesByType:state => state.ServicesByType,
  ServiceByBrand:state=>state.ServiceByBrand,
  ServiceByWorkshop:state=> state.ServiceByWorkshop,
  ServiceByPayment:state=>state.ServiceByPayment,
  ServiceByAgreement: state => state.ServiceByAgreement,
  healthIndexMaster:state=>state.healthIndexMaster,
  indicatorGroupList:state=>state.indicatorGroupList
}

const mutations = {
  [types.GET_CORPORATE_AGREEMENT_LIST_SUCCESS](state, data, msg) {
    state.CorporateAgreementLists = data
  },
  [types.GET_DRIVER_LIST_SUCCESS](state, data, msg) {
    state.getDriverLists = data
  },
  [types.GET_WORKSHIP_LIST_SUCCESS](state, data, msg) {
    state.getWorkshopLists = data
  },
  [types.GET_SPECIALIST_LIST_SUCCESS](state, data, msg) {
    state.getSpecialistList = data
  },
  [types.GET_CUSTOMER_LIST_SUCCESS](state, data, msg) {
    state.getCustomerList = data
  },
  [types.ADD_CORPORATE_SUCESS](state, data, msg) {
    state.addcorporate = data
  },
  [types.ADD_RATING_SUCESS](state, data, msg) {
    state.addrating = data
  },

  [types.ADD_CUSTOMER_SUCESS](state, data, msg) {
    state.addcustomer = data
  },
  [types.ADD_TALLERCOMMUNITY_SUCESS](state, data, msg) {
    state.addtallercommunity = data
  },
  [types.GET_TALLER_COMMUNITY_LIST_SUCCESS](state, data, msg) {
    state.getTallerCommunityLists = data
  },

  [types.GET_TALLER_COMMUNITY_EDIT_LIST_SUCCESS](state, data, msg) {
    state.getTallerCommunityListsedit = data
  },
  
  [types.GET_CORPORATE_DETAIL](state, data, msg) {
    state.getCorporate = data
  },

  [types.GET_CUSTOMER_DETAIL](state, data, msg) {
    state.getCustomer = data
  },
  
  [types.GET_SPECIALIST_DETAIL](state, data, msg) {
    state.getspecialist = data
  },
  [types.GET_WORKSHOP_DETAIL](state, data, msg) {
    state.getworkshop = data
  },
  [types.GET_DRIVER_DETAIL](state, data, msg) {
    state.getdriver = data
  }  ,
  [types.GET_WORKSHOP_SERVICE_LIST](state, data, msg) {
    state.getworkshopService = data
  } ,
  [types.GET_QUOTE_LIST_SUCCESS](state, data, msg) {
    state.QuoteLists = data
  },
  [types.GET_QUOTES_DETAIL](state, data, msg) {
    state.getquotedetails = data
  },
  [types.GET_WORKING_SERVICE_LIST_SUCCESS](state, data, msg) {
    state.WorkingServiceLists = data
  },
  [types.GET_WORKING_SERVICE_DETAIL](state, data, msg) {
    state.WorkingServiceDetail = data
  },
  
  [types.GET_WORKSHOP_SERVICE_LIST_SUCCESS](state, data, msg) {
    state.WorkshopServicesLists = data
  },
 
  [types.GET_MAIN_SERVICE_LIST] (state, data, msg) {
    state.getMainServiceList=data
  },
  [types.GET_COMPLETED_SERVICE_LIST] (state, data, msg) {
    state.getCompletedServicelist = data
  },
  [types.GET_COMPLETED_SERVICE_VIEW] (state, data, msg) {
    state.getCompletedServiceView = data
  },
  [types.GET_INBOX_MESSAGE] (state, data, msg) {
    state.getInboxMessage = data
  },
  [types.GET_VEHICLE_LIST] (state, data, msg) {
    state.getvehicleList=data
  },

  [types.GET_VEHICLE_EDIT] (state, data, msg) {
    state.getvehicleedit=data
  },
  [types.GET_VEHICLE_DETAIL] (state, data, msg) {
    state.getvehicleview=data
  },

  [types.GET_SCHEDULEDSERVICE_LIST] (state, data, msg) {
    state.getscheduleserviceList=data
  },

  [types.GET_SS_DETAIL_VIEW] (state, data, msg) {
    state.getssdetailview=data
  },

  [types.GET_CHECKLIST] (state, data, msg) {
    state.getchecklist=data
  },
  
  [types.GET_WORKSHOPLIST] (state, data, msg) {
    state.getworkshoplist=data
  },

  [types.GET_SCHEDULE_IMAGES] (state, data, msg) {
    state.getScheduleImages=data
  },

  [types.ADD_CONTACTUS_SUCESS](state, data, msg) {
    state.addcontactUs = data
  },

  [types.GET_REQUESTEDQUOTE_LIST](state, data, msg) {
    state.getrequestedquoteList = data
  },

  [types.GET_RQ_DETAIL_VIEW](state, data, msg) {
    state.getrequestedquoteDetailView = data
  },

  [types.GET_HISTORY_LIST](state, data, msg) {
    state.gethistoryList = data
  },

  [types.GET_HISTORY_VIEW](state, data, msg) {
    state.gethistoryview = data
  },
  
  [types.GET_DASHBOARDCOUNT_LIST](state, data, msg) {
    state.getDashBoardCount = data
  },

  [types.GET_RATING_LIST](state, data, msg) {
    state.getRatingList = data
  },

  [types.GET_LOCATION_TRACKING](state, data, msg) {
    state.getLocationTracking = data
  },
  [types.GET_INBOX_MESSAGE] (state, data, msg) {
    state.getInboxMessage = data
  },
  [types.GET_CHAT_MESSAGE] (state, data, msg) {
    state.getReplyMessage = data
  },
  [types.POST_CHAT_MESSAGE] (state, data, msg) {
    state.postChatMessage = data
  },
  [types.UPDATE_READ_MESSAGE] (state, data, msg) {
    state.updateReadMessage = data
  },
  [types.GET_CITY_ZONE_LIST_SUCCESS] (state, data, msg) {
    state.cityZoneList = data
  },
  [types.GET_SA_VEHICLE_LIST] (state, data, msg) {
    state.getSAvehicleList = data
  },
  [types.GET_VEHICLE_LIST_SUCCESS] (state, data, msg) {
    state.getMasterVehicles = data
  },

  [types.CUSTOMER_VEHICLE_DETAIL_SUCCSS] (state, data, msg) {
    state.CustomerVehicleDetailView = data
  },
  
  [types.GET_SA_SERVICE_LIST] (state, data, msg) {
    state.getSAServiceList = data
  },
    
  [types.GET_VEHICLE_SERVICE_LIST] (state, data, msg) {
    state.GetVehicleService = data
  },
  [types.GET_CALCULATED_HEALTH_INDEX] (state, data, msg) {
    state.getCalculatedHealthIndex = data
  },
  [types.SERVICE_BY_TYPE] (state, data, msg) {
    state.ServicesByType = data
  },
  [types.SERVICE_BY_BRAND] (state, data, msg) {
    state.ServiceByBrand = data
  },
  [types.SERVICE_BY_WORKSHOP] (state, data, msg) {
    state.ServiceByWorkshop = data
  },
  [types.SERVICE_BY_PAYMENT] (state, data, msg) {
    state.ServiceByPayment = data
  },
  [types.SERVICE_BY_AGREEMENT] (state, data, msg) {
    state.ServiceByAgreement = data
  },
  [types.GET_HEALTH_INDEX_MASTER] (state, data, msg) {
    state.healthIndexMaster = data
  },
  [types.GET_INDICATOR] (state, data, msg) {
    state.indicatorGroupList = data
  }
  
}

export default {
  state,
  actions,
  getters,
  mutations
}