<template>
  <section id="Collisionandpaint" >
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'Profile' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>{{ 'WorkshopInformation' | translate }}</h4>
            </div>
          </div>
  
          <div class="d-flex flex-wrap collision_lsts_sec">
            <mdb-col col="12" class="p-0">
              <mdb-row class="m-0">
                <mdb-col col="12" class="p-0">
                  <div class="driver_mg">
                  
                   
          
             <form class="md-form img_uplpad">
                <div class="file-field">
                  <div class="driver_mg">
                 
                   <img  v-bind:src="workshop.ImageUrl"  class="driver profile_pic"/>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class="camera_img">
                       <img id="profile" src="../../assets/images/camera_icon.png"  class="camera"/>
                      <input id="file-chooser" type="file" @change="generateBase64()">
                    </div>
                   {{workshop.name}} 
                  </div>
                </div>
              </form>
         
                  </div>
                </mdb-col>
                <mdb-col col="12" class="p-0">
                  <mdb-row class="m-0">
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'WorkshopName' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                           <input type="text" name="workshop"  v-validate="'required'"    :class="{'input': true, 'is-danger': errors.has('workshop') }" class="form-control" v-model="workshop.WorkShopName" placeholder="AB Workshop">
                            <div class="clearfix">
                           <i v-show="errors.has('workshop')" class="fa fa-warning"></i>
                         <span v-show="errors.has('workshop')" class="help is-danger">{{ errors.first('workshop') }}</span>
                         </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'OwnerName' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="text" name="owner"  v-validate="'required'"    :class="{'input': true, 'is-danger': errors.has('owner') }" v-model="workshop.OwnerName"  placeholder="Andres Rodriguez" class="form-control">
                           <div class="clearfix">
                            <i v-show="errors.has('owner')" class="fa fa-warning"></i>
                         <span v-show="errors.has('owner')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                         </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
                <mdb-col col="12" class="p-0">
                  <mdb-row class="m-0">
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'Email' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="text" disabled name="email"  v-validate="'required|email'"  :class="{'input': true, 'is-danger': errors.has('email') }"  v-model="workshop.Email" placeholder="arodriguez@yahoo.com" class="form-control">
                           <div class="clearfix">
                          <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger" >{{ 'emailValidation' | translate }}</span>
                         </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'PhoneNumber' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                            <input type="text" name="Mobile" v-validate="{ required: true, regex: /(7|8|9)\d{9}/ }" :class="{'input': true, 'is-danger': errors.has('Mobile') }" v-model="workshop.PhoneNumber" placeholder="arodriguez@yahoo.com" class="form-control">
                             <div class="clearfix">
                            <i v-show="errors.has('Mobile')" class="fa fa-warning"></i>
