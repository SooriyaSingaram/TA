<template>
    <section id="Corporate_agreement_detail">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title corpo_agree_heading">
                    <h2>{{ 'AdminFunctions' | translate }}</h2>
                </div>
                
                <div class="col-12 content_section corp_agree_content_section">
              
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="cad_top col-12 d-flex align-items-start p-0">
                            <h4>{{ 'CorporateAgreementDetail' | translate }}</h4>
                         
                            <div class="back_btn_sec  d-flex justify-content-center">
                                <button class="edit_btn" v-on:click="edit()">{{ 'EDIT' | translate }}</button>
                            </div>
                        
                        </div>
                    </div>
    
                    <div class="d-flex flex-wrap vehicle_lsts_sec dashboard_detail_1 driver_vehicle driver_detail">
          
            <form>
              <ul>
                <li><label>{{ 'CompanyName' | translate }}</label><span>{{corporate.CorporateCompanyName}}</span></li>
              
                <li><label>{{ 'Email' | translate }}</label><span>{{corporate.CompanyEmail}}</span></li>
              
                <li><label>{{ 'Address' | translate }}</label><span>{{corporate.CompanyAddress}}</span></li>

              </ul>
               <ul>
              
                <li><label>{{ 'ContactPerson' | translate }}</label><span>{{corporate.ContactPerson}}</span></li>
              
                <li><label>{{ 'CompanyMobile' | translate }}</label><span>{{corporate.CompanyPhone}}</span></li>

              </ul>
            </form>
           
                        
                              <div class="sub_btn btn_div sub_bck_btn">
                                <router-link to="/Corporate_agreement_SA"><button class="bck_btn">{{ 'BACK' | translate }}</button></router-link>
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
	Btn,
	Card,
	Fa
}
from 'mdbvue'
export default {
	name: 'Corporate_agreement_detail',
	components: {
	Row,
	Column,
	Btn,
	Card,
	Fa
	},
	data() {
		return {
			corporate: {}
		}
	},
	created() {
		this.getCorporateParam()
	},
	methods: {
		getCorporateParam() {
			let corporateId = this.$route.params.id;
			       this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getcorporate', corporateId)
         
		},
		edit(){
       this.$router.push({path: '/corporate/' + this.$route.params.id})
    }
	},
	computed: {
		...mapGetters({
			getCorporate: "getCorporate"
		})
	},
	watch: {
		'getCorporate': {
			deep: true,
			handler(value) {
				this.corporate = null
				this.corporate = this.getCorporate.data;
			}
		}
	},
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
    .corp_agree_content_section{ padding-top: 15px}
    .back_btn_cad{background: #3a4959 !important; color: #fff !important;}
    .collision-block-cad{ margin-bottom: 35px;}
    .back_btn_cad_sec{margin-top: 15px;}
    .collision-block_cad p{max-width: 83%;}
    .dashboard_detail_1{padding: 40px 0px 30px 30px !important;}
    .driver_vehicle form ul li { max-width: 440px!important;}
    .driver_detail ul li span { width: 214px!important;}
    .end_button .cance_btn.back_btn{background:#3a4959;}
    .back_btn_sec .back_btn{background: #f39c12 !important; text-transform: initial;width:110px;}
    .back_btn_sec{margin-left: auto;}
    @media only screen and (min-width: 320px) and (max-width: 767px){
    .cad_top{flex-direction: column}
    .back_btn_sec { margin: auto; margin-top: 10px;}
    }

    button.edit_btn {
    background: #0066d0;
    padding: 13px 20px 13px;
    line-height: 11px;
    font-size: 17px;
}


</style>
