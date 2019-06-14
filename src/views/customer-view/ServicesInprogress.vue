<template>
  <section id="ServicesInprogress">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'SERVICES' | translate }}</h2>
      </div>
      <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
           <div class="col-6 d-flex flex-column align-items-start">
          <h4>{{ 'ServicesInProgress' | translate }}</h4>
          </div>
          
            <div class="col-6 d-flex flex-column align-items-end" v-if="servicedetail.Status =='Scheduled'">
              <button @click="centerDialogVisible = true" class="add_new_vehicle">{{ 'Reschedule' | translate }}</button>
            </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
                <mdb-col sm="12" col="12" class="p-0">
                  <ul class="service_inprogress_lst">
                  <li><p>{{ 'TechnicalMechanicalRevisionScheduledfor' | translate }} <a class="ren_up" @click="redirectVehicle(servicedetail.VehicleId)">{{servicedetail.VehicleName}}</a></p></li>
                  <li><label>{{ 'WorkshopName' | translate }}</label><span>{{servicedetail.WorkShopName}}</span></li>
                  <li><label>{{ 'ServiceType' | translate }}</label><span>{{servicedetail.ServiceType}}</span></li>
                  <li><label>{{ 'Last Status' | translate }}</label><span>{{servicedetail.Status}}</span>

                     <div class="serv_prog_btn">
                <button class="gps_btn"  v-on:click="ServiceGPS();"><i class="fa fa-map-marker"></i>{{'SeeGPS' | translate }}</button>
                      <button v-on:click="ServiceImg();"><i class="fa fa-camera"></i>{{'SeeImages' | translate }}</button>
                    <button  v-on:click="checklistView(servicedetail.CustomerServicetDeatilsID);">{{'ViewCheckList' | translate }}</button>
                     </div> 
                  </li>
                 <li><label>{{ 'SERVICES' | translate }}</label><span v-for="(list,i) in servicedetail.ServiceNameList">{{list}} <em v-if="(servicedetail.ServiceNameList.length-1) != i">,</em></span></li>
 <li><label>{{ 'PaymentType' | translate }}</label><span>{{servicedetail.PaymentType}}</span></li>
                  <li><label>{{ 'Status' | translate }}</label><span>{{servicedetail.Status}}</span></li>
                  <li v-if="servicedetail.WorkShopName"><label>{{ 'WorkshopName' | translate }}</label><span>{{servicedetail.WorkShopName}}</span></li>
                  <li v-if="servicedetail.DriverName"><label>{{ 'DriverName' | translate }}</label><span>{{servicedetail.DriverName}}</span></li>
                
                 <li v-if="servicedetail.SpecialistName"> <label>{{ 'SpecialistName' | translate }}</label><span>{{servicedetail.SpecialistName}}</span></li>
                
                  <li><label>{{ 'Observations' | translate }}</label><span>{{servicedetail.Observation}}</span></li>
                  <li><label>{{ 'EstimationdeliverySchedule' | translate }}</label><span>{{servicedetail.EstimateDeliveryDate | formatDate(servicedetail.EstimateDeliveryDate)}}</span></li>
                  </ul>
                   <div class="col-md-12 make_payment p-0" v-if="!servicedetail.PaymentType">
                   <router-link to="/">{{ 'MakePayment' | translate }}</router-link>
                   </div>
                   <div class="col-md-12 mt-5 text-center sub_btn back_btn">
                    <button class="detail-btn proceed-btn mr-3"@click="contactSpecialist()">{{ 'ContactSpecialist' | translate }}</button>
                  <router-link to="/ScheduleServiceList"> <button class="cancel_btn">{{ 'BACK' | translate }}</button></router-link>
                  </div>
                  </mdb-col>
              </mdb-row>
           </mdb-col>
         </div>

      </div>
      </div>
  </div>
    <el-dialog title="Change Password" :visible.sync="centerDialogVisible" width="30%" center>
 <span>{{ 'ToRescheduleService' | translate }}</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; rescheduleService();" >{{ 'confirm' | translate }}</el-button>  
    
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
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "ServicesInprogress",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  data() {
		return {
			servicedetail: {},
      centerDialogVisible:false
		}
	},
  	created() {
		this.getSSdetailParam();
  
	},
  	methods: {
      redirectVehicle(id){
           this.$router.push({path:'/Vehicledetail/'+id})

        },
      
      contactSpecialist(){
  
 let specialistData = {
receiverId :this.servicedetail.SpecialistUserId,
CarOwnerServiceId:this.$route.params.id
 }
    this.$router.replace({name:'Contactspecialist', params:{ specialist: specialistData }});
      },
    
      rescheduleService(){ 
      let id =this.$route.params.id;
     this.$router.replace({name:'rescheduleService', params:{rescheduledata:this.servicedetail }});  
   debugger
      },
		getSSdetailParam() {
			       let CustomerServicetDeatilsID = this.$route.params.id;
			       this.isDisabled = false;
             this.create = false;
             this.$store.dispatch('getssdetailview', CustomerServicetDeatilsID)
         
		},
	
     checklistView(){
      let id=this.$route.params.id;
      if(this.servicedetail.ServiceType == 'Driver'){
this.$router.push({path: '/ServiceChecklist/' + id+'/'+2})
      }
      else{
        this.$router.push({path: '/ServiceChecklist/' + id+'/'+1})
      }
  },

        ServiceGPS(){
      			let CustomerServicetDeatilsID =  this.$route.params.id;
      this.$router.push({path: '/ServiceGPS/' + CustomerServicetDeatilsID})
  
    },

  ServiceImg(){
      let id=this.$route.params.id;
      this.$router.push({path: '/ServiceImages/' + id})
  }
	},

 


  computed: {
		...mapGetters({
			getssdetailview: "getssdetailview"
		})
	},
	watch: {
		'getssdetailview': {
			deep: true,
			handler(value) {
				this.servicedetail = null
				this.servicedetail = this.getssdetailview.data;
			}
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.service_inprogress_lst{padding-left:0px; margin-bottom:20px;}
.service_inprogress_lst li label{color: #666666; font-size: 20px;font-family: 'Nunito-Medium'; max-width:200px; width:100%;}
.service_inprogress_lst li span{color:#333333;padding-left: 30px; font-size: 20px;font-family: 'Nunito-Medium';}
.service_inprogress_lst li {padding-bottom:20px;}
.service_inprogress_lst li:last-child{padding-bottom:0px;}
.service_inprogress_lst p { color: #292a30;font-size: 20px;}
.service_inprogress_lst p a { color: #0066d0; font-family: nunito-medium;}
.proceed-btn{width:auto !important;}
.serv_prog_btn button i{padding-right: 5px;}
.serv_prog_btn button:first-child { background: #2dcc70; padding: 6px 20px;}
.serv_prog_btn button:nth-child(2) { background: #f29b14; padding: 6px 20px;}
.serv_prog_btn button:last-child { background: #9b58b8; padding: 6px 20px;}
.serv_prog_btn {margin-left: 233px;  margin-top: 10px;}
.serv_prog_btn a { margin-right: 9px;}
.make_payment a{font-size: 20px;font-family: 'Nunito-Medium'; color:#0065cf; }
.sub_btn.back_btn {align-items: center; align-self: center; display: flex; flex-direction: row;justify-content: center; margin: 35px 0 11px; width: 100%; }
.ren_up{text-transform:uppercase;}
.add_new_vehicle{
    color: #fff;
    font-size: 16px;
    padding: 15px 20px 17px;
    line-height: 11px;
    background: #0066d0;
    min-height:30px;
}
.service_inprogress_lst li:last-child span {
    vertical-align: top;
}
.vehicle_tlt h4{line-height:42px;}
</style>
