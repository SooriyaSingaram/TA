<template>
    <section id="addCustomer">
    
        <div class="container-fluid workdeta1">
    
    
    
            <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'CustomerName' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="name"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name')}" class="form-control" v-model="customer.UserName" :disabled="isDisabled" >
                    
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>

                   <div class="col-lg-3 col-md-6">
                    <h3>{{ 'CorporateAgreement' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                     <select class="form-control"  v-validate="'required'" v-model="customer.CorporateAgreementId" name="corporate">
                   
                    <option v-for="corporate in getCorporateAgreement" :value="corporate.CorporateMasterID">{{corporate.CorporateCompanyName}}</option>
                    </select>
                    
                    <span v-show="errors.has('corporate')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
             </div>    


              <div class="row">
               <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Email' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="email"  name="email"  v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email')}" class="form-control"  v-model="customer.EmailAddress" :disabled="!create" >
                    
                                                          <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate }}</span>

                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Address' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text"  ref="autocomplete"   placeholder="Search"
        onfocus="value = ''"  name="address"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('address')}" class="search-location  form-control"  v-model="customer.Address" :disabled="isDisabled">
                    
                    <span v-show="errors.has('address')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    
             </div> 

              <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'PhoneNumber' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text"  name="phone"  v-validate="'required|numeric|min:10|max:10'" :class="{'input': true, 'is-danger': errors.has('phone')}"  class="form-control"  :disabled="isDisabled" v-model="customer.PhoneNumber">
                    
                                       <span v-show="errors.has('phone')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>

                    </div>
                    
          

                     <div class="col-lg-3 col-md-6">
                    <h3>{{ 'City' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <select class="form-control" name="city" @change="getZone(customer.City)"  v-model="customer.City" v-validate="'required'" >
                   
                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>
                     
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                   
                    </div></div></div>
                    <div class="row">
                    <div class="col-lg-3 col-md-6">
    
                            <h3>{{ 'Zone' | translate }}</h3>
    
                        </div>
    
                        <div class="col-lg-3 col-md-6">
    
                            <div class="form-group"> <select class="form-control" name="zone" v-validate="'required'" v-model="customer.Zone">
    
                       
    
                        <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>
    
    
    
                        </select>
    
                                
    
                                <span v-show="errors.has('zone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
    
                            </div>
    
                        </div>
                    </div>
    
    
    
    
    
    
    
    
    
                       
    
                       
    
    
    
                          
    
    
    
    
    
    
    
                    <div class="row">
    
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">
    
    
    
                            <button class="btn btn-success" type="button" v-on:click="addCustomer()" v-if="create">{{ 'CREATE' | translate }}</button>
    
                            <button class="btn btn-success" type="button" v-on:click="addCustomer()" v-if="!create">{{ 'UPDATE' | translate }}</button>
    
                            <router-link to="/Customer_SA"><button class="btn bck_btn">{{ 'CANCEL' | translate }}</button></router-link>
    
    
    
                        </div>
    
    
    
                    </div>
    
    
    
                </div>
    
            </form>
    
    
    
            <div class="col-12 content_section_Sub_tab p-0 d-flex" v-if="editStatus">
    
    
    
                <div class="col-lg-7 col-md-7 col-sm-12 col-7 ">
    
                    <div class="col-12 content_section_scroll p-0">
    
                        <div class="content_section_table">
    
                            <table width="100%" class="table table-striped">
    
                                <thead>
    
                                    <tr>
    
                                        <th>#</th>
    
                                        <th>{{ 'ServiceType' | translate }}</th>
    
                                        <th>{{ 'Brand' | translate }}</th>
    
                                        <th>{{ 'Model' | translate }}</th>
    
                                        <th>{{ 'Value' | translate }}</th>
    
                                        <th>{{ 'Action' | translate }}</th>
    
                                    </tr>
    
                                </thead>
    
                                <tbody>
    
                                    <tr v-for="SAServiceData in SAServiceDataList">
    
                                        <td>{{SAServiceData.CarOwnerServiceId}}</td>
    
                                        <td>{{SAServiceData.ServiceName}}</td>
    
                                        <td>{{SAServiceData.BrandName}}</td>
    
                                        <td>{{SAServiceData.ModelName}}</td>
    
                                        <td>{{SAServiceData.ServiceAmount}}</td>
    
    
    
                                        <td class="action-ic">
    
                                            <button v-on:click="SAServiceDataBtn(SAServiceData.CarOwnerServiceId);"><img src="../../assets/images/eyeedit.png"/> </button>
    
                                        </td>
    
                                    </tr>
    
    
    
                                    <tr>
    
                                        <td class="no_record" style="text-align:center; font-weight:bold;" v-if="this.data == null" colspan="6">No Record Found</td>
    
                                    </tr>
    
    
    
                                </tbody>
    
                            </table>
    
                        </div>
    
                    </div>
    
                    <!--div class="load-more d-flex justify-content-end col-12">
    
                        <p>
    
                            <router-link to="/Service_SA">{{ 'ViewMore' | translate }}</router-link>
    
                        </p>
    
                    </div-->
    
                </div>
    
    
    
    
    
                <div class="col-lg-5 col-md-5 col-sm-12 col-5">
    
                    <div class="col-12 content_section_scroll p-0">
    
                        <div class="content_section_table">
    
                            <table width="100%" class="table table-striped">
    
                                <thead>
    
                                    <tr>
    
                                        <th>#</th>
    
                                        <th>{{ 'VehicleName' | translate }}</th>
    
                                        <th>{{ 'Year' | translate }}</th>
    
                                        <th>{{ 'Action' | translate }}</th>
    
                                    </tr>
    
                                </thead>
    
                                <tbody>
    
                                    <tr v-for="SAVehicleData in SAVehicleList">
    
                                        <td>{{SAVehicleData.CustomerVehicleID}}</td>
    
                                        <td>{{SAVehicleData.BrandName}}</td>
    
                                        <td>{{SAVehicleData.YearName}}</td>
    
                                        <td class="action-ic">
    
                                            <button v-on:click="SAVehicleView(SAVehicleData.CustomerVehicleID);"><img src="../../assets/images/eyeedit.png"/> </button>
    
                                        </td>
    
                                    </tr>
    
    
    
                                </tbody>
    
                            </table>
    
                        </div>
    
                    </div>
    
    
    
                </div>
    
    
    
    
    
            </div>
    
    
    
    
    
    </div>
    
        </div>
    
    </section>
</template>

<script>
import {
    mapGetters,
    mapActions
}
from "vuex";
import {
    Row,
    Column,
    Btn,
    Card,
    Fa
}
from 'mdbvue'
export default {
	name: 'addCustomer',
	components: {
	Row,
	Column,
	Btn,
	Card,
	Fa
	},
	data() {
		return {
			customer: {},
            cities:[],
            zones:[],
             SAVehicleData:[],
             SAServiceData:[],
            getCorporateAgreementList:[],
            editStatus:false
		}
	},
    mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );

    this.autocomplete.addListener('place_changed', () => {
  let place = this.autocomplete.getPlace();
  debugger
  let ac = place.address_components;
  let lat = place.geometry.location.lat();
  let lon = place.geometry.location.lng();
  let city = ac[0]["short_name"];
     this.customer.Address= place.formatted_address;
     this.customer.Country = place.country;
     this.customer.Longitude= lon;
     this.customer.Latitude= lat;
     this.customer.State=  ac[2].long_name
     this.customer.Country=  ac[3].long_name
    //   this.shop.Longitude = addrObj.lattitude == undefined ? '0' : addrObj.lattitude;
    //   this.shop.Latitude = addrObj.longitude == undefined ? '0' : addrObj.longitude;
    //   this.shop.PostalCode = addrObj.postal_code == undefined ? '0' : addrObj.postal_code;
    //   this.shop.Province = addrObj.admin_area_l1;
  //console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
});
  },
	created() {
      this.$store.dispatch('getCorporateAgreement')

		this.getCustomerParam()
        this.$store.dispatch('cityList');
        this.getSAServiceDataParam();
        this.getSAvehicleParam();
    },
    methods: {
        getSAServiceDataParam() {

            //  console.log(this.getscheduleserviceList);

            //  console.log(localStorage.getItem('userId')); 
            // let dash = 1;
            let userid = Number(JSON.parse(localStorage.getItem('userId')))
            this.$store.dispatch("getSAServiceList", userid);
        },

        SAServiceDataBtn(id) {

            console.log(id);
            this.$router.push({ path: '/Service_detail_SA/' + id })
        },
        SAVehicleView(id) {
            this.$router.push({ path: '/Customer_Vehicle_Detail_SA/' + id })
        },

        getSAvehicleParam() {
            let userid = Number(JSON.parse(localStorage.getItem('userId')))
            this.$store.dispatch("getSAvehicleList", userid);
        },
        getCustomerParam() {
            let customerId = this.$route.params.id;
            if (customerId == '0') {
                this.customer.CarOwnerID = 0;
                this.customer.UserID = 0;
                this.isDisabled = false;
                this.create = true;
            } else {


                this.isDisabled = false;
                this.create = false;
                this.editStatus = true;
                this.$store.dispatch('getcustomer', customerId)


            }
        },
        getZone(id) {
            this.$store.dispatch("zoneList", id)
        },
        addCustomer() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    // eslint-disable-next-line
                    // alert('Form Submitted!');

                    var self = this;
                    this.customer.url = '/SuperAdmin/AddCarOwner';
                    return this.$store.dispatch('updateData', this.customer).then((response) => {
                        if(response.data.IsSuccess){
                        self.$message(response.data.Message)
                        self.$router.push({
                            name: 'Customer_SA'
                        })
                        }else{
                            self.$message(response.data.Message)
                        }
                        
                    }).catch(function(err) {
                        //self.$message(err.response.data.error)
                    });
                }
                //alert('Correct them errors!');
            });
        }
    },
    computed: {
        ...mapGetters({
            getCustomer: "getCustomer",
            cityList: "cityList",
            zoneList: "zoneList",
            SAServiceDataList: "getSAServiceList",
            SAVehicleList:"getSAvehicleList",
                        getCorporateAgreement:"getCorporateAgreement"

		})
	},

	watch: {
		'getCustomer': {
			deep: true,
			handler(value) {
				this.customer = null
				this.customer = this.getCustomer.data;
                this.getZone(this.getCustomer.data.City)
            }
        },

        'cityList': {
            deep: true,
            handler(value) {
                this.cities = null
                this.cities = this.cityList;
            }
        },
        "zoneList": {
            deep: true,
            handler(value) {
                this.zones = null
                this.zones = this.zoneList;
            }
        },
        'getSAServiceList': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.getSAServiceList;
        debugger
          
			}
		},

 'getSAvehicleList': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.getSAvehicleList;
        debugger
          
			}
		},

