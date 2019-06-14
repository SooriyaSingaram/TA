import axios from 'axios';
import types from './actionTypes';
import serverConfig from './../../config/serverConfig'
const http = axios;
export const getUsersLists = ({
  commit
}) => {

  http.get(serverConfig.HOST + '/getUser')
    .then(response => {
      if (response.status == 200) {
        commit(types.GET_USER_LIST_SUCCESS, response.data)
      }
    })
}
export const editUser = ({
  commit
}) => {

  http.get(serverConfig.HOST + '/editUser')
    .then(response => {
      if (response.status == 200) {
        commit(types.EDIT_USER_SUCCESS, response.data)
      }
    })
}

// export const addUser = ({
//   commit
// }, data) => {

//   http.post(serverConfig.HOST+'/CarOwner/CarOwnerSignUp', data)
//     .then(response => {
     
//         commit(types.ADD_USER_SUCCESS, response)
      
        
//     })
// }
export const addUser = ({
  commit
}, data) => {
  return new Promise(function(resolve, reject) {
  http.post(serverConfig.HOST+'/CarOwner/CarOwnerSignUp', data)
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
 

export const registerExternal = ({
  commit
}, data) => {
  return new Promise(function(resolve, reject) {
  http.post(serverConfig.HOST+'/Account/RegisterExternal', data)
    .then(response => {
    if(response.status == 200){
      const token = response.data.data.access_token;
      console.log(response.data.data);
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('role', JSON.stringify(response.data.data.RoleID));
      localStorage.setItem('userId', JSON.stringify(response.data.data.UserID));
      localStorage.setItem('firstname', JSON.stringify(response.data.data.FirstName));
      localStorage.setItem('email', JSON.stringify(response.data.data.Email));
      resolve (response) 
    }else{
      reject (response) 
    }
    }).catch((error) => {
      reject (error) 
    });
  })
}
 

export const loginUser = ({
  commit
}, data) => {
  debugger
  var query = "";
  for (let key in data) {
      query += encodeURIComponent(key)+"="+encodeURIComponent(data[key])+"&";
  }
  return new Promise(function(resolve, reject) {
  http.post(serverConfig.HOST+"/userLogin", query)
  .then(response => {
    if(response.status == 200){
      const token = response.data.access_token;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('role', JSON.stringify(response.data.RoleID));
      localStorage.setItem('userId', JSON.stringify(response.data.UserID));
      localStorage.setItem('firstname', JSON.stringify(response.data.FirstName));
      localStorage.setItem('email', JSON.stringify(response.data.Email));
      localStorage.setItem('password',data.password);
      
      resolve (response) 
    }
    else{
      reject (response) 
    }
    }).catch((error) => {
      reject (error) 
    });
            
  })
}





export const updateUser = ({
  commit
}, data) => {
  http.post(serverConfig.HOST + '/SuperAdmin/AddCorporateAgreement', data)
    .then(response => {
      if (response.status == 200) {
        commit(types.USER_UPDATE_SUCCESS, response.data)
        this.updateUser({
          commit
        });
      }
    })
}


export const clearData = ({
  commit
}) => {

  commit(types.CLEAR_LOGIN)
}

export const deleteUser = ({ commit }, deletedUser) => {
  http.delete(serverConfig.HOST + '/deleteUser', { _id: deletedUser._id, deletedUser })
    .then(response => {
      if (response.status == 200) {
        commit(types.DELETE_USER_SUCCESS, response.data)
        deleteUser({ commit });
      }
    })
}



export const forgotUser = ({
  commit
},Email) => {
 return new Promise(function(resolve,reject){
    http.post(serverConfig.HOST + '/Common/ForgetPassword?Email='+Email.username)
    
      .then(response => {
       // console.log(response);
        if (response.status == 200) {
         resolve(response)
        }
        else{
          resolve(response)
        }
      }).catch((err)=>{
        reject(response)
      })
  })
 console.log(Email.username);

  }