import axios from 'axios';
import types from './actionTypes';
import serverConfig from './../../config/serverConfig';
// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }
const http = axios;
//  const http = axios.create({withCredentials: true});

export const CorporateAgreementLists = ({
    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));


    http.get(serverConfig.HOST + '/SuperAdmin/GetCorporateAgreement', {
        crossdomain: true
    })

    .then(response => {
        // console.log(response);
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_CORPORATE_AGREEMENT_LIST_SUCCESS, result)
        }
    })


}




export const getDriverLists = ({
    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetDriverList', {
        crossdomain: true
    })

    .then(response => {
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_DRIVER_LIST_SUCCESS, result)
        }
    })
}

export const getWorkshopLists = ({
    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));


    http.get(serverConfig.HOST + '/SuperAdmin/GetWorkShopList', {
        crossdomain: true
    })

    .then(response => {
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_WORKSHIP_LIST_SUCCESS, result)
        }
    })
}


export const getSpecialistList = ({
    commit
}, data) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetSpecialistList', {
        crossdomain: true
    })

    .then(response => {
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_SPECIALIST_LIST_SUCCESS, result)
        }
    })
}

export const getCustomerList = ({
    commit
}, data) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/CarOwnerList', {
        crossdomain: true
    })

    .then(response => {
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_CUSTOMER_LIST_SUCCESS, result)
        }
    })
}

export const updateData = ({

    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    let url = data.url;
    delete data["url"];
    return new Promise(function(resolve, reject) {
        http.post(serverConfig.HOST + url, data, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    resolve(response)

                } else {
                    reject(response)
                }
            }).catch((error) => {
                reject(error)
            });

    })
}

export const getcorporate = ({

    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetCorporateAgreementEdit?id=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_CORPORATE_DETAIL, response.data)
            }
        })
}

export const getcustomer = ({

    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/EditCarOwner?carOwnerId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_CUSTOMER_DETAIL, response.data)
            }
        })
}



export const getspecialist = ({

    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/' + data.do_function + '?SpecialistDetailsID=' + data.id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_SPECIALIST_DETAIL, response.data)
            }
        })
}
export const getworkshop = ({

    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/' + data.do_function + '?WorkShopID=' + data.id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_WORKSHOP_DETAIL, response.data)
            }
        })
}
export const getdriver = ({

    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/' + data.do_function + '?DriverDetailsID=' + data.id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_DRIVER_DETAIL, response.data)
            }
        })
}



export const addtallercommunity = ({

    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    let url = data.url;
    delete data["url"];
    return new Promise(function(resolve, reject) {
        http.post(serverConfig.HOST + url, data, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch((error) => {
                reject(error)
            });

    })
}




export const getTallerCommunityLists = ({
    commit
}, data) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetOnlineCommunity', {
        crossdomain: true
    })

    .then(response => {
        // console.log(response);
        if (response.status == 200) {
            commit(types.GET_TALLER_COMMUNITY_LIST_SUCCESS, response.data.data)
        }
    })


}




export const getTallerCommunityListsedit = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetOnlineCommunityEdit?id=' + id, {
        crossdomain: true
    })

    .then(response => {


        commit(types.GET_TALLER_COMMUNITY_EDIT_LIST_SUCCESS, response.data)

    })

}

export const getMainServiceList = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetMainServiceList', {
        crossdomain: true
    })

    .then(response => {

        commit(types.GET_MAIN_SERVICE_LIST, response.data.data)

    })


}

export const getworkshopDetail = ({

    commit
}, url) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    return new Promise((resolve, reject) => {
        http.get(serverConfig.HOST + '/WorkShop/' + url, {
                crossdomain: true
            })
            .then(response => {

                if (response.status == 200) {
                    resolve(response)
                } else {

                    reject(response)
                }
            })
    })

}

export const getListData = ({

    commit
}, url) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    return new Promise((resolve, reject) => {
        http.get(serverConfig.HOST + url, {
                crossdomain: true
            })
            .then(response => {

                if (response.status == 200) {
                    resolve(response)
                } else {

                    reject(response)
                }
            })
    })

}
export const getworkshopService = ({

    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetWorkshopServiceDetail?WorkShopID=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_WORKSHOP_SERVICE_LIST, response.data)
            }
        })
}


