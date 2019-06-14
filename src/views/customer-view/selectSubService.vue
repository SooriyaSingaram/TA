<template>



  <section id="Servicesselectdetail">
    <div class="container-fluid" v-if="showMainService">
      <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'SERVICES' | translate }}</h2>
      </div>
<div class="col-12 content_section">

          <div class="vehicle_tlt ">
          <div class="col-6 d-flex flex-column align-items-start">
          <h4>{{ 'QuoteRequest' | translate }}</h4>
          </div>
          </div>

    <div class="d-flex flex-wrap quote_lsts_sec p-4">
          <!--quoteList-->
        <div class="col-sm-12 col-md-12 flex-column top_txt">
            <p>{{ 'SelectTheService' | translate }}</p>
        </div>


          <!--quoteList-->
           <div class="col-sm-12 col-md-3 flex-column" v-for="data in mainservice">
            <div class="quote_lst" >
          
<a  @click="goToNext(data.MainServiceID,data.IsCollision)">
                <div class="quote_lst_det" v-if="data.ImageUrl != ''">
                     <span class="md-add-background">   </span>
                      <img  v-bind:src="data.ImageUrl" width="100" />  <p class="mt-2 heading_para">{{data.ServiceName}}</p>
                       
               </div>
                <div class="quote_lst_det" v-if="data.ImageUrl == ''">
                     <span class="md-add-background">   </span>
                      <img  src="../../assets/images/quote-img1.png" width="100" />  <p class="mt-2 heading_para">{{data.ServiceName}}</p>
                       
               </div>
</a>

            </div>
          </div>

        
 <div class="col-12 text-center" v-if="buttonReq">
             <button @click="showMainService=false;showSubService=true;" class="back-btn"> {{ 'BACK' | translate }}</button>
        </div>
         <!--quoteList-->
          <div class="col-12 text-center" v-if="!buttonReq">
              <router-link to="/Addnewquote"><button class="back-btn"> {{ 'BACK' | translate }}</button></router-link>
        </div>
    </div>
 </div>
       
      </div>
  </div>
    <div class="container-fluid" v-if="showSubService">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'MyVehicles' | translate }}</h2>
        </div>
        <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>{{ 'QuoteRequest' | translate }}</h4>
            </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
             <h2 class="quote-main-heading">{{ 'DetailsOfService' | translate }}</h2>
            <div class="sel_fac">
             <select class="form-control" v-model="subserveId" @change="getContent(subserveId)">
             <option :value="service.SubServiceId" v-for="service in subServiceList">{{service.SubServicesName}}</option>
            </select>
            </div>
             <div class="detail-desc">
                    <p>
                    {{ 'ServiceDescription' | translate}} :  {{subServiceDetail.SubServiceDescription}}
                    </p>
                  </div>
            </mdb-col>

            <mdb-col col="12" class="p-0">
              <mdb-row class="m-0">
                <mdb-col sm="6" md="7" col="12" class="p-0 padding-rt">
                 

                  <table class="table table-bordered tablestriped table-width">
                    <thead>
                      <tr>
                        <th>{{ 'ServiceSparePart' | translate }}</th>
                        <th>{{ 'Included' | translate }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{subServiceDetail.PartLabour}}</td>
                        <td>{{yesStatus}}</td>
                      </tr>
                      <!--tr>
                        <td>Filter Change</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Oil 20W/4.0Shell</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>25 Control points Check</td>
                        <td>Yes</td>
                      </tr-->
                    </tbody>
                  </table>
                </mdb-col>
                <mdb-col sm="6" md="5" col="12" class="p-0">
                  <mdb-col col="12" class="p-0">
                    <table class="table table-bordered">
                    <!-- <thead>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead> -->
                    <tbody>
                      <tr>
                        <td>{{ 'ServiceValue' | translate }}</td>
                        <td><b>${{subServiceDetail.ServiceAmount}}</b></td>
                      </tr>
                      <tr>
                        <td>{{ 'DealerValue' | translate }}</td>
                        <td><b>${{subServiceDetail.RefDealerPrice}}</b></td>
                      </tr>
                      <tr>
                        <td>{{ 'YourSavings' | translate }}</td>
                        <td><b>${{subServiceDetail.TempOwnerSaving}}</b></td>
                      </tr>
                     
                    </tbody>
                  </table>
                  </mdb-col>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col col="12" class="p-0" v-if="showButton">
               <div class="d-flex mt-3 scheduled_btns" v-if="isLogin">
                 <button type="button" class="detail-btn" @click="schedule()"> {{ 'scheduleNow' | translate }}!</button>
               <!--button type="button" class="reschedule-btn"  @click="addToCart()" >{{ 'AddtoCart' | translate }}</button-->
                <button type="button" class="cancel-btn" @click="addAnotherService()" >{{ 'AddAnotherService' | translate }} </button>
          </div>
           <div class="d-flex mt-3 scheduled_btns" v-if="!isLogin">
                 <button class="detail-btn" @click="centerDialogVisible = true;"> {{ 'scheduleNow' | translate }}!</button>
                          </div>
              <div class="col-12 text-center">
                <router-link to="/Addnewquote">
                  <button class="back-btn" > {{ 'BACK' | translate }}</button> 
                </router-link>
              </div>
            </mdb-col>
          </div>
        </div>
      </div>
    </div>
      <el-dialog title="Login to proceed" :visible.sync="centerDialogVisible" width="30%" center>
 <span>{{'LoginToCreateQuote' | translate}} </span>
  <span slot="footer" class="dialog-footer">
    <router-link to="/login"><el-button type="primary" v-on:click="centerDialogVisible = false;" > {{ 'LOGIN' | translate }}</el-button>    </router-link>
    
    <el-button type="danger" @click="centerDialogVisible = false">  {{ 'CANCEL' | translate }} </el-button>
