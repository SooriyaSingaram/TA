<template>
  <section id="WorkshopServicesLists">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'AdminFunctions' | translate }}</h2>
        </div>
          <div class="specialist-end-btn col-lg-8 col-12 col-md-4 d-flex no-padding">
              
            </div>
             <!--<div class="specialist-end-btn col-lg-4 col-12 col-md-4 d-flex no-padding">
              <router-link to="/add/city-zone"><button class="cance_btn spcl_btn btn_clr">Add city</button></router-link>
               <router-link to="/add/zone"><button class="cance_btn spcl_btn btn_clr">Add zone</button></router-link>
            </div>-->
        <div class="col-12 content_section">
        <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex  p-0">
            <h4>{{ 'cityZone' | translate }}</h4>
            <div class="sub_btn sub_bck_btn  d-flex justify-content-center drivers-btn">
                 <router-link to="/add/city-zone"><button class="cance_btn spcl_btn add_city">{{ 'AddCity' | translate }}</button></router-link>
                 <router-link to="/add/zone"><button class="cance_btn spcl_btn add_zone">{{ 'AddZone' | translate }}</button></router-link>
            </div>
            </div>
          </div>
            <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table">
          <table width="100%" class="table table-striped" style="text-align:center">
            <thead>
              <tr>
                <th width="30%" style="text-align:center">{{ 'City' | translate }}</th>
                <th width="50%" style="text-align:center">{{ 'Zone' | translate }}</th>
               <th width="20%" style="text-align:center">{{ 'Action' | translate }}</th>
              </tr>
            </thead>
            <tbody>
            
  <tr v-for="(main,i) in data"><td  v-on:dblclick="centerDialogVisible=true;getValue(main,main.name)" >{{main.name}}</td>
  <td>
  <table class="no-bg-tr" style="width:100%;text-align:center;">
   <thead v-if="i ==0">
 <tr><th style="text-align:center">{{ 'Zone' | translate }}</th>
 <th style="text-align:center">{{ 'Action' | translate }}</th></tr> </thead>
  <tr v-for="sub in main.data">
   <td class="lft_td"><span  v-show="editOffset != sub.ZoneId">{{ sub.ZoneName}}</span><input class="form-control" v-model="ZoneName" v-show="editOffset==sub.ZoneId" type="text" /></span></td>
     <td class="right_td" >
                <a  v-show="editOffset == sub.ZoneId"  @click="editOffset = -1;OkClick( sub.ZoneId,ZoneName)"><img  src="../../assets/images/Tick.png" /></a>
                     <a  v-show="editOffset == sub.ZoneId"  @click="editOffset = -1"><img  src="../../assets/images/Cancel.png" /></a>
                   <a v-show="editOffset != sub.ZoneId"><img @click="edit(sub.ZoneId)" src="../../assets/images/penedit.png" /></a>
                      <a v-show="editOffset != sub.ZoneId"><img @click="centerDialogVisibleDelete=true;deleteZone=sub.ZoneId;"  src="../../assets/images/deleteedit.png" /></a>
              </td>
              

</tr>
  </table>
  </td> 
  <td>
              <img @click="getValue(main,main.name);centerDialog=true"  src="../../assets/images/deleteedit.png" />
              
              </td>

  </tr>

            </tbody>
          </table>
          <el-dialog title="Delete City" :visible.sync="centerDialog" width="30%" center>
   <div class="container-fluid workdeta1">
            <div class="row">
             <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px; padding-bottom: 20px;">{{ 'Warning' | translate }}</h2>
  <span>{{ 'deleteAlert' | translate }} {{ 'City' | translate }}?</span>      
                    
                    
                   
                    </div>
             </div> 
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialog = false;deleteClick('City?CityId='+city.CityId)" >{{ 'Confirm' | translate }}</el-button> 
    
    <el-button type="danger" @click="centerDialog = false;">{{ 'CANCEL' | translate }} </el-button>
 </span>
</el-dialog>
   <el-dialog title="Update City Name" :visible.sync="centerDialogVisible" width="30%" center>
   <div class="container-fluid workdeta1">
            <div class="row">
                    <div class="col-lg-4 col-md-4">
                    <h3>{{ 'City' | translate }}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control" v-model="city.CityName"  required >
                    <span v-show="errMsg" style="color:red">Please enter the valid name</span>
                    </div>
                    </div>
             </div>   
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; cityUpdate();" >{{ 'Confirm' | translate }}</el-button> 
    
    <el-button type="danger" @click="centerDialogVisible = false;city.CityName=null">{{ 'CANCEL' | translate }}</el-button>
 </span>