export const QuoteLists = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    return new Promise((resolve, reject) => {
        http.get(serverConfig.HOST + '/SuperAdmin/GetCollisionQuote?dash=' + id, {
            crossdomain: true
        })

        .then(response => {
            // console.log(response);
            if (response.status == 200) {
                let result = []
                if (response.data.data.length > 0) {
                    let data = response.data.data;

                    data.map((item, i) => {

                        item.id = i + 1;
                        result.push(item)

                    })

                }

                commit(types.GET_QUOTE_LIST_SUCCESS, result)
            }
        }).catch((error) => {
            reject(error)
        });
    })

}




export const WorkingServiceLists = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetWorkingService?dash=' + id, {
        crossdomain: true
    })

    .then(response => {
        // console.log(response);
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_WORKING_SERVICE_LIST_SUCCESS, result)
        }
    })


}


export const getquotedetails = ({
    commit
}, id) => {
    //console.log("id:"+id)
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/DetailCollisionQuote?CollisionAndPaintId=' + id, {
            crossdomain: true
        })
        .then(response => {
            //console.log(response)
            if (response.status == 200) {

                commit(types.GET_QUOTES_DETAIL, response.data)
            }
        })
}


export const WorkingServiceDetail = ({
    commit
}, id) => {
    //console.log("id:"+id)
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/WorkingServiceDetail?CustomerServicetDeatilsID=' + id, {
            crossdomain: true
        })
        .then(response => {
            //console.log(response)
            if (response.status == 200) {

                commit(types.GET_WORKING_SERVICE_DETAIL, response.data)
            }
        })
}



export const CustomerVehicleDetailView = ({
    commit
}, id) => {
    //console.log("id:"+id)
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/DetailVehicle?CustomerVehicleID=' + id, { crossdomain: true })
        .then(response => {
            //console.log(response)
            if (response.status == 200) {

                commit(types.CUSTOMER_VEHICLE_DETAIL_SUCCSS, response.data)
            }
        })
}

export const WorkshopServicesLists = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/WorkShop/ServiceDetail?WorkShopID=' + id, {
        crossdomain: true
    })

    .then(response => {

        // console.log(response);
        if (response.status == 200) {
            var data = response.data.data;
            let arr = []
            let result = data.reduce(function(r, a) {
                r[a.MainServiceName] = r[a.MainServiceName] || [];
                r[a.MainServiceName].push(a);
                return r;
            }, Object.create(null));
            for (let key in result) {

                arr.push({
                    "data": result[key],
                    name: key
                })
            }


            commit(types.GET_WORKSHOP_SERVICE_LIST_SUCCESS, arr)
        }
    })
}

export const getSubServiceData = ({
    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
    return new Promise(function(resolve, reject) {
        http.get(serverConfig.HOST + data, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch((error) => {
                reject(error)
            });

    })
}



export const getCompletedService = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('token'))

    http.get(serverConfig.HOST + '/CarOwner/GetCarOwnerServiceCompleted?userId=' + id, {
        crossdomain: true
    })

    .then(response => {
        let result = []
        if (response.data.data.length > 0) {
            let data = response.data.data;

            data.map((item, i) => {

                item.id = i + 1;
                result.push(item)

            })

        }
        commit(types.GET_COMPLETED_SERVICE_LIST, result)
    })
}

export const getCompletedListDetail = ({

    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/CarOwner/ViewCarOwnerServiceCompleted?CarOwnerServiceId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_COMPLETED_SERVICE_VIEW, response.data.data)
            }
        })
}


export const getvehicleList = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)

        http.get(serverConfig.HOST + '/CarOwner/GetVehicleList?UserID=' + id, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    commit(types.GET_VEHICLE_LIST, response.data)
                }
            })
    }

export const getvehicleedit = ({
    commit
}, id) => {
    console.log("id:" + id)
    http.get(serverConfig.HOST + '/CarOwner/GetVehicleEdit?vehicleId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                console.log(response.data.data);
                commit(types.GET_VEHICLE_EDIT, response.data)
            }
        })
}


export const getvehicleview = ({
    commit
}, id) => {
    console.log("id:" + id)
    http.get(serverConfig.HOST + '/CarOwner/GetVehicleView?vehicleId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_VEHICLE_DETAIL, response.data)
            }
        })
}



