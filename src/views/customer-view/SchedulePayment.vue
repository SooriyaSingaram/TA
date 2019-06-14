<template>

    <section id="SchedulePayment">
        <div class="container-fluid">
             <div class="row">
                <div class="col-12 main-title">
                    <h2>{{ 'SERVICES' | translate }}</h2>
                </div>
                <div class="col-12 content_section">  
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>{{ 'GetAQuote' | translate }}</h4>
                        </div>
                    </div>
  
                    <div class="flex-wrap collision_lsts_sec">

                    <form>
                        <div class="row schepay">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <h6>{{ 'YourServiceAmount' | translate }}</h6>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                               <router-link to=""><button class="add_vehicle confirmbt">${{quoteDetail.ServiceAmount}}</button></router-link>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 d-flex payop">
                                <h6>{{ 'PaymentOption' | translate }}</h6>
                            </div>
                        </div>
<div class="row">
    <div class="payrad col-lg-4 col-md-4 col-sm-12 custom-control custom-radio" v-for="data in paymentTypes">
     
                           <input id="radio-1" class="radio-custom-label custom-control-input" name="radio-group"  type="radio"  :value="data.PaymentTypeId" v-model="quotesFinalObj.PaymentTypeId">
                         
                           <label class="custom-control-label" for="defaultUnchecked1">{{data.PaymentType}}</label>
                            
                            <!--class="custom-control-label"-->
      </div>
    </div>
                        <!--div class="row payrad">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-flex">
                                <div>
                                    <input id="radio-1" class="radio-custom" name="radio-group" type="radio">
                                    <label for="radio-1" class="radio-custom-label">{{ 'creditCard' | translate }}</label>
                                </div>
                            </div>
    
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-flex">
                                <div>
                                    <input id="radio-2" class="radio-custom" name="radio-group" type="radio">
                               <label for="radio-2" class="radio-custom-label">{{ 'cash' | translate }}</label>

                                </div>
                            </div>
    
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-flex">
                                <div>
                                    <input id="radio-3" class="radio-custom" name="radio-group" type="radio">
                                    <label for="radio-3" class="radio-custom-label">{{ 'PayThoroughCorporateagreement' | translate }}</label>
                                </div>
                            </div>
    
                        </div-->
    
    
    
                            <!--div class="col-12 d-flex payop">
                                <h6>{{ 'CardDetail' | translate }}</h6>
                            </div>
                        </diV>
    
 
                        <div class="row carddeta">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12 carnam">
                                <h6>{{ 'CardNumber' | translate }}</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0 cardstar" id="inlineFormInputGroup" placeholder=" ****  ****  ****">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><img src="../../assets/images/card.png" class="" /></div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col-lg-2 col-md-2 col-sm-12 col-12">
                                <h6>{{ 'CardNumber' | translate }}CVC</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0 cvvstar" id="inlineFormInputGroup" placeholder=" *** ">
                                </div>
                            </div>
    
                            <div class="col-lg-2 col-md-2 col-sm-12 col-12">
                                <h6>{{ 'EXPDATE' | translate }}</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="">
                                </div>
    
                            </div>
    
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12 namcard">
                                <h6>{{ 'NAMEONTHECARD' | translate }}</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="">
                                </div>
                            </div>
    
                        </div-->
    
                        <mdb-col col="12" class="p-0 twobtt">
                            <div class="sub_btn d-flex justify-content-center">
                                <button type="button" class="add_vehicle schedulePay" @click="schedule()">{{ 'ConfirmPayment' | translate }}</button>
                                <router-link to=""><button class="cancel_btn">{{ 'BACK' | translate }}</button></router-link>
                            </div>
                        </mdb-col>
                        </form>
                    </div>
                </div>
    
            </div>
    
        </div>
    
    </section>
</template>
 <script type="text/javascript" src="https://checkout.epayco.co/checkout.js">   </script> 
<script>
 import Vue from 'vue'
