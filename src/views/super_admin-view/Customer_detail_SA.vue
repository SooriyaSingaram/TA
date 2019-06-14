<template>
  <section id="Customer_detail_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'Customer' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start p-0">
              <h4>{{ 'CustomerName' | translate }}</h4>
              </div>
               <div class="col-6 d-flex flex-column align-items-end">
               <button class="cance_btn back_btn edit_btn" v-on:click="edit()">{{ 'EDIT' | translate }}</button>
             </div>
            </div>
            
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
           
            <form>
              <ul>
                <li><label>{{ 'CustomerName' | translate }}</label><span> {{customer.UserName}}</span></li>
              
                <li><label>{{ 'CorporateAgreement' | translate }}</label><span>{{customer.CorporateAgreementId}}</span></li>
              
                <li><label>{{ 'Email' | translate }}</label><span>{{customer.EmailAddress}}</span></li>
               
                
              
               
              </ul>

                <ul>
               
                <li><label>{{ 'Address' | translate }}</label><span></span> {{customer.Address}}</li>
              
                <li><label> {{ 'PhoneNumber' | translate }}</label><span>{{customer.PhoneNumber}}</span></li>
                
             
               
              </ul>
              
            </form>
          
                            <div class="sub_btn btn_div sub_bck_btn">
                                <router-link to="/Customer_SA"><button class="bck_btn">{{ 'BACK' | translate }}</button></router-link>
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
    name: 'Customer_detail_SA',
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
			customer: {}
		}
	},
  	created() {
		this.getCustomerParam()
	},

  	methods: {
		getCustomerParam() {
			let corporateId = this.$route.params.id;
			       this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getcustomer', corporateId)
         
		},
		edit(){
       this.$router.push({path: '/customer/' + this.$route.params.id})
    }
    },

    computed: {
		...mapGetters({
		getCustomer: "getCustomer"
		})
	},
	watch: {
		'getCustomer': {
			deep: true,
			handler(value) {
				this.customer = null
				this.customer = this.getCustomer.data;
			}
		}
	},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Quote_detail .main-title{
  background: #0052b1;
}
#Quote_detail .main-title h2{
color:#fff;
}
#Quote_detail .btn_div button.reply_btn{
  background: #007df8 !important;
  color:#fff;
}
#Quote_detail .blue_font{
  color:#007df8;
}
.driver_vehicle form ul li {
  min-height: 80px;
}
.reply_btn{
 background:#007df8 none repeat scroll 0 0 !important;
}
.vehicle_tlt{margin-bottom:0px !important;}
button.edit_btn {
    background: #0066d0;
    padding: 13px 20px 13px;
    line-height: 11px;
    font-size: 17px;
}
</style>
