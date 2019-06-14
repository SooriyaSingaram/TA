<template>
  <section id="myvehicles">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'MyVehicles' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start">
              <h4>{{ 'AddNewVehicle' | translate }}</h4>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <form>
              <ul>
                <li>
                  <label for="Brand" class="grey-text font-weight-light">{{ 'Brand' | translate }}</label>
                  <div class="sel_fac">
     
                    <select class="form-control" @change="getData('Model','BrandId=',Addnewvehicle.BrandID)"  name="BrandID" v-validate="'required'" v-model="Addnewvehicle.BrandID" >
                   
    <option v-for="brand in brandList" :value="brand.Id">{{brand.Name}}</option>

                    </select>
  <i v-show="errors.has('BrandID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('BrandID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
          <li>
                  <label for="Model" class="grey-text font-weight-light">{{ 'Model' | translate }}</label>
                  <div class="sel_fac">
                     <select class="form-control"  name="ModelID"  v-model="Addnewvehicle.ModelID" @change="getData('Class','ModelID=',Addnewvehicle.ModelID)"  v-validate="'required'"  >
                   
    <option v-for="data in Model" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('ModelID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('ModelID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
                   <li>
                  <label for="Class" class="grey-text font-weight-light">{{ 'Class' | translate }}</label>
                  <div class="sel_fac">
                    <select class="form-control"  name="ClassID"  v-model="Addnewvehicle.ClassID"  @change="getData('Year','ClassID=',Addnewvehicle.ClassID)"  v-validate="'required'"  >
                   
    <option v-for="data in Class" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('ClassID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('ClassID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>

    <li>
                <label for="Year" class="grey-text font-weight-light">{{ 'Year' | translate }}</label>
                 <div class="sel_fac">
                    <select class="form-control" name="YearID"  v-model="Addnewvehicle.YearID"  v-validate="'required'"  >
                   
    <option v-for="data in Year" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('YearID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('YearID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li>
                
  
        

             
  
               <!--li>
                <label for="Usage" class="grey-text font-weight-light">{{ 'Usage' | translate }}</label>
                  <div class="sel_fac">
                   <select class="form-control"  name="usage"  v-model="Addnewvehicle.UsageID"  v-validate="'required'"  >
                   
    <option v-for="usage in usageList" :value="usage.UsageId">{{usage.UsageName}}</option>

                    </select>
                     <i v-show="errors.has('usage')" class="fa fa-warning"></i>
                    <span v-show="errors.has('usage')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>
                </li-->

                  <li style="clear:both">
                   <label for="UsageID" class="grey-text font-weight-light">{{ 'Usage' | translate }}</label>
                   <input type="number" id="UsageID" class="form-control" placeholder="19000" name="UsageID" v-model="Addnewvehicle.ExactUsage" v-validate="'required|numeric'" :disabled="isDisabled" :class="{'input': true, 'is-danger': errors.has('UsageID') }">
                   <i v-show="errors.has('UsageID')" class="fa fa-warning"></i>
                  <span v-show="errors.has('UsageID')" class="help is-danger">{{ 'UsageIDValidation' | translate }}</span>
                 </li>
                <li  >
                  <label for="plate" class="grey-text font-weight-light">{{ 'Plate' | translate }}</label>
                  <input type="text" id="plate" class="form-control" placeholder="CKN 3648" name="plate" v-model="Addnewvehicle.PlateNumber" v-validate="'required'" :disabled="isDisabled" :class="{'input': true, 'is-danger': errors.has('plate') }">
                  <i v-show="errors.has('plate')" class="fa fa-warning"></i>
                 <span v-show="errors.has('plate')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li>
  
                <li >
                  <label for="date" class="grey-text font-weight-light">{{ 'DateOfLastTMR' | translate }}</label>
                  <datepicker placeholder="Select Date" class="form-control" name="date" v-model="Addnewvehicle.DateLastTechnicalRevision"  v-validate="'required'" :disabled="isDisabled"></datepicker>
                 <i v-show="errors.has('date')" class="fa fa-warning"></i>
                 <span v-show="errors.has('date')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li>
  
                <li >
                  <label for="expiry_date" class="grey-text font-weight-light">{{ 'ExpiringDateForSOAT' | translate }}</label>
                  <datepicker placeholder="Select Data" class="form-control" name="expiringdate" v-model="Addnewvehicle.ExpDateSOAT" v-validate="'required'" :disabled="isDisabled"></datepicker>
                  <i v-show="errors.has('expiringdate')" class="fa fa-warning"></i>
                  <span v-show="errors.has('expiringdate')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li>

                 <li>                                
                   <label>{{ 'UploadPhoto' | translate }}</label>
                     
                        <div class="form-group">
                        <label for="file" class="sr-only">File</label>
                        <div class="input-group">
                            <input type="text" name="filename" class="form-control" placeholder="No file selected" readonly>
                            <span class="input-group-btn">
                            <div class="btn btn-default  custom-file-uploader">
                            <input type="file" @change="generateBase64()">
                                {{ 'Browse' | translate }}
                            </div>
                            
                            </span>
                        </div>
                        </div>
                        {{ Addnewvehicle.name }}                                        
                </li>
  
              </ul>
  
  
              <div class="form-group add_vehicle_accept">
                <input type="checkbox" id="agree_frm" v-model="Addnewvehicle.ProactiveAlerts">
                <label for="agree_frm">{{ 'ProactiveAlerts' | translate }}</label>
              </div>
  
              <div class="sub_btn" v-if="!isDisabled">
                <btn class="add_vehicle " type="button" v-on:click="addVehicle()">{{ 'Submit' | translate }}</btn>
                <router-link to="/Myvehicles"><btn class="cancel_btn">{{ 'CANCEL' | translate }}</btn></router-link>
                <container class="mt-5">
                  <modal v-if="showModal16" @close="showModal16 = false" centered class="add_vehicle_popup">
                    <modal-body>
                      <div class="d-flex align-self-center flex-column add_sucess_msg">
                        <img src="../../assets/images/popup_sucess_car.png" class="" />
                        <h5>Vehicle successfully created</h5>
                      </div>
                    </modal-body>
                    <modal-footer >
                      <btn class="back_btn" @click.native="showModal16 = false">Back to Main Menu</btn>
                      <btn class="create_btn">Create another vehicle</btn>
                    </modal-footer>
                  </modal>
                </container>
              </div>
  
            </form>
          </div>
        </div>
      </div>
  
    </div>
  </section>
</template>

<script>
  import {
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Tooltip,
    Popover,
    mdbInput,
    MdTextarea,
    Container,
    Row,
    Column
  } from 'mdbvue';
  import {
	mapGetters,
	mapActions
}
from "vuex";
  import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
  import * as lang from "vuejs-datepicker/src/locale";
  const state = {
    date1: new Date()
  };
  
  export default {
    name: 'Addnewvehicle',
    components: {
      Btn,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter,
      Tooltip,
      Popover,
      mdbInput,
      MdTextarea,
      Container,
      Row,
      Column,
      Datepicker
  
    },
    data() {
      return {
        Addnewvehicle: {},
         mainservice:[],
        brandList:[],Year:[],Class:[],Model:[],Usage:[],isDisabled:false,
        usageList:[],
        showModal16: false,
        format: "d MMMM yyyy",
        disabledDates: {},
        disabledFn: {
          customPredictor(date) {
            if (date.getDate() % 3 === 0) {
              return true;
            }
          }
        },
        highlightedFn: {
          customPredictor(date) {
            if (date.getDate() % 4 === 0) {
              return true;
            }
          }
        },
        highlighted: {},
        eventMsg: null,
        state: state,
        language: "en",
        languages: lang,
        vModelExample: null,
        changedMonthLog: []
      };
  
    },
    created() {
      this.create = true;
        this.isDisabled=false
	    	this.getvehicleParam();
         this.$store.dispatch('getBrand');
        this.$store.dispatch('getUsage');       
	},
    methods: {
          generateBase64 () {
var self =this;

    AWS.config.region = 'us-east-1';
 // 1. Enter your region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId:  'us-east-1:8ffb9f37-c289-47ea-8ea1-7b11fdbeec7d' // 2. Enter your identity pool
    });
    AWS.config.credentials.get(function(err) {
        if (err) alert(err);
        console.log(AWS.config.credentials);
    });
    var bucketName = 'ValetSaaS'; // Enter your bucket name
    var bucket = new AWS.S3({
        params: {
            Bucket: bucketName
        }
    });
 var file =  document.querySelector('input[type=file]').files[0];
 self.Addnewvehicle.name = file.name;
        if (file) {
            var objKey = 'taller_web/' + file.name;
            
            var params = {
                Key: objKey,
                ContentType: file.type,
                Body: file,
                ACL: 'public-read'
            };
            bucket.putObject(params, function(err, data) {
                if (err) {
                   console.log(err)
                } else {
self.Addnewvehicle.ImageName=file.name;
self.Addnewvehicle.ImageUrl='https://s3.amazonaws.com/ValetSaaS/'+objKey
                   }
            });
        } else {
           
        }
       // let dat= document.querySelector('input[type=file]').files[0];

//  const reader = new FileReader();
//     reader.readAsDataURL(dat);
//     reader.onload = () =>{
//        self.Addnewvehicle.ImageName= "image.png"
//      self.Addnewvehicle.Base64string = reader.result.split(',')[1];
//     }
//     reader.onerror = (error) => {
//       console.log(error) 
//     };
 
    },
     
      getvehicleParam() {
			let vehicleId = this.$route.params.id;
			if (vehicleId == '0') {    
                this.Addnewvehicle.UserID = Number(JSON.parse(localStorage.getItem('userId')))  
               
                this.isDisabled = false;
			         	this.create = true;
               
		    	}
		
               else{
                   
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getvehicleedit', vehicleId );
                
               }
                
				
				
			
		},

      addVehicle() {   
        console.log(this.Addnewvehicle)
        //this.Addnewvehicle.UsageID=1;
      //  this.Addnewvehicle.ProactiveAlerts = true;
            this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          //alert('Form Submitted!');
       
			var self = this;
     
      this.Addnewvehicle.url= '/CarOwner/AddVehicle';
			return this.$store.dispatch('updateData', this.Addnewvehicle).then((response) => {
				self.$message(response.data.Message)
       // self.showModal16.true
				self.$router.push({
					name: 'Myvehicles'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				//self.$message(err.response.data.error)
      // self.showModal16.false
			});
        }
        //alert('Correct them errors!');
       
		});
        },

            getData(api,param,data){
            
             let url= '/Common/Get'+api+'?'+param+data
         
return this.$store.dispatch('getDropdownList', url).then((response) => {
	this[api] =  response.data.data;
  console.log(response.data.data);
}).catch(function(err) {
	//alert(err.response.data.error)
});

        },

         getUsage(){
             
         },
           


      highlightTo(val) {
        if (typeof this.highlighted.to === "undefined") {
          this.highlighted = {
            to: null,
            daysOfMonth: this.highlighted.daysOfMonth,
            from: this.highlighted.from
          };
        }
        this.highlighted.to = val;
      },
      highlightFrom(val) {
        if (typeof this.highlighted.from === "undefined") {
          this.highlighted = {
            to: this.highlighted.to,
            daysOfMonth: this.highlighted.daysOfMonth,
            from: null
          };
        }
        this.highlighted.from = val;
      },
      setHighlightedDays(elem) {
        if (elem.target.value === "undefined") {
          return;
        }
        let highlightedDays = elem.target.value
          .split(",")
          .map(day => parseInt(day));
        this.highlighted = {
          from: this.highlighted.from,
          to: this.highlighted.to,
          daysOfMonth: highlightedDays
        };
      },
      setDisabledDays(elem) {
        if (elem.target.value === "undefined") {
          return;
        }
        let disabledDays = elem.target.value.split(",").map(day => parseInt(day));
        this.disabledDates = {
          from: this.disabledDates.from,
          to: this.disabledDates.to,
          daysOfMonth: disabledDays
        };
      },
      disableTo(val) {
        if (typeof this.disabled.to === "undefined") {
          this.disabledDates = {
            to: null,
            daysOfMonth: this.disabledDates.daysOfMonth,
            from: this.disabled.from
          };
        }
        this.disabledDates.to = val;
      },
      disableFrom(val) {
        if (typeof this.disabledDates.from === "undefined") {
          this.disabled = {
            to: this.disabledDates.to,
            daysOfMonth: this.disabled.daysOfMonth,
            from: null
          };
        }
        this.disabledDates.from = val;
      },
      openPicker() {
        this.$refs.programaticOpen.showCalendar();
      },
      logChangedMonth(date) {
        this.changedMonthLog.push(date)
      }
    },
    computed: {
		...mapGetters({
            getvehicleList:"getvehicleList",
             getvehicleedit:"getvehicleedit",
            getBrand:"getBrand",
            getUsage:"getUsage"
		})
	},
	watch: {
    'getvehicleList': {
			deep: true,
			handler(value) {
				this.Addnewvehicle = null
				this.Addnewvehicle = this.getvehicleList.data;
			}
		},
     'getvehicleedit': {
			deep: true,
			handler(value) {
				this.Addnewvehicle = null;
				this.Addnewvehicle = this.getvehicleedit.data;
        this.getData('Model','BrandId=',this.Addnewvehicle.BrandID) 
                this.getData('Class','ModelID=',this.Addnewvehicle.ModelID)
                 this.getData('Year','ClassID=',this.Addnewvehicle.ClassID)
      
        
        
			}
		},
	
    'getBrand': {
			deep: true,
			handler(value) {
				this.brandList = null
				this.brandList = this.getBrand.data;
                
			}
		},


     'getUsage': {
			deep: true,
			handler(value) {
				this.usageList = null
				this.usageList = this.getUsage.data;
                
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
  
  .add_vehicle_accept label {
    position: relative;
    cursor: pointer;
  }
  
  .add_vehicle_accept label:before {
    content: '';
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
    border-radius: 5px;
  }
  
  .add_vehicle_accept input:checked+label:after {
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
  .custom-file-uploader {
  position: relative;
    }
  input[type='file'] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: default;
  }
.custom-file-uploader{margin:0px; padding-bottom: 11px; padding-top: 12px; border-radius: 5px; margin-right: 2px;margin-top: 0px;background: #0066d0 !important;}
@media only screen and (min-width: 320px) and (max-width: 767px) {
.custom-file-uploader {
    padding-bottom: 12px;
    padding-top: 11px;
    margin-top: -1px;
}
}

.add_vehicle_accept label:before{margin-top:-3px !important;}
</style>
