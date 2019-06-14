<template>
    <section id="Customer_service_detail">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title corpo_agree_heading">
                    <h2>Customers</h2>
                </div>
                
                <div class="col-12 content_section corp_agree_content_section">
              
                    <div class="vehicle_tlt vehicle_csd d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Service Detail</h4>
                        </div>
                    </div>
    
                        <div class="d-flex flex-wrap csd_page vehicle_lsts_sec dashboard_detail_1 driver_vehicle driver_detail">
          
            <form>
              <ul>
                <li><label>Vehicle</label><span>Renault Sandero - BWE 145</span></li>
              
                <li><label>Specialist</label><span>Hector Vargas</span></li>
              
                <li><label>Delivered Date</label><span class="Date_color">26 Nov 2018</span></li>

              </ul>
               <ul>
              
                <li><label>Customer</label><span>Vicente Fernandez</span></li>
              
                <li><label>Last Status</label><span class="complete_color">Completed</span></li>

              </ul>
            </form>

                        <mdb-col col="12" class="p-0">
                            <div class="sub_btn sub_bck_btn  d-flex justify-content-center">
                                <router-link to=""><button class="cance_btn rlpy_btn">Reply</button></router-link>
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
        name: "Customer_service_detail",
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
    
   
    .collision-block .custom-control {
        display: inline-block;
        margin-right: 25px;
    }
    
    .collision-block {
        margin: 0;
        margin-bottom: 40px;
    }
    
   
   
    .sub_btn {
      
        margin-bottom: 20px;
    }
    /*say*/
    .corpo_agree_heading { background: #0052b1; width: 100%;}
    .corpo_agree_heading h2 { color: #fff; font-size: 18px; }
    .corp_agree_content_section{ padding: 15px 30px !important;}
    .cance_btn.rlpy_btn{background: #3a4959 !important; color: #fff !important;}
    .collision-block-cad{ margin-bottom: 35px;}
    .back_btn_cad_sec{margin-top: 15px;}
    .collision-block_cad p{max-width: 83%;}
    .vehicle_csd{ margin-bottom: 12px;}
    .csd-text p{color:#007df8 !important;}
    .number-csd p{color:#2ecc71 !important;}
    .driver_detail ul li span { width: 214px!important;}
.dashboard_detail_1{padding: 40px 0px 30px 30px !important;}
.driver_vehicle form ul li { max-width: 440px!important;}
.csd_page .Date_color{color:#2ecc71;}
.csd_page .complete_color{color:#007df8;}

</style>
