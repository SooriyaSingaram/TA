<template>
  <section id="MaintenanceHistory">
    <div class="container-fluid">
      <div class="row">
  
        <div class="col-12 main-title">
          <h2>{{ 'MyVehicles' | translate }}</h2>
        </div>
  
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start">
              <h4>{{ 'MaintenanceHistory' | translate }}</h4>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec health_index_sec">
  
            <div class="col-12 p-0">
  
              <div class="main_hsty_tlt">{{ 'findTheLatestMaintenancePerformedToVehicles' | translate }}</div>
  
              <div class="main_histry_lst d-flex justify-content-between" v-for="historydata in historylist">
                <div class="lft_mh">{{historydata.MainServiceName}} <span style="padding-left:30px;">{{historydata.ServiceDate | formatDate(historydata.ServiceDate)}}</span></div>
                <div class="rgt_mh">
                <button v-on:click="maintainanceview(historydata.CarOwnerServiceId)">{{ 'VIEW' | translate }}</button>
                <!--<router-link to="/Maintenancehistorydetail/0">View</router-link>-->
                </div>
              </div>
  
              <!--<div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintenance - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">View</router-link>
                </div>
              </div>
  
  
              <div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintenance - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">View</router-link>
                </div>
              </div>
  
              <div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintenance - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">View</router-link>
                </div>
              </div>-->
  
            </div>
  
  
            <div class="sub_btn back_btn">
              <btn class="cancel_btn" @click="$router.go(-1)">{{ 'BACK' | translate }}</btn>
            </div>
  
          </div>
        </div>
  
  
  
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    name: 'Healthindex',
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
        historydata:[],
        mainlist:{}
      }
    },
      	computed: {
		...mapGetters({
			historylist: "gethistoryList", 
		})
	},
  	created() {
		this.getHistoryParam();
	},

  methods: {
		getHistoryParam() {
			

                  let vehicleId = this.$route.params.id;
                   this.$store.dispatch('gethistoryList', vehicleId)
                  
         
		},
	
     maintainanceview(id){
      console.log(id);
      this.$router.push({path: '/Maintenancehistorydetail/' + id})
  }


	},

  watch: {
		'gethistoryList': {
			deep: true,
			handler(value) {
				this.historydata = null
				this.historydata = this.gethistoryList;
        console.log(this.gethistoryList)
			}
		}
  
	},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .health_index_sec {
    background: #fff;
  }
  
  .main_hsty_tlt {
    font-size: 17px;
    margin-bottom: 30px;
    color: #36383e;
  }
  
  .main_histry_lst {
    margin-bottom: 15px;
    background: #f2f5f7;
    padding: 13px 20px;
  }
  
  .main_histry_lst .lft_mh {
    color: #36383e;
    font-size: 18px;
  }
  
  .main_histry_lst .rgt_mh {
    background: #2ecc71 none repeat scroll 0 0;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    height:29px;
    width: 90px;
    text-align: center;
    max-width: 100%;
  }
  
  .main_histry_lst .rgt_mh a {
    color: #fff;
  }
  
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }

  .rgt_mh button {
    padding: 0px;
    background: transparent;
}
</style>
