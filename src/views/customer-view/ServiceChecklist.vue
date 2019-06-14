<template>
  <section id="ServiceChecklist">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'SERVICES' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
       
          <div class="vehicle_tlt d-flex flex-row">
            <h4>{{ 'ScheduledService' | translate }}</h4>
          </div>

           <div class="vehicle_lsts_sec add_newvehicle addvehicle_detail">
         
            <form>

             

                                <ul v-if="serviceChecklist.DriverDetailsID != 0">
                <li><h5>{{ 'ScheduledService' | translate }}</h5></li>
                <li><label>{{ 'TMRExpirationDate' | translate }}</label><span>{{serviceChecklist.DriverTechnicalmechanicalrevisionexpirationdate | formatDate(serviceChecklist.DriverTechnicalmechanicalrevisionexpirationdate)}}</span></li>  
                <li><label>{{ 'SOATexpirationdate' | translate }}</label><span>{{serviceChecklist.DriverSOATexpirationdate | formatDate(serviceChecklist.DriverSOATexpirationdate)}}</span></li>
                <li><label>{{ 'CurrentMileage' | translate }}</label><span>{{serviceChecklist.DriverCurrentmileage?serviceChecklist.DriverCurrentmileage:0 }} km</span></li>         
                <li><label>{{ 'Radio' | translate }}</label><span>{{serviceChecklist.DriverIsRadio===true?"Yes":"No" }}</span></li>
                <li><label>{{ 'BeltSecurity' | translate }}</label><span>{{serviceChecklist.DriverIsbeltsecurity===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'Tools' | translate }}</label><span>{{serviceChecklist.DriverIsTools===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'HydraulicJack' | translate }}</label><span>{{serviceChecklist.DriverIsHydraulicJack===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'SpareTire' | translate }}</label><span>{{serviceChecklist.DriverIsSpareTire===true?"Yes":"No"}}</span></li>
              </ul>
              
               <ul  class="driver_hgt" v-if="serviceType == '2'">{{ 'WaitingfordriverUpdate' | translate }}</ul>
           
               <ul   class="driver_hgt" v-if="serviceChecklist.SpecialistTechnicalmechanicalrevisionexpirationdate == null">{{ 'WaitingforspecialistUpdate' | translate }}</ul>

               <ul v-if="serviceChecklist.SpecialistTechnicalmechanicalrevisionexpirationdate != null">
                <li><h5>{{ 'SpecialistCheckList' | translate }}</h5></li>
                <li><label>{{ 'TMRExpirationDate' | translate }}</label><span>{{serviceChecklist.SpecialistTechnicalmechanicalrevisionexpirationdate | formatDate(serviceChecklist.SpecialistTechnicalmechanicalrevisionexpirationdate)}}</span></li>  
                <li><label>{{ 'SOATexpirationdate' | translate }}</label><span>{{serviceChecklist.SpecialistSOATexpirationdate | formatDate(serviceChecklist.SpecialistSOATexpirationdate)}}</span></li>
                <li><label>{{ 'CurrentMileage' | translate }}</label><span>{{serviceChecklist.SpecialistCurrentmileage?serviceChecklist.SpecialistCurrentmileage:0}} km</span></li>          
                <li><label>{{ 'Radio' | translate }}</label><span>{{serviceChecklist.SpecialistIsRadio===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'BeltSecurity' | translate }}</label><span>{{serviceChecklist.SpecialistIsbeltsecurity===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'Tools' | translate }}</label><span>{{serviceChecklist.SpecialistIsTools===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'HydraulicJack' | translate }}</label><span>{{serviceChecklist.SpecialistIsHydraulicJack===true?"Yes":"No"}}</span></li>
                <li><label>{{ 'SpareTire' | translate }}</label><span>{{serviceChecklist.SpecialistIsSpareTire===true?"Yes":"No"}}</span></li>
              </ul>
           
            </form>
           


           </div>




          <div class="sub_btn back_btn">
             
             <btn class="cancel_btn"  @click="$router.go(-1)">{{ 'BACK' | translate }}</btn>
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
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Column
  } from 'mdbvue';
  
  export default {
    name: 'ServiceChecklist',
    components: {
      Btn,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter,
      Container,
      Row,
      Column,
    },
    data() {
      return {
        			serviceChecklist: {},serviceType:''
              
      }
    },
    	created() {
		this.getServiceChecklistParam()
	},
  	methods: {
		getServiceChecklistParam() {
			let CustomerServicetDeatilsID = this.$route.params.id;
      console.log(CustomerServicetDeatilsID);
this.serviceType = this.$route.params.servicetype;

      //  let vehicleId = this.serviceChecklist.CustomerServiceDeatilsID;
      //    console.log(vehicleId);
                   this.isDisabled = false;
                   this.create = false;
       this.$store.dispatch('getchecklist', CustomerServicetDeatilsID)
         
		}
	
	},
  computed: {
		...mapGetters({
			getchecklist: "getchecklist"
		})
	},
	watch: {
		'getchecklist': {
			deep: true,
			handler(value) {
				this.serviceChecklist = null
				this.serviceChecklist = this.getchecklist.data;
			}
		}
	},

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }
  .vehicle_lsts_sec{background:transparent !important; padding:0px !important;}
  .sub_btn button{ width:160px; margin-top:30px;}
  .services_img_section p {color: #292a30;font-size: 18px;}
  .services_img_section p a {color: #0066d0; font-family: nunito-medium;}
  .services_img{margin-bottom:30px;}
  .services_img div {margin: 0 10px;width: 100%;}
  .services_img div img { max-width: 330px;width: 100%;}
  .addvehicle_detail ul li label {
    color: #656565 !important;
    font-size: 17px;
    width: 260px;
    float: left;
    max-width: 100%;
  }
 .add_newvehicle form ul {
    width: 48% !important;
    background: #fff;
    padding: 20px;
    margin:10px 1%;
}
  .add_newvehicle form ul li{width:100% !important; max-width:100% !important;}
  .addvehicle_detail ul li span {
    font-size: 17px;
    color: #333;
    float: left;
    width: 190px;
    max-width: 100%;
    font-family: 'Nunito-Bold';
    padding-left: 13px;
  }


  .add_newvehicle h5 {
    color: #007bff;
    font-family: 'Nunito-Bold';
}

 @media only screen and (min-width:320px) and (max-width:767px)
 {
  #ServiceChecklist .add_newvehicle form ul {
    width:100% !important;
 }
 }

</style>