"getCorporateAgreement":{
            deep: true,
			handler(value) {
				this.zones = null
				this.getCorporateAgreementList = this.getCorporateAgreementList.data;
        debugger
			}
        }
        
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.highbut {
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.lessbut {
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.secform {
    margin-top: 20px;
}

.servdeta9 h3 {
    font-size: 25px;
    font-weight: 300;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
}

.cancont button {
    font-size: 18px;
    background: #95a5a6 !important;
    border-radius: 5px;
    box-shadow: none !important;
}

.custdetabut {
    margin-top: 50px;
}

.vehrig {
    border-left: 12px solid #f2f5f7;
}

.corpe {
    margin-top: -50px;
}

.view {
    font-size: 18px;
    color: black;
    text-decoration: underline;
    float: right;
    cursor: pointer;
}

input:focus {
    box-shadow: none !important;
    border: 1px solid #e0cece !important;
}

.dropcity:focus {
    box-shadow: none !important;
    border: 1px solid #e0cece !important;
}

.dropmale:focus {
    box-shadow: none !important;
    border: 1px solid #e0cece !important;
}

.chanimg {
    width: 110px;
    height: 110px;
    border: 3px solid #007df8;
    border-radius: 50%;
}

.servtab {
    margin-top: 20px;
}

@media only screen and (max-width: 992px) {
    .corpe {
        margin-top: 0px !important;
    }
}

@media only screen and (max-width: 767px) {
    .servtab {
        overflow-x: scroll;
    }
    .servdeta9 h3 {
        padding-left: 0px !important;
    }
    .corpe {
        margin-top: 0px !important;
    }
    .workdeta1 .col-lg-3 h3 {
        padding-left: 0px !important;
    }
}

.workdetatab1 {
    padding-top: 20px;
    margin-top: 30px;
    background: white;
    border-radius: 5px;
}

.workdetatab1 {
    padding-bottom: 30px;
}

.workdetatab1 h2 {
    font-size: 25px;
    color: #212121;
}

.work_cont {
    margin-top: 20px;
}

.cancont button {
    font-size: 18px;
    background: #95a5a6 !important;
    border-radius: 5px;
    box-shadow: none !important;
}

.upcont button {
    font-size: 18px;
    background: #007df8 !important;
    border-radius: 5px;
    box-shadow: none !important;
}

.upcont {
    margin-top: 20px;
    padding-bottom: 40px;
}

.adm {
    background: #0052b1;
    color: white !important;
}

.adm h2 {
    color: white !important;
}

#Corporate_agree {
    padding-bottom: 40px;
}

.workdeta1 {
    background: white;
    border-radius: 5px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 50px;
    margin-top: 30px;
}

.workdeta1 .col-lg-3 {
    padding-bottom: 30px;
}

.workdeta1 .col-lg-3 h3 {
    padding-left: 30px;
    font-size: 18px;
    color: #666666;
    padding-top: 5px;
}

.workdeta1 .col-lg-3 h4 {
    font-size: 20px;
    padding-top: 2px;
}

.corptext {
    margin-top: 30px;
}

.workdeta1 .col-lg-3 input {
    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
}

.workdeta1 .col-lg-3 .dropcity {
    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
}

.workdeta1 .col-lg-3 .dropmale {
    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
}

.workdeta1 .col-lg-3 textarea {
    background: #f5f8fa;
    border-radius: 10px !important;
    height: 100px;
}

body .btn_div button.bck_btn {
    background: #3a4959 !important;
    color: #fff;
}

.form-control {
    line-height: 42px;
    padding-top: 0px;
}

select.form-control {
    line-height: 37px;
    -webkit-appearance: none;
    appearance: none;
    background: #f3f6fb url('../../assets/images/arrow-down.png') !important;
    background-repeat: no-repeat !important;
    background-position: 97% center !important;
}

.content_section_Sub_tab {
    margin-top: 10px;
}

.action-ic button {
    border: 0px;
    background: transparent;
}

table.table thead th {
    border-top: none;
  }
  
  thead th {
    font-size: 15px;
    padding: 12px;
    text-transform: uppercase;
    background: #0066d0;
    color: #ffffff;
}

tbody td {
    color: #434343;
    font-size: 16px;
    padding: 15px;
}

.table-striped {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
}

.table-striped tbody tr:nth-of-type(2n+1) {
    background-color: #e3ebf3;
}

.table-striped tbody tr {
    background: #eef6fe none repeat scroll 0 0;
    padding: 10px;
}

.table td,
.table th {
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
}

.table td:last-child,
.table th:last-child {
    border-right: 0px solid #dee2e6;
}

.bt-0 {
    border-top: 0 !important;
}

.table-striped tbody tr:last-child table tbody tr:nth-child(odd) {
    background: #eef6fe none repeat scroll 0 0;
}

.table-striped tbody tr:last-child table tbody tr:nth-child(even) {
    background: #e3ebf3 none repeat scroll 0 0;
}

td.action-ic img {
    width: 34px;
    height: 34px;
    cursor: pointer;
}

td.action-ic {
    padding: 10px 10px !important;
    text-align: center;
}

.content_section_scroll {
    overflow-x: auto;
}

.content_section_table {
    width: 100%;
}

.load-more p,
.load-more p a {
    font-size: 18px;
    color: #212121;
    text-align: center;
    font-family: 'Nunito-Medium';
    text-decoration: underline;
    margin-top: 0px;
    margin-bottom: 20px;
    cursor: pointer;
    display: inline-block;
}
</style>