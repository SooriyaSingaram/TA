<template>
  <section id="Corporate_agree">
  
  
  
    <div class="container-fluid">
  
      <div class="row adfun">
  
        <div class="col-12 main-title adm">
  
          <h2>{{ 'AdminFunctions' | translate }} </h2>
  
        </div>
  
      </div>
      <div class="row corp_cont">
  
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 vehicle_tlt">
  
          <h4>{{ 'SERVICES' | translate }} </h4>
  
        </div>
         
 <div class="col-lg-6 col-md-6 col-sm-12 col-12 concop text-right">
 <router-link to="/update-service" class="edit_main_service"><button class="">{{ 'EditMainService' | translate }} </button></router-link>
 <router-link to="/adminservicedetail/main/0" class="create_btn"><button class="btn btn-success "> {{ 'CreateNewService' | translate }} </button></router-link>
 
 </div>
  <div class="col-lg-12">
 <b-card no-body class="mttab">
  
            <b-btn @click="tabIndex--"><img src="../../assets/images/leftar.png" /></b-btn>
  
            <b-btn @click="tabIndex++"><img src="../../assets/images/rightar.png" /></b-btn>
  
            <b-tabs small card v-model="tabIndex">
  
               <b-tab v-for="tab in mainservice" :key="tab.MainServiceID" :title="tab.ServiceName" @click="getContent(tab.MainServiceID)" >
  
  
  
                <div class="corp_table">
  
  
                  <button class="btn btn-success crbt" @click="addSubServicePage()"> {{ 'AddSubService' | translate }} </button>
  
   <div class="table-responsive text-nowrap adservtab">
  
                 <data-tables :data="subServiceList" :action-col="actionCol" >
      
      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
      </el-table-column>
    </data-tables>
  
                  </div>
  
                 
  
  
  
                </div>
  
  
  
              </b-tab>
  <b-button-group class="mt-2">
  
                <b-btn @click="tabIndex++"> {{ 'Next' | translate }} </b-btn>
  
              </b-button-group>
  
            </b-tabs>
  
          </b-card>
  
  
  
          <!-- Control buttons-->
  
  
  
  
  
        </div>
  
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
	Fa
}
from 'mdbvue'
  
  export default {
  
 name: 'adminservices',
  
    components: {

	Row,
	Column,
	Btn,
	Card,
	Fa
  
    },
  
  data() {
		return {tabIndex:0,contentLength:0,addSubId:0,
            service:{},
            mainservice:[],
            brandList:[],Year:[],Class:[],Model:[],
            centerDialogVisible: false,subServiceList:[]
   
     
            
		}
	},
	created() {
		this.create = true;
		this.isDisabled = false
		this.$store.dispatch('getMainServiceList')
		this.$store.dispatch('getBrand')
     
	},
	methods: {

       addSubServicePage(){
          this.$router.push({path: '/adminservicedetail/add-sub/' +this.addSubId})
      },

		getName(mainService) {
			this.service.MainServicesID = mainService.MainServicesID
			this.service.MainServiceName = mainService.ServiceName
		},
		getCustomerParam() {
			let corporateId = this.$route.params.id;
      
			if (corporateId == '0') {
				this.customer.CarOwnerID = 0;
				this.create = true;
			}
			else {
				this.create = false;
				this.$store.dispatch('getcustomer', corporateId)
			}
		},
		addService() {
			var self = this;
			this.service.SubServiceID = 0;
			this.service.url = '/SuperAdmin/AddSubService';
			debugger
			return this.$store.dispatch('updateData', this.service).then((response) => {
				self.$message(response.data.Message)
				self.$router.push({
					name: 'Customer_SA'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		},
		getData(api, param, data) {
			let url = '/Common/Get' + api + '?' + param + data
			return this.$store.dispatch('getDropdownList', url).then((response) => {
				this[api] = response.data.data;
			}).catch(function(err) {
			//	alert(err.response.data.error)
			});
		},
		getContent(a) {
			var self = this;
      this.addSubId = a;
			let url = '/SuperAdmin/GetSubServiceList?MainServiceID=' + a;
			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				if (response.data.IsSuccess) {
					self.subServiceList.length = 0;
					self.subServiceList = response.data.data
				}
				else {
					self.subServiceList.length = 0;
					self.subServiceList = []
				}
			}).catch(function(err) {
				//alert(err.response.data.error)
			});
		},
    addInc(doSum){
      if(doSum){
 this.tabIndex=this.tabIndex +=3  
      }else{
         this.tabIndex=this.tabIndex -=3  
      }
       
    }
	},
	computed: {
		...mapGetters({
			getMainServiceList: "getMainServiceList",
			getBrand: "getBrand"
		}),
     titles(){
    return [{
    prop: "SubServiceName",
     label: this.$t('SubService')
    }, {
    prop: "Brand",
     label: this.$t('Brand')
    }, {
    prop: "Year",
     label: this.$t('Year')
  },
  {
    prop: "Model",
     label: this.$t('Model')
  },{
    prop: "Class",
     label: this.$t('Class')
  },
  {
    prop: "SubServiceDescription",
     label: this.$t('Description')
  }
  ]
   },
    actionCol(){return {
        props: {
           label: this.$t('Action'),
          className: 'actionCenter'
        },
      buttons: [{
          props: {
            type: 'primary'
          },
          handler: row => {
           debugger
            let id = row.SubServiceID
            this.$router.push({path: '/adminservicedetail/view/' +id})
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTUxNjgxNDgwNDM3MTFFOUI4OUNGQkY0MzYyNTQ5NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTUxNjgxNDkwNDM3MTFFOUI4OUNGQkY0MzYyNTQ5NTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NTE2ODE0NjA0MzcxMUU5Qjg5Q0ZCRjQzNjI1NDk1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NTE2ODE0NzA0MzcxMUU5Qjg5Q0ZCRjQzNjI1NDk1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrWPTn4AAAKNSURBVHjaYtQ7U8gABb5ADOKYAjEPA23BFyA+DcR9QLwFJMAElWgB4k1A7EgHRzBA7QDZtRlqNwMLEPsAcTXDwAGQ3SdBIVLEMPCgEOQQk0HgEBOQQ3gHgUN4mRgGCRh1yKhDhoxDWEjVoMIpyeAtZMRgwqvCIMcuwiDAws3w4c9Xhkc/3zCc+XyHYeu7cwx3vj8n2SGMwErvPzEKZdiFGcpkAxjs+LUYGIHw3/9/DBe/PmR4+vMtgzRQTp9HARi8jAz/gfDQx2sMnY/XA+XeUTdEPIQMGRrkwxk4mdjA/Ic/XjMU3VuA4nNVYEj1KiUwyHOIMtjzazOY8aoyNDxcybDj3XmiHMIsnmbZgE9BjJgdQ518GAMrI8TNP//9YYi/OYnhwY9XDE4CugzBIpYMzIzMDOe/3Gc4+ukmmM/CyARUz8zgIqjH8PXfT4ZLwJCjKLF6CxkzlAKjAxQVMHDw4xWGx8DocBc0YOhXTmSIFbdnmKKSAuY/+vkaGC1XEfEOhCUy/mBzKHJIuWwghtgToCNAwJJPHUXcml8TTD8GJlp0AEpbFDkElOAwE60ImD7y6TqK+BFgAkWWRwY9TzZSlli3vjvLIAjMniWy/vDoASVEUA7a8/4SQ86d2QzmvGoM577cY9j34TI8ocIAKAf1PdnMsPntGepkX/RcA0qoJfcWMtxGyjWg8qVfOQFYtoiC+T/+/QLmmlUM24HlCm3LEaBvLwBzyjNgWYGtHOl6vAGenqjqEOTywguYC0x4lTFK1rOf74Kj8zYtS9bR2nfUIaMOQXLI50Hgji8gh5wZBA45DXJI/yBwSD8TdGigdQAdAbJ7Myyx1gCxPxDvB+KvdLD8K9QuP6jdDAABBgCSM9t5SatdEgAAAABJRU5ErkJggg==' />
        }, 

         {
          handler: row => {
            let id = row.SubServiceID
             this.$router.push({path: '/adminservicedetail/sub/' +id})
         
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzk1NjhFNEUwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk1NjhFNEYwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOTU2OEU0QzA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOTU2OEU0RDA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpigSEkAAAIZSURBVHjaYvw8R4gBCnyBuBCITYGYh4G24AsQnwbiPiDeAhJggkq0APEmIHakgyMYoHaA7NoMtZuBERgiPlCBgQR+oBApYhh4UAhyiMkgcIgJyCG8g8AhvEwMgwSMOoSmDmHilWfg9N3JwJP4nIHDfhoDAzP7wDiE1aCEgVkMmAmZ2BhYVMIZOF0WE+0YqjiEiUeOgd1mAsOvE5UMf5/sg4szyzgzsFv10MchIEdwem9i+P/1GQMDGx/Dj/0pKI5hUfSjvUNgjvh9axnDn9srGLh8tjFwOM5Cccy/t5eIMouFooTptRHuCJCDGHlkIT5j5Wb4sS+Bgc2ineH3+R7aOQSXI/5/eczwfasfA6taNJAvw/DzcB7RZrJQ2xEsquFAh8QwfN/mR7tyhBRH/Pv8kDYOgThiE00cQbxDGJmhIbEUxRH/vjyiiiOITyOMTAzfd8cwMPz6hOKIH1v9oY6IpsgRRIcIl892YIHwi4HNpAqHI/wpcgRRIQIqtJhEDRlYZN3B6YPh/3+GX2fbqeoIokKESdIKTLMZVzAwixgy/LoynYGBXYCqjoC14v/jU8BuN4WBVTUSzgcV2d82uYNYQPSHajU3UVHz585Khr/PDjP8fX4UnD5oAQiGyGhTcSAd8nkQuOMLyCFnBoFDToMc0j8IHNLPBB0JaB1AR4Ds3gxLrDVA7A/E+4H4Kx0s/wq1yw9qNwNAgAEAbVHtyTOWyY0AAAAASUVORK5CYII='/>
        }
        
        ]
      }
      }
	},
	watch: {
		'getMainServiceList': {
			deep: true,
			handler(value) {
				this.mainservice = null
				this.mainservice = this.getMainServiceList;
        if(this.mainservice.length>0){
this.getContent(this.mainservice[0].MainServiceID)
     this.addSubId = this.mainservice[0].MainServiceID;
        }
        

			}
		},
		'getBrand': {
			deep: true,
			handler(value) {
				this.brandList = null
				this.brandList = this.getBrand.data;
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .concop button {
  
    font-size: 16px;
  
    background: #e67e22!important;
  
    border-radius: 5px;
  
    box-shadow: none!important;
  
  }

  .crbt {
  
    font-size: 18px;
  
    background: #2ecc71!important;
  
    border-radius: 5px;
  
    box-shadow: none!important;
  
  }
  
  .corp_cont {
  
    margin-top: 20px;
  
  }
  
 .corp_cont h3 {
  
    font-size: 24px;
  
    color: #212121;
  
  }
  
 .corp_table thead {
  
    background: #007df8;
  
    color: white;
  
    border-top-left-radius: 5px;
  
    border-top-right-radius: 5px;
  
  }
  
  
  
  .corp_table th {
  
    font-size: 18px!important;
  
    padding-left: 30px;
  
    border-right: 1px solid white;
  
  }
  
  
  
  .corp_table {
  
    margin-top: 20px;
  
  }
  
  
  
  .corp_table td {
  
    padding-left: 30px;
  
    font-size: 16px!important;
  
    border-right: 1px solid white;
  
  }
  
  
  
  .corp_table td img {
  
    padding-right: 10px;
  
  }
  
  
  
  .pagi {
  
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
  
  
  
  .adm {background: #0052b1;color: white!important;}
  
  .adm h2 {
  
    color: white!important;
  
  }
   .vehicle_tlt h4{margin-left:15px;}
   .adservtab .el-button.el-button--primary {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    padding: 0px !important;
    margin: 0px !important;
}

.btn.btn-success.crbt {
    margin-bottom: 21px;
    padding: 9px 25px;
    text-transform: capitalize;
}


</style>
