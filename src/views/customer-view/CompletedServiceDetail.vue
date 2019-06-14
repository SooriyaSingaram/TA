<template>
  <section id="CompletedServiceDetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'SERVICES' | translate }}</h2>
        </div>

        <div class="col-12 content_section">
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>{{ 'CompletedService' | translate }}</h4>
            </div>
          </div>

          <div
            class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle addvehicle_detail completed_detail"
          >
            <!--vehicleDetail-->
            <div class="completed_service_tlt">
              <p>{{ 'VehicleInformation' | translate }}</p>
            </div>
            <form>
              <ul>
                <li>
                  <label>{{ 'Brand' | translate }}</label>
                  <span>{{data.BrandName}}</span>
                </li>

                <li>
                  <label>{{ 'Class' | translate }}</label>
                  <span>{{data.ClassName}}</span>
                </li>

                <li>
                  <label>{{ 'Usage' | translate }}</label>
                  <span>{{data.UsageKM}}</span>
                </li>

                <li>
                  <label>{{ 'DateOfLastTMR' | translate }}</label>
                  <span>{{data.TechnicalMechanicalrevisiondate | formatDate(data.TechnicalMechanicalrevisiondate)}}</span>
                </li>
<li>
                  <label>{{ 'ServiceType' | translate }}</label>
                  <span>{{data.ServiceType}}</span>
                </li>
                <li>
                  <label>{{ 'PaymentType' | translate }}</label>
                  <span>{{data.PaymentType}}</span>
                </li>

                <li>
                  <label>{{ 'NextSuggesedMaintenance' | translate }}</label>
                  <span>{{data.NextSuggesedMaintenance}}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <label>{{ 'Model' | translate }}Model</label>
                  <span>{{data.ModelName}}</span>
                </li>

                <li>
                  <label>{{ 'Year' | translate }}</label>
                  <span>{{data.YearName}}</span>
                </li>

                <li>
                  <label>{{ 'Plate' | translate }}</label>
                  <span>{{data.Plate}}</span>
                </li>

                <li>
                  <label>{{ 'ExpiringDateForSOAT' | translate }}</label>
                  <span>{{data.SOATExpirationDate | formatDate(data.SOATExpirationDate)}}</span>
                </li>

                <li>
                  <label>{{ 'Amount' | translate }}</label>
                  <span>{{data.ServiceAmount}}</span>
                </li>

                <li>
                  <label>{{ 'TallerOnlineHealthIndex' | translate }}</label>
                  <span>
                    {{data.TallerOnlineHealthIndex?data.TallerOnlineHealthIndex.substring(0,4) : '-'}}
                    
                     <a> <strong @click="healthIndex()">{{ 'VIEW' | translate }}</strong></a>
                   
                  </span>
                </li>
              </ul>
            </form>
            <!-- <router-link to="/MaintenanceHistory" style="font-size:18px;">History of maintenance</router-link> -->

            <!--/vehicleDetail-->
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <div class="completed_service_tlt">
              <p>{{ 'ServiceInformation' | translate }}</p>
            </div>
            <mdb-col col="12" class="p-0">
              <mdb-row class="m-0">
                <mdb-col sm="6" col="12" class="p-0">
                  <label class="detail-heading">
                    {{ 'WorkshopName' | translate }}
                    <span>{{data.WorkshopName}}</span>
                  </label>
                </mdb-col>
                <mdb-col sm="6" col="12" class="p-0">
                  <label class="detail-heading">
                    {{ 'SpecialistName' | translate }}
                    <span>{{data.SpecialistName}}</span>
                  </label>
                </mdb-col>
              </mdb-row>
            </mdb-col>

            <mdb-col col="12" class="p-0">
              <mdb-row class="m-0">
                <mdb-col sm="6" col="12" class="p-0 padding-rt">
                  <div class="detail-desc">
                    <p>
                     {{ 'Belowthedetailsofthe' | translate }}   {{data.ExactUsage?data.ExactUsage:data.UsageKM}}KM
                      <span>{{data.BrandName}}</span>{{ 'vehicleIn' | translate }} 
                      <span>{{data.TechnicalMechanicalrevisiondate | formatDate(data.TechnicalMechanicalrevisiondate)}}</span>
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
                        <td>{{data.PartLabour}}</td>
                        <td>Yes</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </mdb-col>
                <mdb-row class="m-0">
                     <h3 class="pick_Img">{{ 'Specialist' | translate }}  {{ 'PickupImages' | translate }}</h3>
                      <mdb-col col="12" class="p-0">
                       
                        
  <ul class="pickup-img">
               <li v-for="Image in data.SpecialistPickUpImageUrl">
                 <img v-bind:src="Image"/>
               </li>
                <li class="no_record" v-if="data.SpecialistPickUpImageUrl === null">No Record Found</li>
               </ul>
                      </mdb-col>
                      <mdb-col col="12" class="p-0">
                        <h3 class="pick_Img">{{ 'Specialist' | translate }} {{ 'DropImages' | translate }}</h3>
                
               <ul class="pickup-img">
               <li v-for="Image in data.SpecialistDropImageUrl">
                 <img v-bind:src="Image"/>
               </li>
                <li class="no_record" v-if="data.SpecialistDropImageUrl === null">No Record Found</li>
               </ul> </mdb-col> </mdb-row>
               
                <mdb-col sm="6" col="12" class="p-0" v-if="data.ServiceType == 'Driver'" >
                  <mdb-col col="12" class="p-0">
                    <mdb-row class="m-0">
                    <h3 class="pick_Img">{{ 'Driver' | translate }}  {{ 'PickupImages' | translate }}</h3>
                     
                      <mdb-col col="12" class="p-0" >
                       
                <ul class="pickup-img">
               <li v-for="Image in data.DriverPickUpImageUrl">
                 <img v-bind:src="Image"/>
               </li>
                <li class="no_record" v-if="data.DriverPickUpImageUrl === null">No Record Found</li>
               </ul>
                      </mdb-col>
                      <mdb-col col="12" class="p-0" >
                        <h3 class="pick_Img">{{ 'Driver' | translate }} {{ 'DropImages' | translate }}</h3>
                
               <ul class="pickup-img">

               <li v-for="Image in data.DriverDropImageUrl">
                 <img v-bind:src="Image"/>
               </li>
                <li class="no_record" v-if="data.DriverDropImageUrl === null">No Record Found</li>
               </ul>
                         
                      </mdb-col>
                    </mdb-row>
                      
                    
                  </mdb-col>
                </mdb-col>
              </mdb-row>
            </mdb-col>

            <div col="12" class="p-0" v-if="!data.IsRating">
              <div class="completed_service_tlt">
                <p>{{ 'RateThisService' | translate }}</p>
              </div>