<span v-show="errors.has('Mobile')" class="help is-danger">
                    
                   {{ 'mobileValidation' | translate }}</span>
                                                       </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
                <mdb-col col="12" class="p-0">
                  <mdb-row class="m-0">
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'City' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                           <select class="form-control" name="city" @change="getZone(workshop.City)"  v-model="workshop.City" v-validate="'required'" >
                   
                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>
                     <div class="clearfix">
                    <i v-show="errors.has('city')" class="fa fa-warning"></i>
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'Zoneofthecity' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                      <select class="form-control" name="zone"  v-model="workshop.Zone" v-validate="'required'" >
                   
                    <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>

                    </select>
                     <div class="clearfix">
                     <i v-show="errors.has('zone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('zone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
                <mdb-col col="12" class="p-0">
                  <mdb-row class="m-0">
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'State' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="text" name="state"  v-validate="'required'"  :class="{'input': true, 'is-danger': errors.has('state') }"  v-model="workshop.State" placeholder="Absite.com" class="form-control">
                           <div class="clearfix">
                          <i v-show="errors.has('state')" class="fa fa-warning"></i>
                         <span v-show="errors.has('state')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                         </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'Country' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="text" name="country"  v-validate="'required'"  :class="{'input': true, 'is-danger': errors.has('country') }" v-model="workshop.Country" placeholder="Enter Your Password" class="form-control" style="display:inline-block;">
                           <div class="clearfix">
                          <i v-show="errors.has('country')" class="fa fa-warning"></i>
                         <span v-show="errors.has('country')" class="help is-danger">{{ 'requiredValidation' | translate }}
                         </span>
                         </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col col="12" class="p-0">
                  <mdb-row class="m-0">
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'Address' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="text" name="Address"  v-validate="'required'"  :class="{'input': true, 'is-danger': errors.has('Address') }" v-model="workshop.Address" placeholder="Address" class="form-control">
                           <div class="clearfix">
                           <i v-show="errors.has('Address')" class="fa fa-warning"></i>
                          <span v-show="errors.has('Address')" class="help is-danger">{{ 'requiredValidation' | translate }}
                          </span>
                          </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'Pincode' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="text" name="pincode"  v-validate="'required|numeric|min:6|max:6'"  :class="{'input': true, 'is-danger': errors.has('pincode') }" v-model="workshop.Pincode" placeholder="Enter Your Password" class="form-control" style="display:inline-block;">
                           <div class="clearfix">
                          <i v-show="errors.has('pincode')" class="fa fa-warning"></i>
                    
                   <span v-show="errors.has('pincode')" class="help is-danger">{{ 'pincodeValidation' | translate }}</span>
                                              </span>
                          </div>
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-col>
             
                    <mdb-col sm="12" lg="6" col="12" class="p-0">
                      <mdb-row class="collision-block">
                        <mdb-col sm="4" col="12" class="p-0">
                          <label>{{ 'Password' | translate }}</label>
                        </mdb-col>
                        <mdb-col sm="8" col="12" class="p-0">
                          <input type="password"  name="password"  v-validate="'required'"  :class="{'input': true, 'is-danger': errors.has('password') }" placeholder="Enter Your Password" disabled value="********"  class="form-control" style="display:inline-block;">
                           <a @click="centerDialogVisible = true"> <p class="change-text" >{{ 'Change' | translate }}</p></a>
                           <div class="clearfix">
                           <i v-show="errors.has('password')" class="fa fa-warning"></i>
                          <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}
                          </span>
                            
                          </div>
                       
                        </mdb-col>
                      </mdb-row>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            
            <mdb-col col="12" class="p-0">
              <div class="sub_btn d-flex justify-content-center">
              <button class="add_vehicle" @click="updateWorkshop()">{{ 'UPDATE' | translate }}</button>
    <router-link to="/View_Workshop"><button class="add_vehicle">{{ 'CANCEL' | translate }}</button></router-link>
              </div>
            </mdb-col>
            <el-dialog  :visible.sync="centerDialogVisible" width="100%" style="max-width:500px; margin:0 auto;" center>
  <div class="container-fluid workdeta1">
  <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px;
    padding-bottom: 20px;">{{ 'changePassword' | translate }}</h2>
            <div class="row">
                    <div class="col-lg-5 col-md-6">
                    <span>{{ 'OldPassword' | translate }}</span>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="workshop.OldPassword"  required >
                    </div>
                    </div><br>
                     <div class="row">
                    <div class="col-lg-5 col-md-6">
                    <span>{{ 'NewPassword' | translate }}</span>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="workshop.NewPassword"  required >
                    </div>
                    <span style="color:red">{{errorMessage}}</span>
                    </div>
                     <!--div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>Confirm Password</h3>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="serviceDetail.confirmPassword"  required >
                    </div>
                    </div-->
             </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="changePassword(workshop.OldPassword,workshop.NewPassword);" >{{ 'Confirm' | translate }}</el-button>  
    
    <el-button type="danger" @click="centerDialogVisible = false;errorMessage='';workshop.OldPassword=null;workshop.NewPassword=null">{{ 'CANCEL' | translate }}</el-button>
