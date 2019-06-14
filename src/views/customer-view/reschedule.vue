<template>
   <section id="GetQuote">
      <div class="container-fluid">
         <div class="row">
            <div class="col-12 main-title">
               <h2>Services</h2>
            </div>
            <div class="col-12 content_section">
               <div class="vehicle_tlt d-flex flex-row">
                  <h4>Get a Quote</h4>
               </div>
               <div class="d-flex flex-wrap vehicle_lsts_sec service_option">
                  <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
                     <v-date-picker  :mode='mode'
                        v-model='serviceTypes.ScheduleDate'
                        is-inline>
                     </v-date-picker>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-8 col-xl-8">
                     <div class="col-md-12 col-sm-12 col-lg-10 ">
                        <div class="custom-control custom-radio" v-for="data in serviceTypes">
                           <input type="radio"  :value="data.ScheduleServiceID" v-model="serviceTypes.ServicesTypeid" class="custom-control-input" name="radio" >
                           <label class="custom-control-label" for="defaultUnchecked1">{{data.ScheduleServiceName}}</label>
                        </div>
                        <div class="col-md-12 mt-5 mb-4" v-if="serviceTypes.ServicesTypeid == 1">
                           <button class="detail-btn valid-btn" @click="vehicleAvailability();showValidate=true;">Validate Availablity</button>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment"  v-if="(serviceTypes.ServicesTypeid == 1) && showValidate">
                     <form >
                        <ul >
                           <li>
                              <label for="selected date" class="grey-text font-weight-light">In the selected Date we have the following slots to pick
                              up your Vehicle</label>
                              <div class="sel_fac">
                                 <select class="form-control" v-model="serviceTypes.ScheduleTimeId">
                                    <option v-for="time in timingList" :value="time.SceduledTimeId">{{time.SceduledTimeName}}</option>
                                 </select>
                              </div>
                           </li>
                        </ul>
                     </form>
                     <div class="sub_btn back_btn">
                        <button class="detail-btn valid-btn pp_btn" @click="rescheduleService()"> Proceed</button>
                        <btn class="cancel_btn">Back</btn>
                     </div>
                  </div>
               <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment"  v-if="(serviceTypes.ServicesTypeid == 2) || (serviceTypes.ServicesTypeid == 3)">
          
                     <div class="sub_btn back_btn">
                        <button class="detail-btn valid-btn pp_btn" @click="rescheduleService()"> Proceed</button>
                        <btn class="cancel_btn">Back</btn>
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
  
    Row,
  
    Column,
  
    Card,
  
    CardBody,
  
    ViewWrapper,
  
    MdMask,
  
    CardTitle,
  
    CardText,
  
    CardFooter,
  
    Fa,
  
    Btn,
  
    Pagination,
  
    PageNav,
  
    PageItem
  
  } from 'mdbvue'
  
  
  
  export default {
  
    name: 'reschedule',
  
    components: {
  
      Row,
  
      Column,
  
      Card,
  
      CardBody,
  
      ViewWrapper,
  
      MdMask,
  
      CardTitle,
  
      CardText,
  
      CardFooter,
  
      Fa,
  
      Btn,
  
      Pagination,
  
      PageNav,
  
      PageItem
  
  
  
    },
    props: ["rescheduledata"],
    data() {
  
      return {
  
   
    mode: 'single',
         quoteDetail:{},serviceTypes:{},timingList:{},showValidate:false,rescheduleObj:{}
  
      };
  
    },
    methods: {
      vehicleAvailability(){
          
        var self = this;
        let obj={
          ScheduleTime:self.serviceTypes.ScheduleDate,
          cityId:self.quoteDetail.CityId,
          ZoneId:self.quoteDetail.ZoneId,
          url : '/CarOwner/ValidateAvailability'
        }
        	 
			return this.$store.dispatch('updateData', obj).then((response) => {
				if (response.data.IsSuccess) {
         this.timingList=response.data.data;
          
				}
				else {
				
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});

      },
rescheduleService(){
  var self = this;
  let rescheduledService={
  "CarOwnerServiceId":self.quoteDetail.CarOwnerServiceId,
  "RescheduleDate": self.serviceTypes.ScheduleDate,
  "ReScheduleTimeId": self.serviceTypes.ScheduleTimeId,
  "url":"/CarOwner/RescheduleCustomerServices"

}

	return self.$store.dispatch('updateData',rescheduledService ).then((response) => {
   
				self.$message(response.data.Message)
			self.$router.push({name: 'ScheduleServiceList'})
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});

},
getServiceType(){
  
  	let url = '/CarOwner/CustomerScheduleServiceTypeDropDownList'
			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				if (response.data.IsSuccess) {
          this.serviceTypes = response.data.data;
          
				}
				else {
				
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});
}
    },

created(){
    
  this.getServiceType()
  
  
},
    mounted: function () { 
    
    if(this.rescheduledata){
      debugger
    this.quoteDetail=this.rescheduledata;
    }
}
    
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  
  
  
  .service_radio_input {
  
    border: 1px solid #cbcdce;
    padding:46px 35px;
  
  }

  .service_option {
  
    background: #fff;
  
  }
  
  
  
  .custom-control-label {
  
    font-size: 18px;
  
    line-height: 18px;
  
    padding-left: 16px;
  
  }
  
  
  
  .custom-control.custom-radio {
  
    margin-bottom: 30px;
  
  }

   .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }
  .custom-control-input {
    position: relative !important;
    opacity: 0;
    z-index: 1 !important;
}
  
</style>
