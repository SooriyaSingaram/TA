<template>
  <section id="addWorkshop">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12 main-title adm">
          <h2>{{ 'AddWorkshop' | translate }}</h2>
        </div>
      </div>

    <form >
        <div class="container-fluid workdeta1">
            <div class="row">
                
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'AddWorkshop' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" name="workshop"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('workshop')}" class="form-control" :disabled="isDisabled"   v-model="workshop.WorkShopName">
                     <i v-show="errors.has('workshop')" class="fa fa-warning"></i>
                    <span v-show="errors.has('workshop')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>


                      <div class="col-lg-3 col-md-6">
                    <h3>{{ 'OwnerName' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="owner"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" class="form-control" :disabled="isDisabled"   v-model="workshop.OwnerName" >
                     <i v-show="errors.has('owner')" class="fa fa-warning"></i>
                    <span v-show="errors.has('owner')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>

             </div>    

              <div class="row">
                  

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Email' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text"  name="email"  v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" class="form-control" :disabled="isDisabled"   v-model="workshop.Email" >
                     <i v-show="errors.has('email')" class="fa fa-warning"></i>
                       <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate }}</span>
                    </div>
                    </div>

                      <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Address' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <input  type="text"  ref="autocomplete" 
        placeholder="Search"  
        class="search-location form-control"
        onfocus="value = ''"   v-model="workshop.Address"  name="address"  v-validate="'required'"  :class="{'input': true, 'is-danger': errors.has('address') }"
        />
                    
                     <i v-show="errors.has('address')" class="fa fa-warning"></i>
                    <span v-show="errors.has('address')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    
      

             </div>     

            <div class="row">
                  

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'City' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <select class="form-control" @change="getZone(workshop.City)" name="city"  v-validate="'required'"  v-model="workshop.City" >

                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>

                    <i v-show="errors.has('city')" class="fa fa-warning"></i>
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                   
                 
            
                    </div>
                    </div>

                      <div class="col-lg-3 col-md-6">
                    <h3>{{ 'State' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text"  name="state"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('state') }" class="form-control" :disabled="isDisabled"  v-model="workshop.State">
                     <i v-show="errors.has('state')" class="fa fa-warning"></i>
                    <span v-show="errors.has('state')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    
      

             </div> 

              <div class="row">
                  

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Country' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" name="country"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('country') }" class="form-control" :disabled="isDisabled"  v-model="workshop.Country" >
                     <i v-show="errors.has('country')" class="fa fa-warning"></i>
                    <span v-show="errors.has('country')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>

                      <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Pincode' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="pincode"  v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('pincode') }" class="form-control" :disabled="isDisabled"   v-model="workshop.Pincode">
                     <i v-show="errors.has('pincode')" class="fa fa-warning"></i>
                                                          <span v-show="errors.has('email')" class="help is-danger">{{ 'pincodeValidation' | translate }}</span>
                    
                    </div>
                    
      

             </div> 
            
              <div class="row">
                  

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'PhoneNumber' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" name="phonenumber"  v-validate="'required|numeric|max:10'" :class="{'input': true, 'is-danger': errors.has('phonenumber') }" class="form-control" :disabled="isDisabled"   v-model="workshop.PhoneNumber" >
                     <i v-show="errors.has('phonenumber')" class="fa fa-warning"></i>
                              <span v-show="errors.has('phonenumber')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>
                    
                                                        </div>
                    </div>


                     <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Zone' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group"> <select class="form-control"  name="zone"  v-validate="'required'" v-model="workshop.Zone" >
                   
                    <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>

                    </select>
                     <i v-show="errors.has('zone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('zone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
      

             </div> 
              <div class="row">
                  

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Latitude' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" name="latitude"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('latitude') }" class="form-control" :disabled="isDisabled"   v-model="workshop.Latitude" >
                     <i v-show="errors.has('latitude')" class="fa fa-warning"></i>
                    <span v-show="errors.has('latitude')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>


                     <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Longitude' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" name="longitude"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('longitude') }" class="form-control" :disabled="isDisabled"   v-model="workshop.Longitude" >
                     <i v-show="errors.has('longitude')" class="fa fa-warning"></i>
                    <span v-show="errors.has('longitude')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
      

             </div> 
              
<div class="row" >
                  

                    <div class="col-lg-3 col-md-6" v-if="create" >
                    <h3>{{ 'Password' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6" v-if="create" >
                    <div class="form-group">
                    <input type="password" name="password"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }" class="form-control"  :disabled="isDisabled"   v-model="workshop.Password" >
                    <i v-show="errors.has('password')" class="fa fa-warning"></i>
                    <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
  </div> 

             <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button" v-on:click="addWorkshop()" v-if="create" >{{ 'Submit' | translate }}</button>
                    <button class="btn btn-success" type="button" v-on:click="addWorkshop()" v-if="!create" >{{ 'UPDATE' | translate }}</button>
                   <router-link to="/Workshop_list_SA"><button class="btn bck_btn">{{ 'CANCEL' | translate }}</button></router-link>

 </div>
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="isDisabled">

                <router-link to="/Workshop_list_SA"><button class="btn bck_btn">{{ 'BACK' | translate }}</button></router-link>

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
	Fa
  } from 'mdbvue'
  export default {
    name: 'addWorkshop',
    components: {
    Row,
	Column,
	Btn,
	Card,
	Fa
    },
	data() {
		return {
			workshop: {},
            cities:[],
            zones:[]
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
     this.workshop.Address= place.formatted_address;
     this.workshop.Country = place.country;
     this.workshop.Longitude= lon;
     this.workshop.Latitude= lat;
     this.workshop.State=  ac[2].long_name
     this.workshop.Country=  ac[3].long_name
    //   this.shop.Longitude = addrObj.lattitude == undefined ? '0' : addrObj.lattitude;
    //   this.shop.Latitude = addrObj.longitude == undefined ? '0' : addrObj.longitude;
    //   this.shop.PostalCode = addrObj.postal_code == undefined ? '0' : addrObj.postal_code;
    //   this.shop.Province = addrObj.admin_area_l1;
  console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
});
  },
	created() {
        
		this.getWorkshopParam()
        this.$store.dispatch('cityList')


	},
	methods: {
		getWorkshopParam() {
			let workshop_Id = this.$route.params.id;
			if (workshop_Id == '0') {
                this.workshop.WorkShopID =0;
                this.isDisabled = false;
				this.create = true;
                
			}
			else {
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getworkshop', {do_function:'GetWorkShopEdit',id:workshop_Id})

			}
		},
        
        getZone(id){
this.$store.dispatch("zoneList",id) 
        },


		addWorkshop() {   
            this.$validator.validateAll().then((result) => {
        if (result) {
         
			var self = this;
           this.workshop.url= '/SuperAdmin/AddWorkShop';
			return this.$store.dispatch('updateData', this.workshop).then((response) => {
				self.$message(response.data.Message)
				self.$router.push({
					name: 'Workshop_list_SA'
				})
				self.$store.dispatch('clearData')
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
			getworkshop: "getworkshop",
            cityList: "cityList",
            zoneList:"zoneList"
		})
	},
	watch: {
		'getworkshop': {
			deep: true,
			handler(value) {
				this.workshop = null
				this.workshop = this.getworkshop.data;
                this.getZone(this.getworkshop.data.City)
                
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
</style>
