<template>
  <section id="Dashboard1_SA">
   <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'DASHBOARD' | translate }}</h2>
      </div>
       <div class="col-12 d-flex flex-wrap content_section no-padding">
         
          <div class="dash-top-sec d-flex flex-row  no-padding" @click="redirect('Customer_SA')">
            <img src="../../assets/images/red-img.png"/>
            <div class="colour_img_bg d-flex flex-row">
                <span>Total 
                  <br> {{ 'TotalCustomers' | translate }}<b>{{DashboardCount.CustomerCount}}</b></span>
            </div>
          </div>
          <div class="dash-top-sec d-flex flex-row no-padding" @click="redirect('Drivers_SA')">
             <img src="../../assets/images/green-img.png"/>
            <div class="colour_img_bg d-flex flex-row">
                <span>Total <br>{{ 'TotalDrivers' | translate }} <b>{{DashboardCount.DriverCount}}</b></span>
            </div></router-link>
          </div>
          <div class="dash-top-sec d-flex flex-row no-padding" @click="redirect('Specialist_SA')">
            <img src="../../assets/images/purple-img.png"/>
            <div class="colour_img_bg d-flex flex-row">
                <span>Total <br>{{ 'TotalSpecialist' | translate }} <b>{{DashboardCount.SpecialistCount}}</b></span>
            </div>
          </div>
          <div class="dash-top-sec d-flex flex-row  no-padding" @click="redirect('Workshop_list_SA')">
            <img src="../../assets/images/blue-img.png"/>
            <div class="colour_img_bg d-flex flex-row">
                <span>Total <br>{{ 'TotalWorkshops' | translate }} <b>{{DashboardCount.WorkshopCount}}</b></span>
            </div>
          </div>
          </div>
          <div class="col-12">
            <hr>
            </div>
          <div class="dash_SA_heading">
            <span>{{'TheScheduledServiceforToday' | translate}}</span>
          </div>
       <div class="col-12 content_section_scroll">
          <div class="content_section_table">
          <table width="100%" class="table table-striped">
            <thead>
              <tr>
                <!--<th>#</th>
                <th>Vehicle</th>
                <th>Plate</th>
                <th>Customer</th>
                <th>Especialist</th>
                <th>Status</th>
                <th>Action</th>-->
                <th>#</th>
                <th>{{'CustomerName' | translate}}</th>
                <th>{{'ServiceType' | translate}}</th>
                <th>{{'Brand' | translate}}</th>
                <th>{{'Model' | translate}}</th>
                <th>{{'Value' | translate}}</th>
                <th>{{'Status' | translate}}</th>
                <th>{{'Action' | translate}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ScheduledServiceData,i) in ScheduledServiceDashboardList">
                <td>{{i+1}}</td>
                <td>{{ScheduledServiceData.CustomerName}}</td>
                <td>{{ScheduledServiceData.ServiceType}}</td>
                <td>{{ScheduledServiceData.Brand}}</td>
                <td>{{ScheduledServiceData.Model}}</td>
                <td>{{ScheduledServiceData.ServiceAmount}}</td>
                <td>{{ScheduledServiceData.Status}}</td>
                <td class="action-ic">
                   <!-- <router-link to="/Dashboard_detail1_SA"><img src="../../assets/images/eyeedit.png"/> </router-link>-->
                  <button v-on:click="ScheduledServiceDashboard(ScheduledServiceData.CarOwnerServiceId);"><img src="../../assets/images/eyeedit.png"/> </button>
                </td>
              </tr>
           
            </tbody>
          </table>
           </div>
            </div>
            <div class="load-more d-flex justify-content-end col-12">
               <p><router-link to="/Service_SA">{{'ViewMore' | translate}}</router-link></p>
          </div>
           

            <div class="dash_SA_heading">
            <span>{{'TheQuotesRemainingtobeCompleted' | translate}}</span>
          </div>
       <div class="col-12 content_section_scroll">
          <div class="content_section_table">
          <table width="100%" class="table table-striped">
            <thead>
              <tr>
              

               <th>#</th>
                 <th>{{'CustomerName' | translate}}</th>
                <th>{{'ServiceType' | translate}}</th>
                <th>{{'Details' | translate}}</th>
                <th>{{'CreationDate' | translate}}</th>
                <th>{{'Status' | translate}}</th>
                <th>{{'Action' | translate}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(QuotesData,i) in QuotesDashboardList">
               <td>{{i+1}}</td>
                <td>{{QuotesData.CustomerName}}</td>
                <td>{{QuotesData.MainServicesName}}</td>
                <td>{{QuotesData.Details}}</td>
                <td>{{QuotesData.CreatedDate | formatDate(QuotesData.CreatedDate)}}</td>
                <td>{{QuotesData.Status}}</td>
                <td class="action-ic">
                 <button v-on:click="QuotesDashboardbtn(QuotesData.CollisionAndPaintId);"><img src="../../assets/images/eyeedit.png"/> </button>
                </td>
              </tr>
           
            </tbody>
          </table>
           </div>
            </div>
            <div class="load-more d-flex justify-content-end col-12">
          <p><router-link to="/Quotes_SA">{{'ViewMore' | translate}}</router-link></p>
          </div>

<div class="dash_SA_heading">
            <span>{{'ProactiveServicesfollowup' | translate}}</span>
          </div>
       <div class="col-12 content_section_scroll">
          <div class="content_section_table">
          <table width="100%" class="table table-striped">
            <thead>
              <tr>
                 <th>#</th>
                  <th>{{'CustomerName' | translate}}</th>
                <th>{{'Brand' | translate}}</th>
                <th>{{'Model' | translate}}</th>                
                 <th>{{'Kilometer' | translate}}</th>
                 <th>{{'Status' | translate}}</th>
                <th>{{'Action' | translate}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in proactiveData"> 
                  <td>{{data.id}}</td>
                <td>{{data.CustomerName}}</td>
                <td>{{data.Brand}}</td>
                <td>{{data.Model}}</td>
                <td>{{data.Kilometer}}</td>
                <td>{{data.Status}}</td>
                
                <td class="action-ic">
            <a @click="viewDetail(data.ProactiveId)"> <img src="../../assets/images/eyeedit.png"/></a>
                </td>
              </tr>
              
            </tbody>
          </table>
           </div>
            </div>
            <div class="load-more d-flex justify-content-end col-12">
          <p><router-link to="/ProactiveService_SA"> {{'ViewMore' | translate}}</router-link></p>
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


export default {
  name: 'Dashboard1_SA',
  components: {
    
  },
  data() {
    return {
      ScheduledServiceData:[],
      QuotesData:[],
      DashboardCount:{},proactiveData:[]
    }
  },
   methods: {
     redirect(a){
        this.$router.push({path: a})
     },
     viewDetail(id){
        this.$router.push({path: '/proactive-detail/'+id})

     },
         	getScheduleServiceDashboardParam() {
       
                //  console.log(this.getscheduleserviceList);
                //  let userid = Number(JSON.parse(localStorage.getItem('userId')))  
                //  console.log(localStorage.getItem('userId')); 
                let dash = 1;
			          this.$store.dispatch("WorkingServiceLists" , dash);
        	},
          ScheduledServiceDashboard(id){

              console.log(id);
              this.$router.push({path: '/Service_detail_SA/' + id})
          },
          getQuotesDashboardParam() {

                let dash = 1;
			          this.$store.dispatch("QuoteLists" , dash);
          },
  
          QuotesDashboardbtn(id){
               
                  console.log(id);
              this.$router.push({path: '/Quote_detail_SA/' + id})
          },
           getProactive(){
        var self=this;
        
        return  this.$store.dispatch("getData",'/SuperAdmin/GetProactive').then(function(response){
 
				self.proactiveData = response;
       
        })
      }

   },
    created() {
this.getProactive()
       this.getScheduleServiceDashboardParam();
       this.getQuotesDashboardParam();
       this.$store.dispatch('getDashBoardCount')
      
    },
      computed: {
     
    ...mapGetters({
      ScheduledServiceDashboardList: "WorkingServiceLists",
      QuotesDashboardList:"QuoteLists",
      getDashBoardCount:"getDashBoardCount"
    })

  },
      	watch: {
		'WorkingServiceLists': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.WorkingServiceLists;
        
          
			}
		},
    'QuoteLists': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.QuoteLists;
        
          
			}
		},
    	'getDashBoardCount': {
			deep: true,
			handler(value) {
          
				this.DashboardCount = null
				this.DashboardCount = this.getDashBoardCount;
         console.log(this.DashboardCount)
                
			}
		}
	},
};
</script>

