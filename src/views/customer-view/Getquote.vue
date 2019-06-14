<template>
   <section id="GetQuote">
      <div class="container-fluid">
         <div class="row">
            <div class="col-12 main-title">
              <h2>{{ 'SERVICES' | translate }}</h2>
            </div>
            <div class="col-12 content_section">
               <div class="vehicle_tlt d-flex flex-row">
                  <h4>{{ 'GetAQuote' | translate }} </h4>
               </div>
               <div class="d-flex flex-wrap vehicle_lsts_sec service_option">
                  <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
                     <v-date-picker  :mode='mode' :min-date='mindate'
                        v-model='serviceTypes.ScheduleDate'  :disabled-dates='{ weekdays: [1] }'
                        is-inline>
                     </v-date-picker>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-8 col-xl-8 cal_con">
                     <div class="col-md-12 col-sm-12 col-lg-10 ">
                        <div class="custom-control custom-radio" v-for="data in serviceTypes">
                           <input type="radio"  v-on:change="showValidate = false;" :value="data.ScheduleServiceID" v-model="serviceTypes.ServicesTypeid" class="custom-control-input" name="radio" >
                           <label class="custom-control-label" for="defaultUnchecked1">{{data.ScheduleServiceName}}</label>
                        </div>
                        <div class="col-md-12 mt-5 mb-4" v-if="(serviceTypes.ServicesTypeid == 1) && serviceTypes.ScheduleDate">
                           <button class="detail-btn valid-btn" @click="vehicleAvailability();">{{ 'ValidateAvailability' | translate }}</button>
                           <p style="color:red">{{errorMessage}}</p>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment"  v-if="(serviceTypes.ServicesTypeid == 1) && showValidate && serviceTypes.ScheduleDate">
                     <form >
                        <ul >
                           <li>
                              <label for="selected date" class="grey-text font-weight-light">{{'slotToPickUp' | translate}}
                              </label>
                              <div class="sel_fac">
                                 <select class="form-control" v-model="serviceTypes.ScheduleTimeId">
                                    <option v-for="time in timingList" :value="time.SceduledTimeId">{{time.SceduledTimeName}}</option>
                                 </select>
                                  <span id="password_error" class="error"  style="color:red">{{errorMsg.ScheduleTimeId}}</span>
                              </div>
                           </li>
                           <li>
                              <label for="selected date" class="grey-text font-weight-light"> {{'AddressToPickUpVehicle' | translate}}</label>
                              <textarea v-model="serviceTypes.Address"></textarea>
                               <span id="password_error" class="error"  style="color:red">{{errorMsg.Address}}</span>
                           </li>
                        </ul>
                     </form>
                     <div class="sub_btn back_btn">
                        <button class="detail-btn valid-btn pp_btn" @click="proceedPayment({Address:serviceTypes.Address,ScheduleTimeId:serviceTypes.ScheduleTimeId})"> {{'Proceed' | translate}}</button>
                        <btn class="cancel_btn"> {{'BACK' | translate}}</btn>
                     </div>
                  </div>
                     <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment"  v-if="(serviceTypes.ServicesTypeid == 2) && serviceTypes.ScheduleDate">
                    
                     <div class="sub_btn back_btn">
                        <button class="detail-btn valid-btn pp_btn pp_btn" @click="proceedPayment()"> {{'Proceed' | translate}} </button>
                        <btn class="cancel_btn"> {{'BACK' | translate}}</btn>
                     </div>
                  </div>
                   <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment"  v-if="serviceTypes.ServicesTypeid == 3 && serviceTypes.ScheduleDate">
                     <form >
                         <ul>
  
                <li>
  
                  <label for="selected date" class="grey-text font-weight-light">{{'ContactNumber' | translate}}</label>
  
                  <div class="sel_fac">
  
                    <input type="text" v-model="serviceTypes.ContactNo" class="form-control" v-validate="'min:10|numeric'">
   <span id="password_error" class="error"  style="color:red">{{errorMsg.ContactNo}}</span>
  
                  </div>
  
                </li>

                 <li>
  
                 <label for="selected date" class="grey-text font-weight-light">{{'EnterTheLocation' | translate}}</label>
                 <textarea v-model="serviceTypes.Address"></textarea>
   <span id="password_error" class="error"  style="color:red">{{errorMsg.Address}}</span>
                </li>
  
              </ul>
                     </form>
                     <div class="sub_btn back_btn">
                        <button class="detail-btn valid-btn pp_btn" @click="proceedPayment({ContactNo:serviceTypes.ContactNo,Address:serviceTypes.Address})"> {{'Proceed' | translate}}</button>
                        <btn class="cancel_btn">{{'BACK' | translate}}</btn>
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
  
    name: 'Getquote',
  
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
   props: ["quoteFinaldata"],
    data() {
  
      return {
  mindate:null,
   
    mode: 'single',
         quoteDetail:{},serviceTypes:{},timingList:{},showValidate:false,errorMsg:{},errorMessage:''
  
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
          this.showValidate=true;
				}
				else {
				this.errorMessage = response.data.Message
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});
        //self.$router.push({name:'GetquoteCheckdate'})

      },
