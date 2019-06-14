<template>
  <section id="Drivers_SA">
   <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'AdminFunctions' | translate }}</h2>
      </div>
       <div class="col-12 content_section">
   <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex  p-0">
            <h4>{{ 'SERVICES' | translate }}</h4>
          
            </div>
          </div>

      

        <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table">
              <!--data-tables :data="this.data" :action-col="actionCol" >
   

      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
      </el-table-column>
    </data-tables-->
   <table width="100%" class="table table-striped">
    <thead><th>#</th><th>{{ 'MainService' | translate }}</th><th>{{ 'Action' | translate }}</th></thead>
    <tbody>
  <tr v-for="(x, index) in data">
    <td>{{ x.MainServiceID }} </td>
    <td><span  v-show="editOffset != index">{{ x.ServiceName }}</span><input class="form-control" v-show="editOffset==index" type="text" v-model="MainServiceName"/></span></td>
    <td >
                <a  v-show="editOffset == index"  @click="editOffset = -1;OkClick( x.MainServiceID,MainServiceName)"><img  src="../../assets/images/Tick.png" /></a>
                     <a  v-show="editOffset == index"  @click="editOffset = -1"><img  src="../../assets/images/Cancel.png" /></a>
                   <a v-show="editOffset != index"><img @click="editClick(index)" src="../../assets/images/penedit.png" /></a>
                      <a v-show="editOffset != index"><img @click="centerDialogVisible=true;deleteMainServiceID=x.MainServiceID"  src="../../assets/images/deleteedit.png" /></a>
              </td>
    </tr>
    </tbody>

</table>
<el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
  <span>{{'deleteAlert'  | translate }}  {{ 'SERVICES' | translate }}?</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; deleteClick()" >{{ 'Confirm' | translate }}</el-button> 
    <el-button type="danger" @click="centerDialogVisible = false">{{ 'CANCEL' | translate }}</el-button> </span>

</el-dialog>
         
            </div>
              
            </div>
            

  </div>
  </div>
  </div>
</section>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Drivers_SA',
  components: {
    
  },
  data() {
    
    return {
        MainServiceName:null,
       centerDialogVisible: false,
        editOffset: -1,deleteMainServiceID:0
    }
  },

   methods: {
       OkClick(id,name){
           if(!name){
alert("Please enter valid name")
return
           }
let updateMainService= {
  "MainServiceID": id,
  "MainServiceName":name,
  CreatedBy:Number(localStorage.getItem('userId').slice(1, -1)),
  url:'/SuperAdmin/UpdateMainService'
}
return this.$store.dispatch('updateData', updateMainService).then((response) => {
    this.$message(response.data.Message)
        this.$store.dispatch("getMainServiceList");
        this.MainServiceName=null
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
       },
       editClick(index){

 this.editOffset = index
       },

    deleteClick(){
			var self = this;
      let corpData={url:'/SuperAdmin/DeleteMainService?MainServiceID='+self.deleteMainServiceID}
			return this.$store.dispatch('updateData', corpData).then((response) => {
        this.$store.dispatch("getMainServiceList");
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		
    }

  
  },

 computed: {
     
    ...mapGetters({
      data: "getMainServiceList"
  
    })

  },
	watch: {
		'getMainServiceList': {
			deep: true,
			handler(value) {
				this.data = null
                debugger
				this.data = this.getMainServiceList;
        
			}
		}
	},
    created() {

      this.$store.dispatch("getMainServiceList");
      
    }

};
</script>

<style scoped>
 table.table thead th { border-top: none; } 
 thead th {  font-size: 15px;  padding: 12px;  text-transform: uppercase;  background: #0066d0;  color: #ffffff;}
 tbody td {color: #434343; font-size: 16px;padding: 12px; }
.table-striped {  border-top-left-radius: 5px;  border-top-right-radius: 5px; overflow: hidden; }
.table-striped tbody tr:nth-of-type(2n+1) { background-color: #e3ebf3; }
.table-striped tbody tr {background: #eef6fe none repeat scroll 0 0;padding: 10px;}
.table td, .table th {vertical-align: middle; border-top: 1px solid #dee2e6; border-right: 1px solid #dee2e6; }
.table td:last-child,.table th:last-child { border-right: 0px solid #dee2e6;}
.bt-0 {border-top: 0!important;}
.table-striped tbody tr:last-child table tbody tr:nth-child(odd) {background: #eef6fe none repeat scroll 0 0;}
.table-striped tbody tr:last-child table tbody tr:nth-child(even) {background: #e3ebf3 none repeat scroll 0 0;}
td.action-ic img { width: 34px; height: 34px;cursor: pointer;}
td.action-ic { padding: 10px 10px!important;text-align: center;}
.content_section {background: #eef6fe;   padding: 30px;}
.content_section_scroll{overflow-x: auto;}
.content_section_table{width:100%;}
.pagination_ss{float:right; margin-top:20px;}
.pagination_ss mdb-page-item, .pagination_ss mdb-page-nav {
border: 1px solid #d3d7dc; font-size: 18px;padding: 6px 10px; background:#f3f6f9; color:#3a4959; border-radius:5px;
}
.pagination_ss mdb-page-item:hover, .pagination_ss mdb-page-nav:hover {
border: 1px solid #3a4959; font-size: 18px;padding: 6px 10px; background:#3a4959; color:#fff;  border-radius:5px;
}
.pagination_ss .active {
border: 1px solid #3a4959; font-size: 18px;padding: 6px 10px; background:#3a4959; color:#fff; border-radius:5px;
}
@media only screen and (min-width:320px) and (max-width:1250px){
  .content_section_table{width:1019px !important;}
}
.drivers-btn{margin-left: auto;}
.drivers-btn .cance_btn{background: #2ecc71;width:auto !important; padding:19px 20px 23px 20px !important;}
</style>