import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
} from "mdbvue";
export default {

    components: {
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn
    },
    props: ["quoteDetail"],
    data() {
        return {
            contentLength: 0,
            service: {},
            subServiceList: [],
            mainService: '',
            quotesFinalObj:{PaymentTypeId:1},paymentTypes:{}


        }
    },
    mounted: function() {
         let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://checkout.epayco.co/checkout.js')
    document.head.appendChild(recaptchaScript)
        var self = this;

        if (self.quoteDetail) {
            self.quotesFinalObj = self.quoteDetail;
            self.quotesFinalObj.PaymentTypeId=1;
        }else{
             this.$router.push({
                    name: 'Addnewquote'
                }) 
        }
    },
    created() {
        this.create = true;
        this.isDisabled = false;
        this.getServiceType()
        this.quotesFinalObj.PaymentTypeId=1;
        
    },
    methods: {
        getServiceType(){
  	let url = '/CarOwner/PaymentTypeDownList'
			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				if (response.data.IsSuccess) {
          this.paymentTypes = response.data.data;
          
				}
				else {
				
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});
},
        schedule() {
            var handler = ePayco.checkout.configure({
  				key: '491d6a0b6e992cf924edd8d3d088aff1',
  				test: true
  			})
                var paymentData={
          //Parametros compra (obligatorio)
          name: "Vestido Mujer Primavera",
         description: "Vestido Mujer Primavera",
          invoice: "1234", 
          currency: "cop",
          amount: "1",
         
          country: "co",
          lang: "en",

         

          confirmation: "http://secure2.payco.co/prueba_curl.php",
          response: "http://secure2.payco.co/prueba_curl.php",

          //Atributos cliente
          name_billing: "Andres Perez",
          address_billing: "Carrera 19 numero 14 91",
          type_doc_billing: "cc",
          mobilephone_billing: "3050000000",
          number_doc_billing: "100000000"
          }
            var self = this;
            if( (self.quotesFinalObj.PaymentTypeId == 2) || (self.quotesFinalObj.PaymentTypeId == 3)){
                 handler.open(paymentData)
                 return
            }
            self.quotesFinalObj.UserId = Number(JSON.parse(localStorage.getItem('userId')))
          //  self.quotesFinalObj.PaymentTypeId = 1;
            self.quotesFinalObj.url = '/CarOwner/ScheduleCustomerService';
            
            return this.$store.dispatch('updateData', self.quotesFinalObj).then((response) => {
               self.$message(response.data.Message)
                let confiramionData = {};
               confiramionData.ServiceAmount=  self.quoteDetail.ServiceAmount;
                confiramionData.CarOwnerServiceId =  self.quotesFinalObj.CarOwnerServiceId;
                if (self.quoteDetail.ServicesTypeid == 1) {
                    confiramionData.url = '/CarOwner/GetconfirmationByDriver?CarOwnerServiceId=' + confiramionData.CarOwnerServiceId;
                    self.$router.replace({
                        name: 'ServiceConfirm1',
                        params: {
                            confirmationDetail: confiramionData
                        }
                    });
                }
                if (self.quoteDetail.ServicesTypeid == 2) {
                    confiramionData.url = '/CarOwner/GetconfirmationByWorkShop?CarOwnerServiceId=' + confiramionData.CarOwnerServiceId;
                    self.$router.replace({
                        name: 'ServiceConfirm2',
                        params: {
                            confirmationDetail: confiramionData
                        }
                    });
                }
                if (self.quoteDetail.ServicesTypeid == 3) {
                    confiramionData.url = '/CarOwner/GetconfirmationByTow?CarOwnerServiceId=' + confiramionData.CarOwnerServiceId;
                    self.$router.replace({
                        name: 'ServiceConfirm3',
                        params: {
                            confirmationDetail: confiramionData
                        }
                    });
                }

            }).catch(function(err) {
                self.$message(err.response.data.error)
            });



        }



    }
}
      

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cardstar::-webkit-input-placeholder {
    
        color: transparent;
    
        text-indent: -9999px;
    
        background: url("../../assets/images/cardstar.png");
    
        background-position: 13px 13px;
    
        background-repeat: no-repeat;
    
    }
    
    
    
    .cardstar::-moz-placeholder {
    
        /* Firefox 19+ */
    
        color: transparent;
    
        text-indent: -9999px;
    
        background: url("../../assets/images/cardstar.png");
    
         background-position: 13px 13px;
    
        background-repeat: no-repeat;
    
    }
    
    
    
    .cardstar:-moz-placeholder { 
        /* Firefox 18- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cardstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cardstar:-ms-input-placeholder {
        /* IE 10- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cardstar.png");
         background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cvvstar::-webkit-input-placeholder {
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cvvstar::-moz-placeholder {
        /* Firefox 19+ */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
         background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cvvstar:-moz-placeholder {
        /* Firefox 18- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    
    }
    
    
    
    .cvvstar:-ms-input-placeholder {
    
        /* IE 10- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    
    }
    
    
    
    @media only screen and (max-width: 767px) {
        body .twobtt .justify-content-center { justify-content: none!important;}
        .twobtt .justify-content-center button { width: 143px !important;}
    }
    
    
    
    .namcard {   padding-top: 20px;}
    .form-control:focus {  box-shadow: none!important;  border: 1px solid #ced4da!important;}
    .carddeta .carnam .input-group-text {  background: #f3f6fb!important;  border-left: white!important;
    border-top-right-radius: 7px!important; border-bottom-right-radius: 7px!important;}
    .carddeta h6 {  color: #888888; font-size: 18px; padding-bottom: 10px; }
    .carddeta { margin-top: 20px;}
    .carddeta .form-control {   background: #f3f6fb!important;}
    .carddeta .carnam .form-control {
        border-top-left-radius: 7px!important;
        border-bottom-left-radius: 7px!important;
        background: #f3f6fb!important;
        border-right: #f3f6fb!important;
    }
    .payrad {margin-top: 20px;}
    .checkbox-custom,
    .radio-custom {   opacity: 0; position: absolute;}
    .checkbox-custom,
    .checkbox-custom-label,
    .radio-custom,
    .radio-custom-label { display: inline-block;  vertical-align: middle; cursor: pointer;
        font-size: 19px!important;
        color: #868889!important;}
    .checkbox-custom-label,
    .radio-custom-label {
        position: relative;
        display: inline-flex;
    }
    
    .radio-custom:checked+.radio-custom-label:before {
        border: 2px solid #0066d0!important;
    }
    .checkbox-custom+.checkbox-custom-label:before,
    
    .radio-custom+.radio-custom-label:before {
        content: '';
        background: #fff;
        border: 2px solid #707070;
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
    
        margin-top: 2px;
    
        margin-right: 10px;
    
        text-align: center;
    
    }
    
    
    
    .checkbox-custom:checked+.checkbox-custom-label:before {
    
        content: "\f00c";
    
        font-family: 'FontAwesome';
    
        background: rebeccapurple;
    
        color: #0066d0;
    
    }
       
    
    
    .radio-custom+.radio-custom-label:before {
    
        border-radius: 50%;
    
    }
    
    
    
    .radio-custom:checked+.radio-custom-label:before {
    
        content: "\f00c";
    
        font-family: 'FontAwesome';
    
        color: #0066d0;
    
    }
    
    
    
    .payop {
    
        margin-top: 40px;
    
    }
    
    
    
    .payop h6 {
    
        font-size: 20px;
    
        color: #333333;
    
    }
    
    
    
    .confirmbt {
    
        font-size: 22px!important;
    
        padding-right: 50px;
    
        padding-left: 50px;
    
    }
    
    
    
    .schepay h6 {
    
        font-size: 20px;
    
        color: #0066d0;
    
        padding-top: 10px;
    
        padding-right: 50px;
    
    }
    
    
    
    
    
    
    
    .sub_btn {
     margin-top: 50px;  margin-bottom: 20px;}
    
    
    
    .sub_btn button,
    
    .sub_btn btn {
    
        width: 200px;
    
    }

     .custom-control-label::before {
    position: absolute;
    top: 0.25rem;
    left: -1.6rem;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    pointer-events: none;
    content: "";
    background-color: #fff;
    border: #adb5bd solid 1px;
}
.custom-control-label::after {
    position: absolute;
    top: .30rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}
.custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    font-size: 19px;
}

.custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #007bff;
    background-color: #007bff;
}


  .custom-control-input {
    position: relative !important;
    opacity: 0;
    z-index: 1 !important;
}
.schedulePay{
    margin:0px 2px;
    width:230px !important;
}

</style>
