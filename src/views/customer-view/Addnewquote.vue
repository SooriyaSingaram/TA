<template>
  <section id="Addnewquote">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'SERVICES' | translate }}</h2>
      </div>
      <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
          <div class="col-12 d-flex flex-column align-items-start p-0">
          <h4>{{ 'QuoteRequest' | translate }}</h4>
          </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <h2 class="quote-main-heading">{{ 'ShareBasicInformation' | translate }}</h2>
            <form>
            <ul>
   

              <li v-if="!isLogin">
                  <label for="Brand" class="grey-text font-weight-light">{{ 'Vehicle' | translate }} {{ 'Brand' | translate }}</label>
                  <div class="sel_fac">
     
                    <select class="form-control"@change="getData('Model','BrandId=',quote.BrandID)"  name="BrandID" v-validate="'required'" v-model="quote.BrandID" >
                   
    <option v-for="brand in brandList" :value="brand.Id">{{brand.Name}}</option>

                    </select>
  <i v-show="errors.has('BrandID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('BrandID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
  
<li v-if="!isLogin">
                  <label for="Model" class="grey-text font-weight-light">{{ 'Model' | translate }}</label>
                  <div class="sel_fac">
                     <select class="form-control"  name="ModelID"  v-model="quote.ModelID"  @change="getData('Class','ModelID=',quote.ModelID)"  v-validate="'required'"  >
                   
    <option v-for="data in Model" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('ModelID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('ModelID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
                 <li v-if="!isLogin">
                  <label for="Class" class="grey-text font-weight-light">{{ 'Class' | translate }}</label>
                  <div class="sel_fac">
                    <select class="form-control"  name="ClassID"  v-model="quote.ClassID"  @change="getData('Year','ClassID=',quote.ClassID)"  v-validate="'required'"  >
                   
    <option v-for="data in Class" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('ClassID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('ClassID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>

    <li v-if="!isLogin">
                <label for="Year" class="grey-text font-weight-light">{{ 'Year' | translate }}</label>
                 <div class="sel_fac">
                    <select class="form-control" name="YearID"  v-model="quote.YearID"  v-validate="'required'"  >
                   
    <option v-for="data in Year" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('YearID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('YearID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
                
  
                

               
<li v-if="isLogin">
                  <label for="Class" class="grey-text font-weight-light">{{ 'SelectVehicle' | translate }}</label>
                  <div class="sel_fac">
                    <select class="form-control"  name="CustomerVehicleID"  v-model="quote.CustomerVehicleID"   v-validate="'required'"  >
                   
    <option v-for="data in vehicles" :value="data.CustomerVehicleID">{{data.BrandName+' '+data.ModelName}}</option>

                    </select>
                     <i v-show="errors.has('CustomerVehicleID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('CustomerVehicleID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
            <li>
            <label class="grey-text font-weight-light">{{ 'City' | translate }}</label>
            <div class="sel_fac">
             <select class="form-control" @change="getZone(quote.CityId)" name="city" v-validate="'required'" v-model="quote.CityId" >
                   
                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>

                    <i v-show="errors.has('city')" class="fa fa-warning"></i>
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
            </div>
            </li>




           <li>
            <label for="Model" class="grey-text font-weight-light">{{ 'Zone' | translate }}</label>
            <div class="sel_fac">
            <select class="form-control"  name="zone" v-validate="'required'" v-model="quote.ZoneId" >
                   
                    <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>

                    </select>
                    <i v-show="errors.has('zone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('zone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
            </div>
            </li>

          

           </ul>
               </form>
              <div class="sub_btn">
                <button type="button" class="add_vehicle" @click="addquote()">{{ 'Next' | translate }}</button>
                <button class="cancel_btn" @click="resetField()">{{ 'Reset' | translate }}</button>
            </div>

           
         </div>
      </div>
      </div>
  </div>
  </section> 
</template>

<script>
import { vehicleValue } from './main';
import { mdbContainer, mdbRow, mdbCol , mdbBtn } from 'mdbvue'
  import {
	mapGetters,
	mapActions
}
from "vuex";

export default {
  name: 'Addnewquote',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,  
  },
  data() {
      return {
       quote: {},
             cities:[],
            zones:[],
        brandList:[],Year:[],Class:[],Model:[],Usage:[],isDisabled:false,vehicles:[],isLogin:false
        
    }
  },

   created() {
     let isLogin=JSON.parse(localStorage.getItem('userId'));
     if(isLogin){
       this.isLogin=true;
        this.getVehicleList()
      
     }else{
         this.$store.dispatch('getBrand');
       this.isLogin=false;
     }
      this.create = true;
        this.isDisabled=false
          
           this.$store.dispatch('cityList');
   
	},
  methods : {
 addquote() {  
       
var self=this;
            self.$validator.validateAll().then((result) => {
        if (result) {
let dataQuote=self.quote;

self.$router.replace({name:'selectSubService', params:{ vehicedata: dataQuote }});
        }else{
//alert('Correct them errors!');
        }
        
       
		});
        },

      resetField() {
        this.quote = {}
      },

 getZone(id){
this.$store.dispatch("zoneList",id) 
        },
            getData(api,param,data){
            
             let url= '/Common/Get'+api+'?'+param+data
         
return this.$store.dispatch('getDropdownList', url).then((response) => {
	this[api] =  response.data.data;
  console.log(response.data.data);
}).catch(function(err) {
	alert(err.response.data.error)
});

        },

    getVehicleList(){
      //"CarOwnerServiceId": 
			let url = '/CarOwner/GetVehicleList?UserID='+JSON.parse(localStorage.getItem('userId'))
			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				if (response.data.IsSuccess) {
          this.vehicles = response.data.data;
          
				}
				else {
				
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});
    }
   
    },
        computed: {
		...mapGetters({
         cityList: "cityList",
            zoneList:"zoneList",
            getBrand:"getBrand"
		})
	},
  watch: {
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
    
    'getBrand': {
			deep: true,
			handler(value) {
				this.brandList = null
				this.brandList = this.getBrand.data;
                
			}
		}
    
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.add_vehicle_accept {
  display: block;
  margin-bottom: 15px;
}

.add_vehicle_accept input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.add_newvehicle h2 {
    width: 100%;
}

.add_newvehicle form {
    width: 100%;
}
.add_vehicle_accept label {
  position: relative;
  cursor: pointer;
}

.add_vehicle_accept label:before {
  content:'';
  -webkit-appearance: none;
  background-color: #f3f5fb;
  border: 1px solid #cac8c8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  border-radius:5px;
}

.add_vehicle_accept input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 8px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.quote-main-heading
{
  font-size: 20px;margin-top: 0;margin-bottom:30px;color:#292b30;font-family: 'Nunito-Medium';
  text-transform: capitalize;
}

</style>
