<template>
    <section id="Dashboard_detail2_SA">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title dash_detail1">
                    <h2>DASHBOARD</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt vehicle_topic  d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>The Quotes Remaining to be Completed</h4>
                        </div>
                    </div>
    
                      <div class="d-flex flex-wrap vehicle_lsts_sec dashboard_detail_1 driver_vehicle driver_detail">
          
            <form>
              <ul>
                <li><label>Vehicle</label><span>Chevrolet Sail</span></li>
                <li><label>Customer</label><span>Charles Martinez</span></li>  
                <li><label>Details</label><span>I need to repair the front door due to a minor collision</span></li>
                <li><label>Source</label><span>Web</span></li>
                <li><label>Date of Quote</label><span>01/12/2018</span></li>
                <li><label>Value</label><span class="color_update">Update</span></li>
              </ul>
               <ul>
                <li><label>Plate</label><span>CZM 0669</span></li>
                <li><label>Service</label><span>Collision and Paint</span></li>
                <li><label>Standing Reason</label><span>Awaiting Images to quote the service Update</span></li>
                <li><label>Need to Pickup</label><span>No</span></li>
                <li><label>Closing Date</label><span class="color_update">Update</span></li>
                <li><label>Status</label><span>Inprogress</span></li>
              </ul>
            </form>

                        <mdb-col col="12" class="p-0">
                            <div class="sub_btn sub_bck_btn  d-flex justify-content-center">
                                <router-link to=""><button class="cance_btn rlpy_btn">Reply</button></router-link>
                            </div>
                        </mdb-col>

            <!--/vehicleDetail-->
          </div>

                         <div data-v-af801396="" class="d-flex flex-wrap collision_lsts_sec lore-ipsum-sec flex-column"> 
                             <span>Reply Your Message</span> 
                            <textarea class="textarea col-md-6" ng-model="text2" placeholder="Lorem ipsum is a dummy text of content..."></textarea>
                             <div class="gps_imgs_button d-flex flex-row">
                                         <button type="button" class="btn send-btn">Send</button>
                                         <button type="button" class="btn backd2-btn ">Back</button>    
                             </div>  
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
        name: "Dashboard_detail2_SA",
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn
        }
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
}


.for-update p{ color: #007df8 !important; }
.reply-btn .cance_btn{background: #007df8;}
.reply-btn {  margin-top: 30px;}
.lore-ipsum-sec{margin-top: 20px;}
.lore-ipsum-sec .textarea{width:100%; height: 107px; color: #333333;background: #f5f8fa;
                             font-weight: 500; margin-top: 15px; border:1px solid #ccc;}
.lore-ipsum-sec { padding-top: 20px;}
.lore-ipsum-sec span{color:#666666; font-size: 18px;}
.lore-ipsum-sec .send-btn{background: #007df8; padding: 10px 50px; text-transform: initial;}
.lore-ipsum-sec .backd2-btn{background: #3a4959; padding: 10px 50px; text-transform: initial;}
.driver_detail ul li span { width: 214px!important;}
.dashboard_detail_1{padding: 40px 0px 30px 30px !important;}
.driver_vehicle form ul li { max-width: 440px!important;}
.cance_btn.rlpy_btn{background: #007df8; padding: 10px 50px; text-transform: initial;}
.color_update{color:#007df8;}
</style>
