<template>
  <section id="Dashboard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">  
          <h2>{{ 'DASHBOARD' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
          <h3>{{ 'Attention' | translate }}</h3>
          <div class="attention_details" v-if="TMRAlerta">
            <p>{{ 'TMRRevisionOfYour' | translate }} <a @click="redirectVehicle(TMRAlert[0].VehicleId)"> {{  TMRAlert[0].BrandName }}  {{TMRAlert[0].ClassName}} {{TMRAlert[0].ModelName}}({{TMRAlert[0].YearName}})</a> {{'AboutToExpire' | translate}}.</p>
           <button class="schedule-btn"> {{'ScheduleAppointment' | translate}}</button>
          </div>
          <div class="attention_details" v-if="ScheduleServicea">
            <p>{{ 'YouHaveServiceScheduledFor' | translate }} {{ (ScheduleService.length>0 )? (ScheduleService[ScheduleService.length-1].ServiceDate) :''}}</p>
            <div class="status_service"><label>{{ 'StatusOfService' | translate }}</label><span>{{ScheduleService[ScheduleService.length-1].ServiceStatus}}</span></div>
            <div class="d-flex mt-3 scheduled_btns">
             <button class="detail-btn" @click="goToDetail(ScheduleService[ScheduleService.length-1].CarownerServiceId)"> {{ 'Details' | translate }}</button>
            <button @click="centerDialogVisible = true"  class="reschedule-btn"> {{ 'Reschedule' | translate }}</button>
              <button class="cancel-btn"  @click="centerCancel= true"> {{ 'CANCEL' | translate }} </button>
            </div>
          </div>
  
          <div class="attention_details" v-if="LastServiceDetaila">
            <p> {{'LMRPerformedWas' | translate}} <b> {{LastServiceDetail[0].ServiceDate }}</b> {{ 'ToThevehicle' | translate }} <a @click="redirectVehicle(LastServiceDetail[0].VehicleId)"> {{LastServiceDetail[0].VehicleName}}</a> {{ 'withPlates' | translate }} {{LastServiceDetail[0].Plates}}</p>
          </div>
  
        </div>
      </div>
    </div>
    </div>
        <el-dialog title="Reschedule Service" :visible.sync="centerDialogVisible" width="30%" center>
 <span>{{'ToRescheduleService' | translate}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; rescheduleService(ScheduleService[ScheduleService.length-1].CarownerServiceId);" >Confirm</el-button>  
    
    <el-button type="danger" @click="centerDialogVisible = false">Cancel</el-button>
</span>
</el-dialog>
 <el-dialog title="Cancel Service" :visible.sync="centerCancel" width="30%" center>
 <span>{{'ToCancelService' | translate}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerCancel = false; cancelService(ScheduleService[ScheduleService.length-1].CarownerServiceId);" >Confirm</el-button>  
    
    <el-button type="danger" @click="centerCancel = false">Cancel</el-button>
</span>
</el-dialog>
  </section>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';

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
    name: 'Dashboard',
    components: {
       facebookLogin,
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
  LastServiceDetail:[],
  TMRAlert:[],
  ScheduleService:[],
    LastServiceDetaila:true,
  TMRAlerta:true,
  ScheduleServicea:true,
  centerDialogVisible:false,
  centerCancel:false

      }
    },
      methods: {
        redirectVehicle(id){
           this.$router.push({path:'/Vehicledetail/'+id})

        },
 getUserData(){
         
this.FB.api('/me', 'GET',  { fields: 'id,name,email' },
             userInformation => {
               console.log(userInformation);
              this.personalID = userInformation.id;
              this.email = userInformation.email;
              this.name = userInformation.name;
              let details = {
                    "External_user_name": userInformation.name,
                    "Provider": "facebook", 
                    "ExternalUserID": userInformation.id,
                    "ExternalEmailId": userInformation.email
                  };
             // this.getFacebookLogin(details);
              
             }
        
            
            )
        
        },
 cancelService(id){
            var self = this;
       let cancelscheduleObj= {
         url:"/CarOwner/CancelCustomerServices?CarOwnerServiceId="+id

       }
       	return self.$store.dispatch('updateData', cancelscheduleObj ).then((response) => {
				self.$message(response.data.Message)
			
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
        },
          rescheduleService(id){
              let rescheduleData={
                CarOwnerServiceId: id,
                CityId: 1,
                ZoneId: 1
                   }
            
    
      this.$router.replace({name:'rescheduleService', params:{rescheduledata: rescheduleData}});  
 
     
      //       var self = this;
      //  let rescheduleObj= {
      //    url:"/CarOwner/RescheduleCustomerServices?CarOwnerServiceId="+id

      //  }
      //  	return self.$store.dispatch('updateData',rescheduleObj ).then((response) => {
			// 	self.$message(response.data.Message)
			
			// }).catch(function(err) {
			// 	self.$message(err.response.data.error)
			// });
      },
      goToDetail(id){
        this.$router.push({path:'/ServicesInprogress/'+id})
      },
        getDashboard(link_url){
         let id =  Number(JSON.parse(localStorage.getItem('userId'))) ;
         let url="/CarOwner/"+link_url+"?UserId="
           return this.$store.dispatch("carOwnerDashboard",{id:id,url:url}).then((response)=>{
             
             if(response.data){
               
    if(Array.isArray(response.data)){
      this[link_url] = response.data;
      if(link_url == 'ScheduleService'){ 
       let formattedDate= new Date(this[link_url][this[link_url].length-1].ServiceDate);
      let getRefDate =new Date(formattedDate.setDate(formattedDate.getDate()+1));
      this[link_url][this[link_url].length-1].ServiceDate= getRefDate.toString().split(' ').slice(1, 4).join(' ');

      }
      console.log(this[link_url]+'arr' )
    }else{
this[link_url] =[];
       let formattedDat= new Date(response.data.ServiceDate);
      let getRefDat =new Date(formattedDat.setDate(formattedDat.getDate()+1));
      console.log( getRefDat.toString())
      response.data.ServiceDate= getRefDat.toString().substring(4, 15);
debugger
this[link_url].push( response.data)

 console.log(link_url+'obj'  )

    }

             }else{
    this[link_url+'a'] = false;           
             }

debugger
           }).catch((err)=>{
             this.$message(err.response.data.error)
           })
        }
      },
        created() {
          this.getDashboard('LastServiceDetail')
	        this.getDashboard('TMRAlert')
          this.getDashboard('ScheduleService')
        }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flexible-navbar #navbarSupportedContent .dropdown button.dropdown-toggle:after {
    display: inline-block;
    margin-left: 1.355em !important;
    vertical-align: .255em;
    content: "";
    border-top: .4em solid;
    border-right: .4em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}
 .content_section button {
    padding-top: 6px;
}
.attention_details p {
    font-size: 17px; 
}
</style>
