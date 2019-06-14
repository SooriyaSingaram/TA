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
            <h4>{{ 'Vehicle' | translate }}</h4>
            <div class="sub_btn sub_bck_btn  d-flex justify-content-center drivers-btn">
                  <router-link to="/vehicle-master/0"><button class="cance_btn back_btn">{{ 'AddNewVehicle' | translate }}</button></router-link>
            </div>
            </div>
          </div>

      

        <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table">
              <data-tables :data="this.data" :action-col="actionCol" >
   

      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
      </el-table-column>
    </data-tables>
<el-dialog :visible.sync="centerDialogVisible" width="30%" center>
         <h2 style="text-align: center; font-family: 'Nunito-Regular';font-weight: 600;font-size: 21px;color: black; margin-top: -30px; padding-bottom: 20px;">{{ 'Warning' | translate }}</h2>
  <span>{{ 'deleteAlert' | translate }}?</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; deleteVehicle();" >{{ 'Confirm' | translate }}</el-button> 
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
       centerDialogVisible: false,
      
    }
  },

   methods: {
    deleteVehicle(){
 
			var self = this;
      let corpData={url:'/SuperAdmin/DeleteMasterVehicle?ClassId='+self.vehicleCalssId}
			return this.$store.dispatch('updateData', corpData).then((response) => {
        this.$store.dispatch("getMasterVehicles");
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		
    }
  
  },

 computed: {
     
    ...mapGetters({
      data: "getMasterVehicles"
  
    }),
    titles(){
      return [{
    prop: "id",
    label: "#"
    }, {
    prop: "BrandName",
    label: this.$t('Brand')
    }, {
    prop: "YearName",
    label: this.$t('Year')
  },
  {
    prop: "ModelName",
    label: this.$t('Model')
  },{
    prop: "ClassName",
    label: this.$t('Class')
  }
  ]
    },
    actionCol(){
      return {
        props: {
         label: this.$t('Action'),
          className: 'actionCenter'
        },
       buttons: [

         {
          handler: row => {
            
            this.$router.push({path: '/vehicle-master/' +'C='+row.ClassId+'&B='+row.BrandId+'&M='+row.ModelId+'&Y='+row.YearId})
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzk1NjhFNEUwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk1NjhFNEYwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOTU2OEU0QzA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOTU2OEU0RDA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpigSEkAAAIZSURBVHjaYvw8R4gBCnyBuBCITYGYh4G24AsQnwbiPiDeAhJggkq0APEmIHakgyMYoHaA7NoMtZuBERgiPlCBgQR+oBApYhh4UAhyiMkgcIgJyCG8g8AhvEwMgwSMOoSmDmHilWfg9N3JwJP4nIHDfhoDAzP7wDiE1aCEgVkMmAmZ2BhYVMIZOF0WE+0YqjiEiUeOgd1mAsOvE5UMf5/sg4szyzgzsFv10MchIEdwem9i+P/1GQMDGx/Dj/0pKI5hUfSjvUNgjvh9axnDn9srGLh8tjFwOM5Cccy/t5eIMouFooTptRHuCJCDGHlkIT5j5Wb4sS+Bgc2ineH3+R7aOQSXI/5/eczwfasfA6taNJAvw/DzcB7RZrJQ2xEsquFAh8QwfN/mR7tyhBRH/Pv8kDYOgThiE00cQbxDGJmhIbEUxRH/vjyiiiOITyOMTAzfd8cwMPz6hOKIH1v9oY6IpsgRRIcIl892YIHwi4HNpAqHI/wpcgRRIQIqtJhEDRlYZN3B6YPh/3+GX2fbqeoIokKESdIKTLMZVzAwixgy/LoynYGBXYCqjoC14v/jU8BuN4WBVTUSzgcV2d82uYNYQPSHajU3UVHz585Khr/PDjP8fX4UnD5oAQiGyGhTcSAd8nkQuOMLyCFnBoFDToMc0j8IHNLPBB0JaB1AR4Ds3gxLrDVA7A/E+4H4Kx0s/wq1yw9qNwNAgAEAbVHtyTOWyY0AAAAASUVORK5CYII='/>
        },
        {
          handler: row => {
            this.centerDialogVisible = true;
             this.vehicleCalssId=row.ClassId
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQTA4MTRBMDQzRTExRTlBOTM2QzhGNzdDNkNENjdBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQTA4MTRCMDQzRTExRTlBOTM2QzhGNzdDNkNENjdBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFBMDgxNDgwNDNFMTFFOUE5MzZDOEY3N0M2Q0Q2N0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFBMDgxNDkwNDNFMTFFOUE5MzZDOEY3N0M2Q0Q2N0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vlgvVAAABzElEQVR42mJ87mPDMNgAE8MgBNgc5QvE+4D4MxD/pzH+DLXLB5+jWoB4ExA7AjEPHQKFB2rXZqjdGI4CubZ6AGOtGhpLKI4qGgTJqRDdUSaDwFEm6I7iHQSO4h1SRcKoo7ABFrI0ScsxMHJywvnCvbOA3oP6798/hrfFaXC5/9+/M/x5+ogk8xmR6r7/xGqS2HgQ4QhCAOjIF/72JLmJrJD6++oFTaOPrJBiZGFlYFFQIkrtnwf3GP7/+U37kGLk42cQ7p9DlNpX8YEM/9+9oX3u+//jO03UUuaob1/h7A+d9Qy/795i+LZ5DRiD2CAxbGppWiRAsvo3YLHAxfD75lWGf+/eMvx58hAsziwhDRaDqaFr4Qkqf6ihhrqOIiKtkJOeKHLUPyIs/EdvRxGTXshNU+Qn9G9IFjLCCQjFyIiphl65DwQEm/sZmMUkGFhVNSBu4uJhEGzqG6CQgqYXFmlZiGP4BZFaEbIUJXSyHfVt91aG/8AWAD7wfe92+jrq940rYDzaHB51FB5HfR4E7vmC7qgzg8BRp9Ed1T8IHNWP7ijQcEzrADqoFeoGjIReA8T+QLwfiL/SwSFfoXb5Qe3GWXhuguIBAwABBgDvFbjWgSja5AAAAABJRU5ErkJggg=='/>
        }]
      }
    }

  },
	watch: {
		'getMasterVehicles': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.getMasterVehicles;
        
			}
		}
	},
    created() {

      this.$store.dispatch("getMasterVehicles");
      
    }

};
</script>

<style scoped>
 table.table thead th { border-top: none; } 
 thead th {  font-size: 15px;  padding: 12px;  text-transform: uppercase;  background: #0066d0;  color: #ffffff;}
 tbody td {color: #434343; font-size: 16px;padding: 15px; }
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