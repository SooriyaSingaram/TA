<template>
  <section id="myvehicles">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'MyVehicles' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start">
              <h4>{{ 'VehiclesList' | translate }}</h4>
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
              <router-link to="/Addnewvehicle/0"><button class="add_new_vehicle">{{ 'AddNewVehicle' | translate }}</button></router-link>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec">
  
            <!--vehicleList-->
  
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column" v-for="vehicledata in addvehiclelist.data" v-on:click="vehicleView(vehicledata.CustomerVehicleID);">
            
              <div class="vehicle_lst">
                
                  <div class="vehicle_lst_det d-flex justify-content-between flex-row">
  
                    <div class="vehicle_mg">
                      <img  v-bind:src="vehicledata.ImageUrl" width="100" />
                    </div>
                    <div class="vehicle_cont d-flex flex-column align-items-start">
                      <span class="vehicle_name">{{vehicledata.BrandName}}</span>
                      <span class="vehicle_no">{{vehicledata.ModelName}}</span>
                    </div>
  
                  </div>
               
                <div class="vehicle_lst_btn d-flex justify-content-between flex-row">
                  <div>
                   <button class="edit-btn"  v-on:click="editList(vehicledata.CustomerVehicleID);$event.stopPropagation()">{{ 'EDIT' | translate }}</button>
                  </div>
                  <div>
                   <button class="del-btn"  v-on:click="del(vehicledata.CustomerVehicleID);$event.stopPropagation()">{{ 'Delete' | translate }}</button>
                  </div>
                </div>
  
              </div>
              <!-- <router-link to="/Vehicledetail/0" ></router-link>-->
            </div>
  
            <!--vehicleList-->
  
  

<el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
  <span><span>{{ 'deleteAlert' | translate }}?</span> </span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="delconfirm();centerDialogVisible = false; " >Confirm</el-button>  
    
    <el-button type="danger" @click="centerDialogVisible = false">Cancel</el-button>
</span>
</el-dialog>
  
  
  
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
    name: 'Myvehicles',
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
        centerDialogVisible: false,
          Addnewvehicle: {},
          mainservice:[],
           brandList:[],Year:[],Class:[],Model:[],Usage:[],isDisabled:false,
            usageList:[],
          vehicledata:[],
          cdelete:0,
      }
    },
  
  	methods: {
         
	getvehicleParam() {
       
               	let vehicleId = this.$route.params.id;
             		let userid =Number(JSON.parse(localStorage.getItem('userId')))  
                console.log(localStorage.getItem('userId')); 
			          this.$store.dispatch("getvehicleList",userid);
	},

  vehicleView(id){

      console.log(id);
      this.$router.push({path: '/Vehicledetail/' + id})
  },


      del(id){
			var self = this;
      this.centerDialogVisible = true;
      this.cdelete=id;
		
    },

       delconfirm(){
			var self = this;
      let corpData={url:'/CarOwner/DeleteVehicle?vehicleId=' + this.cdelete}
      console.log(corpData)
			return this.$store.dispatch('updateData', corpData).then((response) => {
      
      let userid =Number(JSON.parse(localStorage.getItem('userId')))  ;
this.$store.dispatch("getvehicleList",userid);
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		
    },
	
		editList(id){
       this.$router.push({path: '/Addnewvehicle/' + id});
      
    },


    getData(api,param,data){
            
             let url= '/Common/Get'+api+'?'+param+data
         
return this.$store.dispatch('getDropdownList', url).then((response) => {
	this[api] =  response.data.data;
}).catch(function(err) {
	//alert(err.response.data.error)
});

        },

           getContent(a) {
			var self = this;
			let url = '/SuperAdmin/GetVehicleEdit?vehicleId=' + a;
			return this.$store.dispatch('getvehicleedit', url).then((response) => {
				
					this.vehicledata = response.data.data;
                    this.getData('Year','BrandId=',this.vehicledata.BrandID)
                    this.getData('Model','YearID=',this.vehicledata.YearID)
                    this.getData('Class','ModelID=',this.vehicledata.ModelID)
                  
				
			}).catch(function(err) {
			//	alert(err.response.data.error)
			});
        		
           },
           
	},
    computed: {
		...mapGetters({
			addvehiclelist: "getvehicleList", // for get data
      getvehicleedit:"getvehicleedit",
      getBrand:"getBrand",
      getUsage:"getUsage"
      
		})
	},
  watch: {
		'getvehicleList': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.getvehicleList;
        debugger
			}
		},
     'getvehicleedit': {
			deep: true,
			handler(value) {
				this.Addnewvehicle = null;
				this.Addnewvehicle = this.getvehicleedit.data;
			}
		},
     'getBrand': {
			deep: true,
			handler(value) {
				this.brandList = null
				this.brandList = this.getBrand.data;
                
			}
		},
     'getUsage': {
			deep: true,
			handler(value) {
				this.usageList = null
				this.usageList = this.getUsage.data;
                
			}
		}
	},
    created() {
	  this.getvehicleParam();
    	 this.$store.dispatch('getUsage'); 
      this.$store.dispatch('getBrand');  
     
	}
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vehicle_lst {
    border: 1px solid #d1d4d7;
    border-radius: 5px;
    margin-bottom: 31px;
    padding: 15px !important;
  }
  
  .vehicle_cont {
    align-self: center;
  }
  
  .vehicle_name {
    color: #0065cf;
    font-size: 16px;
    text-transform: capitalize;
  }
  
  .vehicle_no {
    color: #65696c;
    font-size: 16px;
  }
  
  .vehicle_lst button {
    color: #fff;
    font-size: 16px;
    line-height: 11px;
    width: 115px;
    padding:7px 0px 10px 0px;
  }
  
  .add_new_vehicle {
    color: #fff;
    font-size: 16px;
    padding: 15px 20px 17px;
    line-height: 11px;
    background: #0066d0;
    min-height:30px;
  }
  
  .vehicle_lst_btn {
    margin-top: 24px;
    margin-bottom: 5px;
  }
  
  .edit-btn {
    background: #0066d0 none repeat scroll 0 0;
  }
  
  .del-btn {
    background: #e74c3c;
  }
    .vehicle_cont.d-flex.flex-column.align-items-start {
    width: 57%;
    margin: auto;
}

.vehicle_mg img {
    width: 101px;
    height: 100px;
    border: 1px solid #f1f1f1;
    border-radius: 97px;
}
</style>
