<template>
  <section id="Vehicledetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'MyVehicles' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start">
              <h4>{{ 'Vehicle Detail' | translate }}</h4>
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
              <button class="add_new_vehicle" v-on:click="viewedit(Addnewvehicle.CustomerVehicleID)">Edit</button>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle addvehicle_detail">
            <!--vehicleDetail-->
            <div class="add_vehicle_mg"> <img  v-bind:src="Addnewvehicle.ImageUrl" width="100" /></div>
            <form>
              <ul>
                <li><label>{{ 'Brand' | translate }}</label><span>{{Addnewvehicle.BrandName}}</span></li>
               
                <li><label>{{ 'Class' | translate }}</label><span>{{Addnewvehicle.ClassName}}</span></li>
               
                <li><label>{{ 'Usage' | translate }}</label><span>{{Addnewvehicle.UsageName}}</span></li>
             
                <li><label>{{ 'DateOfLastTMR' | translate }}</label><span>{{Addnewvehicle.DateLastTechnicalRevision | formatDate(Addnewvehicle.DateLastTechnicalRevision)}}</span></li>
                
                <li><label>{{ 'NextSuggesedMaintenance' | translate }}</label><span>Change of Timing Belt</span></li>
               
              </ul>

               <ul>
               
                <li><label>{{ 'Model' | translate }}</label><span>{{Addnewvehicle.ModelName}}</span></li>
               
                <li><label>{{ 'Year' | translate }}</label><span>{{Addnewvehicle.YearName}}</span></li>
                
                <li><label>{{ 'Plate' | translate }}</label><span>{{Addnewvehicle.PlateNumber}}</span></li>
                
                <li><label>{{ 'ExpiringDateForSOAT' | translate }}</label><span>{{Addnewvehicle.ExpDateSOAT | formatDate(Addnewvehicle.ExpDateSOAT)}}</span></li>
               
                <li><label>{{ 'TallerOnlineHealthIndex' | translate }}</label><span  @click="healthIndexPage()">{{Addnewvehicle.HealthIndex}} <strong>{{ 'VIEW' | translate }}</strong></span></li>
              </ul>
            </form>
            <button class="histy_main" v-on:click="maintainancelist(Addnewvehicle.CustomerVehicleID)">{{ 'HistoryOfMaintenance' | translate }}</button>
            <!--<router-link to="/historydata/0">History of maintenance</router-link>-->
            <div class="sub_btn back_btn">
              <btn class="cancel_btn" @click="$router.go(-1)">{{ 'BACK' | translate }}</btn>
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
    name: 'Vehicledetail',
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
        	Addnewvehicle: {},
           brandList:[],Year:[],Class:[],Model:[],Usage:[],isDisabled:false,
            usageList:[],
            
      }
    },
    created() {
		this.getvehicleParam(),
    this.$store.dispatch('getUsage'); 
    this.$store.dispatch('getBrand');  
   
	},

  methods: {
    healthIndexPage(){
      debugger
      	let vehicleId = this.$route.params.id;
       this.$router.push({path: '/Healthindex/' + vehicleId});
    } ,
		getvehicleParam() {
	   	let vehicleId = this.$route.params.id;
      console.log(vehicleId)
       
       
        //  let vehicleId = this.Addnewvehicle.CustomerVehicleID ;
        //  console.log(vehicleId);

         this.Addnewvehicle.UserID =  parseInt(localStorage.getItem('userId'));
         console.log(localStorage.getItem('userId'));
			   this.isDisabled = false;
         this.create = false;
         
         this.$store.dispatch('getvehicleview', vehicleId)
         
		},
		viewedit(id){
       console.log(id)
       this.$router.push({path: '/Addnewvehicle/' + id});
        
      
    },

    maintainancelist(id)
    {
       console.log(id)
       this.$router.push({path: '/MaintenanceHistory/' + id});
        
      
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
				//alert(err.response.data.error)
			});
        		
           },
	},
  computed: {
		...mapGetters({
			getvehicleview: "getvehicleview",
      getvehicleedit:"getvehicleedit",
       getBrand:"getBrand",
       getUsage:"getUsage"
		})
	},
	watch: {
		'getvehicleview': {
			deep: true,
			handler(value) {
				this.Addnewvehicle = null;
				this.Addnewvehicle = this.getvehicleview.data;
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addvehicle_detail ul li label {
    color: #656565 !important;
    font-size: 17px;
    width: 203px;
    float: left;
    max-width: 100%;
  }
  
  .addvehicle_detail ul li span {
    color: #333;
    float: left;
    width: 190px;
    max-width: 100%;
    font-family: 'Nunito-Bold';
    padding-left: 23px;
  }
  
  .addvehicle_detail .router-link-active {
    font-family: 'Nunito-Bold';
    color: #0066d0;
    width: 100%;
    position: relative;
  }
  
  .addvehicle_detail strong {
    background: #0066d0 none repeat scroll 0 0;
    border-radius: 5px;
    color: #fff;
    float: right;
    font-size: 15px;
    height: 30px;
    line-height: 26px;
    margin-left: 10px;
    text-align: center;
    width: 80px;
    position: absolute;
  }
  
  .addvehicle_detail {
    position: relative;
  }

  .addvehicle_detail a{font-size:18px;}
  
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }
  
  .add_new_vehicle {
    color: #fff;
    font-size: 16px;
    height: 39px;
    line-height: 11px;
    background: #0066d0;
    padding: 0px 20px;
    min-width: 120px;
  }
  
  .add_vehicle_mg {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
  }
  
  .add_vehicle_mg img {
    border: 2px solid #0066d0;
    border-radius: 80px;
    width: 80px;
    height: 80px;
  }
  
.add_newvehicle form ul {width: 50% !important;}
 .add_newvehicle form ul li {width: 100% !important; }
 .sub_btn button.cancel_btn{
    padding: 11px 10px 33px 10px;
}
 @media only screen and (min-width:320px) and (max-width:906px)
{
.add_newvehicle form ul {width: 100% !important;}
}


.histy_main{ background:transparent; color:#007bff; padding:0px !important;}
</style>