</span>
</el-dialog>
  </section>
</template>


<script>
import Vue from 'vue'
import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
} from "mdbvue";
import {
    mapGetters,
    mapActions
}
from "vuex";
export default {

    components: {
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn
    },
    props: ["vehicedata"],
    // props: ["servicedata"],
    data() {
        return {
          yesStatus:'',subserveId:'',
            contentLength: 0,
            tempObj: { },
            showMainService: true,
            showSubService: false,
            showCollision: false,
            mainservice: [],
            service: {},
            subServiceList: [],
            mainService: '',
            subServiceDetail: {},
            isLogin: false,
            centerDialogVisible: false,
            showButton: false,
totalAmount:0,mainServiceId:0,buttonReq:false

        }
    },
    mounted: function() {
        var self = this;

        if (this.vehicedata) {
            this.tempObj = this.vehicedata;
        }else{
          this.$router.push({
                    name: 'Addnewquote'
                }) 
        }
    },
    computed: {
        ...mapGetters({
            getMainServiceList: "getMainServiceList",
        })
    },
    watch: {
        'getMainServiceList': {
            deep: true,
            handler(value) {
                // this.mainservice = null
                // this.mainservice = this.getMainServiceList.data;
            }
        }
    },
    created() {
        let isLogin = JSON.parse(localStorage.getItem('userId'));
        if (isLogin) {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
        this.getData()
        this.create = true;
        this.isDisabled = false;

    },
    methods: {
      addAnotherService(){
        this.buttonReq=true;
         this.showMainService= true;
            this.showSubService=false;
        var self=this;
        //self.tempObj.ServiceList=[];
 self.tempObj.ServiceList = self.tempObj.ServiceList || [];
 self.tempObj.ServiceList.push({
                MainServiceId: self.mainServiceId,
                SubserviceId: self.tempObj.SubserviceId
            })
        },
        getData() {

            let url = '/CarOwner/GetMainServiceList'

            return this.$store.dispatch('getDropdownList', url).then((response) => {
                this.mainservice = response.data.data;
                console.log(response.data.data);
            }).catch(function(err) {
                //alert(err.response.data.error)
            });

        },
        redirectToLogin() {

        },
        addToCart() {
            let tempObject = {
                "CarOwnerCartDetailsID": 0,
                "MainServiceId": this.mainServiceId,
                "SubServiceId": this.tempObj.SubserviceId,
                "CustomerVehicleID": this.tempObj.CustomerVehicleID,
                "UserId": Number(JSON.parse(localStorage.getItem('userId'))),
                "CityId": this.tempObj.CityId,
                "ZoneId":this.tempObj.ZoneId,
                url: '/CarOwner/AddCarOwnerCartDetails',
            }
            return this.$store.dispatch('updateData', tempObject).then((response) => {
                this.$message(response.data.Message)
                this.$router.push({
                    name: 'Addnewquote'
                })

            }).catch(function(err) {
                this.$message(err.response.data.error)
            });

        },
        schedule() {
            var self = this;
         self.tempObj.ServiceList = self.tempObj.ServiceList || [];
self.tempObj.ServiceAmount=this.totalAmount;
 self.tempObj.ServiceList.push({
                MainServiceId: self.mainServiceId,
                SubserviceId: self.tempObj.SubserviceId
            })
           
            self.$router.replace({
                name: 'GetQuote',
                
                params: {
                    quoteFinaldata: self.tempObj
                }
            });


        },
        getSubservices(id) {

            this.mainServiceId = id;
            var self = this;
            //			let url = '/CarOwner/SubServiceDropDownList?MainServiceId=' +this.mainService ;

            let url = '/CarOwner/SubServiceDropDownList?MainServiceId=' + this.mainServiceId + '&CityId=' + self.tempObj.CityId + '&ZoneId=' + self.tempObj.ZoneId
            
            return this.$store.dispatch('getSubServiceData', url).then((response) => {
                if (response.data.IsSuccess) {
                    self.subServiceList.length = 0;
                    self.subServiceList = response.data.data;
                    debugger
                } else {
                    self.subServiceList.length = 0;
                    self.subServiceList = []
                }
            }).catch(function(err) {
                alert(err.response.data.error)
            });
        },
        goToNext(id,collision) {
            var self = this;
            let prevOutput = self.tempObj;
            debugger
            if (collision) {
                self.$router.replace({
                    name: 'Collisionandpaint',
                    params: {
                        id: id,
                        servicedata: prevOutput
                    }
                });
            } else {
                self.showMainService = false;
                self.showSubService = true;
                this.getSubservices(id)
            }

        },
        getContent(a) {
            this.showButton = true;
            let mainService = this.$route.params.id;

            var self = this;
            self.tempObj.SubserviceId = a;
            this.yesStatus="yes";
            
            let url = '/CarOwner/GetServiceDetails?SubServiceId=' + a + '&MainServiceId=' + this.mainServiceId + '&CityId=' + self.tempObj.CityId + '&ZoneId=' + self.tempObj.ZoneId
            //	let url = '/CarOwner/GetServiceDetails?SubServiceId='+a+'&MainServiceId='+this.mainService ;
            return this.$store.dispatch('getSubServiceData', url).then((response) => {
                
                if (response.data.IsSuccess) {
                    self.subServiceDetail = response.data.data;
                  
self.totalAmount= self.totalAmount+Number(response.data.data.ServiceAmount)
                } else {

                }
            }).catch(function(err) {
                alert(err.response.data.error)
            });
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tablestriped tbody tr:nth-of-type(odd) {
    background-color: #f7f7f7;
  }
  .table b{font-weight: bold;}
.table-width{width: 85%;}
  table tr th {
    color: #37383e;
    font-size: 17px;
    font-family: "Nunito-Medium";
  }
.table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 1px;
}
  table tr td {
    color: #37383e;
    font-size: 17px;
    font-family: "Nunito-Regular";
  }

  table.table th,
  table.table td {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .detail-heading {
    color: #666666;
    font-size: 20px;
    font-family: "Nunito-Medium";
  }

  .detail-heading span {
    color: #0066d0;
    padding-left: 60px;
  }

  .detail-desc p {
    color: #37383e;
    font-size: 17px;
    font-family: "Nunito-Regular";
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .detail-desc p span {
    color: #0066d0;
  }

  .pickup-heading {
    color: #333333;
    font-size: 16px;
    font-family: "Nunito-Medium";
    text-align: left;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .pickup-img {
    padding: 0;
    margin: 0;
  }

  .pickup-img li {
    position: relative;
    height: 114px;
    width: 143px;
    display: inline-block;
    margin-right: 20px;
    margin-top: 20px;
    list-style: none;
  }

  .pickup-img li img {
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-width: 100%;
  }

  .pickup-img li:last-child {
    margin-right: 0;
  }

  .padding-rt {
    padding-right: 25px !important;
  }

  .back-btn {
    padding: 10px 60px;
    background: #cacaca;
    color: #212121;
    border: none;
    border-radius: 4px;
    margin-top: 60px;margin-bottom: 20px;
  }
.quote-main-heading
{
  font-size: 20px;margin-top: 0;margin-bottom:30px;color:#292b30;font-family: 'Nunito-Medium';
  text-transform: capitalize;
}
.sel_fac select{width: 395px;}
.scheduled_btns button {
    width: 210px;
    margin-right: 20px;
}
.reschedule-btn {
    background: #8e44ad;
       border: 0 none;
    border-radius: 3px;
    color: #fff;
    font-size: 17px;
    width: 120px;
}

.cancel-btn {
  background: #e74c3c none repeat scroll 0 0;
  border: 0 none;
  border-radius: 5px;
  color: #fff;
  font-size: 17px;
  margin-left: 14px;
  padding: 0 16px;
}
.quote_lsts_sec{
    background: #fff;
}
.vehicle_tlt{margin-bottom:30px;}
.vehicle_tlt h4
{
    color:#363a3f;
    font-size:22px;
    font-family: 'Nunito-Bold';
    
}
.quote_lst_det{
    text-align: center; 
}
.quote_lst {
  border: 1px solid #d1d4d7;
  border-radius: 5px;
  margin-bottom: 31px;
  padding: 15px;
}
.back-btn{
    padding: 6px 60px 10px 60px;
    background: #cacaca;
    color: #212121;
    border: none;
    border-radius:4px; 
}

.quote_lst_det p {
  color: #292b30;
}

.top_txt{
    font-weight: bold;
    font-size:18px;
}
.md-add-background{
align-items: center;
    background-color: rgb(136, 136, 136);
    border-radius: 50%;
    display: flex;
    height: var(--md-icon-size);
    justify-content: center;
    width: var(--md-icon-size);
}
.quote_lst_det img{
  height:90px;
}

</style>
