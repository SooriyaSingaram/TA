<template>
  <div class="container_fluid">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 login_lft_section">
        <img src="../../assets/images/login_lft.png" />
      </div>
      <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 rgt_section align-middle">
       <Select class="select_language1 logSelect" v-model="language" @change="changeLang($event)"><option value="en">Select Language</option><option value="en">English</option><option value="esp">Español</option><option value="em">Portugues</option></select>

        <div class="d-flex justify-content-center flex-column rgt_cen">
          <div class="logo"><img src="../../assets/images/logo.png" /></div>
          
          <form  >
            <div class="form-simple">
          <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
              <ul>
                <li><label>{{ 'Name' | translate }}</label><input name="name" v-validate="'required'" placeholder="Daniel Thomas" type="text" v-model="form.name" /> 
               
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                  
                <li><label>{{ 'Address' | translate }}</label>
                    <input type="text"  ref="autocomplete" v-validate="'required'"  placeholder="Search"  
          class="search-location form-control"
        onfocus="value = ''" v-model="form.Address" name="Address"  />
                    
                    <span v-show="errors.has('Address')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li>
                 </li>
                <li><label>{{ 'CoporateAgreement' | translate }}</label>
                <select class="form-control" v-model="form.CorporateAgreementId" v-validate="'required'" name="CoporateAgreement">
                   
                    <option v-for="corporate in getCorporateAgreement" :value="corporate.CorporateMasterID">{{corporate.CorporateCompanyName}}</option>
                    </select>
                
                    <span v-show="errors.has('CoporateAgreement')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li>
                <li><label>City</label>
                <select class="form-control" name="city" @change="getZone(form.City)" v-validate="'required'"  v-model="form.City" >
                   
                    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>

                    </select>
                
                    <span v-show="errors.has('city')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li>
                 <!--li><label>Zone</label>
                <select class="form-control" v-model="form.Zone" >
                   
                    <option v-for="zone in zones" :value="zone.ZoneId">{{zone.ZoneName}}</option>
                    </select>
                     
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                </li-->
                <li><label>{{ 'Email' | translate }}</label>
                <input placeholder="sampletext@mail.com" name="email" v-validate="'required|email'" type="text" v-model="form.EmailAddress"/>
                
                    <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate }}</span>
                    </li>
              
                <li><label>{{ 'Password' | translate }}</label>
                <input placeholder="sampletext@mail.com"  name="password" v-validate="'required'" type="password" v-model="form.Password"/> 
                
                    <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
              </li>
              </ul>
    </vue-custom-scrollbar>
  
              <div class="text-center">
                <mdb-btn type="button" @click="RegisteronSubmit()"class="log_btn">{{ 'SIGNUP' | translate }}</mdb-btn>
              </div>
  
              <h3 class="frm_opt"><span>({{ 'or' | translate }})</span></h3>
              <div class="text-center">
                <a><img src="../../assets/images/facebook.png" class="face_icon" /></a>
              </div>
  
              <p class="new_taller">{{ 'alreadyRegistered' | translate }}
                <a>
                  <router-link to="Login">{{ 'LOGIN' | translate }}</router-link>
                </a>
              </p>
  
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import vueCustomScrollbar from 'vue-custom-scrollbar' 
  import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  } from 'mdbvue'
  export default {
    name: 'Register',
    components: {
      vueCustomScrollbar,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn
    },props: {
    selectedlanguage:String
},
    data() {
    return {
      cities:[],
      getCorporateAgreementList:[],
      zones:[],
      settings: {
        maxScrollbarLength: 60
      },
        form: {
          name: null,
          Address: null,
          CorporateAgreementId: null,
          City: null,
          EmailAddress:null,
          Password:null,
          Zone:null
        },
       // errors:{},
        show: true,language:this.selectedlanguage

    }
  },

   mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );

    this.autocomplete.addListener('place_changed', () => {
  let place = this.autocomplete.getPlace();
  
  let ac = place.address_components;
  let lat = place.geometry.location.lat();
  let lon = place.geometry.location.lng();
  let city = ac[0]["short_name"];
     this.form.Address= place.formatted_address;
    
});
  },
  created() {
     let selected_language=JSON.parse(localStorage.getItem('language'));
    if(selected_language){
 this.$i18n.set(selected_language)

 this.selectedlanguage=selected_language;
 this.$root.$emit('lang', selected_language);
    }
        this.$store.dispatch('cityList')
  this.$store.dispatch('getCorporateAgreement')
	},
  methods: {
     changeLang(event){
    let lang =event.target.value;
this.$i18n.set(lang)
 this.$root.$emit('lang', lang);
           window.localStorage.setItem('language', JSON.stringify(lang));

       },
    scrollHanle(evt) {
    },
     getZone(id){
    this.$store.dispatch("zoneList",id) 
        },
         validEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },
    RegisteronSubmit(evt) {
      
      
      var self =this;
      //let obj={};
      
//       for(let k in this.form){       
//        if(!self.form[k]) {
//          let result = k.replace( /([A-Z])/g, " $1" );
//          let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
//         obj[k] =finalResult+" is required.";
//       }else{
//          obj[k] ="";
//          if(k == 'EmailAddress'){
// if(!self.validEmail(self.form.EmailAddress)) {
//         self.errors.EmailAddress="Please enter valid email";        
//       }
//          }
 
//       }
       
//       }
     
      
    // self.errors = obj;
  //      if(Object.getOwnPropertyNames(self.errors).length >1){
  //  return true;
  //  }else{
 this.$validator.validateAll().then((result) => {
                if (result) {
            const registerformValues = {
          username: this.form.name,
          address: this.form.Address,
          CorporateAgreementId: Number(this.form.CorporateAgreementId),
          city: this.form.City,
          emailaddress: this.form.EmailAddress,
           CarOwnerID:0,
           Password:this.form.Password,
           Zone:this.form.Zone
       }
return this.$store.dispatch('addUser', registerformValues).then((response) => {
if(response.data.IsSuccess){
  self.$message(response.data.Message)
        self.$router.push({
					name: 'Login'
				})
}else{
  self.$message(response.data.Message)
}
	self.$store.dispatch('clearData')
}).catch(function(err) {
	self.$message(err.response.data.error)
});

   }
 })

    }
  },
    	computed: {
		...mapGetters({
            cityList: "cityList",
            zoneList:"zoneList",
            getCorporateAgreement:"getCorporateAgreement"
		})
	},
  	watch: {
		
        'cityList': {
			deep: true,
			handler(value) {
				this.cities = null
				this.cities = this.cityList;
        console.log(this.cities)
			}
		},
        "zoneList":{
            deep: true,
			handler(value) {
				this.zones = null
				this.zones = this.zoneList;
			}
        },
         "getCorporateAgreement":{
            deep: true,
			handler(value) {
				this.zones = null
				this.getCorporateAgreementList = this.getCorporateAgreementList.data;
        
			}
        }
        
	}
  
  
  
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_lft_section {
    max-height: 100vh;
  }
  
  .login_lft_section img {
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  
  .rgt_section {
    height: 100vh;
  }
  
  .rgt_cen {
    height: 100vh;
    align-self: center;
    margin-left: -40px;
  }
  
  .form-simple {
    max-width: 346px;
    margin: 0 auto;
    margin-top: 38px;
    font-family: 'Nunito-Regular';
    width: 100%;
  }
  
  .form-simple ul {
    list-style-type: none;
    margin-left: 0px;
   
    padding: 0px;
    border-radius: 3px;
  }
  
  .form-simple ul li {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    padding: 10px 10px 8px;
    border-top: 1px solid #dbdbdb;
    margin-bottom: 10px;
  }
  
  .form-simple ul li:first-child {
    border: 0px;
  }
  
  .form-simple ul li label {
    color: #a4a3a3;
    font-size: 1rem;
    margin-bottom: 0px;
  }
  
  .form-simple ul li input {
    border: 0px !important;
    color: #656565;
    font-size: 18px;
    font-family: Nunito-Medium;
    background: transparent;
  }
  
  .form-simple .log_btn,
  .form-simple .log_btn:hover {
    background: #0066d0 !important;
    color: #fff;
    text-transform: uppercase;
    border: 0px;
    border-radius: 3px;
    margin-bottom: 0px;
    padding: 20px 0px 0px;
    width: 100%;
  }
  
  .rem_frt {
    margin-bottom: 20px;
    font-family: Nunito-Medium;
    font-size: 18px;
    color: #333;
  }
  
  .rem_frt span {
    text-align: left;
  }
  
  .rem_frt span input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .rem_frt a {
    text-align: right;
    color: #333;
  }
  
  p.new_taller {
    width: 100%;
    float: left;
    text-align: left;
    margin-top: 10px;
    font-family: 'Nunito-Bold';
    color: #333;
    font-size: 17px;
  }
  
  p.new_taller a {
    text-align: right;
    float: right;
  }
  
  .face_icon {
    width: 100%;
  }
  
  .frm_opt {
    border-bottom: 1px solid #cbd2d6;
    line-height: 15px;
    margin-bottom: 26px;
    text-align: center;
    width: 100%;
  }
  
  .frm_opt span {
    background: rgba(255, 255, 255, 0.99) none repeat scroll 0 0;
    float: none;
    padding: 0px 10px;
    color: #9fa3a5;
    font-size: 18px;
  }
  
  .logo {
    text-align: center;
  }
  
  html,
  body {
    background: #fff none repeat scroll 0 0;
  }
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height:330px;
   border: 1px solid #dbdbdb;
}

  .error {
    color: #f00
  }
.logSelect{
      height: 43px;
    color: #000;
    border: 1px solid #999c9e;
    width: 188px;
        margin: 10px;
        float:right;
}

 @media only screen and (min-width:320px) and (max-width:380px)
{
  .form-simple{  max-width: 300px !important;}
  .rem_frt{font-size:16px;}
}
</style>



