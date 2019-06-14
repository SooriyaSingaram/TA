<template>
  <section id="Quote_detail_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'QUOTES' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start">
              <h4>{{ 'QuoteDetail' | translate }}</h4>
            </div>
            
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
           
            <form>
              <ul >
                <li><label>{{ 'Vehicle' | translate }}</label><span> {{Quotes.CustomerVehicleName}}</span></li>
              
                <li><label>{{ 'Customer' | translate }}</label><span>{{Quotes.CustomerName}}</span></li>
              
                <li><label>{{ 'Details' | translate }}</label><span>{{Quotes.Details}}</span></li>
               
                <li><label>{{ 'Source' | translate }}</label><span>{{Quotes.SourceName}}</span></li>
               
                <li><label>{{ 'DateofQuote' | translate }}</label><span>{{Quotes.QuoteDate | formatDate(Quotes.QuoteDate)}}</span></li>
                
                <li><label>{{ 'Amount' | translate }}</label><span class="blue_font"> <a @click="updatebtn(Quotes)">{{Quotes.CollisionAndPaintAmount}} <b style="color: #007df8;
    padding-left: 3px; text-decoration: underline;">Update</b></a></span>
                  <el-dialog title="Update Service Amount" :visible.sync="priceWindow" width="30%" center>
   <div class="container-fluid workdeta1">
            <div class="row">
                    <div class="col-lg-4 col-md-4">
                    <h3>{{ 'Price' | translate }}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="Quotes.CollisionPrice"  required >
                    <span v-show="errMsg" style="color:red">{{ 'validPriceAmount' | translate }}</span>
                    </div>
                    </div>
             </div>    
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click=" updateCollisionPrice();">{{ 'Confirm' | translate }}</el-button> 
    
    <el-button type="danger" @click="priceWindow = false;Quotes.CollisionPrice=null">{{ 'CANCEL' | translate }}</el-button>
 </span>
</el-dialog></li>
              <li>
            Photo / Videos
            <div v-for="x in Quotes.ImageUrl" class="pht_vid">
            <img  v-bind:src="x" style="margin:10px" >
            </div>
              </li>
               
              </ul>

                <ul>
               
                <li><label>{{ 'Plate' | translate }}</label><span>{{Quotes.PlateNumber}}</span></li>
              
                <li><label> {{ 'Service' | translate }}</label><span>{{Quotes.MainServicesName}}</span></li>
                
                <li><label>{{ 'StandingReason' | translate }}</label><span>Awaiting Images to quote 
                                    the service Update </span></li>
              
                <li><label>{{ 'NeedtoPickup' | translate }}</label><span>{{Quotes.IsNeedToPickup===true?"Yes":"No"}}</span></li>
                
                <li><label>{{ 'Closing Date' | translate }}</label><span class="blue_font">Update
              </span>
               
                </li>
              
                <li><label>{{ 'Status' | translate }}</label><span>{{Quotes.Status}} </span></li>
               
              </ul>

               
              
            </form>
           
            <div class="sub_btn btn_div">
              <router-link to="/Quotes_SA"><button class="reply_btn">{{ 'BACK' | translate }}</button></router-link>
             
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
    name: 'Quote_detail_SA',
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
        Quotes:{},
           priceWindow: false,
        centerDialogVisible: false,
        errMsg:false
      }
    },

      created() {
		this.getQuotesParam()

	},

  	methods: {

      updatebtn(subServiceData){
        console.log('hiiiiiii');
  
  this.Quotes =subServiceData;
  this.priceWindow =true;
},

updateCollisionPrice(){
  let typePrice=  isNaN(this.Quotes.CollisionPrice);

 debugger
   if(typePrice){
this.errMsg =true;
this.priceWindow = true;
return
   }
   else{
  this.errMsg =false;
   this.priceWindow = false;
      let serviceObj = {
        CreatedBy:Number(localStorage.getItem('userId').slice(1, -1)),
        CollisionAndPaintId:this.Quotes.CollisionAndPaintId,
        CollisionAndPaintAmount:this.Quotes.CollisionPrice,
        url:'/SuperAdmin/UpdateCollisionPrice'
      }
      
      	return this.$store.dispatch('updateData', serviceObj).then((response) => {
                if(response.data.IsSuccess){
                 
                  let id = window.localStorage.getItem('CollisionAndPaintId')
                    this.$store.dispatch('getquotedetails',window.localStorage.getItem('CollisionAndPaintId'))
                     this.$message(response.data.Message)
                      this.Quotes.CollisionPrice = undefined
                     this.getQuotesParam()
                }else{
                    this.$message(response.data.Message)
                }
				
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
   }
 
    },
		getQuotesParam() {
			let quotesID =  this.$route.params.id;
      //alert(quotesID);
         this.$store.dispatch('getquotedetails',quotesID)
		},
	
    },

    computed: {
		...mapGetters({
		getquotedetails: "getquotedetails"
		})
	},
	watch: {
		'getquotedetails': {
			deep: true,
			handler(value) {
          //debugger
				this.Quotes = null
				this.Quotes = this.getquotedetails.data;
         console.log(this.Quotes)
                //debugger
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


</style>
