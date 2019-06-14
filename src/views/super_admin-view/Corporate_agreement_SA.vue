<template>
  <section id="Corporate_agreement_SA">
   <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
         <h2>{{ 'AdminFunctions' | translate }} </h2>
      </div>
       <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex  p-0">
            <h4>{{ 'CorporateAgreement' | translate }}</h4>

            <div class="sub_btn sub_bck_btn  d-flex justify-content-center drivers-btn">
                  <router-link to="/corporate/0"><button class="cance_btn back_btn">{{ 'AddCorporate' | translate }}</button></router-link>
            </div>
            </div>
          </div>
 <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table">
                <data-tables :data="this.data" :action-col="actionCol" >
      
      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
      </el-table-column>
    </data-tables>
  

<el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
  <span>{{ 'deleteAlert' | translate }}  {{ 'CorporateAgreement' | translate }}?</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; deleteCorporate();" >Confirm</el-button>  
    
    <el-button type="danger" @click="centerDialogVisible = false">Cancel</el-button>
</span>
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
  name: 'CorporateAgreementLists',
  components: {
    
  },

    data() {
    
    return {
    centerDialogVisible: false,
  
    
    }
  },

   methods: {
    deleteCorporate(){
 
			var self = this;
      let corpData={url:'/SuperAdmin/DeleteCorporateAgreement?id='+self.corp_id}
			return this.$store.dispatch('updateData', corpData).then((response) => {
        this.$store.dispatch("CorporateAgreementLists");
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		
    }
  
  },

 computed: {
     
    ...mapGetters({
      data: "CorporateAgreementLists"
  
    }),
     titles(){return [{
    prop: "id",
    label: "#"
    }, {
    prop: "CorporateCompanyName",
    label: this.$t('CompanyName')
    }, {
    prop: "ContactPerson",
     label: this.$t('ContactPerson')
  },
  {
    prop: "CompanyEmail",
     label: this.$t('Email')
  },{
    prop: "CompanyPhone",
     label: this.$t('PhoneNumber')
  }
  ]},
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
           
            let id = row.CorporateMasterID
            this.$router.push({path: '/Corporate_agreement_detail/' +id})
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTUxNjgxNDgwNDM3MTFFOUI4OUNGQkY0MzYyNTQ5NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTUxNjgxNDkwNDM3MTFFOUI4OUNGQkY0MzYyNTQ5NTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NTE2ODE0NjA0MzcxMUU5Qjg5Q0ZCRjQzNjI1NDk1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NTE2ODE0NzA0MzcxMUU5Qjg5Q0ZCRjQzNjI1NDk1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrWPTn4AAAKNSURBVHjaYtQ7U8gABb5ADOKYAjEPA23BFyA+DcR9QLwFJMAElWgB4k1A7EgHRzBA7QDZtRlqNwMLEPsAcTXDwAGQ3SdBIVLEMPCgEOQQk0HgEBOQQ3gHgUN4mRgGCRh1yKhDhoxDWEjVoMIpyeAtZMRgwqvCIMcuwiDAws3w4c9Xhkc/3zCc+XyHYeu7cwx3vj8n2SGMwErvPzEKZdiFGcpkAxjs+LUYGIHw3/9/DBe/PmR4+vMtgzRQTp9HARi8jAz/gfDQx2sMnY/XA+XeUTdEPIQMGRrkwxk4mdjA/Ic/XjMU3VuA4nNVYEj1KiUwyHOIMtjzazOY8aoyNDxcybDj3XmiHMIsnmbZgE9BjJgdQ518GAMrI8TNP//9YYi/OYnhwY9XDE4CugzBIpYMzIzMDOe/3Gc4+ukmmM/CyARUz8zgIqjH8PXfT4ZLwJCjKLF6CxkzlAKjAxQVMHDw4xWGx8DocBc0YOhXTmSIFbdnmKKSAuY/+vkaGC1XEfEOhCUy/mBzKHJIuWwghtgToCNAwJJPHUXcml8TTD8GJlp0AEpbFDkElOAwE60ImD7y6TqK+BFgAkWWRwY9TzZSlli3vjvLIAjMniWy/vDoASVEUA7a8/4SQ86d2QzmvGoM577cY9j34TI8ocIAKAf1PdnMsPntGepkX/RcA0qoJfcWMtxGyjWg8qVfOQFYtoiC+T/+/QLmmlUM24HlCm3LEaBvLwBzyjNgWYGtHOl6vAGenqjqEOTywguYC0x4lTFK1rOf74Kj8zYtS9bR2nfUIaMOQXLI50Hgji8gh5wZBA45DXJI/yBwSD8TdGigdQAdAbJ7Myyx1gCxPxDvB+KvdLD8K9QuP6jdDAABBgCSM9t5SatdEgAAAABJRU5ErkJggg==' />
        }, 

         {
          handler: row => {
            let id = row.CorporateMasterID
            this.$router.push({path: '/corporate/' +id})
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzk1NjhFNEUwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk1NjhFNEYwNDM3MTFFOTkyMUM4NTk2MzE4MDYzNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOTU2OEU0QzA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOTU2OEU0RDA0MzcxMUU5OTIxQzg1OTYzMTgwNjM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpigSEkAAAIZSURBVHjaYvw8R4gBCnyBuBCITYGYh4G24AsQnwbiPiDeAhJggkq0APEmIHakgyMYoHaA7NoMtZuBERgiPlCBgQR+oBApYhh4UAhyiMkgcIgJyCG8g8AhvEwMgwSMOoSmDmHilWfg9N3JwJP4nIHDfhoDAzP7wDiE1aCEgVkMmAmZ2BhYVMIZOF0WE+0YqjiEiUeOgd1mAsOvE5UMf5/sg4szyzgzsFv10MchIEdwem9i+P/1GQMDGx/Dj/0pKI5hUfSjvUNgjvh9axnDn9srGLh8tjFwOM5Cccy/t5eIMouFooTptRHuCJCDGHlkIT5j5Wb4sS+Bgc2ineH3+R7aOQSXI/5/eczwfasfA6taNJAvw/DzcB7RZrJQ2xEsquFAh8QwfN/mR7tyhBRH/Pv8kDYOgThiE00cQbxDGJmhIbEUxRH/vjyiiiOITyOMTAzfd8cwMPz6hOKIH1v9oY6IpsgRRIcIl892YIHwi4HNpAqHI/wpcgRRIQIqtJhEDRlYZN3B6YPh/3+GX2fbqeoIokKESdIKTLMZVzAwixgy/LoynYGBXYCqjoC14v/jU8BuN4WBVTUSzgcV2d82uYNYQPSHajU3UVHz585Khr/PDjP8fX4UnD5oAQiGyGhTcSAd8nkQuOMLyCFnBoFDToMc0j8IHNLPBB0JaB1AR4Ds3gxLrDVA7A/E+4H4Kx0s/wq1yw9qNwNAgAEAbVHtyTOWyY0AAAAASUVORK5CYII='/>
        },
        {
          handler: row => {
            this.centerDialogVisible = true;
             this.corp_id=row.CorporateMasterID
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQTA4MTRBMDQzRTExRTlBOTM2QzhGNzdDNkNENjdBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQTA4MTRCMDQzRTExRTlBOTM2QzhGNzdDNkNENjdBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFBMDgxNDgwNDNFMTFFOUE5MzZDOEY3N0M2Q0Q2N0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFBMDgxNDkwNDNFMTFFOUE5MzZDOEY3N0M2Q0Q2N0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vlgvVAAABzElEQVR42mJ87mPDMNgAE8MgBNgc5QvE+4D4MxD/pzH+DLXLB5+jWoB4ExA7AjEPHQKFB2rXZqjdGI4CubZ6AGOtGhpLKI4qGgTJqRDdUSaDwFEm6I7iHQSO4h1SRcKoo7ABFrI0ScsxMHJywvnCvbOA3oP6798/hrfFaXC5/9+/M/x5+ogk8xmR6r7/xGqS2HgQ4QhCAOjIF/72JLmJrJD6++oFTaOPrJBiZGFlYFFQIkrtnwf3GP7/+U37kGLk42cQ7p9DlNpX8YEM/9+9oX3u+//jO03UUuaob1/h7A+d9Qy/795i+LZ5DRiD2CAxbGppWiRAsvo3YLHAxfD75lWGf+/eMvx58hAsziwhDRaDqaFr4Qkqf6ihhrqOIiKtkJOeKHLUPyIs/EdvRxGTXshNU+Qn9G9IFjLCCQjFyIiphl65DwQEm/sZmMUkGFhVNSBu4uJhEGzqG6CQgqYXFmlZiGP4BZFaEbIUJXSyHfVt91aG/8AWAD7wfe92+jrq940rYDzaHB51FB5HfR4E7vmC7qgzg8BRp9Ed1T8IHNWP7ijQcEzrADqoFeoGjIReA8T+QLwfiL/SwSFfoXb5Qe3GWXhuguIBAwABBgDvFbjWgSja5AAAAABJRU5ErkJggg=='/>
        }]
      }}

  },
	watch: {
		'CorporateAgreementLists': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.CorporateAgreementLists;
			}
		}
	},
    created() {
      this.$store.dispatch("CorporateAgreementLists");    
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

@media only screen and (min-width:320px) and (max-width:640px){
.sub_btn button{padding:7px !important;}
}
</style>