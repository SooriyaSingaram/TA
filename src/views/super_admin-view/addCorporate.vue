<template>
  <section id="addCorporate">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12 main-title adm">
          <h2>Add Corporate Agreement</h2>
        </div>
      </div>

    <form id="view-form"  >

    
        <div class="container-fluid workdeta1">
            <div class="row">
             <div class="col-lg-3 col-md-6">
                    <h3>{{ 'CompanyName' | translate }} </h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" name="name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" class="form-control"  :disabled="isDisabled" v-model="corporate.CorporateCompanyName" >
                     <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate  }}</span>
                    </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'CompanyMobile' | translate }} </h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="CompanyMobile"  v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('CompanyMobile') }" class="form-control" :disabled="isDisabled" v-model="corporate.CompanyMobile" >
                    <i v-show="errors.has('CompanyMobile')" class="fa fa-warning"></i>
                                         <span v-show="errors.has('CompanyMobile')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>
            </div>

                   
             </div>    

              <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'ContactPerson' | translate }} </h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" name="contact" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('contact') }" class="form-control"  :disabled="isDisabled" v-model="corporate.ContactPerson" >
                     <i v-show="errors.has('contact')" class="fa fa-warning"></i>
                    <span v-show="errors.has('contact')" class="help is-danger">{{ 'requiredValidation' | translate  }}</span>
                    </div>

                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Email' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input name="email" type="text" :disabled="!create" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" class="form-control"  v-model="corporate.CompanyEmail" >
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate  }}</span>
                    </div>
                    </div>


              

             </div>     

             <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'PhoneNumber' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text"  name="mobile" v-validate="'required|numeric|max:10'" :class="{'input': true, 'is-danger': errors.has('mobile') }" class="form-control"  :disabled="isDisabled" v-model="corporate.CompanyMobile">
                    <i v-show="errors.has('mobile')" class="fa fa-warning"></i>
                                        <span v-show="errors.has('mobile')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>
 </div>
                    
          
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'LandlineNumber' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text"  name="landline" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('landline') }" class="form-control"  :disabled="isDisabled" v-model="corporate.CompanyPhone">
                     <i v-show="errors.has('landline')" class="fa fa-warning"></i>
                    <span v-show="errors.has('landline')" class="help is-danger">{{ 'mobileValidation' | translate }}</span>
                    
                     </div>
                    
                    
             </div>  <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Address' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" ref="autocomplete"   placeholder="Search"
        onfocus="value = ''" name="address" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('address') }" class="form-control"  :disabled="isDisabled" v-model="corporate.CompanyAddress">
                     <i v-show="errors.has('address')" class="fa fa-warning"></i>
                    <span v-show="errors.has('address')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    
             </div>  
             <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button"  v-on:click="addCorporate()" v-if="create" >{{ 'Submit' | translate }}</button>
                    <button class="btn btn-success" type="button" v-on:click="addCorporate()" v-if="!create" >{{ 'UPDATE' | translate }}</button>
                   <router-link to="/Corporate_agreement_SA"><button class="btn bck_btn">{{ 'CANCEL' | translate }}</button></router-link>

 </div>
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="isDisabled">

                <router-link to="/Corporate_agreement_SA"><button class="btn bck_btn">{{ 'BACK' | translate }}</button></router-link>

 </div>
 </div>

        </div>
    </form>

   
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
	name: 'addCorporate',
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
        mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );

    this.autocomplete.addListener('place_changed', () => {
  let place = this.autocomplete.getPlace();
  debugger
  let ac = place.address_components;
  let lat = place.geometry.location.lat();
  let lon = place.geometry.location.lng();
  let city = ac[0]["short_name"];
     this.corporate.CompanyAddress= place.formatted_address;
     this.corporate.Country = place.country;
     this.corporate.Longitude= lon;
     this.corporate.Latitude= lat;
     this.corporate.State=  ac[2].long_name
    //  this.corporate.Country=  ac[3].long_name
    //   this.shop.Longitude = addrObj.lattitude == undefined ? '0' : addrObj.lattitude;
    //   this.shop.Latitude = addrObj.longitude == undefined ? '0' : addrObj.longitude;
    //   this.shop.PostalCode = addrObj.postal_code == undefined ? '0' : addrObj.postal_code;
    //   this.shop.Province = addrObj.admin_area_l1;
  //console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
});
  },
	created() {
		this.getCorporateParam()
	},
	methods: {

    //  validateBeforeSubmit() {
    //   this.$validator.validateAll().then((result) => {
    //     if (result) {
    //       // eslint-disable-next-line
    //       alert('Form Submitted!');
    //       return true;
    //     }

    //     alert('Correct them errors!');
    //   });
    // },
       
		getCorporateParam() {
			let corporateId = this.$route.params.id;
			if (corporateId == '0') {
                this.corporate.CorporateMasterID =0;
                this.isDisabled = false;
				this.create = true;
                
			}
			else {
               if(corporateId.includes('view')){
                 this.isDisabled = true;
                 this.create = false; 
                 let id =  corporateId.slice(4)
                 this.$store.dispatch('getcorporate', id)


               }else{
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getcorporate', corporateId)
               }
                
				
				
			}
		},
		addCorporate() {        

        this.$validator.validateAll().then((result) => {
            if (result) {
            // eslint-disable-next-line
            var self = this;
           this.corporate.url= '/SuperAdmin/AddCorporateAgreement';
			return this.$store.dispatch('updateData', this.corporate).then((response) => {
				//self.$message(response.data.Message)
				self.$router.push({
					name: 'Corporate_agreement_SA'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				//self.$message(err.response.data.error)
			});
            }

           // alert('Correct them errors!');
        });


			
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

.highbut
{
        padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.lessbut
{
        padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.secform
{
    margin-top: 20px;
}
.servdeta9 h3
{
    font-size: 25px;
    font-weight: 300;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
}

  .cancont button
  {
      font-size: 18px;
      background: #95a5a6!important;
      border-radius: 5px;
      box-shadow: none!important;
  }


.custdetabut
{
    margin-top: 50px;
}
.vehrig
{
        border-left: 12px solid #f2f5f7;

}

.corpe
{
    margin-top: -50px;
}
.view
{
    font-size: 18px;
    color: black;
    text-decoration: underline;
    float: right;
    cursor: pointer;
}


input:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.dropcity:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.dropmale:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.chanimg
{
    width: 110px;
    height: 110px;
    border: 3px solid #007df8;
    border-radius: 50%;
}
.servtab
{
    margin-top: 20px;
}

@media only screen and (max-width: 992px)
{
    .corpe
{
    margin-top: 0px!important;
}
}

@media only screen and (max-width: 767px)
{
 .servtab
{
overflow-x: scroll;
}

.servdeta9 h3
{
    padding-left: 0px!important;
}
.corpe
{
    margin-top: 0px!important;
}
 
                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 0px!important;
                }  
}

.workdetatab1
{
    padding-top: 20px;
    margin-top: 30px;
    background: white;
    border-radius: 5px;

}

.workdetatab1
{
    padding-bottom: 30px;
}
.workdetatab1 h2
{
    font-size: 25px;
    color: #212121;
}
.work_cont
{
    margin-top: 20px;
}
   .cancont button
  {
      font-size: 18px;
      background: #95a5a6!important;
      border-radius: 5px;
      box-shadow: none!important;
  }


 
  .upcont button
  {
      font-size: 18px;
      background: #007df8!important;
      border-radius: 5px;
      box-shadow: none!important;
  }

.upcont
{
    margin-top: 20px;
    padding-bottom: 40px;
}
      .adm
    {
        background: #0052b1;
        color: white!important;
    }
         
    .adm h2
    {
                color: white!important;
    }

#Corporate_agree
{
    padding-bottom:40px;
}
    .workdeta1
    {
        background: white;
        border-radius: 5px;
        padding-top: 20px;
        padding-left: 20px;
                padding-right: 50px;
                    margin-top: 30px;
    }
        .workdeta1 .col-lg-3
        {
            padding-bottom: 12px;
        }

                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 30px;
                    font-size: 18px;
                    color: #666666;
                    padding-top: 5px;
                }

.workdeta1 .col-lg-3 h4
{
    font-size: 20px;
    padding-top: 2px;
}

.corptext
{
    margin-top: 30px;
}

                .workdeta1 .col-lg-3 input
                {

                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
                }

                                .workdeta1 .col-lg-3 .dropcity
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
    
                }
               .workdeta1 .col-lg-3 .dropmale
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
    
                }

.workdeta1 .col-lg-3 textarea
{
    background: #f5f8fa;
    border-radius: 10px!important;
    height: 100px;
 }

body .btn_div button.bck_btn {
    background: #3a4959 !important;
    color: #fff;
}

 .form-control{line-height:42px; padding-top:0px;}
  select.form-control {
    line-height: 37px;
    -webkit-appearance: none;
    appearance: none;
   background: #f3f6fb url('../../assets/images/arrow-down.png') !important; background-repeat: no-repeat !important;
  background-position: 97% center !important;
}
</style>
