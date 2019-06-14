<template>
  <section id="Driver_detail_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'AdminFunctions' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start p-0">
              <h4>{{ 'DriverDetail' | translate }}</h4>
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
             <button class="edit_btn" v-on:click="edit()">{{ 'EDIT' | translate }}</button>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
         
              
            <form class="md-form img_uplpad">
                <div class="file-field">
                  <div class="driver_mg">
                   <img src="../../assets/images/driver_img.jpg" class="driver"/>
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
                <li><label>{{ 'DriverName' | translate }}</label><span>{{driver.UserName}}</span></li>
            
                <li><label>{{ 'Email' | translate }}</label><span>{{driver.Email}}</span></li>
               
                <li><label>{{ 'WorkshopName' | translate }}</label><span v-for="(list,i) in driver.WorkShopNameList">{{list}} <em v-if="(driver.WorkShopNameList.length-1) != i">,</em></span></li>
              
                <li><label>{{ 'Address' | translate }}</label><span>{{driver.Address}}</span></li>

              </ul>

                <ul>
              
                <li><label>{{ 'ID' | translate }}</label><span>{{driver.DriverDetailsID}}</span></li>
               
                <li><label>{{ 'PhoneNumber' | translate }}</label><span>{{driver.PhoneNumber}}</span></li>
               <li><label>{{ 'City' | translate }}</label><span>{{driver.City}}</span></li>
               
                <li><label>{{ 'Zone' | translate }}</label><span>{{driver.Zone}}</span></li>
               

              </ul>
            </form>
           
            <div class="sub_btn btn_div">
              <router-link to="/Drivers_SA"><button class="bck_btn">{{ 'BACK' | translate }}</button></router-link>
             
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
    name: 'Driver_detail_SA',
    components: {
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
			driver: {}
		}
	},
	created() {
		this.getDriverParam()
	},
	methods: {
		getDriverParam() {
            
			let driver_Id = this.$route.params.id;
			             this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getdriver', {do_function:'DetailDriver',id:driver_Id} )
               
                
				
				
			
		},
    edit(){
       this.$router.push({path: '/driver/' + this.$route.params.id})
    }
	},
	computed: {
		...mapGetters({
			getdriver: "getdriver"
		})
	},
	watch: {
		'getdriver': {
			deep: true,
			handler(value) {
                debugger
				this.driver = null
				this.driver = this.getdriver.data;
                console.log(this.driver)
                debugger
                
			}
		}
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