</span>
</el-dialog>
       
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
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  } from "mdbvue";
  export default {
    name: "Collisionandpaint",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn
    },
    	data() {
		return {
      centerDialogVisible:false,
			workshop: {},
       cities:[],
              zones:[],errorMessage:""
		}
	},
	created() {
    var self= this;
		self.getWorkshopData()
    self.$i18n.set('esp')
     self.$store.dispatch('cityList')
	},
	methods: {
    changePassword(a,b){
      debugger
      var self = this;
      if(!a || !b){
this.errorMessage = "Please enter valid password to proceed"
return
      }
      this.errorMessage ="";
	
  var updatePassword={
    url:'/Common/ChangePassword',
    Email:this.workshop.Email,
    OldPassword:this.workshop.OldPassword,
    NewPassword:this.workshop.NewPassword,
    RoleId:localStorage.getItem('role').slice(1, -1),
    UserId:localStorage.getItem('userId').slice(1, -1)
  }
       this.centerDialogVisible = false;   
           
			return this.$store.dispatch('updateData', updatePassword).then((response) => {
				self.$message(response.data.Message)
			 this.workshop.OldPassword=null;
    this.workshop.NewPassword=null;
			}).catch(function(err) {
				self.$message(err.response.data.error)
        this.workshop.OldPassword=null;
    this.workshop.NewPassword=null;
			});
    },
     getZone(id){
this.$store.dispatch("zoneList",id) 
        },
		getWorkshopData() {
    
      var self= this;
            	const workshopId = self.$route.params.id;
			 return self.$store.dispatch('getworkshopDetail', 'GetWorkShopEdit?WorkShopID='+workshopId).then((response) => {
                     
                       if(response.data.IsSuccess){
                 self.workshop = response.data.data
                 self.getZone(self.workshop.City)

                       }
       
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
	
	},
  updateWorkshop() {   

     this.$validator.validateAll().then((result) => {   
                 if(result) {                            
			var self = this;
           this.workshop.url= '/WorkShop/UpdateWorkShop';
           debugger
			return this.$store.dispatch('updateData', this.workshop).then((response) => {
        debugger
				self.$message(response.data.Message)
				self.$router.push({
					name: 'View_Workshop'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});

      }
             alert('Correct them errors!');
              });
		

		},
     generateBase64 () {
       var self=this;

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
         self.workshop.name = file.name;
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
self.workshop.ImageName=file.name;
self.workshop.ImageUrl='https://s3.amazonaws.com/ValetSaaS/'+objKey
                   }
            });
        } else {
           
        }

// let dat= document.querySelector('input[type=file]').files[0];
//  const reader = new FileReader();
//     reader.readAsDataURL(dat);
//     reader.onload = () =>{
//        this.workshop.ImageName= "image.png"
//      this.workshop.Base64string = reader.result.split(',')[1];
//     }
//     reader.onerror = (error) => {
//       console.log(error) 
//     };
 
    }
  },
  
  computed: {
		...mapGetters({
            cityList: "cityList",
            zoneList:"zoneList"
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
        }
	},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .collision_lsts_sec {
    background: #fff;
    padding: 40px 30px 30px 30px;
  }
  
  .collision-block label {
    color: #666666 !important;
    font-size: 17px;
    font-family: 'Nunito-Medium';
    margin: 0;
  }
  
  .collision-block p {
    color: #37383e !important;
    font-size: 17px;
    font-family: 'Nunito-Bold';
    margin: 0;
  }
  
  .collision-block input,
  .collision-block select {
    background: #f3f6fb;
    color: #36383e;
    font-size: 16px;
    width: 250px;
  }
  
  .collision-block textarea {
    background: #f3f6fb none repeat scroll 0 0;
    border: 1px solid #ced4da;
    border-radius: 5px;
    height: 128px;
    width: 250px;
    padding: 10px;
    text-align: left;
    line-height: 25px;
    white-space: normal;
  }
  
  .collision-block .custom-control-label::after,
  .collision-block .custom-control-label::before {
    top: 8px;
  }
  
  .collision-block .custom-control {
    display: inline-block;
    margin-right: 25px;
  }
  
  .collision-block {
    margin: 0;
    margin-bottom: 25px;
  }
  
  .collision-block-ch {
    margin: 0;
    margin-bottom: 60px;
  }
  
  .custom-file {
    width: 272px;
  }
  
  .custom-file-label {
    line-height: 20px;
  }
  
  .custom-file-label::after {
    padding: .375rem 1.75rem;
    line-height: 1.2;
    color: #ffffff;
    background-color: #0066d0;
    border-left: 1px solid #0066d0;
    border-radius: .25rem;
  }
  
  .sub_btn {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  
  .main-title {
    background-color: #0052b1;
  }
  
  .main-title h2 {
    color: #fff;
  }
  
  .collision-block .change-text {
    width: auto;
    display: inline-block;
    font-size: 16px!important;
    font-family: 'Nunito-Medium';
    color: #0052b1!important;
    position: relative;
    top: -2px;
    cursor: pointer;
  }
    .driver_mg {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    position: relative;
}

  .driver_mg img.camera{
        width: 25px;
    height: 25px;
    position: absolute;
    bottom: 20px;
    left: 55px;
  }
  .driver
  {
        width: 97px;
    height: 97px;
    border-radius: 100%;
    border: 3px solid #1a8af9;
  }

  .form-control{line-height:42px; padding-top:0px;}
  select.form-control {
    line-height: 37px;
    -webkit-appearance: none;
    appearance: none;
   background: #f3f6fb url('../../assets/images/arrow-down.png') !important; background-repeat: no-repeat !important;
  background-position: 97% center !important;
}
  @media (max-width: 767px)
  {
.collision-block label{margin-bottom: 10px;}
.collision-block input,.collision-block select{width: 100%;}
  }

  .clearfix {
    clear: both;
    width: 100%;
}


</style>
