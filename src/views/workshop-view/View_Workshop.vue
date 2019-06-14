<template>
  <section id="Specialist_detail_SA" class="profile_ww">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'Profile' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start p-0">
              <h4>{{ 'WorkshopInformation' | translate }}</h4>
            </div>
            <div class="col-6 d-flex flex-row">
               <!---<mdb-dropdown>
         
           mdb-dropdown-toggle slot="toggle">Select Language</mdb-dropdown-toggle>
             <mdb-dropdown-menu>
              <mdb-dropdown-item><a @click="changeLang('en')">English</a></mdb-dropdown-item>
              <mdb-dropdown-item><a @click="changeLang('esp')">Español</a></mdb-dropdown-item>
              <mdb-dropdown-item><a @click="changeLang('em')">Portugues</a></mdb-dropdown-item>
            </mdb-dropdown-menu
          </mdb-dropdown>-->
          <!--Select class="select_language" v-model="language" @change="changeLang($event)"><option value="esp">Select Language</option><option value="en">English</option><option value="esp">Español</option><option value="em">Portugues</option></select-->
           <button class="edit_btn" v-on:click="edit()">{{ 'EDIT' | translate }}</button>

            </div>
            
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
             <form class="md-form img_uplpad">
              <img v-bind:src="workshop.ImageUrl" class="driver profile_pic" height="100" width="100" />
              </form>
          
            <form>
              <ul>
                <li><label>{{ 'WorkshopName' | translate }}</label><span>{{workshop.WorkShopName}}</span></li>
              
                <li><label>{{ 'OwnerName' | translate }}</label><span>{{workshop.OwnerName}}</span></li>
              
                <li><label>{{ 'Email' | translate }}</label><span>{{workshop.Email}}</span></li>
            
                <li><label>{{ 'PhoneNumber' | translate }}</label><span>{{workshop.PhoneNumber}}</span></li>
                   <!--li><label>Latitude</label><span>{{workshop.Longitude}} </span></li>-->
                 <li><label>{{ 'Address' | translate }}</label><span>{{workshop.Address}}</span></li>
              </ul>
               <ul>
              
                <li><label>{{ 'City' | translate }}</label><span>{{workshop.City}}</span></li>
              
                <li><label>{{ 'Zone' | translate }}</label><span>{{workshop.Zone}}</span></li>
              
                <li><label>{{ 'State' | translate }}</label><span>{{workshop.State}} </span></li>
                <li><label>{{ 'Country' | translate }}</label><span>{{workshop.Country}} </span></li>
             
                <!--<li><label>Longitude</label><span>{{workshop.Latitude}} </span></li>-->
                
              <li><label>{{ 'Pincode' | translate }}</label><span>{{workshop.Pincode}} </span></li>
              
              </ul>
            </form>
           
            
            <!--/vehicleDetail-->
          </div>
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
import ls from 'local-storage'

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
    PageItem,mdbDropdown , mdbDropdownToggle , mdbDropdownMenu, mdbDropdownItem
  } from 'mdbvue'
  
  export default {
    name: 'View_Workshop',
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
      PageItem,mdbDropdown , mdbDropdownToggle , mdbDropdownMenu, mdbDropdownItem
    },
    
	data() {
		return {
			workshop: {},language:''
             
		}
	},
	created() {
		this.getWorkshopData()

	},
	methods: {
         changeLang(event){
          let lang =event.target.value;
          this.$i18n.set(lang)
          this.$root.$emit('lang', lang);
          window.localStorage.setItem('language', JSON.stringify(lang));

       },
		getWorkshopData() {
            	const userId = ls.get('userId');
			return this.$store.dispatch('getworkshopDetail', 'WorkShopProfile?UserID='+userId).then((response) => {
                       if(response.data.IsSuccess){
this.workshop = response.data.data;
window.localStorage.setItem('WorkShopID', JSON.stringify(this.workshop.WorkShopID));
                       }
       
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
	
	},
   edit(){
       this.$router.push({path: '/Profile_WW/' + this.workshop.WorkShopID})
    }
  }
}

    
</script>

<style scoped>
 button.edit_btn {
    background: #0066d0;
    padding: 13px 20px 13px;
    line-height: 11px;
    font-size: 17px;
}
form.md-form.img_uplpad {
    width: 104px;
    height: 104px;
    border: 3px solid #1a8af9;
    border-radius: 100%;
}
form.md-form.img_uplpad img {
    width: 97px;
    height: 97px;
}


.dropdown{
    margin-left: auto;
    margin-right: 1rem;
    text-transform: capitalize;
}
.dropdown-menu[data-v-70cf9991] {
    position: absolute;
    left: 43px !important;
}
.btn-default.dropdown-toggle {
  background: #2ecc71 !important;
}
@media only screen and (min-width:320px) and (max-width:767px)
{
#Specialist_detail_SA.profile_ww .driver_vehicle form ul{width:100%;}
}
</style>
