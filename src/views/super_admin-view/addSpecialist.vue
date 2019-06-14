<template>
  <section id="addSpecialist">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12 main-title adm">
          <h2>{{ 'Addspecialist' | translate }}</h2>
        </div>
      </div>

    <form >
        <div class="container-fluid workdeta1">
            <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'SpecialistName' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="name"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name')}" class="form-control"  v-model="specialist.UserName" >
                     <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
 <div class="col-lg-3 col-md-6">
                    <h3>{{ 'PhoneNumber' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="phone"  v-validate="'required|numeric|max:10|min:10'" :class="{'input': true, 'is-danger': errors.has('phone')}"  class="form-control" v-model="specialist.PhoneNumber">
                     <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('phone')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>                                            
                                                </div>
                    
                     
                   
             </div>    
 
              <div class="row">
                  
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Email' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" class="form-control"  name="email" :disabled="!create"   v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email')}"    v-model="specialist.Email" >
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                                                          <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate }}</span>
                    </div>
                    </div>
                     
 <div class="col-lg-3 col-md-6">
                    <h3>{{ 'City' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <select class="form-control" name="city" @change="getZone(specialist.City)" v-validate="'required'" v-model="specialist.City" >
                   
                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>
                     <i v-show="errors.has('city')" class="fa fa-warning"></i>
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
 
             </div>     

             <div class="row">
                     <div class="col-lg-3 col-md-6"  v-if="create">
                    <h3>{{ 'Password' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6"  v-if="create">
                    <div class="form-group">
                    <input type="password" name="password"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }" class="form-control"    v-model="specialist.Password" >
                          <i v-show="errors.has('password')" class="fa fa-warning"></i>
                    <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Address' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input ref="autocomplete"   placeholder="Search"
        onfocus="value = ''" name="address" class="form-control" v-validate="'required'"   v-model="specialist.Address">
        <i v-show="errors.has('address')" class="fa fa-warning"></i>
                    <span v-show="errors.has('address')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                     
                    
                    
             </div> 
             <div class="row">  
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Zone' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <select class="form-control" name="zone" v-validate="'required'" v-model="specialist.Zone"  @change="getworkshop(specialist.City,specialist.Zone)">
                   
                    <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>

                    </select>
                     <i v-show="errors.has('zone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('zone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                      <div class="col-lg-3 col-md-6">
                    <h3>{{ 'WorkshopName' | translate }}</h3>
                    </div>
                   <div class="col-lg-3 col-md-6">
                    <div class="form-group">
  
 
                    <select class="form-control" multiple name="workshop" v-model="specialist.WorkShopIdList" v-validate="'required'">
                    <option v-for="workshop in workshops" :value="workshop.WorkShopID">{{workshop.WorkShopName}}</option>

                    </select>
                    <!--<input type="text" name="workshop"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('workshop') }" class="form-control"  v-model="specialist.WorkShopID">-->
                    <i v-show="errors.has('workshop')" class="fa fa-warning"></i>
                    <span v-show="errors.has('workshop')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                   
                    </div>
                    </div>
                    
                    
             </div> 

            
         
             <div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button" v-on:click="addspecialist()" v-if="create" >{{ 'CREATE' | translate }}</button>
                    <button class="btn btn-success" type="button" v-on:click="addspecialist()" v-if="!create" >{{ 'UPDATE' | translate }}</button>
                   <router-link to="/Specialist_SA"><button class="btn bck_btn">{{ 'CANCEL' | translate }}</button></router-link>

 </div>
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="isDisabled">

                <router-link to="/Specialist_SA"><button class="btn bck_btn">{{ 'BACK' | translate }}</button></router-link>

 </div>

 </div>

        </div>
    </form>

   
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
    name: 'addSpecialist',
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
			specialist: {},
            cities:[],
            zones:[],
             workshops:[],expanded: false
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
     this.specialist.Address= place.formatted_address;
     this.specialist.Country = place.country;
     this.specialist.Longitude= lon;
     this.specialist.Latitude= lat;
     this.specialist.State=  ac[2].long_name
     this.specialist.Country=  ac[3].long_name
  
});
  },
	created() {
		this.getSpecialistParam()
        this.$store.dispatch('cityList')

	},
	methods: {
    
		getSpecialistParam() {
			let specialistId = this.$route.params.id;
			if (specialistId == '0') {
                this.specialist.SpecialistDetailsID =0;
                this.specialist.UserID =0;
                this.isDisabled = false;
				this.create = true;
                
			}
			else {
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getspecialist', {do_function:'GetSpecialistEdit',id:specialistId   })
 		
			}
		},
         getZone(id){
this.$store.dispatch("zoneList",id) 
        },
         getworkshop(city,zone){
        this.$store.dispatch("assignWorkshop",{CityId:city,ZoneId:zone}) 
      },
		addspecialist() {   
              this.$validator.validateAll().then((result) => {
        if (result) {                                  
			var self = this;
           this.specialist.url= '/SuperAdmin/AddSpecialist';
			return this.$store.dispatch('updateData', this.specialist).then((response) => {
				self.$message(response.data.Message)
				if(response.data.IsSuccess){
                    self.$router.push({
					name: 'Specialist_SA'
				})
				self.$store.dispatch('clearData')
                }
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		}
          //alert('Correct them errors!');
		});
		}
	},
	computed: {
		...mapGetters({
			getspecialist: "getspecialist",
            cityList: "cityList",
            zoneList:"zoneList",
            assignWorkshop:"assignWorkshop"
		})
	},
	watch: {
		'getspecialist': {
			deep: true,
			handler(value) {
				this.specialist = null
				this.specialist = this.getspecialist.data;
                 this.getZone(this.getspecialist.data.City)
                  this.getworkshop(this.specialist.City,this.specialist.Zone)
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

#specialist_agree
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
.multiselect {
  width: 200px;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  border: 1px #dadada solid;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}
</style>
