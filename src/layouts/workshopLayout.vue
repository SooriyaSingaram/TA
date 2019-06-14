<template>
<div class="flexible-content workshop_content">
<button @click="isShowing ^= true" class="click me mobile_btn"><img src="../assets/images/mobile_icon.png"/></button>
    <!--Navbar-->
    <navbar class="flexible-navbar white" position="top" name="MDB" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav right>
          <mdb-dropdown class="ss_drop">
            <mdb-dropdown-toggle slot="toggle">Select Language</mdb-dropdown-toggle>
             <mdb-dropdown-menu>
              <mdb-dropdown-item><a @click="changeLang('en')">English</a></mdb-dropdown-item>
              <mdb-dropdown-item><a @click="changeLang('esp')">Español</a></mdb-dropdown-item>
              <mdb-dropdown-item><a @click="changeLang('em')">Portugues</a></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <navbar-item href="" waves-fixed active>Who we are</navbar-item>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>About Services</navbar-item>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>Free Contact Us</navbar-item>
          <navbar-item href="https://mdbootstrap.com/bootstrap-tutorial/" waves-fixed>Free tutorials</navbar-item>
          <navbar-item href="#!" waves-fixed class="cart_info"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></navbar-item>
          <span class="prof_ico"><img src="../assets/images/profile_mg.png"/></span>
          <mdb-dropdown>
            <mdb-dropdown-toggle slot="toggle">Basic dropdown</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              <div class="dropdown-divider"></div>
              <mdb-dropdown-item>Separated link</mdb-dropdown-item>
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

     <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
  <span>Are you sure want to logout?</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click=" log_out();" >ok</el-button>  
    <el-button type="danger" @click="centerDialogVisible = false">Cancel</el-button>
</span>
</el-dialog>
       
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="../assets/images/logo.png"/></a>
     <list-group-item>
     <Select class="form-control select_languageWorkshop" v-model="language" @change="changeLang($event)"><option value="esp">Select Language</option><option value="en">English</option><option value="esp">Español</option><option value="em">Portugues</option></select>
</list-group-item>
      <list-group class="list-group-flush">
        <router-link to="/View_Workshop" @click.native="activeItem = 1">
          <list-group-item :action="true" :class="activeItem === 1 && 'active'"><img src="../assets/images/sidebar_icon/dash_icon.png"/> {{ 'Profile' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Services_WW" @click.native="activeItem = 2">
          <list-group-item :action="true" :class="activeItem === 2 && 'active'"><img src="../assets/images/sidebar_icon/vehicle_icon.png"/>{{'SERVICES' | translate}}</list-group-item>
        </router-link>
           <list-group-item :action="true" :class="activeItem === 9 && 'active'"><a v-on:click="centerDialogVisible = true"><img src="../assets/images/sidebar_icon/signout_icon.png"/>{{ 'logout' | translate }}</a></list-group-item>

      </list-group>

    </div>
    <!-- /Sidebar  -->

      <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed mobile" style="position:relative;"  v-show="isShowing">
     <a class="close_icon"  @click="closebtn()" style="color: #007bff;
    font-size: 19px;position: absolute; right: 11px;border: 2px solid #007bff;  padding: 6px;border-radius: 44px;
    width: 40px; height: 40px;  text-align: center;  line-height: 18px;  top: 11px;">X</a>
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="../assets/images/logo.png"/></a>
      <list-group class="list-group-flush">
        <router-link to="/View_Workshop" @click.native="activeItem = 1">
          <list-group-item :action="true" :class="activeItem === 1 && 'active'"><img src="../assets/images/sidebar_icon/dash_icon.png"/> {{ 'Profile' | translate }}</list-group-item>
        </router-link>
        <router-link to="/Services_WW" @click.native="activeItem = 2">
          <list-group-item :action="true" :class="activeItem === 2 && 'active'"><img src="../assets/images/sidebar_icon/vehicle_icon.png"/>{{'SERVICES' | translate}}</list-group-item>
        </router-link>
           <list-group-item :action="true" :class="activeItem === 9 && 'active'"><a v-on:click="centerDialogVisible = true"><img src="../assets/images/sidebar_icon/signout_icon.png"/>Sign Out</a></list-group-item>

      </list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="">
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
      activeItem: 1,
      centerDialogVisible: false,
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
   },
     methods:{
       changeLang(event){
          let lang =event.target.value;
          this.$i18n.set(lang)
          this.$root.$emit('lang', lang);
                    window.localStorage.setItem('language', JSON.stringify(lang));

       },

//$i18n.set(locale), Vue.i18n.set(locale)
        closebtn(){
        this.isShowing =false;
      },
       log_out: function () {   
        var self =this;
    window.localStorage.clear();
      self.$router.push({
		  name: 'Login_WW'
	  })
      
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
select.select_languageWorkshop {
    width: 165px;
    margin-right: 5px;
    /* margin-left: auto; */
    padding-left: 10px;
    background: transparent;
    color: #0066d0;
    border: 1px solid #0066d0;
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
</style>
<style>
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}


</style>