<style scoped>
.colour_img_bg span{ max-width: 100%; padding-left: 10px; padding-top: 5px; line-height: 15px; font-size: 14px; color: #666666;}
.colour_img_bg {background: #fff;width: 70%;height: 73px;    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;}
.colour_img_bg span b{ font-weight: 600; font-size: 21px; color: #000;line-height: 36px;display: block; }
.no-padding{padding: 0!important;cursor:pointer}
.content_section .dash-top-sec:nth-child(2), .content_section .dash-top-sec:nth-child(3)
{ padding:0px 12px !important;}
.content_section .dash-top-sec:first-child{ padding-left:17px !important;padding-right:10px !important;}
.content_section .dash-top-sec:last-child{ padding-right:18px !important; padding-left:10px !important;}
.content_section{ padding: 22px 0px 15px 0px !important;}
.dash-top-sec.d-flex.flex-row.no-padding { width:25%;}
.dash-top-sec img { height: 73px;    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;}
.dash_SA_heading {     padding: 22px 14px;padding-top: 10px;
    font-family: 'Nunito-Medium';
    font-size: 20px;}
.superadmin_content .dataTables_wrapper { margin-left: 14px !important; width: 97%;}
.superadmin_content .dataTable thead th {border-right: 1px solid #ccc;}
 
 table.table thead th {
    border-top: none;
  }
  
  thead th {
    font-size: 15px;
    padding: 12px;
    text-transform: uppercase;
    background: #0066d0;
    color: #ffffff;
  }
tbody td {
    color: #434343;
    font-size: 16px;
    padding: 15px;
  }
  
  .table-striped {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
  }
  
  .table-striped tbody tr:nth-of-type(2n+1) {
    background-color: #e3ebf3;
  }
  
  .table-striped tbody tr {
    background: #eef6fe none repeat scroll 0 0;
    padding: 10px;
  }
  
  .table td,
  .table th {
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
  
  .table td:last-child,
  .table th:last-child {
    border-right: 0px solid #dee2e6;
  }
  
  .bt-0 {
    border-top: 0!important;
  }
  
  .table-striped tbody tr:last-child table tbody tr:nth-child(odd) {
    background: #eef6fe none repeat scroll 0 0;
  }
  
  .table-striped tbody tr:last-child table tbody tr:nth-child(even) {
    background: #e3ebf3 none repeat scroll 0 0;
  }
  td.action-ic img {
    width: 34px;
    height: 34px;cursor: pointer;
}
td.action-ic {
    padding: 10px 10px!important;text-align: center;
}
.content_section_scroll{overflow-x: auto;}
.content_section_table{width:100%;}
.load-more p , .load-more p a
{
        font-size: 18px;
    color: #212121;text-align: center;font-family: 'Nunito-Medium';
    text-decoration: underline;
    margin-top: 0px;margin-bottom:20px;cursor: pointer;display: inline-block;
}
/* .content_section_table{width:1019px;} */
button{border:0px; background:transparent;}

@media only screen and (min-width:320px) and (max-width:640px)
{
.dash-top-sec.d-flex.flex-row.no-padding {
  margin-top: 10px;
  padding-left: 12px !important;
  padding-right: 0 !important;
  width: 100%;
}
}

@media only screen and (min-width:641px) and (max-width:800px)
{
.dash-top-sec.d-flex.flex-row.no-padding {
  margin-top: 10px;
  padding-left: 52px !important;
  padding-right: 0 !important;
  width: 48%;
}
}
</style>