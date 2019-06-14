<template>
    <section id="Collisionandpaint">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title">
                    <h2>Services</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Quote Request</h4>
                        </div>
                    </div>
    
                    <div class="d-flex flex-wrap collision_lsts_sec">
                        <mdb-col col="12" class="p-0">
                            <mdb-row class="m-0">
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Select Service</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                     <select class="form-control" name="service" v-validate="'required'" v-model="collision.SubServicesId" >
    <option></option>
    <option v-for="data in serviceList" :value="data.SubServiceId">{{data.SubServicesName}}</option>
                                                        </select>
                                                        <i v-show="errors.has('service')" class="fa fa-warning"></i>
                  <span v-show="errors.has('service')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label for="source">Source</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <div class="sel_fac">
                                                        <select class="form-control" name="source" v-validate="'required'" v-model="collision.SourceID" >
    <option v-for="data in sourceLists" :value="data.SourecId">{{data.SourceName}}</option>
                                                        </select>
                                                         <i v-show="errors.has('source')" class="fa fa-warning"></i>
                  <span v-show="errors.has('source')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                                                    </div>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                    </mdb-row>
                                </mdb-col>
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Details</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0" >
                                                    <textarea class="form-control" name="details" v-validate="'required'" v-model="collision.Deatils" placeholder="I need to repair the front door 
                                                                                                                   due to a minor collision"></textarea>
                                                         <i v-show="errors.has('details')" class="fa fa-warning"></i>
                  <span v-show="errors.has('details')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block collision-block-ch">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Need to Pickup</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0" >
                                                    <div class="custom-control custom-radio" >
                                                        <input type="radio"  :value="true" class="custom-control-input" name="pickupoption" v-validate="'required'" id="defaultUnchecked1" v-model="collision.IsNeedToPickup">
                                                        <label class="custom-control-label" for="defaultUnchecked1">Yes</label>
                                                    </div>
    
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio"  :value="false" class="custom-control-input" name="pickupoption" v-validate="'required'" id="defaultUnchecked2" v-model="collision.IsNeedToPickup">
                                                        <label class="custom-control-label" for="defaultUnchecked2">No</label>
                                                    </div> 
                                                    <div class="option_sel">
                                                    <i v-show="errors.has('pickupoption')" class="fa fa-warning"></i>
                  <span v-show="errors.has('pickupoption')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  </div>  
    
                                                </mdb-col>
                                            </mdb-row>
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Upload Photo</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <div class="sel_fac">
                                                      <div class="custom-file">
    <input type="file" multiple class="custom-file-input" name="photo" v-validate="'required'" @change="generateBase64()" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  <span>{{collision.name}}</span>
                  <span v-show="errors.has('photo')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
  </div>
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
                                <button class="add_vehicle" @click="addquote()">Submit</button>
                          <router-link to="/RequestedquoteList"><button class="cancel_btn">{{ 'BACK' | translate }}</button></router-link>

                            </div>
                        </mdb-col>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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
          props: ["servicedata"],
  data() {
      return {
       sourceLists:[],collision:{},
       serviceList:[],vehicleData:{}
        
    }
  },
  mounted: function () { 
      var self= this;
      
    if (self.servicedata) {
        
           self.vehicleData =self.servicedata
            this.getSubservices()
        }
},
   created() {
    
   this.sourceList()
	},
  methods : {
       generateBase64 () {
         var self=this;  
self.collision.ObjAttachemant=[];
let dat= document.querySelector('input[type=file]').files;
self.collision.name = dat[0].name;
for(let i=0; i<dat.length; i++){
const reader = new FileReader();
 (function(file) {
       
       reader.readAsDataURL(file)
       
        reader.onload = function() {  
         let obj= {
        "ImageName": "image.png",
       "Base64String": reader.result.split(',')[1],
       "CreatedBy": localStorage.getItem('userId').slice(1, -1)
    }
    self.collision.ObjAttachemant.push(obj)
        }
       
    })(dat[i]);  

}
 
    
  
 
    },
     	getSubservices() {

    let mainService = this.$route.params.id;
			var self = this;
			//let url = '/CarOwner/SubServiceDropDownList?MainServiceId=' +mainService ;
	let url = '/CarOwner/SubServiceDropDownList?MainServiceId='+mainService+'&CityId='+self.vehicleData.CityId+'&ZoneId='+self.vehicleData.ZoneId

			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				if (response.data.IsSuccess) {
					self.serviceList.length = 0;
					self.serviceList = response.data.data
				}
				else {
					self.serviceList.length = 0;
					self.serviceList = []
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});
		},
 addquote() {  
  this.$validator.validateAll().then((result) => {
        if (result) {
            //alert('Form Submitted!');
     var self= this;
     self.collision.CollisionAndPaintId=0;
     self.collision.MainServicesID=this.$route.params.id;
self.collision.UserId=  Number(JSON.parse(localStorage.getItem('userId')));
self.collision.CustomerVehicleID= self.vehicleData.CustomerVehicleID;
self.collision.CityId=self.vehicleData.CityId;
self.collision.ZoneId=self.vehicleData.ZoneId;
debugger
self.collision.url='/CarOwner/CollisionandpaintModel';
 	return this.$store.dispatch('updateData', self.collision).then((response) => {
				if (response.data.IsSuccess) {
         this.timingList=response.data.data;
          this.$router.push({name:'RequestedquoteList'})
				}
				else {
				
						}
			}).catch(function(err) {
                
				alert(err.response.data.error)
			});
                 }
       // alert('Correct them errors!');
       
		});
        },

 sourceList(){
			let url = '/CarOwner/SourceDropDownList'
			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				if (response.data.IsSuccess) {
          this.sourceLists = response.data.data;
          
				}
				else {
                    
				
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
        font-size: 17px;
    }
    
    .collision-block select {
        width: 232px;
    }
    
    .collision-block textarea {
        background: #f3f6fb none repeat scroll 0 0;
        border: 1px solid #ced4da;
        border-radius: 5px;
        height: 128px;
        width: 265px;
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
        margin-bottom: 40px;
    }
    
    .collision-block-ch {
        margin: 0;
        margin-bottom: 60px;
    }
    .custom-file{width: 272px;}
    .custom-file-label{line-height: 20px;}
    .custom-file-label::after{padding: .375rem 1.75rem;
    line-height: 1.2;
    color: #ffffff;
    background-color: #0066d0;
    border-left: 1px solid #0066d0;
    border-radius: .25rem;}
    .sub_btn {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .option_sel{
        display:block;
        width:100%;
    }
</style>
