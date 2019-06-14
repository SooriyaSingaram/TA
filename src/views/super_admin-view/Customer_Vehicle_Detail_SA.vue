<template>
  <section id="Customer_Vehicle_Detail_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Services</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>Customer Vehicle</h4>
            </div>
    
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
            <form>
              <ul>
               
              
                <li><label>Brand</label><span>{{CustomerVehicleSA.BrandName}}</span></li>

                <li><label>Class</label><span>{{CustomerVehicleSA.ClassName}}</span></li>
               
                <li><label>Usage(KM)</label><span>{{CustomerVehicleSA.UsageName}}</span></li>
               
                
                <li><label>Date of last Technical Mechanical Revision</label><span>{{CustomerVehicleSA.DateLastTechnicalRevision | formatDate(CustomerVehicleSA.DateLastTechnicalRevision)}}</span></li>

              </ul>

              <ul>
               
             

                <li><label>Model</label><span>{{CustomerVehicleSA.ModelName}}</span></li>

                <li><label>Year</label><span>{{CustomerVehicleSA.YearName}}</span></li>
               
                <li><label>Plate</label><span>{{CustomerVehicleSA.PlateNumber}}</span></li>
  
                 <li><label>Expiring Date of SOAT</label><span>{{CustomerVehicleSA.ExpDateSOAT | formatDate(CustomerVehicleSA.ExpDateSOAT)}}</span></li>
               
              
              </ul>
            </form>
           
    <div class="col-12 content_section_Sub_tab p-0 d-flex" >
          
            <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table">
          <table width="100%" class="table table-striped">
            <thead>
              <tr>    
                <th>#</th>
                <th>Description</th>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="SAGetVData in SAGetVDataList">
                <td>{{SAGetVData.CarOwnerServiceId}}</td>
                <td>{{SAGetVData.ServiceName}}</td>
                <td>{{SAGetVData.ServiceDate | formatDate(SAGetVData.ServiceDate)}}</td>
                <td>{{SAGetVData.ServiceAmount}}</td>
               
              </tr>     
               <tr>
               <td class="no_record" style="text-align:center; font-weight:bold;" v-if="this.data == null" colspan="4">No Record Found</td>
               </tr>
            </tbody>
          </table>

        
           </div>
            </div>
            
           
               
</div>

            <div class="sub_btn btn_div">
             <button class="bck_btn" @click="$router.go(-1)">Back</button>
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
    name: 'Customer_Vehicle_Detail_SA',
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
        
        CustomerVehicleSA:{},
        SAGetVData:[]
      }
    },
       created() {
		this.getCustomerVehicleParam();
    this.getServiceVehicleParam();

	},

  	methods: {
		getCustomerVehicleParam() {
			let CustomerVehicleID =  this.$route.params.id;
      //alert(ServicedetailID);
         this.$store.dispatch('CustomerVehicleDetailView',CustomerVehicleID)
		},

   getServiceVehicleParam(){
         	let CustomerVehicleID =  this.$route.params.id;
         this.$store.dispatch('GetVehicleService' , CustomerVehicleID);
   }
      
	
    },

    computed: {
		...mapGetters({
		CustomerVehicleDetailView: "CustomerVehicleDetailView",
    SAGetVDataList:"GetVehicleService"
		})
	},
	watch: {
		'CustomerVehicleDetailView': {
			deep: true,
			handler(value) {
          
				this.CustomerVehicleSA = null
				this.CustomerVehicleSA = this.CustomerVehicleDetailView.data;
         console.log(this.CustomerVehicleSA)
                
			}
		},
    'GetVehicleService': {
			deep: true,
			handler(value) {
          
				this.data = null
				this.data = this.GetVehicleService;
        
                
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

.driver_vehicle form ul li {
  min-height: 60px;
}
@media only screen and (max-width: 1374px) and (min-width: 1200px){
.driver_vehicle form ul li {
    width: 47%;
    margin-right: 3%;  
}
}



.content_section_Sub_tab{
    margin-top:10px;
}

.action-ic button {
    border: 0px;
    background: transparent;
}


 table.table thead th {
    border-top: none;
  }
  
  thead th {
    font-size: 15px;
    padding: 12px;
    text-transform: uppercase;
    background: #0066d0;
    color: #ffffff;
  }
tbody td {
    color: #434343;
    font-size: 16px;
    padding: 15px;
  }
  
  .table-striped {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
  }
  
  .table-striped tbody tr:nth-of-type(2n+1) {
    background-color: #e3ebf3;
  }
  
  .table-striped tbody tr {
    background: #eef6fe none repeat scroll 0 0;
    padding: 10px;
  }
  
  .table td,
  .table th {
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
  
  .table td:last-child,
  .table th:last-child {
    border-right: 0px solid #dee2e6;
  }
  
  .bt-0 {
    border-top: 0!important;
  }
  
  .table-striped tbody tr:last-child table tbody tr:nth-child(odd) {
    background: #eef6fe none repeat scroll 0 0;
  }
  
  .table-striped tbody tr:last-child table tbody tr:nth-child(even) {
    background: #e3ebf3 none repeat scroll 0 0;
  }
  td.action-ic img {
    width: 34px;
    height: 34px;cursor: pointer;
}
td.action-ic {
    padding: 10px 10px!important;text-align: center;
}
.content_section_scroll{overflow-x: auto;}
.content_section_table{width:100%; max-width:600px; margin:0 auto;}
</style>
