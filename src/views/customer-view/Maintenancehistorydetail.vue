<template>
  <section id="Maintenancehistorydetail">
  <div class="container-fluid">
      <div class="row">

      <div class="col-12 main-title">
        <h2>{{ 'MyVehicles' | translate }}</h2>
      </div>

      <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
          <div class="col-12 d-flex flex-column align-items-start p-0">
          <h4>{{ 'MaintenanceHistory' | translate }}</h4>
          </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
    <mdb-col sm="6" col="12" class="p-0">
       <label class="detail-heading">{{ 'WorkshopName' | translate }} <span>{{HistoryDetailView.WorkshopName}}</span></label>
    </mdb-col>
<mdb-col sm="6" col="12" class="p-0">
       <label class="detail-heading">{{ 'SpecialistName' | translate }} <span>{{HistoryDetailView.SpecialistName}}</span></label>
    </mdb-col>
     </mdb-row>
   </mdb-col>

   <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
    <mdb-col sm="6" col="12" class="p-0 padding-rt">
        <div class="detail-desc">
         <p>
           Below the details of the <span style="text-transform:capitalize;">{{HistoryDetailView.ServiceName}} </span>Maintance performed 
to your <span>{{HistoryDetailView.BrandName}} {{HistoryDetailView.ModelName}}</span> vehicle in <span>{{HistoryDetailView.YearName}}</span>
           </p>
         </div>

          <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Service/Spare Part</th>
                        <th>Included</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{HistoryDetailView.PartLabour?HistoryDetailView.PartLabour:'-'}}</td>
                        <td>{{HistoryDetailView.PartLabour?'Yes':"-"}}</td>
                      </tr>
                      
                    </tbody>
                  </table>
    </mdb-col>

<mdb-col sm="6" col="12" class="p-0">
       <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
    <mdb-col col="12" class="p-0">
       <h3 class="pickup-heading">Pickup Images</h3>
      <!-- <ul class="pickup-img">
       <li>
        <img src="../../assets/images/pick-up-im1.png"/>
         </li>
         <li>
       <img src="../../assets/images/pick-up-im2.png"/>
         </li>
         <li class="pickup-img">
        <img src="../../assets/images/pick-up-im3.png"/>
        </li>
        </ul>-->
        <ul class="pickup-img">
               <li v-for="Image in HistoryDetailView.DriverPickUpImageUrl">
                 <img v-bind:src="Image"/>
               </li>
                <li class="no_record" v-if="HistoryDetailView.DriverPickUpImageUrl === null">No Record Found</li>
               </ul>
    </mdb-col>
<mdb-col col="12" class="p-0">
      <h3 class="pickup-heading">Drop Images</h3>
      <!-- <ul class="pickup-img">
       <li>
        <img src="../../assets/images/pick-up-im4.png"/>
         </li>
         <li>
       <img src="../../assets/images/pick-up-im5.png"/>
         </li>
         <li class="pickup-img">
        <img src="../../assets/images/pick-up-im6.png"/>
        </li>
        </ul>-->
             <ul class="pickup-img">
               <li v-for="Image in HistoryDetailView.DriverPickUpImageUrl">
                 <img v-bind:src="Image"/>
               </li>
                <li class="no_record" v-if="HistoryDetailView.DriverPickUpImageUrl === null">No Record Found</li>
               </ul>
                      
    </mdb-col>
     </mdb-row>
   </mdb-col>  
    </mdb-col>
     </mdb-row>
   </mdb-col>
   <mdb-col col="12" class="p-0">
<div class="col-12 text-center">
              <button class="back-btn" @click="$router.go(-1)">{{ 'BACK' | translate }}</button>
        </div>
        </mdb-col>
         </div>

         
      </div>
      </div>
  </div>
  </section> 
</template>

<script>
import {mapGetters,mapActions}from "vuex";
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "Maintenancehistorydetail",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  },
   data() {
      return {
        	HistoryDetailView: {}
      }
    },
      created() {
		this.getHistoryDetailParam()

	},
    methods: {    
		getHistoryDetailParam() {
	   	let vehicleId = this.$route.params.id;
      console.log(vehicleId)
         this.$store.dispatch('gethistoryview', vehicleId)
         
		},

    
	},
   computed: {
		...mapGetters({
			gethistoryview: "gethistoryview"
		})
	},
  watch: {
		'gethistoryview': {
			deep: true,
			handler(value) {
				this.HistoryDetailView = null;
				this.HistoryDetailView = this.gethistoryview.data;
			}
		}
  
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table tbody tr:nth-of-type(odd) {
    background-color: #f7f7f7;
}
table tr th
{
  color: #37383e; font-size: 17px;font-family: 'Nunito-Medium';
}
.table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 1px;
}
table tr td
{
color: #37383e; font-size: 17px;font-family: 'Nunito-Regular';
}
table.table th, table.table td {
    padding-top: 7px;
    padding-bottom: 7px;
}
.detail-heading{color: #666666; font-size: 20px;font-family: 'Nunito-Medium';}
.detail-heading span{color:#0066d0;padding-left: 60px;}
.detail-desc p{color: #37383e; font-size: 17px;font-family: 'Nunito-Regular';margin-top: 20px;
    margin-bottom: 30px;}
.detail-desc p span{color:#0066d0;}
.pickup-heading{color: #333333; font-size: 16px;font-family: 'Nunito-Medium';text-align: left;margin-top: 20px;margin-bottom: 0;}
.pickup-img{padding: 0;margin: 0;}
.pickup-img li{position: relative;height: 114px;width: 143px;display: inline-block;margin-right: 20px;margin-top: 20px;list-style:none;}
.pickup-img li img{position: absolute;height: 100%;width: 100%;max-width: 100%;max-width: 100%;}
.pickup-img li:last-child{margin-right: 0;}
.padding-rt{padding-right:25px!important;}
.back-btn{
    padding: 10px 60px;
    background: #cacaca;
    color: #212121;
    border: none;
    border-radius:4px; margin-top: 40px;margin-bottom: 20px;
}
.no_record{
  font-weight:bold;
}
</style>
