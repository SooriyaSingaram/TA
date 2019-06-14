<template>
  <section id="addDriver">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12 main-title adm">
          <h2>{{ 'AddDriver' | translate }}</h2>
        </div>
      </div>

    <form>
        <div class="container-fluid workdeta1">
        <div v-if="!showAvailability">
            <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'DriverName' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                   <!--  <input type="text" class="form-control" :disabled="isDisabled" v-model="driver.UserName" required > -->
                    <input type="text" name="name"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" class="form-control" :disabled="isDisabled" v-model="driver.UserName">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                      


                     <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Address' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">

                    <input type="text" ref="autocomplete"   placeholder="Search"
        onfocus="value = ''" class="form-control"   v-model="driver.Address"   name="address"  v-validate="'required'">
                     <i v-show="errors.has('address')" class="fa fa-warning"></i>
                    <span v-show="errors.has('address')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>

                   </div>

              <div class="row">
                  
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Email' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <!-- <input type="text" class="form-control"  :disabled="isDisabled" v-model="driver.Email" required> -->
                  <input type="text"  name="email"  v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" class="form-control" :disabled="!create" v-model="driver.Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <!--span v-show="errors.has('email')" class="help is-danger" v-for="err in errors.items"><p v-if="err.rule == 'email'">{{ 'emailValidation' | translate }}</p><p v-if="(err.rule == 'required' && err.field=='email')">{{ 'requiredValidation' | translate }}</p></span-->
                   <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate }}</span>

                    </div>
                    </div>

                     
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'City' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <select class="form-control" name="city" @change="getZone(driver.City)"  v-model="driver.City" v-validate="'required'">
                   
                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>
                     <i v-show="errors.has('city')" class="fa fa-warning"></i>
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
                    
          

             </div>     
              <div class="row">
                  


                     <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Zone' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group"> <select class="form-control" name="zone"  v-model="driver.Zone" @change="getworkshop(driver.City,driver.Zone)" v-validate="'required'">
                   
                    <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>

                    </select>
                     <i v-show="errors.has('zone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('zone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
                    
 <!--div class="col-lg-3 col-md-6">
                    <h3>DriverCode</h3>
                    </div-->
                    <!--div class="col-lg-3 col-md-6">
                    <div class="form-group">
                     <input type="text" name="drivercode"  v-validate="'required|numeric|max:6'" :class="{'input': true, 'is-danger': errors.has('drivercode') }" class="form-control" :disabled="isDisabled" v-model="driver.DriverCode">
                    <i v-show="errors.has('drivercode')" class="fa fa-warning"></i>
                    <span v-show="errors.has('drivercode')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div-->
                   
