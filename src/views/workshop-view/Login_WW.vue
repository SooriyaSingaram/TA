<template>
  <div class="container_fluid workshop-login-bg">
    <div class="row">
      <div class="col-xs-12 workshop-login-main">
        <div class="workshop-login-all">
          <div class="workshop-login-block">
            <div class="workshop-heading">
              <div class="workshop-heading-text">
                <h1>{{ 'LOGIN' | translate }}</h1>
              </div>
              </div>
            <div class="col-12">
              <div class="workshop-logo">
                <img src="../../assets/images/logo.png">
              </div>
            </div>
 
            <div class="col-12 workshop-login-info-main">
              <div class="workshop-login-info col-12">
                <label>{{ 'UserName' | translate }}</label>
                <input type="text" v-validate="'required|email'"  name="email" v-model="form.email" placeholder="sampletext@mail.com">
                <span v-show="errors.has('email')" class="help is-danger" >{{ 'emailValidation' | translate }}</span>

              </div>
              <div class="workshop-login-info col-12">
                <label>{{ 'Password' | translate }}</label>
                <input type="password" v-model="form.password" v-validate="'required'" name="password"  placeholder="********">
                             <span v-show="errors.has('password')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>

              </div>
  
              <div class="col-12 forgot-link">
                <a href="#">
                  <router-link to="Forgotpassword_WW"> {{ 'ForgotPassword' | translate }}?</router-link>
                </a>
              </div>
              <div class="col-12" style="text-align:right;">
                    <mdb-btn type="submit" @click="onSubmit()" class="workshop-login-btn">{{ 'LOGIN' | translate }}</mdb-btn>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
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
    name: 'Login_WW',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn
    },props: {
    selectedlanguage:String
},
   
    data() {
      debugger
      return {
         

        form: {
          email: '',
          password: ''
        },
  
        show: true,language:this.selectedlanguage
      }
    },
     created() {
       let selected_language=JSON.parse(localStorage.getItem('language'));
    if(selected_language){
 this.$i18n.set(selected_language)

 this.selectedlanguage=selected_language;
 this.$root.$emit('lang', selected_language);
    }
   },
    methods: {
 onSubmit() {
   this.$validator.validateAll().then((result) => {
            if (result) {
        
   var self =this;
	const formValues = {
		username: this.form.email,
		password: this.form.password,
    grant_type: "password",
		Scope:3
	}

return this.$store.dispatch('loginUser', formValues).then((response) => {
  
	self.$router.push({
		name: 'View_Workshop'
	})
	self.$store.dispatch('clearData')
}).catch(function(err) {
  self.$message({
            type: 'error',
            message: err.response.data.error
          });
});
            }
   })

}
  
    }
  
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,
  body {
    background: #fff none repeat scroll 0 0;
  }
  
  
  /*Login*/
  
  .workshop-login-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url(../../assets/images/workshop/workshop-bg.jpg) no-repeat fixed center;
    background-size: cover;
    /* background-position: 100% 100%; */
  }
  
  .workshop-login-block {
    width: 420px;
    height: auto;
    background: #eef3fa;
    padding: 30px 0px;
    padding-top: 0;
    border-radius: 5px;
    /*margin-top: 4.5%;*/
    display: inline-block;
    vertical-align: middle;position: relative;
    /*margin-top: 70px;*/
  }
   .workshop-heading
   {
        position: absolute;
    top: -15px;
    left: 45px;
   }
  .workshop-heading-text h1
  {
      font-size: 18px;
    position: relative;
    color: #fff;
    font-family: 'Nunito-Medium';
    margin: 0;
    text-align: center;
    padding: 14px 35px;
    border-radius: 5px;
    border-top-left-radius: 0;
    background: #4da4ea;
    line-height: initial;
    text-transform: uppercase;
  }
     .workshop-heading-text h1:after
    {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    content: '';
    position: absolute;
    left: -8px;
    top: 1px;
    border-right: 10px solid #2b79b8;
    transform: rotate(-135deg);-webkit-transform: rotate(-135deg);-moz-transform: rotate(-135deg);-ms-transform: rotate(-135deg);
    }
  .workshop-logo {
   position: relative;
    height: 60px;
    margin-top: 60px;
    margin-bottom: 24px;
  }
  
  .workshop-logo img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
  
  .workshop-login-info {
    margin-bottom:20px;
  }
  
  .workshop-login-info label {
    text-align: left;
    color: #7a7a7a;
    font-size: 20px;
    font-weight: normal;
    margin: 0;
    padding-bottom: 10px;
    width: 100%; font-family: 'Nunito-Medium';
  }
  
  .workshop-login-info input {
    border: none;
    width: 100%;
    color: #7a7a7a;
    font-size: 17px;
    padding: 10px 20px;
    height: 50px;
    background: #fff;
    border-radius: 5px; font-family: 'Nunito-Medium';
  }
  
  .workshop-login-info input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #7a7a7a;
  }
  
  .workshop-login-info input::-moz-placeholder {
    /* Firefox 19+ */
    color: #7a7a7a;
  }
  
  .workshop-login-info input:-ms-input-placeholder {
    /* IE 10+ */
    color: #7a7a7a;
  }
  
  .workshop-login-info input:-moz-placeholder {
    /* Firefox 18- */
    color: #7a7a7a;
  }
  
  .workshop-login-info input:hover,
  .workshop-login-info input:active,
  .workshop-login-info input:focus {
    outline: 0;
  }
  

  
   .workshop-login-btn,
   .workshop-login-btn:hover,.workshop-login-btn:focus,.workshop-login-btn:active {
            background: #007df8!important;
    color: #fff;
    text-transform: uppercase;
    border: 0px;
    font-family: 'Nunito-Bold';
    border-radius: 5px;
    margin-top: 20px;
    font-size: 18px;
    padding: 12px 0px;
    width: 180px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .btn-default:not([disabled]):not(.disabled):active, .btn-default:not([disabled]):not(.disabled).active, .show > .btn-default.dropdown-toggle
  {
     background: #007df8!important;
  }
  .workshop-login-info-main {
    padding: 0 30px;
  }
  
  .workshop-login-all {
    padding-left: 100px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
  }
  
  .workshop-login-main {
    display: table;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .forgot-link
  {
text-align: right;
  }
  .forgot-link a
  {
    
    font-size: 18px;
    color:#007df8;
    font-family: 'Nunito-Medium';
  }
      @media (max-width: 767px)
  {
  .workshop-login-block{width: 300px;}
  .workshop-login-all{padding-left:20px;text-align: center;}
  .workshop-login-info-main{padding: 0 10px;}
  }
  /*Login*/
</style>