</el-dialog>
           </div>
            </div>


          </div>
      </div>
    </div>
    <el-dialog :visible.sync="centerDialogVisibleDelete" width="30%" center>
         <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px; padding-bottom: 20px;">{{ 'Warning' | translate }}</h2>
  <span>{{ 'deleteAlert' | translate }} {{ 'Zone' | translate }}?</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisibleDelete = false;deleteClick('Zone?ZoneId='+deleteZone);" >{{ 'confirm' | translate }}</el-button> 
    <el-button type="danger" @click="centerDialogVisibleDelete = false">{{ 'CANCEL' | translate }}</el-button> </span>

</el-dialog>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

 
  export default {
    name: 'cityZoneList',
    components: {
      
    },
    data() {
      return {
        serviceDetail:{},
        centerDialogVisible: false,centerDialogVisibleDelete:false,deleteZone:'',
        centerDialog:false,
        errMsg:false,
         editOffset: -1,
         city:{},ZoneName:''
      }
    },

     methods: { 
       deleteClick(api){
         let deleteData={
url:'/SuperAdmin/Delete'+api
         }
        
return this.$store.dispatch('updateData', deleteData).then((response) => {
    this.$message(response.data.Message)
        this.$store.dispatch("cityZoneList");
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
        
       },
edit(index){
   this.editOffset = index
},
getValue(cityList,selected){
cityList.data.map((item)=>{
if(item.CityName == selected){
  this.city.CityId = item.CityId
}
})

},
cityUpdate(){
  this.city.CreatedBy =Number(localStorage.getItem('userId').slice(1, -1));
this.city.url='/SuperAdmin/UpdateCity';
return this.$store.dispatch('updateData', this.city).then((response) => {
    this.$message(response.data.Message)
    this.city.CityName=null;
        this.$store.dispatch("cityZoneList");
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
},
 OkClick(id,name){
           if(!name){
alert("Please enter valid name")
return
           }
let updateZoneData= {
  "ZoneId": id,
  "ZoneName":name,
  CreatedBy:Number(localStorage.getItem('userId').slice(1, -1)),
  url:'/SuperAdmin/UpdateZone'

  
}
return this.$store.dispatch('updateData', updateZoneData).then((response) => {
    this.$message(response.data.Message)
        this.$store.dispatch("cityZoneList");
        this.ZoneName=null
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
 }
  },

  computed: {
     
    ...mapGetters({
      data: "cityZoneList"
  
    })

  },
	watch: {
		'cityZoneList': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.cityZoneList;
        
       
			}
		}
	},
    created() {
  let id = window.localStorage.getItem('WorkShopID');
 
  this.$store.dispatch("cityZoneList");
      
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
.content_section_table{width:100%;}
.no-bg-tr tr{background:none!important;border:none!important;}
.no-bg-tr tr td{background:none!important;border:none!important;width:180px;word-break: break-all;}
.action-bg-tr{background:none!important;border:none!important;}
.action-bg-tr td{background:none!important;border:none!important;}
.el-dialog__header button{
      padding: 0!important;
}

#WorkshopServicesLists .content_section button{
padding:7px 20px 11px !important;
}

.workdeta1 h3 { text-align: right;}

.drivers-btn .cance_btn{background: #2ecc71;width:auto !important; padding:19px 20px 23px 20px !important;}
.drivers-btn{ margin-left: auto;}
.add_city{
  color:#fff;
  font-size:18px;
  background:#42cb6f !important;
  height:40px;
  line-height:25px;
  margin-right:20px;
}
.add_zone{
  background:#b074d4!important;
   color:#fff;
  font-size:18px;
   height:40px;
  line-height:25px;
}

table.no-bg-tr{width:100%;}
td.right_td {
    float: right;
}
button.cance_btn.spcl_btn.btn_clr {
    background: #0052b1;
    border: none;
    width: 100px;
    padding: 7px;
    color: #fff;
    border-radius: 4px;
    margin: 12px 0px 12px 0px;
}
.specialist-end-btn a {
    margin: 0px 55px 0 0;
    
}
 
</style>