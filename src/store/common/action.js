import axios from 'axios';
import types from './actionTypes';
import serverConfig from './../../config/serverConfig'
const http = axios;

export const cityList = ({
  commit
},data) => {


  http.get(serverConfig.HOST + '/Common/GetCity')
  
    .then(response => {
     // console.log(response);
      if (response.status == 200) {
        commit(types.GET_CITY, response.data.data)
        
      }
    })


}

export const zoneList = ({
    commit
  },id) => {
  
    http.get(serverConfig.HOST + '/Common/GetZone?CityId='+id)
    
      .then(response => {
        if (response.status == 200) {
            commit(types.GET_ZONE, response.data.data)
        }
      })
  
  
  }

  export const assignWorkshop = ({
    commit
  },data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
    http.get(serverConfig.HOST + '/SuperAdmin/GetDropdownWorkshop?CityId='+data.CityId+'&ZoneId='+data.ZoneId)
    
      .then(response => {
       // console.log(response);
        if (response.status == 200) {
            commit(types.ASSIGN_WORKSHOP, response.data.data)
        }
      })
  
  
  }

  export const getCorporateAgreement = ({
    commit
  },data) => {
  
    http.get(serverConfig.HOST + '/CarOwner/GetCarOwnerCorporate')
    
      .then(response => {
       // console.log(response);
        if (response.status == 200) {
            commit(types.get_Corporate_Agreement, response.data.data)
        }
      })
  
  
  }


  export const getUsage = ({
    commit
  },id) => {
    http.get(serverConfig.HOST + '/Common/GetUsage')
    
      .then(response => {
          commit(types.GET_USAGE, response.data)
        
      })
  
  
  }
  

  export const getBrand = ({
    commit
  },id) => {
    http.get(serverConfig.HOST + '/Common/GetBrand')
    
      .then(response => {
          commit(types.GET_BRAND, response.data)
        
      })
  
  
  }

  export const getDropdownList = ({
    commit
  }, data) => {
   
    return new Promise(function(resolve, reject) {
    http.get(serverConfig.HOST+data)
    .then(response => {
      if(response.status == 200){
        resolve (response) 
      }else{
        reject (response) 
      }
      }).catch((error) => {
        reject (error) 
      });
              
    })
  }


  export const postData = ({
    commit
  }, data) => {
   
    return new Promise(function(resolve, reject) {
    http.post(serverConfig.HOST+data)
    .then(response => {
      if(response.status == 200){
        resolve (response) 
      }else{
        reject (response) 
      }
      }).catch((error) => {
        reject (error) 
      });
              
    })
  }
  