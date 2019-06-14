<template>
 
<div class="flexible-content superadmin_content">
<button @click="isShowing ^= true" class="click me mobile_btn"><img src="../assets/images/mobile_icon.png"/></button>
    <!--Navbar-->
  
    <navbar class="flexible-navbar white" position="top" name="MDB" href="#" scrolling>
    
      <navbar-collapse>
         
        <navbar-nav right>
        <!--mdb-dropdown class="ss_drop">
            <mdb-dropdown-toggle slot="toggle">Select Language</mdb-dropdown-toggle>
             <mdb-dropdown-menu>
              <mdb-dropdown-item><a @click="changeLang('en')">English</a></mdb-dropdown-item>
              <mdb-dropdown-item><a @click="changeLang('esp')">Español</a></mdb-dropdown-item>
              <mdb-dropdown-item><a @click="changeLang('em')">Portugues</a></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown-->
                    <Select class="select_language1" v-model="language" @change="changeLang($event)"><option value="en">Select Language</option><option value="en">English</option><option value="esp">Español</option><option value="em">Portugues</option></select>

        <navbar-item href="/who_we_are_SA" waves-fixed active></navbar-item>
          <navbar-item href="/who_we_are_SA" waves-fixed active>{{ 'Whoweare' | translate }} </navbar-item>
          <navbar-item href="/Service_SA" waves-fixed>{{ 'SERVICES' | translate }} </navbar-item>
          <navbar-item href="/Contact_us_SA" waves-fixed>{{ 'ContactUS' | translate }}</navbar-item>
          <!--<navbar-item href="/Workshop_list_SA" waves-fixed>I'm a Workshop</navbar-item>-->
          <navbar-item href="#!" waves-fixed class="cart_info"><i class="fa fa-bell-o" aria-hidden="true"></i>
</navbar-item>
          <span class="prof_ico"><img src="../assets/images/profile_mg.png"/></span>
          <mdb-dropdown>
            <mdb-dropdown-toggle slot="toggle">{{this.userprofilename.Firstname}}</mdb-dropdown-toggle>
             <mdb-dropdown-menu>
              <mdb-dropdown-item><a @click="changepasswordPopup = true">{{ 'changePassword' | translate }}</a></mdb-dropdown-item>
              <mdb-dropdown-item><a v-on:click="centerDialogVisible = true">{{ 'logout' | translate }}</a></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </navbar-nav>
        
        <!--<navbar-nav right>
          <navbar-item href="#!" waves-fixed><fa class="text-black" icon="facebook"/></navbar-item>
          <navbar-item href="#!" waves-fixed><fa icon="twitter"/></navbar-item>
          <navbar-item href="https://github.com/mdbootstrap/bootstrap-material-design" waves-fixed class="border border-light rounded mr-1" target="_blank"><fa icon="github" class="mr-2"/>MDB GitHub </navbar-item>
          <navbar-item href="https://mdbootstrap.com/product/vue-bootstrap-pro/" waves-fixed class="border border-light rounded" target="_blank"><fa icon="diamond" class="mr-2"/>Go Pro </navbar-item>
        </navbar-nav>-->
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
  <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
  <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px;
    padding-bottom: 20px;">{{ 'Warning' | translate }}</h2>
  <span>{{ 'logoutConfirmation' | translate }}</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click=" log_out();" >{{ 'OK' | translate }}</el-button>  
    <el-button type="danger" @click="centerDialogVisible = false">{{ 'CANCEL' | translate }}</el-button>
</span>
</el-dialog>
      


      <el-dialog  :visible.sync="changepasswordPopup" width="30%" center>
  <div class="container-fluid workdeta1">
      <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px;
    padding-bottom: 20px;">{{ 'changePassword' | translate }}</h2>
            <div class="row">
        
                    <div class="col-lg-3 col-md-6">
                    <span>{{ 'OldPassword' | translate }}</span>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="form.OldPassword"  required >
                    </div>
                    </div><br>
                     <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <span>{{ 'NewPassword' | translate }}</span>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="form.NewPassword"  required >
                    </div>
                    </div>
                     <!--div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>Confirm Password</h3>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="serviceDetail.confirmPassword"  required >
                    </div>
                    </div-->
                  
             </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="changepassworddialog = false; changePassword();" >{{ 'confirm' | translate }}</el-button>  
    
    <el-button type="danger" @click="changepassworddialog = false">{{ 'CANCEL' | translate }}</el-button>
