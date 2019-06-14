<template>
  <section id="Specialist_detail_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'AdminFunctions' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start p-0">
              <h4>{{ 'SpecialistDetail' | translate }}</h4>
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
             <button class="edit_btn" v-on:click="edit()">{{ 'EDIT' | translate }}</button>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
             <form class="md-form img_uplpad">
                <div class="file-field">
                  <div class="driver_mg">
                   <img src="../../assets/images/specialist_img1.jpg" class="driver"/>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class="camera_img">
                       <img src="../../assets/images/camera_icon.png"  class="camera"/>
                      <input type="file">
                    </div>
                  </div>
                </div>
              </form>
          
            <form>
              <ul>
                <li><label>{{ 'Especialist' | translate }}</label><span>{{specialist.UserName}}</span></li>
              
                <li><label>{{ 'Email' | translate }}</label><span>{{specialist.Email}}</span></li>
              
                <li><label>{{ 'WorkshopName' | translate }}</label><span v-for="(list,i) in specialist.WorkShopNameList">{{list}} <em v-if="(specialist.WorkShopNameList.length-1) != i">,</em></span></li>
            
                <li><label>{{ 'Address' | translate }}</label><span>{{specialist.Address}}</span></li>

              </ul>
               <ul>
              
                <li><label>{{ 'ID' | translate }}</label><span></span>{{specialist.SpecialistDetailsID}}</li>
              
                <li><label>{{ 'PhoneNumber' | translate }}</label><span>{{specialist.PhoneNumber}}</span></li>
              
                
               <li><label>{{ 'City' | translate }}</label><span>{{specialist.City}}</span></li>
              
                <li><label>{{ 'Zone' | translate }}</label><span>{{specialist.Zone}} </span></li>

              </ul>
            </form>
           
            <div class="sub_btn btn_div">
              <router-link to="/Specialist_SA"><button class="btn bck_btn">{{ 'BACK' | translate }}</button></router-link>
            </div>
            <!--/vehicleDetail-->
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
    name: 'Specialist_detail_SA',
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
    
	data() {
		return {
			specialist: {}
		}
	},
	created() {
		this.getWorkshpDetail()
	},
	methods: {
		getWorkshpDetail() {
			let specialistId = this.$route.params.id;
		
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getspecialist', {do_function:'DetailSpecialist',id:specialistId   })
	
	},
   edit(){
       this.$router.push({path: '/specialist/' + this.$route.params.id})
    }
  },
	computed: {
		...mapGetters({
			getspecialist: "getspecialist"
		})
	},
	watch: {
		'getspecialist': {
			deep: true,
			handler(value) {
				this.specialist = null
				this.specialist = this.getspecialist.data;
			}
		}
	}
}

    
</script>

<style scoped>
 
</style>
