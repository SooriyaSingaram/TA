<template>
    <section id="Dashboard_detail1_SA">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title dash_detail1">
                    <h2>DASHBOARD</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt vehicle_topic  d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Service of Technical Mechanical Revision Scheduled</h4>
                        </div>
                    </div>
    
                    <div class="d-flex flex-wrap vehicle_lsts_sec dashboard_detail_1 driver_vehicle driver_detail">
          
            <form>
              <ul>
                <li><label>Vehicle</label><span>Renault Sandero - BWE 145</span></li>
              
                <li><label>Especialist</label><span>Hector Vargas</span></li>
              
                <li class="obser_sec"><label>Observations</label><span>The Vehicle is under maintainance. No Changes.</span></li>

              </ul>
               <ul>
              
                <li><label>Customer</label><span>Vicente Fernandez</span></li>
              
                <li><label>Last Status</label><span>Vehicle in the Workshop</span></li>
              
                 <div class="gps_imgs_button">
                      <button type="button" class="btn gps-btn">See GPS</button>
                      <button type="button" class="btn imgs-btn">See Images</button>    
                 </div>

                <li class="estimate"><label>Estimation Delivery Schedule</label><span>On Time October 16, 2018 </span></li>
              

              </ul>
            </form>
           
                         <mdb-col col="12" class="p-0">
                            <div class="sub_btn sub_bck_btn  d-flex justify-content-center">
                                <router-link to=""><button class="cance_btn back_btn">Back</button></router-link>
                            </div>
                        </mdb-col>
            <!--/vehicleDetail-->
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
        name: "Dashboard_detail1_SA",
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
    .gps-btn{background: #2ecc71;padding:10px 37px;  text-transform: initial;}
    .imgs-btn{background: #f39c12; text-transform: initial;}
    .gps_imgs_button{padding-top: 17px;}
    .dash-observation p{padding-right: 25px;}
    .collision-block-alter{ margin-bottom: 40px;}
    .back_btn{background:#3a4959;}
    .sub_bck_btn{margin-top: 31px;}
    .dashboard_detail_1{padding: 40px 0px 30px 30px !important;}
    .driver_vehicle form ul li { max-width: 440px!important;}
    .driver_detail ul li span { width: 214px!important;}
    .dashboard_detail_1 .obser_sec{padding-top: 77px!important;}
    .dashboard_detail_1 .estimate{padding-top: 19px!important;}
    @media only screen and (min-width: 320px) and (max-width: 767px) {
    .imgs-btn {
    background: #f39c12;
    text-transform: initial;
    padding: 11px 25px;
}
.gps_imgs_button {
       flex-direction: column
}
.dash-observation p{padding-right: 0px;}
.vehicle_topic h4{ text-align: center;font-size: 20px;}
.dashboard_detail_1 .obser_sec{ padding-top: initial!important;}
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
.gps_imgs_button .btn{padding: 10px 20px; font-size: 10px;}
}
</style>
