<template>
  <section id="Service_detail_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
           <h2>{{ 'SERVICES' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>{{ 'ServiceDetail' | translate }}</h4>
            </div>
    
          </div>
          
           <button class="bck_btn" @click="editMode=true;">{{ 'EDIT' | translate }}</button></div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
            <form>
              <ul>
                <li><label>{{ 'Vehicle' | translate }}</label><span>{{Servicedetail.VehicleName}}</span></li>
              
                <li><label>{{ 'SpecialistName' | translate }}</label><span v-if='!editMode'>{{Servicedetail.SpecialistName}}</span><span ><select v-if="editMode" v-model="service.SpecialistDetailID" class="form-control"><option v-for="workshop in specialistList" :value="workshop.SpecialistDetailID">{{workshop.SpecialistName}}</option></select></span></li>

                <li><label>{{ 'PaymentType' | translate }}</label><span>{{Servicedetail.ServiceType}}</span></li>

                <li><label>{{ 'WorkShop' | translate }}</label><span v-if='!editMode'>{{Servicedetail.WorkShopName}}</span><span ><select v-if="editMode" v-model="service.WorkshopID" class="form-control"><option v-for="workshop in workshopList" :value="workshop.WorkShopID">{{workshop.WorkShopName}}</option></select></span></li>
               
                <li><label>{{ 'Observations' | translate }}</label><span>{{Servicedetail.Observation}}</span></li>
               
                <li><label>{{ 'Reports' | translate }}</label><span>{{Servicedetail.Report}}</span></li>
              </ul>

              <ul>
               
                <li><label>{{ 'Customer' | translate }}</label><span>{{Servicedetail.CustomerName}}</span></li> 

                <li><label>{{ 'DriverName' | translate }}</label><span v-if='!editMode'>{{Servicedetail.DriverName}}</span><span ><select v-if="editMode" v-model="service.DriverDetailID" class="form-control"><option v-for="workshop in driverList" :value="workshop.DriverDetailID">{{workshop.DriverName}}</option></select></select></span></li>

                    <li><label>{{ 'Amount' | translate }}</label><span>{{Servicedetail.ServiceAmount}}</span></li>
               
                <li style="max-width: 100%;"><label>{{ 'Service' | translate }} {{ 'LastStatus' | translate }}</label><span>{{Servicedetail.Status}}</span>
                  <div class="status_btn"> 
                   <button class="gps_btn" v-on:click="ServiceGPS();">{{ 'SeeGPS' | translate }}</button>
                    <button v-on:click="ServiceImg();" class="img_btn">{{ 'SeeImages' | translate }} </button>
                    <button style="background: #9b58b8;
    padding: 6px 20px;" v-on:click="checklistView(Servicedetail.CustomerServicetDeatilsID);">{{'ViewCheckList' | translate }}</button>
                  </div>
                   </li>

                
               
                <li><label>{{ 'EstimationdeliverySchedule' | translate }}</label><span>{{Servicedetail.EstimateDeliveryDate}}</span></li>
                
              </ul>
            </form>
           
            <div class="sub_btn btn_div" v-if='!editMode'>
              <router-link to="/Service_SA"><button class="bck_btn">{{ 'BACK' | translate }}</button></router-link>
            </div>
             <div class="sub_btn btn_div" v-if='editMode'>
              <button class="bck_btn" @click="updateService()">{{ 'UPDATE' | translate }}</button><button class="cancelButton"  @click="editMode=false;">{{'CANCEL' | translate}}</button>
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
    name: 'Service_detail_SA',
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
        service:{},Servicedetail:{},editMode:false,workshopList:[],specialistList:[],driverList:[]
      }
    },
       created() {
		this.getQuotesParam()
this.getDropdown('/SuperAdmin/GetWorshopDropdown','workshopList')
this.getDropdown('/SuperAdmin/GetSpecialistDropdown','specialistList')
this.getDropdown('/SuperAdmin/GetDriverDropdown','driverList')

	},

  	methods: {
      updateService(){
  let serviceObj = {
        SpecialistDetailID:this.service.SpecialistDetailID,
        CarownerServiceID:this.$route.params.id,
        DriverDetailID:this.service.DriverDetailID,
        WorkshopID:this.service.WorkshopID,
        url:'/SuperAdmin/UpdateCarownerService'
      }
      
      	return this.$store.dispatch('updateData', serviceObj).then((response) => {
                if(response.data.IsSuccess){
                    this.$message("Service assigned successfully.")
                    this.$router.push({name:'Service_SA'})
                }else{
                    this.$message(response.data.Message)
                }
				
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
      },
		getQuotesParam() {
			let ServicedetailID =  this.$route.params.id;
      //alert(ServicedetailID);
         this.$store.dispatch('WorkingServiceDetail',ServicedetailID)
		},

    ServiceImg(){
      			let ServicedetailID =  this.$route.params.id;
//alert(ServicedetailID);
      this.$router.push({path: '/ServiceImages_SA/' + ServicedetailID})
  
    },

       ServiceGPS(){
      			let CustomerServicetDeatilsID =  this.$route.params.id;
      this.$router.push({path: '/ServiceGPS_SA/' + CustomerServicetDeatilsID})
  
    },

           checklistView(){
      let CustomerServicetDeatilsID=this.$route.params.id;
      this.$router.push({path: '/ServiceChecklist_SA/' + CustomerServicetDeatilsID})
  },
	getDropdown(url,name){
     let id =  Number(JSON.parse(localStorage.getItem('userId'))) ;
        
           return this.$store.dispatch("carOwnerDashboard",{id:'',url:url}).then((response)=>{
             this[name]=response.data;
             debugger
           })
  }
	
    },

    computed: {
		...mapGetters({
		WorkingServiceDetail: "WorkingServiceDetail"
		})
	},
	watch: {
		'WorkingServiceDetail': {
			deep: true,
			handler(value) {
          
				this.Servicedetail = null
				this.Servicedetail = this.WorkingServiceDetail.data;
         console.log(this.Servicedetail)
                
			}
		}
	},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.status_btn{
  float: right;
  width: auto;
  margin-top:5px;
}
.status_btn a{
    margin-right: 10px;
}
.status_btn button{
      padding: 6px 9px;
       background:transparent;
      border:0px;
}
.status_btn button.gps_btn{
background: #2ecc71;
}
.status_btn button.img_btn{
  background: #f39c12;
}
.sub_btn button, .sub_btn btn{
margin: 10px
}
.sub_btn button.cancelButton{
    border-radius: 5px;
    background-clip: padding-box;
    font-size: 18px;
    color: #fff;
    border: 0px;
    cursor: pointer;
}


.driver_vehicle form ul li {
  min-height: 60px;
}
@media only screen and (max-width: 1374px) and (min-width: 1200px){
.driver_vehicle form ul li {
    width: 47%;
    margin-right: 3%;  
}
}
</style>
