<template>
  <section id="workshop_detail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title adm">
          <h2>{{ 'AdminFunctions' | translate }}</h2>
        </div>
      </div>
      
      <div class="row work_cont">
 <div class="col-lg-6 col-md-6 col-sm-6 col-6 vehicle_tlt">
          <h4>{{ 'WorkshopDetail' | translate }}</h4>
 </div>

 <div class="col-lg-6 col-md-6 col-sm-6 col-6 cancont text-right">

                 <button class="cance_btn back_btn" v-on:click="edit()">{{ 'EDIT' | translate }}</button>

 </div>


 </div>
<div class="container-fluid workdeta1">
  <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
          
           
            <form>
              <ul>
                <li><label>{{ 'CustomerName' | translate }}</label><span> {{workshop.OwnerName}}</span></li>
              
                <li><label>{{ 'WorkshopName' | translate }}</label><span>{{workshop.WorkShopName}}</span></li>
              
                <li><label>{{ 'Email' | translate }}</label><span>{{workshop.Email}}</span></li>
               
                
              
               
              </ul>

                <ul>
               
                <li><label>{{ 'PhoneNumber' | translate }}</label><span>{{workshop.PhoneNumber}} </span></li>
              
                <li><label>{{ 'Address' | translate }}</label><span>{{workshop.Address}}</span></li>
                
             
               
              </ul>
              
            </form>
           
            <!--/vehicleDetail-->
          </div>
</div>

<div class="container-fluid workdetatab1">
<div class="row justify-content-center">
 <div class="col-lg-7">
<h2>{{ 'ServicePrice' | translate }}</h2>
</div>
</div>
<div class="row justify-content-center">
 <div class="col-lg-7">
<div class="text-nowrap servtab">
<data-tables :data="this.workshopService" :action-col="actionCol" >
   

      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
      </el-table-column>
    </data-tables>
<el-dialog title="Update Service Amount" :visible.sync="centerDialogVisible" width="30%" center>
   <div class="container-fluid workdeta1">
            <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Price' | translate }}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="serviceDetail.ServicePrice"  required >
                    </div>
                    </div>
             </div>    
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; updatePrice();" >{{ 'Confirm' | translate }}</el-button> 
    
    <el-button type="danger" @click="centerDialogVisible = false">{{ 'CANCEL' | translate }}</el-button>
 </span>