<form>
              <div class="d-flex flex-row rate_main_sec">

                <div class="d-flex flex-column rate_lst">
                  <label>{{ 'Quality' | translate }}</label>
                  <div class="rating">
                    <!--<img src="../../assets/images/star_rating.png">-->
                       <star-rating v-bind:increment="1"
                                                v-bind:max-rating="5"
                                                inactive-color="#c4c4c4"
                                                active-color="#2a7af4"
                                                v-bind:star-size="20"
                                                v-model="RatingCarOwner.Quality">
                                    </star-rating>
                  </div>
                </div>


                <div class="d-flex flex-column rate_lst">
                  <label>{{ 'Attention' | translate }}</label>
                  <div class="rating">
                    <!--<img src="../../assets/images/star_rating.png">-->
                    <star-rating v-bind:increment="1"
                                                v-bind:max-rating="5"
                                                inactive-color="#c4c4c4"
                                                active-color="#2a7af4"
                                                v-bind:star-size="20"
                                                v-model="RatingCarOwner.Attention">
                                    </star-rating>
                  </div>
                </div>


                <div class="d-flex flex-column rate_lst">
                  <label>{{ 'Cleaning' | translate }}</label>
                  <div class="rating">
                    <!--<img src="../../assets/images/star_rating.png">-->
                     <star-rating v-bind:increment="1"
                                                v-bind:max-rating="5"
                                                inactive-color="#c4c4c4"
                                                active-color="#2a7af4"
                                                v-bind:star-size="20"
                                                v-model="RatingCarOwner.Cleaning">
                                    </star-rating>
                  </div>
                </div>

              </div>

              <div class="sub_btn back_btn">
               
                <button class="detail-btn valid-btn pp_btn" v-on:click="addRating()">{{ 'Rate' | translate }}</button>
                <button class="cancel_btn">{{ 'BACK' | translate }}</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
