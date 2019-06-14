<template>
  <section id="WorkshopServicesLists">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{'SERVICES' | translate}}</h2>
        </div>
        <div class="col-12 content_section">
            <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table">
          <table width="100%" class="table table-striped">
            <thead>
              <tr>
                <th>{{'MainService' | translate}}</th>
                <th>{{'SubService' | translate}}</th>
                <th>{{'Price' | translate}}</th>
                <th>{{'Action' | translate}}</th>
              </tr>
            </thead>
            <tbody>
            
  <tr v-for="main in data"><td>{{main.name}}</td>
  <td>
  <table class="no-bg-tr">
 
  <tr v-for="sub in main.data"><td>{{sub.SubServiceName}}</td>
</tr>
  </table>
  </td> 
    <td>
  <table class="no-bg-tr">
 
  <tr v-for="sub in main.data"><td>{{sub.ServiceAmount}}</td>
</tr>
  </table>
  </td> 
    <td>
 <tr v-for="sub in main.data" class="action-bg-tr">
                        <td class="action-ic">
                         <a @click="edit(sub)"> <img src="../../assets/images/workshop/workshop-edit.png" class="mr-2" /></a>
                         <a v-if="!sub.IsDisable" @click="disableService(sub)"> <img src="../../assets/images/Enable.png" style="width:46px; height:26px; cursor:pointer;" /></a>
                         <a v-if="sub.IsDisable" @click="disableService(sub)"> <img src="../../assets/images/Disable.png" style="width:46px; height:26px; cursor:pointer;" /></a>

                        </td>
                      </tr>
                      
  </td> 
  </tr>

            </tbody>
          </table>
   
           </div>
            </div>
<!--<div class="load-more d-flex justify-content-center">
          <p>Load More Services</p>
          </div>-->
       <el-dialog  :visible.sync="priceWindow" width="100%" style="max-width:500px; margin:0 auto;" center>
   <div class="container-fluid workdeta1">
   <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px;
    padding-bottom: 20px;">{{ 'UpdateServiceAmount' | translate }}</h2>
            <div class="row">
                    <div class="col-lg-4 col-md-4">
                    <h3>{{'Price' | translate}}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="serviceDetail.ServicePrice"  required >
                    <span v-show="errMsg" style="color:red">{{'validPriceAmount' | translate}}</span>
                    </div>
                    </div>
             </div>    
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click=" updatePrice();" >{{ 'Confirm' | translate }}</el-button> 
    
    <el-button type="danger" @click="priceWindow = false;serviceDetail.ServicePrice=null">{{ 'CANCEL' | translate }}</el-button>
 </span>
</el-dialog>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

 
  export default {
    name: 'WorkshopServicesLists',
    components: {
      
    },
    data() {
      return {
        serviceDetail:{},
          priceWindow: false,
        centerDialogVisible: false,
        errMsg:false
      }
    },

     methods: {
edit(subServiceData){
  
  this.serviceDetail =subServiceData;
  this.priceWindow =true;
},
 updatePrice(){
  let typePrice=  isNaN(Number(this.serviceDetail.ServicePrice));

 
   if(typePrice){
this.errMsg =true;
this.priceWindow = true;
return
   }
   else{
  this.errMsg =false;
   this.priceWindow = false;
      let serviceObj = {
        CreatedBy:Number(localStorage.getItem('userId').slice(1, -1)),
        WorkshopServicesID:this.serviceDetail.WorkshopServicesID,
        ServiceAmount:this.serviceDetail.ServicePrice,
        url:'/WorkShop/UpdateServicePrice'
      }
      
      	return this.$store.dispatch('updateData', serviceObj).then((response) => {
                if(response.data.IsSuccess){
                 
                  let id = window.localStorage.getItem('WorkShopID')
                    this.$store.dispatch('WorkshopServicesLists',window.localStorage.getItem('WorkShopID'))
                     this.$message(response.data.Message)
                      this.serviceDetail.ServicePrice = undefined
                     
                }else{
                    this.$message(response.data.Message)
                }
				
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
   }
 
    },
     disableService(main){
      let serviceObj = {
        url:'/WorkShop/DisableService?WorkshopServicesID='+main.WorkshopServicesID
      }
      
      	return this.$store.dispatch('updateData', serviceObj).then((response) => {
                if(response.data.IsSuccess){
                  let id = window.localStorage.getItem('WorkShopID')
                    this.$store.dispatch('WorkshopServicesLists',window.localStorage.getItem('WorkShopID'))
                     this.$message(response.data.Message)
                     
                }else{
                    this.$message(response.data.Message)
                }
				
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
    }
  
  },

  computed: {
     
    ...mapGetters({
      data: "WorkshopServicesLists"
  
    })

  },
	watch: {
		'WorkshopServicesLists': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.WorkshopServicesLists;
       
			}
		}
	},
    created() {
  let id = window.localStorage.getItem('WorkShopID');
 
  this.$store.dispatch("WorkshopServicesLists",id);
      
    }


  };
</script>

<style scoped>
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
  .load-more p
  {
        font-size: 20px;
    color: #0066d0;text-align: center;font-family: 'Nunito-Bold';
    text-decoration: underline;
    margin-top: 60px;margin-bottom: 30px;cursor: pointer;display: inline-block;
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
  
  .main-title {
    background-color: #0052b1;
  }
  
  .main-title h2 {
    color: #fff;
  }
  td.action-ic img {
    width: 34px;
    height: 34px;cursor: pointer;
}
td.action-ic {
    padding: 10px 10px!important;text-align: center;
}
.content_section {
    background: #eef6fe;
    padding: 30px;
}
.content_section_scroll{overflow-x: auto;}
.content_section_table{width:1019px;}
.no-bg-tr tr{background:none!important;border:none!important;}
.no-bg-tr tr td{background:none!important;border:none!important;}
.action-bg-tr{background:none!important;border:none!important;}
.action-bg-tr td{background:none!important;border:none!important;}
.el-dialog__header button{
      padding: 0!important;
}

#WorkshopServicesLists .content_section button{
padding:7px 20px 11px !important;
}

.workdeta1 h3 { text-align: right;}


</style>