export const getscheduleserviceList = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        http.get(serverConfig.HOST + '/CarOwner/GetCarOwnerScheduledService?UserID=' + id, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    let result = []
                    if (response.data.data.length > 0) {
                        let data = response.data.data;

                        data.map((item, i) => {

                            item.id = i + 1;
                            result.push(item)

                        })

                    }
                    commit(types.GET_SCHEDULEDSERVICE_LIST, result)
                }
            })
    }


export const getssdetailview = ({
    commit
}, id) => {
    console.log("id:" + id)
    http.get(serverConfig.HOST + '/CarOwner/ViewCarOwnerScheduledServiceDetails?CarOwnerServiceId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_SS_DETAIL_VIEW, response.data)
            }
        })
}


export const getchecklist = ({
    commit
}, id) => {
    console.log("id:" + id)
    http.get(serverConfig.HOST + '/CarOwner/getCheckList?CarOwnerServiceId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_CHECKLIST, response.data)
            }
        })
}




export const getworkshoplist = ({
    commit
}, id) => {
    console.log("id:" + id)
    http.get(serverConfig.HOST + '/CarOwner/GetWorkShopDetails', {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_WORKSHOPLIST, response.data.data)
            }
        })
}


export const getScheduleImages = ({
    commit
}, id) => {
    console.log("id:" + id)

    http.get(serverConfig.HOST + '/CarOwner/ViewCarOwnerServiceScheduled?CarOwnerServiceId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_SCHEDULE_IMAGES, response.data)
            }
        })
}



export const addcontactUs = ({

    commit
}, data) => {
    let url = data.url;
    delete data["url"];
    return new Promise(function(resolve, reject) {
        http.post(serverConfig.HOST + url, data, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch((error) => {
                reject(error)
            });

    })
}



export const getrequestedquoteList = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)

        http.get(serverConfig.HOST + '/CarOwner/GetCollisionandPaintModel?UserID=' + id, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    let result = []
                    if (response.data.data.length > 0) {
                        let data = response.data.data;

                        data.map((item, i) => {

                            item.id = i + 1;
                            result.push(item)

                        })

                    }
                    commit(types.GET_REQUESTEDQUOTE_LIST, result)
                }
            })
    }


export const getrequestedquoteDetailView = ({
    commit
}, id) => {
    console.log("id:" + id)
    http.get(serverConfig.HOST + '/CarOwner/GetViewCollisionandPaintModel?CollisionAndPaintId=' + id, {
            crossdomain: true
        })
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_RQ_DETAIL_VIEW, response.data)
            }
        })
}


export const gethistoryList = ({
        commit
    }, id) =>

    {
        console.log("id:" + id)

        http.get(serverConfig.HOST + '/CarOwner/GetMaintenanceHistory?vehicleId=' + id, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    commit(types.GET_HISTORY_LIST, response.data.data)
                }
            })
    }

export const gethistoryview = ({
        commit
    }, id) =>

    {
        console.log("id:" + id)

        http.get(serverConfig.HOST + '/CarOwner/ViewMaintenanceHistory?CarOwnerServiceId=' + id, {
                crossdomain: true
            })
            .then(response => {
                if (response.status == 200) {
                    commit(types.GET_HISTORY_VIEW, response.data)
                }
            })
    }

export const carOwnerDashboard = ({
        commit
    }, data) =>

    {
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        return new Promise((resolve, reject) => {
            http.get(serverConfig.HOST + data.url + data.id, {
                    crossdomain: true
                })
                .then(response => {

                    if (response.status == 200) {
                        resolve(response.data)
                    } else {
                        resolve(response)
                    }
                }).catch(err => {
                    resolve(err)
                })
        })


    }




export const getDashBoardCount = ({
    commit
}, id) => {

    http.get(serverConfig.HOST + '/SuperAdmin/GetDashBoardCount')

    .then(response => {
        commit(types.GET_DASHBOARDCOUNT_LIST, response.data.data)

    })

}
export const getSAvehicleList = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        http.get(serverConfig.HOST + '/SuperAdmin/GetVehicleList?UserID=' + id)
            .then(response => {
                if (response.status == 200) {
                    commit(types.GET_SA_VEHICLE_LIST, response.data.data)
                }
            })
    }

