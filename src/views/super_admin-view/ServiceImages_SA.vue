<template>
  <section id="ServiceImages_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'SERVICES' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
       
          <div class="vehicle_tlt d-flex flex-row">
            <h4>{{ 'ScheduledService' | translate }}</h4>
            <div class="before_after d-flex" >
             <btn class="before_button" v-bind:class="{'is-active':isActivebeforebutton}" v-on:click="beforeService" type="button" >{{ 'BeforeService' | translate }}</btn>
             <btn class="after_button"  v-bind:class="{'is-active':isActiveafterbutton}" v-on:click="afterService"  type="button" >{{ 'AfterService' | translate }}</btn>
          </div>
          </div>
           <div class="vehicle_lsts_sec"  >

            <div class="services_img_section before" v-if="isActive"  >
            <p>Images of the 10,000 KM maintainance for your <a class="fon_up">Renualt Sandero</a></p>
            <p>{{ 'DriverPickUp' | translate }}</p>
            <div class="d-flex justify-content-between services_img" > 
              <div v-for="Imagesdata in Imageslist">
               <div v-for="Image in Imagesdata.DriverPickUpImageUrl">
                 <img v-bind:src="Image"/>
               </div>
                <div class="no_record" v-if="Imagesdata.DriverPickUpImageUrl === null">No Record Found</div>
               </div>
               <!--<div><img src="../../assets/images/service_images/service_img2.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img3.png" class="" /></div>-->
            </div>
             <p>{{ 'DriverDrop' | translate }}</p>
             <div class="d-flex justify-content-between services_img" > 
             
             <div v-for="Imagesdata in Imageslist">
                <div v-for="Image in Imagesdata.DriverDropImageUrl">
                  <img v-bind:src="Image"/>
                </div>
                <div class="no_record" v-if="Imagesdata.DriverDropImageUrl === null">No Record Found</div>
           
             </div>
              
               <!--<div><img src="../../assets/images/service_images/service_img5.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img6.png" class="" /></div>-->
            </div>

              <!--<div class="no_record empty_record" v-if="!Imageslist.length">No Record Found</div>-->
              
          
            </div>

             <div class="services_img_section after" v-if="!isActive" >
            <p>Images of the 10,000 KM maintainance for your <a class="fon_up">Renualt Sandero</a></p>
            <p>{{ 'SpecialistPickUp' | translate }}</p>
            <div class="d-flex justify-content-between services_img" > 
              <div v-for="Imagesdata in Imageslist">
                <div v-for="Image in Imagesdata.SpecialistPickUpImageUrl">
                   <img  v-bind:src="Image"/>
                </div>
                 <div class="no_record" v-if="Imagesdata.SpecialistPickUpImageUrl === null">No Record Found</div>
              </div>
               <!--<div><img src="../../assets/images/service_images/service_img2.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img3.png" class="" /></div>-->
            </div>
             <p>{{ 'SpecialistDrop' | translate }}</p>
             <div class="d-flex justify-content-between services_img" > 
              <div v-for="Imagesdata in Imageslist">
                  <div v-for="Image in Imagesdata.SpecialistDropImageUrl">
                     <img v-bind:src="Image"/>   
                  </div>
                  <div class="no_record" v-if="Imagesdata.SpecialistDropImageUrl === null">No Record Found</div>
                </div>
                 

               <!--<div><img src="../../assets/images/service_images/service_img5.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img6.png" class="" /></div>-->
                
            </div>
            </div>

           

           </div>
  
          <!--<div class="sub_btn back_btn">
              <router-link to="/"><button class="detail-btn valid-btn pp_btn"> Proceed Payment</button></router-link>
          </div>-->


          
           <div class="sub_btn back_btn">
            <btn @click="$router.go(-1)" class="cancel_btn">Back</btn>
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
    name: 'ServiceImages_SA',
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
          isActive: false,
          isActivebeforebutton:false,
          isActiveafterbutton:true,
          SpecialistDropImageUrl: null,
          Imagesdata:[]
      }
        
    },
      	created() {
		this.getServiceImagesParam()
	},
    
     methods: {
       	getServiceImagesParam() {
			let CustomerServicetDeatilsID = this.$route.params.id;
      console.log(CustomerServicetDeatilsID);


      //  let vehicleId = this.serviceChecklist.CustomerServiceDeatilsID;
      //    console.log(vehicleId);
                   this.isDisabled = false;
                   this.create = false;
       this.$store.dispatch('getScheduleImages', CustomerServicetDeatilsID)
         
		},
    beforeService: function() {
      console.log('before');
      this.isActive = true;
      this.isActivebeforebutton = true;
      this.isActiveafterbutton = false;
    
    },
    afterService: function() {
      console.log('after');
        this.isActive = false;
      this.isActivebeforebutton = false;
      this.isActiveafterbutton = true;
    },
  },

    	computed: {
		...mapGetters({
			Imageslist: "getScheduleImages", 
		})
	},

  
  	watch: {
		'getScheduleImages': {
			deep: true,
			handler(value) {
				this.Imagesdata = null
				this.Imagesdata = this.getScheduleImages.data;
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
  .sub_btn button{background:#0066d0 !important; color:#fff !important; width:160px;}
  .services_img_section p {color: #292a30;font-size: 18px;}
  .services_img_section p a {color: #0066d0; font-family: nunito-medium;}
  .services_img{margin-bottom:30px;}
  .services_img div {margin: 0 10px;width: 100%; display:flex;}
  .services_img div img {
    width: 200px;
    margin-right: 30px;
    height: 200px;
    object-fit: contain;
}
  /*.services_img div img { max-width: 330px;width: 100%; margin-right:30px;}*/
  .sub_btn button{width:199px !important;}
  .fon_up{text-transform:uppercase;}
  /*.before_button{background:#0066d0 !important;text-transform:initial;}*/
.before_button.is-active{background:#0066d0 !important;text-transform:initial; color:#fff !important;}
.after_button.is-active{background:#0066d0 !important;text-transform:initial; color:#fff !important;}
.before_after{margin-left:auto;}
.content_section button{background:transparent !important;color:#212121 !important;text-transform:initial;box-shadow: none;
    border: 1px solid #212121;}
 .vehicle_tlt h4{align-self:center;}

 .no_record {
    text-align: center;
    padding: 20px 0px;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    background: #fff;
    display:flex;
}
.empty_record{padding:0px; margin-top:-30px;}

@media only screen and (min-width:320px) and (max-width:767px){
.services_img div{width:auto !important;}
.content_section button{padding:10px 6px !important;}
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
 .sub_btn button{background:#0066d0 !important; border:1px solid #0066d0; color:#fff !important; width:160px !important;}

</style>
