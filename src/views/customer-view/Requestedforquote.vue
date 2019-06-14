<template>
    <section id="Requestedforquote">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title">
                    <h2>{{ 'SERVICES' | translate }}</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>{{ 'RequestedForQuote' | translate }}</h4>
                        </div>
                    </div>
    
                    <div class="d-flex flex-wrap collision_lsts_sec">
                        <mdb-col col="12" class="p-0">
                            <mdb-row class="m-0">
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Service' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{requestedquoteDetail.MainServicesName}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Source' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{requestedquoteDetail.SourceName}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                    </mdb-row>
                                </mdb-col>
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Vehicle' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                   <p>{{requestedquoteDetail.CustomerVehicleName}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'NeedtoPickup' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{requestedquoteDetail.IsNeedToPickup===true?"Yes":"No"}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Plate' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                <p>{{requestedquoteDetail.PlateNumber}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                         <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Details' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{requestedquoteDetail.Details}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Status' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{requestedquoteDetail.Status}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                       
    

                                    </mdb-row>
                                </mdb-col>
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="7" col="12" class="p-0">
                                            <mdb-row class="collision-block upload_phot">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'UploadedPhotos' | translate }}/<br/> {{ 'Videos' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <ul class="upload-photo" v-for="photodata in photolist">
                                                        <li v-for="PhotoImage in photodata.ImageUrl">
                                                            <img v-bind:src="PhotoImage"/>
                                                        </li>
                                                      <!--<li>
                                                            <img src="../../assets/images/pick-up-im2.png" />
                                                        </li>
                                                        <li class="pickup-img">
                                                            <img src="../../assets/images/pick-up-im3.png" />
                                                        </li>-->
                                                    </ul>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
    
                                        </mdb-col>
    
                                    </mdb-row>
                                </mdb-col>
                            </mdb-row>
                        </mdb-col>
                       
                    </div>


                    <div class="d-flex flex-wrap collision_lsts_sec mt-3 pt-0">
                        <mdb-col col="12" class="p-0">
                            <mdb-row class="m-0">
                                <mdb-col col="12" class="p-0">
                                    
                                 <div class="detail-desc">
                                     <h2>{{ 'EstimatedQuote' | translate }}</h2>
                                     <p>
           {{ 'YourServiceValueAmountIs' | translate }} <span>{{requestedquoteDetail.CollisionAndPaintAmount}}</span></p>
           </div>
                                </mdb-col>
                            
                            </mdb-row>
                        </mdb-col>
                        <mdb-col col="12" class="p-0">
                            <div class="sub_btn d-flex justify-content-center">
                               <button class="add_vehicle" @click="scheduleNow()" v-if="requestedquoteDetail.CollisionAndPaintAmount">{{ 'scheduleNow' | translate }} !</button>
                                <router-link to="/RequestedquoteList"><button class="cancel_btn">{{ 'BACK' | translate }}</button></router-link>
                            </div>
                        </mdb-col>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    import {
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn
    } from "mdbvue";
    export default {
        name: "Requestedforquote",
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn
        },
         data() {
		return {
			requestedquoteDetail: {},
            photodata:[]
		}
	},
    	created() {
		this.getRQdetailParam();
    
	},
    	methods: {
            scheduleNow(){
                var self=this;
                    let serviceData ={
                     ServiceList: [{
      "MainServiceId": self.requestedquoteDetail.MainServicesID,
      "SubserviceId":self.requestedquoteDetail.SubServicesId,
      "CollisionPaintId": self.requestedquoteDetail.CollisionAndPaintId
    }],
                     "CustomerVehicleID": self.requestedquoteDetail.CustomerVehicleID,
                   ServiceAmount:self.requestedquoteDetail.CollisionAndPaintAmount,
                   ServicesTypeid:2,
                   CityId:self.requestedquoteDetail.CityId,
          ZoneId:self.requestedquoteDetail.ZoneId
                   }
         self.$router.replace({name: 'GetQuote', params:{  quoteFinaldata:serviceData  }});
        
			

           },getRQdetailParam() {
			

      let CollisionAndPaintId = this.$route.params.id;
    // alert(CollisionAndPaintId)
			       
                   this.$store.dispatch('getrequestedquoteDetailView', CollisionAndPaintId)
         
		}
	
  
 
	},

     computed: {
		...mapGetters({
			getrequestedquoteDetailView: "getrequestedquoteDetailView",
            photolist:"getrequestedquoteDetailView"
		})
	},

    	watch: {
		'getrequestedquoteDetailView': {
			deep: true,
			handler(value) {
				this.requestedquoteDetail = null
				this.requestedquoteDetail = this.getrequestedquoteDetailView.data;
                this.photodata = null
				this.photodata = this.getrequestedquoteDetailView.data;
			}
		}
	},
  	
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .collision_lsts_sec {
        background: #fff;
        padding: 40px 30px 30px 30px;
    }
    
    .collision-block label {
        color: #666666 !important;
        font-size: 17px;
        font-family: 'Nunito-Medium';
        margin: 0;
    }
    
    .collision-block p {
        color: #37383e !important;
        font-size: 17px;
        font-family: 'Nunito-Bold';
        margin: 0;
    }
    
    .collision-block input,
    .collision-block select {
        background: #f3f6fb;
        color: #36383e;
        font-size: 17px;
    }
    
    .collision-block select {
        width: 232px;
    }
    
    .collision-block textarea {
        background: #f3f6fb none repeat scroll 0 0;
        border: 1px solid #ced4da;
        border-radius: 5px;
        height: 128px;
        width: 265px;
        padding: 10px;
        text-align: left;
        line-height: 25px;
        white-space: normal;
    }
    
    .collision-block .custom-control-label::after,
    .collision-block .custom-control-label::before {
        top: 8px;
    }
    
    .collision-block .custom-control {
        display: inline-block;
        margin-right: 25px;
    }
    
    .collision-block {
        margin: 0;
        margin-bottom: 40px;
    }
    
    .collision-block-ch {
        margin: 0;
        margin-bottom: 60px;
    }
    
    .custom-file {
        width: 272px;
    }
    
    .custom-file-label {
        line-height: 20px;
    }
    
    .custom-file-label::after {
        padding: .375rem 1.75rem;
        line-height: 1.2;
        color: #ffffff;
        background-color: #0066d0;
        border-left: 1px solid #0066d0;
        border-radius: .25rem;
    }
    .detail-desc p {
    color: #37383e;
    font-size: 17px;
    font-family: 'Nunito-Regular';
    margin-top: 0px;
}
 .detail-desc h2{
      font-size: 20px;
    margin-top: 20px;
    margin-bottom:15px;
    color: #292b30;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;
}
.detail-desc p span{
    color: #0066d0;
    font-weight:bold;
}
    .upload-photo {
        padding: 0;
        margin: 0;
    }
    
    .upload-photo li {
        position: relative;
        height: 100px;
        width: 100px;
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 10px;
        list-style: none;
    }
    
    .upload-photo li img {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-width: 100%;
    }
    
    .upload-photo li:last-child {
        margin-right: 0;
    }
    
    .sub_btn {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .sub_btn button, .sub_btn btn{width: 200px;}

    .upload-photo li:first-child {
    margin-left: -28px;
}
.upload_phot{margin-bottom:10px !important;}
</style>