export const getSAServiceList = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        http.get(serverConfig.HOST + '/SuperAdmin/GetCarownerService?UserID=' + id)
            .then(response => {
                if (response.status == 200) {
                    commit(types.GET_SA_SERVICE_LIST, response.data.data)
                }
            })
    }



export const GetVehicleService = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        http.get(serverConfig.HOST + '/SuperAdmin/GetVehicleService?CustomerVehicleID=' + id)
            .then(response => {
                if (response.status == 200) {
                    commit(types.GET_VEHICLE_SERVICE_LIST, response.data.data)
                }
            })
    }



export const getCalculatedHealthIndex = ({
        commit
    }, id) =>

    {
        //console.log("id:"+id)
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        return new Promise((resolve, reject) => {
        http.get(serverConfig.HOST + '/CarOwner/GetCalculatedHealthIndex?customerVehicleId=' + id)
         
        .then(response => {
                if (response.status == 200) {

                    //        s var s = "This is a long string which is 29% of the others.";
                    // s = s.replace(/\d+% ?/g, "");
                    // console.log(s);
                    /*  let controlindexvalue = response.data.data.ControlPointHealthIndexList[0].ControlIndexPercentage
                      let ControlIndexPercentage= controlindexvalue.replace(/\d+% ?/g, "");
                      let output = parseInt(ControlIndexPercentage);

                      let controlindexvalue1 = response.data.data.ControlPointHealthIndexList[1].ControlIndexPercentage
                      let ControlIndexPercentage1= controlindexvalue1.replace(/\d+% ?/g, "");
                      let output1 = parseInt(ControlIndexPercentage1);
                      console.log(output1);*/
                    //console.log(response.data.data);
                    for (var j = 0; j < response.data.data.length; j++) {
                        let labelsdata = [];
                        let numberdata = [];
                        let colordata = [];
                        let backgrounddata = [];
                        let color = '';
                        response.data.data[j].ControlPointHealthIndexList.forEach(element => {
                            labelsdata.push(element.ControlPointName + '-' + element.ControlIndexPercentage);
                            numberdata.push(parseInt(element.ControlIndexPercentage.replace(/\d+% ?/g, "")));
                            colordata.push(parseInt(element.ControlIndexPercentage.replace(/\d+% ?/g, "")));

                            var letters = '0123456789ABCDEF';
                            color = '#';
                            for (var i = 0; i < 6; i++) {
                                color += letters[Math.floor(Math.random() * 16)];
                            }
                            colordata.push(color);
                            color = '#';
                            for (var i = 0; i < 6; i++) {
                                color += letters[Math.floor(Math.random() * 16)];
                            }
                            backgrounddata.push(color);
                        });



                        response.data.data[j]['GraphData'] = {
                            labels: labelsdata,
                            datasets: [{
                                data: numberdata,
                                backgroundColor: colordata,
                                hoverBackgroundColor: backgrounddata
                            }]
                        };

                    }
                    console.log(response.data.data);

                    resolve( response.data.data)
                }
            })
        })
    }


export const getRatingList = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
    http.get(serverConfig.HOST + '/SuperAdmin/GetRating')

    .then(response => {
        commit(types.GET_RATING_LIST, response.data.data)

    })

}


export const getLocationTracking = ({
        commit
    }, id) =>

    {
        console.log("id:" + id)
        http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
        http.get(serverConfig.HOST + '/CarOwner/GetCarownerLocationTarcking?CarOwnerServiceId=' + id)
            .then(response => {
                if (response.status == 200) {
                    let result = response.data.data.map(function(item) { return { lat: item.Latitude, lng: item.Longitude, full_name: "dsgsdgsdg" }; })
                    commit(types.GET_LOCATION_TRACKING, result)
                }
            })
    }

export const getInboxMessages = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/Common/GetInbox?UserID=' + id)
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_INBOX_MESSAGE, response.data.data)
            }
        })
}

export const getReplyMessages = ({
    commit
}, data) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/Common/GetChat', data)
        .then(response => {
            if (response.status == 200) {
                commit(types.GET_CHAT_MESSAGE, response.data.data)
            }
        })
}



export const postReplyMessage = ({
    commit
}, data) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/Common/ChatReply', data)
        .then(response => {
            if (response.status == 200) {
                commit(types.POST_CHAT_MESSAGE, response.data.data)
            }
        })
}