</span>
</el-dialog>
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed " >
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="../assets/images/sidebar_icon/SA/To_logo_SA.png"/></a>
      <list-group class="list-group-flush   content mCustomScrollbar">
        <router-link to="/Dashboard_SA" @click.native="activeItem = 1">
          <list-group-item :action="true" :class="activeItem === 1 && 'active'"><img src="../assets/images/sidebar_icon/SA/dash_SA.png"/>{{ 'DASHBOARD' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Customer_SA" @click.native="activeItem = 2">
          <list-group-item :action="true" :class="activeItem === 2 && 'active'"><img src="../assets/images/sidebar_icon/SA/custom_SA.png"/>{{ 'CUSTOMERS' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Service_SA"  @click.native="activeItem = 3">
          <list-group-item :action="true" :class="activeItem === 3 && 'active'"><img src="../assets/images/sidebar_icon/SA/service_SA.png"/>{{ 'SERVICES' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Quotes_SA" @click.native="activeItem = 4">
          <list-group-item :action="true" :class="activeItem === 4 && 'active'"><img src="../assets/images/sidebar_icon/SA/quotes_SA.png"/>{{ 'QUOTES' | translate }}</list-group-item>
        </router-link>
        <router-link to="/ProactiveService_SA" @click.native="activeItem = 5">
          <list-group-item :action="true" :class="activeItem === 5 && 'active'"><img src="../assets/images/sidebar_icon/SA/PS_SA.png"/>{{ 'PROACTIVESERVICES' | translate }}</list-group-item>
        </router-link>
          <router-link to="/adminservices" @click.native="activeItem = 6">
          <list-group-item :action="true" :class="activeItem === 6 && 'active'" class="service_main"><div v-on:click='isOpen = !isOpen' class="serv_arw"><img src="../assets/images/sidebar_icon/SA/AF_SA.png"/>{{ 'AdminFunctions' | translate }}<i class="fa fa-angle-down" aria-hidden="true"></i></div>
          <ul class="service_list" v-show="isOpen" >
             <li class="current"><router-link to="/adminservices">{{ 'SERVICES' | translate }} </router-link></li>
              <li><router-link to="/city-zone">{{ 'cityZone' | translate }}</router-link></li>
                      <li><router-link to="/health-index-master">{{ 'HealthIndex' | translate }}</router-link></li>

             <li><router-link to="/vehicle-model">{{ 'Vehicle' | translate }}</router-link></li>
             <li><router-link to="/Specialist_SA">{{ 'Specialist' | translate }}</router-link></li>
             <li><router-link to="/Drivers_SA">{{ 'Driver' | translate }}</router-link></li>
             <li><router-link to="/Workshop_list_SA">{{ 'Workshops' | translate }}</router-link></li>
             <li><router-link to="/Corporate_agreement_SA">{{ 'CorporateAgreement' | translate }}</router-link></li>
            </ul>
            </list-group-item>
        </router-link>

          <router-link to="/Taller_online_community_SA" @click.native="activeItem = 7">
          <list-group-item :action="true" :class="activeItem === 7 && 'active'"><img src="../assets/images/sidebar_icon/SA/Toc_SA.png"/>{{ 'TallerOnlineCommunity' | translate }}</list-group-item>
        </router-link>

         <router-link to="/rating_SA" @click.native="activeItem = 8">
          <list-group-item :action="true" :class="activeItem === 8 && 'active'"><img src="../assets/images/sidebar_icon/SA/ratings_SA.png"/>{{ 'Ratings' | translate }}</list-group-item>
        </router-link>


         <router-link to="/reports_SA" @click.native="activeItem = 9">
          <list-group-item :action="true" :class="activeItem === 9 && 'active'"><img src="../assets/images/sidebar_icon/SA/reports_SA.png"/>{{ 'Reports' | translate }}</list-group-item>
        </router-link>
        

             <list-group-item :action="true" :class="activeItem === 10 && 'active'"><a v-on:click="centerDialogVisible = true"><img src="../assets/images/sidebar_icon/signout_icon.png"/>{{ 'logout' | translate }}</a></list-group-item>



      </list-group>

      

    </div>
    <!-- /Sidebar  -->

    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed mobile" style="position:relative;"  v-show="isShowing" >
      <a class="close_icon"  @click="closebtn()" style="color: rgb(255, 255, 255);
    font-size: 19px;position: absolute; right: 11px;border: 2px solid #fff;  padding: 6px;border-radius: 44px;
    width: 40px; height: 40px;  text-align: center;  line-height: 18px;  top: 11px;">X</a>
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="../assets/images/sidebar_icon/SA/To_logo_SA.png"/></a>
      <list-group class="list-group-flush  content mCustomScrollbar">
        <router-link to="/Dashboard_SA" @click.native="activeItem = 1">
          <list-group-item :action="true" :class="activeItem === 1 && 'active'"><img src="../assets/images/sidebar_icon/SA/dash_SA.png"/>{{ 'DASHBOARD' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Customer_SA" @click.native="activeItem = 2">
          <list-group-item :action="true" :class="activeItem === 2 && 'active'"><img src="../assets/images/sidebar_icon/SA/custom_SA.png"/>{{ 'CUSTOMERS' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Service_SA"  @click.native="activeItem = 3">
          <list-group-item :action="true" :class="activeItem === 3 && 'active'"><img src="../assets/images/sidebar_icon/SA/service_SA.png"/>{{ 'SERVICES' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Quotes_SA" @click.native="activeItem = 4">
          <list-group-item :action="true" :class="activeItem === 4 && 'active'"><img src="../assets/images/sidebar_icon/SA/quotes_SA.png"/>{{ 'QUOTES' | translate }}</list-group-item>
        </router-link>
        <router-link to="/ProactiveService_SA" @click.native="activeItem = 5">
          <list-group-item :action="true" :class="activeItem === 5 && 'active'"><img src="../assets/images/sidebar_icon/SA/PS_SA.png"/>{{ 'PROACTIVESERVICES' | translate }}</list-group-item>
        </router-link>
          <router-link to="/adminservices" @click.native="activeItem = 6">
          <list-group-item :action="true" :class="activeItem === 6 && 'active'" class="service_main"><div v-on:click='isOpen = !isOpen' class="serv_arw"><img src="../assets/images/sidebar_icon/SA/AF_SA.png"/>{{ 'AdminFunctions' | translate }}<i class="fa fa-angle-down" aria-hidden="true"></i></div>
          <ul class="service_list" v-show="isOpen" >
             <li class="current"><router-link to="/adminservices"> {{ 'SERVICES' | translate }}</router-link></li>
             <li  ><router-link to="/vehicle-model">{{ 'Vehicle' | translate }}</router-link></li>
             <li  ><router-link to="/Drivers_SA">{{ 'Driver' | translate }}</router-link></li>
             <li><router-link to="/Specialist_SA">{{ 'Specialist' | translate }}</router-link></li>
             <li><router-link to="/city-zone">{{ 'cityZone' | translate }}</router-link></li>

             <li><router-link to="/health-index-master">{{ 'HealthIndex' | translate }}</router-link></li>
             <li><router-link to="/Workshop_list_SA">{{ 'Workshops' | translate }}</router-link></li>
             <li><router-link to="/Corporate_agreement_SA">{{ 'CorporateAgreement' | translate }}</router-link></li>
            </ul>
            </list-group-item>
        </router-link>

          <router-link to="/Taller_online_community_SA" @click.native="activeItem = 7">
          <list-group-item :action="true" :class="activeItem === 7 && 'active'"><img src="../assets/images/sidebar_icon/SA/Toc_SA.png"/>{{ 'TallerOnlineCommunity' | translate }}</list-group-item>
        </router-link>

         <router-link to="/rating_SA" @click.native="activeItem = 8">
          <list-group-item :action="true" :class="activeItem === 8 && 'active'"><img src="../assets/images/sidebar_icon/SA/ratings_SA.png"/>{{ 'Ratings' | translate }}</list-group-item>
        </router-link>

         <router-link to="/reports_SA" @click.native="activeItem = 9">
          <list-group-item :action="true" :class="activeItem === 9 && 'active'"><img src="../assets/images/sidebar_icon/SA/reports_SA.png"/>{{ 'Reports' | translate }}</list-group-item>
        </router-link>
        

             <list-group-item :action="true" :class="activeItem === 10 && 'active'"><a v-on:click="centerDialogVisible = true"><img src="../assets/images/sidebar_icon/signout_icon.png"/>{{ 'logout' | translate }}</a></list-group-item>



      </list-group>

      

    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 pt-2">
        <router-view></router-view>
      </div>
     
    </main>
  </div>

</template>

<script>
import { Container, Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbDropdown , mdbDropdownToggle , mdbDropdownMenu, mdbDropdownItem, Btn, Fa, ListGroup, ListGroupItem, CardBody, Footer, waves } from 'mdbvue'

import Dashboard from '@/views/customer-view/Dashboard'
import Myvehicles from '@/views/customer-view/Myvehicles'
import Addnewvehicle from '@/views/customer-view/Addnewvehicle'
import Vehicledetail from '@/views/customer-view/Vehicledetail'
import Healthindex from '@/views/customer-view/Healthindex'
import MaintenanceHistory from '@/views/customer-view/MaintenanceHistory'
import GetQuote from '@/views/customer-view/GetQuote'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js';
export default {
  name: 'customerLayout',
  components: {
  Container,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    ListGroup,
    ListGroupItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    Fa,
    CardBody,
    'ftr': Footer,
     Dashboard,
     Myvehicles,
     Addnewvehicle,
     Vehicledetail,
     Healthindex,
     MaintenanceHistory,
     GetQuote
  },props: {
    selectedlanguage:String
},
   data () {
    return {
       centerDialogVisible: false,
       changepasswordPopup: false,
      activeItem: 1,
        isOpen: false,
        userprofilename: {},
         form: {},
          isShowing:true,language:this.selectedlanguage
    }
  },
   created() {
       let selected_language=JSON.parse(localStorage.getItem('language'));
    if(selected_language){
 this.$i18n.set(selected_language)

 this.selectedlanguage=selected_language;
 this.$root.$emit('lang', selected_language);
    }
		this.getUserprofileParam();  
    this.bindScrollbar()
	},
    methods:{

        bindScrollbar(){

    $(".content").mCustomScrollbar({
          theme:"light",
        });

        },

        mounted(){
      this.bindScrollbar();
    },

 changeLang(event){
     let lang =event.target.value;
this.$i18n.set(lang)
 this.$root.$emit('lang', lang);
           window.localStorage.setItem('language', JSON.stringify(lang));

       },
      closebtn(){
        this.isShowing =false;
      },


        changePassword(){
	var self = this;
  var updatePassword={
    url:'/Common/ChangePassword',
    Email:this.form.Email,
    OldPassword:this.form.OldPassword,
    NewPassword:this.form.NewPassword,
    RoleId:Number(localStorage.getItem('role').slice(1, -1)),
    UserId:Number(localStorage.getItem('userId').slice(1, -1)),
    Email:localStorage.getItem('email').slice(1, -1),
  }  
			return this.$store.dispatch('updateData', updatePassword).then((response) => {
				self.$message(response.data.Message)
				self.$router.push({
					name: 'Login'
				})
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
    },

   getUserprofileParam(){
              this.userprofilename.Firstname = JSON.parse(localStorage.getItem('firstname'));
              console.log(this.userprofilename.Firstname);
 },
log_out () {
        var self =this;
       
    window.localStorage.clear();
      self.$router.push({
		  name: 'Login_SA'
	  })
       
      
    },
       getUserprofileParam(){
              this.userprofilename.Firstname = JSON.parse(localStorage.getItem('firstname'));
              console.log(this.userprofilename.Firstname);
 
  }
    },
  beforeMount () {
    this.activeItem = this.$route.matched[0].props.default.page
  },
  mixins: [waves]

 

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  background-color: #EDEDEE;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

.service_list {
  margin-top: 15px;
  padding-left: 40px;
}

.service_list li a {
  color: #edf5fd;
  display: flex;
  font-size: 16px;
  margin-bottom: 13px;
  opacity:0.5;
}
.service_list li a.router-link-active{
  opacity:1;
    list-style-type:disc;
    color:#fff !important;
    position:relative;
}


.service_list li:last-child a{
  margin-bottom:0px;
}

.service_list a.router-link-active::after {
  content: '\f111';
  font-family: fontawesome;
  left: -19px;
  position: absolute;
   font-size: 10px;
   top:7px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .sidebar-fixed.mobile{
    display: block;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}

/*.service_main .serv_arw::before {
    content: '\f107';
    font-family: FontAwesome;
    background: transparent;
    border: 0px;
    font-size: 28px;
    position: absolute;
    z-index: 999;
    right: 18px;
    top: 4px;
    width: auto;
    color: #fff;
    max-width:100%;
}


.service_main .serv_arw {
    border: 0px;
    background: transparent;
    width: 20px;
    height: 20px;
    float: right;
    cursor:pointer;
    margin-right:-4px;
}
.service_main .serv_arw:focus{border:0px;}*/
.service_main {
    position: relative;
}
.serv_arw i {
  float: right;
  font-size: 23px;
  margin-top:3px;
}
.superadmin_content .logo-wrapper {
  background: #007df8 none repeat scroll 0 0;
}
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
li{
   text-transform: capitalize;
}


</style>
