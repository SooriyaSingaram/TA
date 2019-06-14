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
          <form @submit="onSubmit" novalidate="true">
            <div class="form-simple">
              <ul>
                <li><label>{{ 'UserName' | translate}}</label>
                <input v-validate="'required|email'"  name="email" placeholder="sampletext@mail.com" id="username" type="email" v-model="form.email" required/>
                    <span v-show="errors.has('email')" class="help is-danger">{{ 'emailValidation' | translate }}</span>
      
                </li>
                
                <li><label>{{'Password' | translate}}</label><input v-validate="'required'" name="password" placeholder="********" type="password" containerClass="mb-0" v-model="form.password" required/>
                <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}</span></li>
              </ul>
  
              <div class="d-flex rem_frt">
                <span class="col p-0"><input type="checkbox" v-model="remembere" id="rememberMe" @click="remember_me(remembere)">{{ 'Remember me' | translate }}</span>
                <a href="#" class="col p-0">
                  <router-link to="Forgotpassword">{{ 'ForgotPassword' | translate }}</router-link>
                </a>
              </div>
              <div class="text-center">
                <mdb-btn type="submit" class="log_btn">{{ 'LOGIN' | translate }}</mdb-btn>
              </div>
               </div>
          </form>
           <div class="form-simple">
  
              <h3 class="frm_opt"><span>({{ 'or' | translate }})</span></h3>
              <div class="text-center">
               <!-- <a><img src="../../assets/images/facebook.png" class="face_icon" /></a>-->
                 <facebook-login class="button face_btn"
      appId="359776294625144"
      @login="getUserData"
      @logout="onLogout"
     @sdk-loaded="sdkLoaded" ><img src="../../assets/images/facebook.png" class="face_icon" />
    </facebook-login>
              </div>
  
              <!--p class="new_taller">{{ 'NewToTallerOnline' | translate }}? </p>-->
                <a>
                  <router-link to="Register">{{ 'SIGNUP' | translate }}</router-link>
                </a>
             
  
           </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import facebookLogin from 'facebook-login-vuejs';
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  } from 'mdbvue'
  export default {
    name: 'Login',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      facebookLogin
    },props: {
    selectedlanguage:String
},
    data() {
      return {
        form: {
          email:null,
          password:null
        
        },  
       show: true,
remembere:false,

      isConnected: false,
      External_user_name: '',
      ExternalEmailId: '',
      ExternalUserID: '',
      name: '',
      email: '',
      personalID: '',
      FB: undefined,language:this.selectedlanguage

       
      }
    },
     created() {
       debugger
        let remember_met=  JSON.parse(localStorage.getItem('remember_me')) ;
        if(remember_met){
          debugger
              let emailId=  localStorage.getItem('email');
              debugger
              let password=  localStorage.getItem('password')
this.form.email=emailId;
this.form.password=password;
this.remembere=true;

        }

       let selected_language=JSON.parse(localStorage.getItem('language'));
    if(selected_language){
 this.$i18n.set(selected_language)

 this.selectedlanguage=selected_language;
 this.$root.$emit('lang', selected_language);
    }
   },
    methods: {
      changeLang(event){
    let lang =event.target.value;
this.$i18n.set(lang)
 this.$root.$emit('lang', lang);
           window.localStorage.setItem('language', JSON.stringify(lang));

       },
     onSubmit(evt) {
       var self=this;
          evt.preventDefault();
  this.$validator.validateAll().then((result) => {
            if (result) {
        
       
	const formValues = {
		username: this.form.email,
		password: this.form.password,
    grant_type: "password",
		Scope:2
	}
  

return this.$store.dispatch('loginUser', formValues).then((response) => {
	self.$router.push({
		name: 'Dashboard'
	})
	self.$store.dispatch('clearData')
}).catch(function(err) {
	self.$message(err.response.data.error)
});
   }



            
  })
   
  
},

  getFacebookLogin(data){
   
      return this.$store.dispatch('registerExternal', data).then((response) => {
	this.$router.push({
		name: 'Dashboard'
	})
	this.$store.dispatch('clearData')
}).catch(function(err) {
	//alert(err.response.data.error)
});



},



   validEmail:function(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },

  

     remember_me(value) {
      if(value){
        localStorage.setItem('remember_me', JSON.stringify(false));
      }else{
 localStorage.setItem('remember_me', JSON.stringify(true));
      }
      },

        getUserData(){
            this.FB.api('/me', 'GET',  { fields: 'id,name,email' },
             userInformation => {
               console.log(userInformation);
              this.personalID = userInformation.id;
              this.email = userInformation.email;
              this.name = userInformation.name;
              let details = {
                    "External_user_name": userInformation.name,
                    "Provider": "facebook", 
                    "ExternalUserID": userInformation.id,
                    "ExternalEmailId": userInformation.email
                  };
              this.getFacebookLogin(details);
              
             }
            )
        },


sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
     // if (this.isConnected) this.getUserData()
    },

         onLogin(d) {
     this.isConnected = true
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
       window.location.reload(); 
    },
      
    },
 
  
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
    float:right;
  }
  
  .form-simple {
    max-width: 346px;
    margin: 0 auto;
    margin-top: 16px;
    font-family: 'Nunito-Regular';
    width: 100%;
  }
  
  .form-simple ul {
    list-style-type: none;
    margin-left: 0px;
    border: 1px solid #dbdbdb;
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
    font-size: 20px;
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
    width: 100%;
    text-align: center;
  }
  
  
  .frm_opt span {
    background: rgba(255, 255, 255, 0.99) none repeat scroll 0 0;
    float: none;
    padding: 0px 10px;
    color: #9fa3a5;
    font-size: 18px;
  }
  
  .error {
    color: #f00
  }
  
  .logo {
    text-align: center;
  }
  
  html,
  body {
    background: #fff none repeat scroll 0 0;
  }

@media only screen and (min-width:320px) and (max-width:380px)
{
  .form-simple{  max-width: 300px !important;}
  .rem_frt span input[type="checkbox"]{margin-right:1px !important}
  .rem_frt{font-size:16px;}
}

.form-simple .container.button {
  background-image: linear-gradient(#4c69ba, #3b55a0);
  border-radius: 3px;
  height: 48px;
}
.form-simple .container.button button{
  background-image: linear-gradient(#4c69ba, #3b55a0);
  border: medium none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  line-height: 32px;
  margin-top: 6px;
  min-width: 225px;
  padding: 0 15px 0 46px;
  position: relative;
  width: 100%;
  top:8px;
}

.face_btn button{
  top:10px;
}
.logSelect{
  float:right;
      height: 43px;
    color: #000;
    border: 1px solid #999c9e;
    width: 188px;
        margin: 10px;
}
</style>