import { mapGetters } from "vuex";
export default {
  name: "CompletedServiceDetail",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  data() {
    return {
        RatingCarOwner:{},
    }
  },

  

  created() {
    let completedlistId = this.$route.params.id;
    this.$store.dispatch("getCompletedListDetail", completedlistId);
    this.getData();
    
  },

  computed: {
    ...mapGetters({
      data: "getCompletedServiceView"
    })
  },

  methods: {
      
    getData() {
      console.log(this.data);
      debugger
    },

    healthIndex(){
      this.$router.push({path: '/Healthindex/' + this.data.VehicleId});

    },

    	addRating() {        
        
        this.$validator.validateAll().then((result) => {
            if (result) {
            // eslint-disable-next-line
            var self = this;
             this.RatingCarOwner.CarOwnerServiceId =  this.$route.params.id;
             let userid =Number(JSON.parse(localStorage.getItem('userId')))  ;
             this.RatingCarOwner.CreatedBy = userid;
          
           this.RatingCarOwner.url= '/CarOwner/SubmitRating';
			return this.$store.dispatch('updateData', this.RatingCarOwner).then((response) => {
				//self.$message(response.data.Message)
				// self.$router.push({
				// 	name: 'Corporate_agreement_SA'
				// })
        this.data.IsRating = true;
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				//self.$message(err.response.data.error)
			});
            }

           // alert('Correct them errors!');
        });
		}

  },

  
  watch: {
    getCompletedServiceView: {
      deep: true,
      handler(value) {
        this.data = null;
        this.data = this.getCompletedServiceView.data;
       
        console.log(this.data);
      }
    },
    	
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed_detail {
  margin-bottom: 30px;
}
.completed_service_tlt p {
  font-size: 20px;
  font-family: "Nunito-Bold";
  color: #363b3f;
  margin-bottom: 1.4rem;
}
table tbody tr:nth-of-type(odd) {
  background-color: #f7f7f7;
}
table tr th {
  color: #37383e;
  font-size: 17px;
  font-family: "Nunito-Medium";
}
.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 1px;
}
table tr td {
  color: #37383e;
  font-size: 17px;
  font-family: "Nunito-Regular";
}
table.table th,
table.table td {
  padding-top: 7px;
  padding-bottom: 7px;
}
.detail-heading {
  color: #666666;
  font-size: 20px;
  font-family: "Nunito-Medium";
}
.detail-heading span {
  color: #0066d0;
  padding-left: 60px;
}
.detail-desc p {
  color: #37383e;
  font-size: 17px;
  font-family: "Nunito-Regular";
  margin-top: 20px;
  margin-bottom: 30px;
}
.detail-desc p span {
  color: #0066d0;
}
.pickup-heading {
  color: #333333;
  font-size: 16px;
  font-family: "Nunito-Medium";
  text-align: left;
  margin-top: 20px;
  margin-bottom: 0;
}
.pickup-img {
  padding: 0;
  margin: 0;
}
.pickup-img li {
  position: relative;
  height: 114px;
  width: 143px;
  display: inline-block;
  margin-right: 20px;
  margin-top: 20px;
  list-style: none;
}
.pickup-img li img {
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-width: 100%;
}
.pickup-img li:last-child {
  margin-right: 0;
}
.padding-rt {
  padding-right: 25px !important;
}

.addvehicle_detail ul li label {
  color: #666666 !important;
  font-size: 17px;
  width: 203px;
  float: left;
  max-width: 100%;
}

.addvehicle_detail ul li span {
  font-size: 17px;
  color: #333;
  float: left;
  width: 190px;
  max-width: 100%;
  font-family: "Nunito-Bold";
  padding-left: 13px;
}

.addvehicle_detail .router-link-active {
  font-family: "Nunito-Bold";
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

.sub_btn.back_btn {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 35px 0 11px;
  width: 100%;
}
.pick_Img{
  margin-bottom: 0;
    margin-top: 2%;
    color: #3d4247;
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
.sub_btn.back_btn {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 0 11px;
  width: 100%;
}

.pp_btn {
  width: 150px;
}
.rate_main_sec {
  margin-bottom: 30px;
  width: 100%;
}
.rate_lst .rating img {
  max-width: 130px;
  width: 100%;
}
.rate_lst {
  max-width: 100%;
  margin-right: 10px;
  width: 170px;
}
.rate_lst label {
  color: #0066d0;
  font-size: 18px;
}

.add_newvehicle form ul {
  width: 50% !important;
}
.add_newvehicle form ul li {
  width: 100% !important;
}
@media only screen and (min-width: 320px) and (max-width: 906px) {
  .add_newvehicle form ul {
    width: 100% !important;
  }
}

.no_record{
  font-weight:bold;
}
.cancel_btn{margin-left:10px;}
</style>