</el-dialog>
</div>
</div>

 </div>
 <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 backcont text-center">

                   <router-link to="/Workshop_list_SA"><button class="btn btn-success">{{ 'BACK' | translate }}</button></router-link>

 </div>

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



  import {
    Row,
    Column,
    Btn,
    Card,
    CardBody,
    CardHeader,
    CardText,
    Fa,
    BarChart,
    PieChart,
    LineChart,
    RadarChart,
    DoughnutChart,
    ListGroup,
    ListGroupItem,
    Badge,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter
  } from 'mdbvue'
  export default {
    name: 'workshop_detail',
    components: {
      Row,
      Column,
      Btn,
      Card,
      CardBody,
      CardHeader,
      CardText,
      Fa,
      BarChart,
      PieChart,
      LineChart,
      RadarChart,
      DoughnutChart,
      ListGroup,
      ListGroupItem,
      Badge,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter
    },
     data() {
    
    return {
      serviceDetail:{},
      	workshop: {},
      workshopService:[],
       centerDialogVisible: false,

      
    }
  },

	created() {
		this.getWorkshopParam()
	},
	methods: {
		getWorkshopParam() {
			let workshop_Id = this.$route.params.id;
		
                   this.isDisabled = false;
                   this.create = false;
                   this.$store.dispatch('getworkshop', {do_function:'DetailWorkShop',id:workshop_Id   })
			            this.$store.dispatch('getworkshopService',workshop_Id)
                  
		},
		 edit(){
       this.$router.push({path: '/workshop/' + this.$route.params.id})
    },
    updatePrice(){
      //WorkshopServicesID    CreatedBy
      
      let serviceObj = {
        CreatedBy:Number(localStorage.getItem('userId').slice(1, -1)),
        WorkshopServicesID:this.serviceDetail.WorkshopServicesID,
        ServiceAmount:this.serviceDetail.ServicePrice,
        url:'/SuperAdmin/UpdateWorkShopServicePrice'
      }
      
      	return this.$store.dispatch('updateData', serviceObj).then((response) => {
                if(response.data.IsSuccess){
                    this.$store.dispatch('getworkshopService',this.$route.params.id)
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
			getworkshop: "getworkshop",
      getworkshopService:"getworkshopService"
		}),
     titles(){ return [{
    prop: "WorkshopServicesID",
    label: "#"
    }, {
    prop: "MainServiceName",
    label: this.$t('ServiceType')
    },{
    prop: "SubServiceName",
    label: this.$t('SubService')
    },
     {
    prop: "WorkshopName",
    label: this.$t('WorkshopName')
  },
  {
    prop: "ServiceAmount",
     label: this.$t('Price')
  },
  {
    prop: "IsDisable",
     label: this.$t('Status')
  }
  ]},
  actionCol(){return {
        props: {
          label: this.$t('Action'),
          className: 'actionCenter'
        },
       buttons: [

         {
          handler: row => {
        this.centerDialogVisible = true;
        this.serviceDetail=row;
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzk1NjhFNEUwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk1NjhFNEYwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOTU2OEU0QzA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOTU2OEU0RDA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpigSEkAAAIZSURBVHjaYvw8R4gBCnyBuBCITYGYh4G24AsQnwbiPiDeAhJggkq0APEmIHakgyMYoHaA7NoMtZuBERgiPlCBgQR+oBApYhh4UAhyiMkgcIgJyCG8g8AhvEwMgwSMOoSmDmHilWfg9N3JwJP4nIHDfhoDAzP7wDiE1aCEgVkMmAmZ2BhYVMIZOF0WE+0YqjiEiUeOgd1mAsOvE5UMf5/sg4szyzgzsFv10MchIEdwem9i+P/1GQMDGx/Dj/0pKI5hUfSjvUNgjvh9axnDn9srGLh8tjFwOM5Cccy/t5eIMouFooTptRHuCJCDGHlkIT5j5Wb4sS+Bgc2ineH3+R7aOQSXI/5/eczwfasfA6taNJAvw/DzcB7RZrJQ2xEsquFAh8QwfN/mR7tyhBRH/Pv8kDYOgThiE00cQbxDGJmhIbEUxRH/vjyiiiOITyOMTAzfd8cwMPz6hOKIH1v9oY6IpsgRRIcIl892YIHwi4HNpAqHI/wpcgRRIQIqtJhEDRlYZN3B6YPh/3+GX2fbqeoIokKESdIKTLMZVzAwixgy/LoynYGBXYCqjoC14v/jU8BuN4WBVTUSzgcV2d82uYNYQPSHajU3UVHz585Khr/PDjP8fX4UnD5oAQiGyGhTcSAd8nkQuOMLyCFnBoFDToMc0j8IHNLPBB0JaB1AR4Ds3gxLrDVA7A/E+4H4Kx0s/wq1yw9qNwNAgAEAbVHtyTOWyY0AAAAASUVORK5CYII='/>
        },
        {
          handler: row => {
             this.driver_id=row.DriverDetailsID
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQTA4MTRBMDQzRTExRTlBOTM2QzhGNzdDNkNENjdBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQTA4MTRCMDQzRTExRTlBOTM2QzhGNzdDNkNENjdBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFBMDgxNDgwNDNFMTFFOUE5MzZDOEY3N0M2Q0Q2N0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFBMDgxNDkwNDNFMTFFOUE5MzZDOEY3N0M2Q0Q2N0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vlgvVAAABzElEQVR42mJ87mPDMNgAE8MgBNgc5QvE+4D4MxD/pzH+DLXLB5+jWoB4ExA7AjEPHQKFB2rXZqjdGI4CubZ6AGOtGhpLKI4qGgTJqRDdUSaDwFEm6I7iHQSO4h1SRcKoo7ABFrI0ScsxMHJywvnCvbOA3oP6798/hrfFaXC5/9+/M/x5+ogk8xmR6r7/xGqS2HgQ4QhCAOjIF/72JLmJrJD6++oFTaOPrJBiZGFlYFFQIkrtnwf3GP7/+U37kGLk42cQ7p9DlNpX8YEM/9+9oX3u+//jO03UUuaob1/h7A+d9Qy/795i+LZ5DRiD2CAxbGppWiRAsvo3YLHAxfD75lWGf+/eMvx58hAsziwhDRaDqaFr4Qkqf6ihhrqOIiKtkJOeKHLUPyIs/EdvRxGTXshNU+Qn9G9IFjLCCQjFyIiphl65DwQEm/sZmMUkGFhVNSBu4uJhEGzqG6CQgqYXFmlZiGP4BZFaEbIUJXSyHfVt91aG/8AWAD7wfe92+jrq940rYDzaHB51FB5HfR4E7vmC7qgzg8BRp9Ed1T8IHNWP7ijQcEzrADqoFeoGjIReA8T+QLwfiL/SwSFfoXb5Qe3GWXhuguIBAwABBgDvFbjWgSja5AAAAABJRU5ErkJggg=='/>
        }]
      }}

	},
	watch: {
		'getworkshop': {
			deep: true,
			handler(value) {
				this.workshop = null
				this.workshop = this.getworkshop.data;
           debugger     
			}
		},
    	'getworkshopService': { 
			deep: true,
			handler(value) {
        debugger
				this.workshopService = null
        console.log(this.getworkshopService)
				this.workshopService = this.getworkshopService.data;
                
			}
		}
	}
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.usercha
{
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 30px;
}
.chang
{
    position: absolute;
    left: 95px;
    top: 75px;

}

input::placeholder {
  color: #444444;
}

textarea::placeholder {
  color: #444444;
}

input:focus
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

@media only screen and (max-width: 767px)
{
 .servtab
{
overflow-x: scroll;
}
   
                   .workdeta1 .col-lg-3 h3
                {
                    padding-left: 0px!important;
                }
}


.servtab thead
   {
       background: #007df8;
       color: white;
       border-top-left-radius: 5px;
              border-top-right-radius: 5px;
   }



   .servtab th
   {
    font-size: 17px!important;
    /* padding-left: 10px; */
    border-right: 1px solid white;
   }



      .servtab td
   {
       padding-left: 10px;
    font-size: 16px!important;
        border-right: 1px solid white;
   }

         .servtab td img
         {
             padding-right:4px;
         }

         .pagi
         {
             margin-top: 40px;
         }

         .pagination.pg-dark .page-item.active .page-link {

    border-radius: 5px;
}



    /* top-left border-radius */
    table tr:first-child th:first-child,
    table.Info tr:first-child td:first-child {
        border-top-left-radius: 6px;
    }
    
    /* top-right border-radius */
    table tr:first-child th:last-child,
    table.Info tr:first-child td:last-child {
        border-top-right-radius: 6px;
    }
    
    /* bottom-left border-radius */
    table tr:last-child td:first-child {
        border-bottom-left-radius: 6px;
    }
    
    /* bottom-right border-radius */
    table tr:last-child td:last-child {
        border-bottom-right-radius: 6px;
    }

.workdetatab1
{
    padding-top: 20px;
    margin-top: 30px;
    background: white;
    border-radius: 5px;

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


   .backcont button
  {
      margin-top: 20px;
      font-size: 18px;
      background: #3a4959!important;
      border-radius: 5px;
      box-shadow: none!important;
  }

.backcont
{
    padding-bottom: 30px;
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
                padding-right: 20px;
                    margin-top: 30px;
    }
        .workdeta1 .col-lg-3
        {
            padding-bottom: 30px;
        }

                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 30px;
                    font-size: 20px;
                    color: #666666;
                    padding-top: 5px;
                }


                .workdeta1 .col-lg-3 input
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
    font-size: 16px;
    color: #444444;
                }

                  .workdeta1 .col-lg-3 textarea
                {
                    background: #f5f8fa;
    border-radius: 10px!important;
    height: 100px;
        font-size: 16px;
    color: #444444;
                }
                 .vehicle_tlt h4{margin-left:15px;}
                 /* table tr:first-child th[data-v-4cd1ad8a]:last-child, table.Info tr:first-child td[data-v-4cd1ad8a]:last-child {
    border-top-right-radius: 6px;
}

table tr:last-child td[data-v-4cd1ad8a]:last-child {
    border-bottom-right-radius: 6px;
}

table tr:last-child td[data-v-4cd1ad8a]:first-child {
    border-bottom-left-radius: 6px;
}


 table.table thead th {
    border-top: none;
  }
  
  thead th {
    font-size: 16px;
    padding: 15px;
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
  } */
  
   .table-striped {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
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
    /* width: 34px;
    height: 34px; */
    cursor: pointer;
}
td.action-ic {
    padding: 10px 10px!important;text-align: center;
}
.reply_btn{
  background: #007df8 !important;
  color:#fff;
  border-radius:5px;
  border:0px;
}
</style>
