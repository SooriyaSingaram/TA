<template>
    <section id="Dashboard_detail3_SA">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title dash_detail1">
                    <h2>{{ 'DASHBOARD' | translate }}</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt vehicle_topic  d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Proactive Services that you need to Follow</h4>
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
                                                    <label>{{ 'Brand' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{proactive.Brand}}</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Model' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>{{proactive.Model}}</p>
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
                                                    <label>{{ 'Customer' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0"> 
                                                      <p>{{proactive.CustomerName}}</p>                                                        
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block collision-block-ch collision-block-alter">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'EstimatedValue' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                        <p>1,500,000</p>
                                                                        
                                                </mdb-col>
                                            </mdb-row>
                                  
                                        </mdb-col>
                                      
                                    </mdb-row>
                                </mdb-col>
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block dash-observation dash-detail3">
                                                <mdb-col sm="12" col="12" class="p-0">
                                                    <p> {{ 'MaintananceTips' | translate }} <span></span></p>
                                                   <p v-for="data in proactive.ServiceTip">{{data.ServiceChange}}</p>
                                                </mdb-col>
                                                
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>{{ 'Status' | translate }}</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                  
                                                        <div class="sel_fac s-t-class">
                                                        <select class="form-control"    name="MainService"  v-model="proactive.ProactiveStatusId"  >
                   
    <option v-for="main in proactiveStatus" :value="main.ProactiveStatusId">{{main.StatusValue}}</option>

                    </select>
                                                       
                                                        </div>
                                                    
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                    </mdb-row>
                                </mdb-col>
                          
                            </mdb-row>
                        </mdb-col>

                        <mdb-col col="12" class="p-0">
                            <div class="sub_btn reply-btn three-btn-dd3 d-flex justify-content-center">
                                <button class="cance_btn back_btn" @click="proactiveUpdate()">{{ 'UPDATE' | translate }}</button>
                                <router-link to="/ProactiveService_SA"><button class="cance_btn back_btn_dd3">{{ 'BACK' | translate }}</button></router-link>
                            </div>
                        </mdb-col>

                        </div>
   
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn
    } from "mdbvue";
    export default {
        name: "Dashboard_detail3_SA",
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn
        },
    
    data() {
    
    return {
proactive:{},proactiveStatus:[]
    }
    },
      methods: {
      getProactive(){
        var self=this;
        let id =self.$route.params.id;
        return  self.$store.dispatch("getData",'/SuperAdmin/ViewProactive?ProactiveId='+id).then(function(response){
 
				self.proactive = response;
       
        })
      },
      getStatus(){
           var self=this;
        let id =self.$route.params.id;
        return  self.$store.dispatch("getData",'/SuperAdmin/ProactiveStatus').then(function(response){
 
				self.proactiveStatus = response;
       
        })
      },
      proactiveUpdate(){
          debugger
           var self=this;
        let id =self.$route.params.id;
        let proactiveData={url:'/SuperAdmin/ProactiveStatusUpdate',ProactiveId:id,ProactiveStatusId:this.proactive.ProactiveStatusId};

        return  self.$store.dispatch("updateData",proactiveData).then(function(response){
 self.$router.push({
					name: 'ProactiveService_SA'
				})
				
       
        }).catch((err)=>{
            this.$message(err.response.data.error)
        })
      }
      
  },
  
  created() {

     this.getProactive()
     this.getStatus()
      
    }
    }
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
    .custom-file{width: 272px;}
    .custom-file-label{line-height: 20px;}
    .custom-file-label::after{padding: .375rem 1.75rem;
    line-height: 1.2;
    color: #ffffff;
    background-color: #0066d0;
    border-left: 1px solid #0066d0;
    border-radius: .25rem;}
    .sub_btn {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    /*say*/
    .dash_detail1{background-color: #0066d0; }
    .dash_detail1 h2{color: #fff; }
    .gps_imgs_button{padding-top: 17px;}
    .dash-observation p{padding-right: 25px;}
    .collision-block-alter{ margin-bottom: 40px;}
    .sub_bck_btn{margin-top: 31px;}
    @media only screen and (min-width: 320px) and (max-width: 767px) {
.dash-observation p{padding-right: 0px;}
.vehicle_topic h4{ text-align: center;font-size: 20px;}
.lore-ipsum-sec .send-btn{background: #007df8; padding: 10px 35px !important; text-transform: initial;}
.lore-ipsum-sec .backd2-btn{background: #3a4959; padding: 10px 35px !important; text-transform: initial;}
.three-btn-dd3 { display: inline-block !important; text-align: center; width:auto;}
.sub_btn button {    width: auto !important;}
.three-btn-dd3 .cance_btn {
    background: #007df8;
    padding: 9px 46px !important;
    width: auto !important;
    font-size: 14px !important;
    margin-top: 10px;
}
.three-btn-dd3{margin-top: 20px;}

}
 @media only screen and (min-width: 768px) and (max-width: 991px) {
.s-t-class select.form-control:not([size]):not([multiple]) { width: 100% !important;}
 }


.for-update p{ color: #007df8 !important; }
.reply-btn .cance_btn{background: #007df8; margin-right:12px;}
.reply-btn {  margin-top: 30px;}
.lore-ipsum-sec{margin-top: 20px;}
.lore-ipsum-sec .textarea{width:100%; height: 107px; color: #333333;background: #f5f8fa;
                             font-weight: 500; margin-top: 15px;}
.lore-ipsum-sec { padding-top: 20px;}
.lore-ipsum-sec span{color:#666666; font-size: 18px;}
.lore-ipsum-sec .send-btn{background: #007df8; padding: 10px 50px; text-transform: initial;}
.lore-ipsum-sec .backd2-btn{background: #3a4959; padding: 10px 50px; text-transform: initial;}

.dash-detail3 p{ padding-top:20px;}
.dash-detail3{background: #eef6fe; padding: 25px; padding-top: 0px; padding-right: 0px; max-width: 92%;
              width: 100%;}
.dash-detail3 p:first-child{ color: #666666 !important;}
.dash-detail3 span{color:#e74c3c; padding-left: 30px;}              
.s-t-class select.form-control:not([size]):not([multiple]) { height: calc(2.10rem + 2px);color: #333333;
                                                             background: #f3f6fb;}     
.back_btn_dd3{background:#3a4959 !important;}
.sm_btn{background:#2ecc71 !important;width: auto;}
</style>