proceedPayment(a){
  var self =this;
   this.$validator.validateAll().then((result) => {
        if (result) {
          for (var member in this.errorMsg) delete this.errorMsg[member];
  //console.log( navigator.geolocation.getCurrentPosition(showPosition))


self.quoteDetail.ScheduleDate=self.serviceTypes.ScheduleDate;
self.quoteDetail.ServicesTypeid = self.serviceTypes.ServicesTypeid;
if(a){
  for(let key in a){
    debugger
    if(!a[key]){
      this.$set(this.errorMsg, [key],  "This field is required")
//this.errorMsg[key] = "This field is required"
    }else{
      delete this.errorMsg[key];
    }
self.quoteDetail[key] = a[key];

  }
}
  console.log(this.errorMsg)
       self.quoteDetail.userid =Number(JSON.parse(localStorage.getItem('userId')))  
       self.quoteDetail.CarOwnerServiceId=0;
      // self.quoteDetail.PaymentType = 1;
     
       self.quoteDetail.url= '/CarOwner/AddCustomerServices';
        if(Object.getOwnPropertyNames(this.errorMsg).length >1){
   return true;
   }else{
     
			return this.$store.dispatch('updateData', self.quoteDetail).then((response) => {
        
        if (response.data.IsSuccess) {
if(self.quoteDetail.hasOwnProperty('cartIdList')){
  self.quoteDetail.cartIdList.map((itemData)=>{
  return this.$store.dispatch('updateData', {url:'/CarOwner/DeletCarOwnerCartDetails?vehicleId='+itemData}).then((response) => {
})
  })
}
                 let serviceData ={
                   CarOwnerServiceId:response.data.data,
                   ServiceAmount:self.quoteDetail.ServiceAmount,
                   ServicesTypeid:self.quoteDetail.ServicesTypeid
                   }
         self.$router.replace({name: 'SchedulePayment', params:{  quoteDetail:serviceData  }});
        }else{
          this.$message(response.data.Message)
        }
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
   }
        }else{
          
          self.errorMsg.ContactNo = "Please enter valid contact number";
return
        }
   })
  
        

    


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
}// self.quotesFinalObj.ServicesTypeid = 2;
    },
    mounted: function () { 
      var self= this;
      
    if (self.quoteFinaldata) {
           self.quoteDetail =self.quoteFinaldata
        }else{
           this.$router.push({
                    name: 'Addnewquote'
                }) 
        }
},
created(){
  this.getServiceType()
  var today = new Date();
 this.mindate= new Date(today.setDate(today.getDate() + 1))
  
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
button.add_vehicle {
    margin-right: 10px;
}
  
</style>