<div class="col-lg-3 col-md-6">
                    <h3>{{ 'PhoneNumber' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <!-- <input type="text" class="form-control"  :disabled="isDisabled" v-model="driver.PhoneNumber" required> -->
                     <input type="text" name="CompanyMobile"  v-validate="'required|numeric|max:10'" :class="{'input': true, 'is-danger': errors.has('mobile') }" class="form-control" :disabled="isDisabled" v-model="driver.PhoneNumber">
                    <i v-show="errors.has('CompanyMobile')" class="fa fa-warning"></i>
 <!--p v-if="err.rule == 'required' && err.field=='CompanyMobile'">{{ 'requiredValidation' | translate }}</p>
                    
                    <p v-if="(err.rule == 'numeric' && err.field=='CompanyMobile')">{{ 'mobileValidation' | translate }}</p-->
                        <span v-show="errors.has('CompanyMobile')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>
                        
                                                         </div>
             </div> 


             <div class="row">
                   
                    <div class="col-lg-3 col-md-6" v-if="create">
                    <h3>{{ 'Password' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6" v-if="create">
                    <div class="form-group">
                    <!-- <input type="text" class="form-control"  :disabled="isDisabled" v-model="driver.Password"> -->
                    <input type="password" name="password"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }" class="form-control" :disabled="isDisabled" v-model="driver.Password">
                    <i v-show="errors.has('password')" class="fa fa-warning"></i>
                    <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>

                     <div class="col-lg-3 col-md-6">
                    <h3>{{ 'WorkShop' | translate }}</h3>
                    </div>
                   <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <!-- <input type="number" class="form-control"  :disabled="isDisabled" v-model="driver.WorkShopID"> -->
                    <select class="form-control" multiple name="workshop" v-model="driver.WorkShopIdList" v-validate="'required'">
                    <option v-for="workshop in workshops" :value="workshop.WorkShopID">{{workshop.WorkShopName}}</option>

                    </select>
                    <!--<input type="text" name="workshop"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('workshop') }" class="form-control" :disabled="isDisabled" v-model="driver.WorkShopID">-->
                    <i v-show="errors.has('workshop')" class="fa fa-warning"></i>
                    <span v-show="errors.has('workshop')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
                    
                    
                    
             </div> 

             <div class="row">
                   
                   
                     
   </div>

  <div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-12 text-center" >
   <div class="driver_time_ava row">
   <a v-if="!create" @click="showAvailability=true" style="color: #007df8 !important;
    text-decoration: underline;"> {{ 'EditAvailabilityTime' | translate }}</a>
   <a v-if="!create" @click="centerDialogVisible=true" style="color: #f00 !important;">  {{ 'DeleteAvailabilityTime' | translate }}</a>
   </div>
    </div>
     </div>
             <div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button"  v-on:click="addDriver()" v-if="create" >{{ 'Submit' | translate }}</button>
                    <button class="btn btn-success" type="button"  v-on:click="addDriver()" v-if="!create" >{{ 'UPDATE' | translate }}</button>
                   <router-link to="/Drivers_SA"><button class="btn bck_btn">{{ 'CANCEL' | translate }}</button></router-link>

 </div>

 
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="isDisabled">

                <router-link to="/Drivers_SA"><button class="btn bck_btn">{{ 'BACK' | translate }}</button></router-link>

 </div>
 </div>
 </div>

<div class="col-12" v-if="showAvailability">
<h2>{{ 'DriverAvailabilityTime' | translate }}</h2>
<h4>{{ 'WorkingDays' | translate }}</h4>
<div class="daylist">
<ul>
<li><input type="checkbox" name="checkbox" id="checkbox_id" v-model="availability.IsMonday">
<label for="checkbox_id">{{ 'Monday' | translate }}</label></li>
<li><input type="checkbox" name="checkbox" id="checkbox_id" v-model="availability.IsTuesday">
<label for="checkbox_id">{{ 'Tuesday' | translate }}</label></li>
<li><input type="checkbox" name="checkbox" id="checkbox_id" v-model="availability.IsWednesday">
<label for="checkbox_id">{{ 'Wednesday' | translate }}</label></li>
<li><input type="checkbox" name="checkbox" id="checkbox_id" v-model="availability.IsThursday">
<label for="checkbox_id">{{ 'Thursday' | translate }}</label></li>
<li><input type="checkbox" name="checkbox" id="checkbox_id" v-model="availability.IsFriday">
<label for="checkbox_id">{{ 'Friday' | translate }}</label></li>
<li><input type="checkbox" name="checkbox" id="checkbox_id" v-model="availability.IsSaturday">
<label for="checkbox_id">{{ 'Saturday' | translate }}</label></li>

</ul>
</div>
<div class="col-12 p-0"><h4>{{ 'WorkingHours' | translate }}</h4>

   <div class="row">
                   
                   
                      <div class="col-lg-2 col-md-6">
                    <h4>{{ 'FromTime' | translate }}</h4>
                    </div>
                   <div class="col-lg-4 col-md-6">
                    <div class="form-group sel_driver">

                    <!--div class="am_pm_det">
                          <input type="radio" name="slotA" value="AM" v-model="availability.slot_a"> AM<br>
                         <input type="radio" name="slotA" value="PM" v-model="availability.slot_a"> PM
                         </div-->

                    <select class="form-control"  name="workshop" v-model="availability.WorkingHoursFrom" v-validate="'required'">
                     <option v-for="time in timesArray" :value="time">{{time}}</option>
                         </select>

                         
                  </div>
                    </div>

                     <div class="col-lg-2 col-md-6">
                    <h4>{{ 'ToTime' | translate }}</h4>
                    </div>
                   <div class="col-lg-4 col-md-6 ">
                    <div class="form-group sel_driver">
                       <!--div class="am_pm_det">
                          <input type="radio" name="slot" value="AM" v-model="availability.slot_b"> AM<br>
                         <input type="radio" name="slot" value="PM"  v-model="availability.slot_b"> PM
                         </div-->

                    <select class="form-control"  name="workshop" v-model="availability.WorkingHoursTO" v-validate="'required'">
                    <option v-for="time in timesArray" :value="time">{{time}}</option>

                    </select>
                   
                    
                  </div>
                    </div>
                    
   </div>
<div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button" v-if="create" v-on:click="addAvailability()" >{{ 'Submit' | translate }}</button>
                    <button class="btn btn-success" type="button"  v-on:click="addAvailability()" v-if="!create" >{{ 'UPDATE' | translate }}</button>
                  <button class="btn bck_btn" v-on:click="showAvailability=false">{{ 'CANCEL' | translate }}</button>

 </div>
</div>
</div>



</div>

        </div>
    </form>

   
</div>
 <el-dialog  :visible.sync="centerDialogVisible" width="30%" center>
   <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px;
    padding-bottom: 20px;">{{ 'DeleteAvailabilityTime' | translate }}</h2>
            <div class="row">
                    
                    <h4>{{ 'deleteAlert' | translate }}?</h4>
                   
                   
                    
             </div>   
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; deleteDriverAvailability();" >{{ 'Confirm' | translate }}</el-button> 
    
    <el-button type="danger" @click="centerDialogVisible = false">{{ 'CANCEL' | translate }}</el-button>
 </span>
</el-dialog>
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
    CardBody,
    CardHeader,
    CardText,
    Fa,
    BarChart,
    PieChart,
    LineChart,
    RadarChart,
    DoughnutChart,
    ListGroup,
    ListGroupItem,
    Badge,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter
  } from 'mdbvue'
  export default {
    name: 'addDriver',
    components: {
      Row,
      Column,
      Btn,
      Card,
      CardBody,
      CardHeader,
      CardText,
      Fa,
      BarChart,
      PieChart,
      LineChart,
      RadarChart,
      DoughnutChart,
      ListGroup,
      ListGroupItem,
      Badge,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter
    },
  data() {
		return {
			driver: {},
            cities:[],
            zones:[],centerDialogVisible:false,
            timesArray:['02.00 AM','04.00 AM','06.00 AM','08.00 AM','10.00 AM','12.00 AM','02.00 PM','04.00 PM','06.00 PM','08.00 PM','10.00 PM','12.00 PM'],
            workshops:[],availability:{ 
                "IsMonday": false,
                "IsTuesday": false,
                "IsWednesday": false,
                "IsThursday": false,
                "IsFriday": false,
                "IsSaturday": false,
                "CreatedBy": Number(localStorage.getItem('userId').slice(1, -1))
 },showAvailability:false
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
     this.driver.Address= place.formatted_address;
     this.driver.Country = place.country;
     this.driver.Longitude= lon;
     this.driver.Latitude= lat;
     this.driver.State=  ac[2].long_name
     this.driver.Country=  ac[3].long_name
});
  },
	created() {
		this.getDriverParam()
        this.$store.dispatch('cityList')

	},
	methods: {
        deleteDriverAvailability(){
let availability_data={ url: '/SuperAdmin/DeleteDriverAvailability?DriverAvailabilityID='+this.availability.DriverAvailabilityID }
	return this.$store.dispatch('updateData',availability_data).then((response) => {
         alert(response.data.Message)
         this.$router.push({
					name: 'Drivers_SA'
				})
                    	
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
        },
        addAvailability(){
this.availability.url="/SuperAdmin/AddDriverAvailability";
			return this.$store.dispatch('updateData', this.availability).then((response) => {
         this.$message(response.data.Message)
         this.$router.push({
					name: 'Drivers_SA'
				})
                    	
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});

        },
		getDriverParam() {
            debugger
			let driver_Id = this.$route.params.id;
			if (driver_Id == '0') {
                this.availability.DriverAvailabilityID= 0;
                this.driver.DriverDetailsID =0;
                this.driver.UserID =0;
                this.isDisabled = false;
				this.create = true;
                
			}
			else {
                
               
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getdriver',  {do_function:'GetDriverEdit',id:driver_Id})
            return this.$store.dispatch('getListData','/SuperAdmin/GetDriverAvailability?DriverDeatilsId='+driver_Id).then((response) => { 
                if(response.data.IsSuccess){
 this.availability = response.data.data
                }else{
                 this.availability.DriverAvailabilityID= 0;
                this.availability.DriverDetailsID =driver_Id;
                }
               
            })
                
            }	
				
			},
         getZone(id){
this.$store.dispatch("zoneList",id) 
        },
        getworkshop(city,zone){
        this.$store.dispatch("assignWorkshop",{CityId:city,ZoneId:zone}) 

      },
		addDriver() {  
             this.$validator.validateAll().then((result) => {   
                 if(result) {                              
			var self = this;
           this.driver.url= '/SuperAdmin/AddDriver';
            
			return this.$store.dispatch('updateData', this.driver).then((response) => {
                debugger
         if(response.data.IsSuccess){
             this.showAvailability = true;
             
                this.availability.DriverDetailsID=response.data.data.DriverDetailsID ;
         }
         else{
  self.$message(response.data.Message)
         }
	
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
            
            }
             //alert('Correct them errors!');
              })
		
    
		}
	},

	computed: {
		...mapGetters({
			getdriver: "getdriver",
            cityList: "cityList",
            zoneList:"zoneList",
            assignWorkshop:"assignWorkshop"
		})
	},
	watch: {
		'getdriver': {
			deep: true,
			handler(value) {
                debugger
				this.driver = null
				this.driver = this.getdriver.data;
                 this.getZone(this.getdriver.data.City)
                 this.getworkshop(this.driver.City,this.driver.Zone)
			}
		},
        'cityList': {
			deep: true,
			handler(value) {
				this.cities = null
				this.cities = this.cityList;
			}
		},
        "zoneList":{
            deep: true,
			handler(value) {
				this.zones = null
				this.zones = this.zoneList;
			}
        },
         "assignWorkshop":{
            deep: true,
			handler(value) {
				this.workshops = null
				this.workshops = this.assignWorkshop;
                
			}
        }
    
	},
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.highbut
{
        padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.lessbut
{
        padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.secform
{
    margin-top: 20px;
}
.servdeta9 h3
{
    font-size: 25px;
    font-weight: 300;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
}

  .cancont button
  {
      font-size: 18px;
      background: #95a5a6!important;
      border-radius: 5px;
      box-shadow: none!important;
  }


.custdetabut
{
    margin-top: 50px;
}
.vehrig
{
        border-left: 12px solid #f2f5f7;

}

.corpe
{
    margin-top: -50px;
}
.view
{
    font-size: 18px;
    color: black;
    text-decoration: underline;
    float: right;
    cursor: pointer;
}


input:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.dropcity:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.dropmale:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.chanimg
{
    width: 110px;
    height: 110px;
    border: 3px solid #007df8;
    border-radius: 50%;
}
.servtab
{
    margin-top: 20px;
}

@media only screen and (max-width: 992px)
{
    .corpe
{
    margin-top: 0px!important;
}
}

@media only screen and (max-width: 767px)
{
 .servtab
{
overflow-x: scroll;
}

.servdeta9 h3
{
    padding-left: 0px!important;
}
.corpe
{
    margin-top: 0px!important;
}
 
                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 0px!important;
                }  
}

.workdetatab1
{
    padding-top: 20px;
    margin-top: 30px;
    background: white;
    border-radius: 5px;

}

.workdetatab1
{
    padding-bottom: 30px;
}
.workdetatab1 h2
{
    font-size: 25px;
    color: #212121;
}
.work_cont
{
    margin-top: 20px;
}
   .cancont button
  {
      font-size: 18px;
      background: #95a5a6!important;
      border-radius: 5px;
      box-shadow: none!important;
  }


 
  .upcont button
  {
      font-size: 18px;
      background: #007df8!important;
      border-radius: 5px;
      box-shadow: none!important;
  }

.upcont
{
    margin-top: 20px;
    padding-bottom: 40px;
}
      .adm
    {
        background: #0052b1;
        color: white!important;
    }
         
    .adm h2
    {
                color: white!important;
    }

#Corporate_agree
{
    padding-bottom:40px;
}
    .workdeta1
    {
        background: white;
        border-radius: 5px;
        padding-top: 20px;
        padding-left: 20px;
                padding-right: 50px;
                    margin-top: 30px;
    }
        .workdeta1 .col-lg-3
        {
            padding-bottom: 30px;
        }

                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 30px;
                    font-size: 18px;
                    color: #666666;
                    padding-top: 5px;
                }

.workdeta1 .col-lg-3 h4
{
    font-size: 20px;
    padding-top: 2px;
}

.corptext
{
    margin-top: 30px;
}

                .workdeta1 .col-lg-3 input
                {

                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
                }

                                .workdeta1 .col-lg-3 .dropcity
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
    
                }


                                .workdeta1 .col-lg-3 .dropmale
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
    
                }

.workdeta1 .col-lg-3 textarea
{
    background: #f5f8fa;
    border-radius: 10px!important;
    height: 100px;
 }

body .btn_div button.bck_btn {
    background: #3a4959 !important;
    color: #fff;
}

 .form-control{line-height:42px; padding-top:0px;}
  select.form-control {
    line-height: 37px;
    -webkit-appearance: none;
    appearance: none;
   background: #f3f6fb url('../../assets/images/arrow-down.png') !important; background-repeat: no-repeat !important;
  background-position: 97% center !important;
}

.daylist ul li {
    display: inline-flex;
    padding-right:18px;
}
.daylist ul li input[type="checkbox"] {
    /*margin-top: 6px;*/
}
.daylist ul li label {
    font-size: 14px;
    font-family: 'Nunito-Bold';
    padding-left: 10px;
}

.workdeta1 h2 {
    font-size: 22px;
    font-family: 'Nunito-Bold';
}

.workdeta1 h4 {
    font-family: 'Nunito-Bold';
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 24px;
}
.sel_driver select.form-control {
    margin-top: 26px;
}
.form-group.sel_driver {
    display: inline-flex;
}
.am_pm_det {
    width: 74px;
    position: relative;
    top: 29px;
}

.form-group.sel_driver {
    display: inline-flex;
    width: 229px;
}
</style>