export const updateRead = ({
    commit
}, id) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/Common/UpdateRead?InboxId=' + id)
        .then(response => {
            if (response.status == 200) {
                commit(types.POST_CHAT_MESSAGE, response.data.data)
            }
        })
}

export const cityZoneList = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetCityZone', {
        crossdomain: true
    })

    .then(response => {

        // console.log(response);
        if (response.status == 200) {
            var data = response.data.data;
            let arr = []
            let result = data.reduce(function(r, a) {
                r[a.CityName] = r[a.CityName] || [];
                r[a.CityName].push(a);
                return r;
            }, Object.create(null));
            for (let key in result) {

                arr.push({
                    "data": result[key],
                    name: key
                })
            }


            commit(types.GET_CITY_ZONE_LIST_SUCCESS, arr)
        }
    })
}

export const healthIndexMaster = ({
    commit
}, id) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.get(serverConfig.HOST + '/SuperAdmin/GetHealthIndexMaster', {
        crossdomain: true
    })

    .then(response => {
        debugger
        // console.log(response);
        if (response.status == 200) {
            var data = response.data.data;
            let arr = []
            let result = data.reduce(function(r, a) {
                r[a.IndicatorGroupName] = r[a.IndicatorGroupName] || [];
                r[a.IndicatorGroupName].push(a);
                return r;
            }, Object.create(null));
            for (let key in result) {

                arr.push({
                    "data": result[key],
                    name: key
                })
            }


            commit(types.GET_HEALTH_INDEX_MASTER, arr)
        }
    })
}

export const getMasterVehicles = ({
    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));


    http.get(serverConfig.HOST + '/SuperAdmin/GetMasterVehicle', {
        crossdomain: true
    })

    .then(response => {
        if (response.status == 200) {
            let result = []
            if (response.data.data.length > 0) {
                let data = response.data.data;

                data.map((item, i) => {

                    item.id = i + 1;
                    result.push(item)

                })

            }
            commit(types.GET_VEHICLE_LIST_SUCCESS, result)
        }
    })
}

export const getData = ({
    commit
}, data) => {
    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    return new Promise(function(resolve, reject) {
        http.get(serverConfig.HOST + data, {
                crossdomain: true
            })
            .then(response => {

                if (response.status == 200) {

                    let result = []

                    if (response.data.data.length > 0) {
                        let data = response.data.data;

                        data.map((item, i) => {

                            item.id = i + 1;
                            result.push(item)

                        })
                        resolve(result)
                    } else {
                        resolve(response.data.data)
                    }


                } else {

                    reject(response)
                }
            }).catch((error) => {

                reject(error)
            });

    })
}

export const getServicesByType = ({
    commit
}, body) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/SuperAdmin/ServicesByType', body)
        .then(response => {
            if (response.status == 200) {
                commit(types.SERVICE_BY_TYPE, response.data.data)
            }
        })
}

export const getServicesByBrand = ({
    commit
}, body) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/SuperAdmin/ServiceByBrand', body)
        .then(response => {
            if (response.status == 200) {
                commit(types.SERVICE_BY_BRAND, response.data.data)
            }
        })
}

export const getServicesByWorkshop = ({
    commit
}, body) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/SuperAdmin/ServiceByWorkshop', body)
        .then(response => {
            if (response.status == 200) {
                commit(types.SERVICE_BY_WORKSHOP, response.data.data)
            }
        })
}

export const getServicesByPayment = ({
    commit
}, body) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/SuperAdmin/ServiceByPayment', body)
        .then(response => {
            if (response.status == 200) {
                commit(types.SERVICE_BY_PAYMENT, response.data.data)
            }
        })
}

export const getServicesByAgreement = ({
    commit
}, body) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));

    http.post(serverConfig.HOST + '/SuperAdmin/ServiceByAgreeMent', body)
        .then(response => {
            if (response.status == 200) {
                commit(types.SERVICE_BY_AGREEMENT, response.data.data)
            }
        })
}


export const indicatorGroupList = ({
    commit
}, data) => {

    http.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.getItem('token'));
    http.get(serverConfig.HOST + '/SuperAdmin/GetIndicatorGroupMaster')

    .then(response => {
        // console.log(response);
        if (response.status == 200) {
            commit(types.GET_INDICATOR, response.data.data)

        }
    })


}