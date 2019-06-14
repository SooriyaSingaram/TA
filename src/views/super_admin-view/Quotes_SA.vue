<template>
  <section id="Quotes_SA">
   <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'QUOTES' | translate }} </h2>
      </div>
       <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
            <h4>{{ 'QuotesList' | translate }}  </h4>
            </div>
          </div>

      

        <div class="col-12 content_section_scroll p-0">
          <div class="content_section_table quotes_imp">
           

      <data-tables :data="this.getQuoteParam()" :action-col="actionCol" >
      
      <el-table-column  v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
      </el-table-column>
    </data-tables>

         
            </div>
              
            </div>
            
           
  </div>
  </div>
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from 'moment';
export default {
  name: 'Quotes_SA',
  components: {

  },
 data() {
    return {
    centerDialogVisible: false
    }
  },

  methods: {
      getQuoteParam(){
         let  odata = [];
        this.data.map(function(value,key) {
          value.CreatedDate = moment(String(value.CreatedDate)).format('MM/DD/YYYY hh:mm A')
          odata.push(value);
        });
        return odata;
      }
  },


   computed: {
     
    ...mapGetters({
      data: "QuoteLists"
     
    }),
    titles(){
      return  [{
     prop: "id",
    label: "#"
    }, {
    prop: "CustomerName",
   label: this.$t('CustomerName')
    }, {
    prop: "MainServicesName",
     label: this.$t('ServiceType')
  },
  {
    prop: "Details",
     label: this.$t('Details')
  },{
    prop: "CreatedDate",
     label: this.$t('CreationDate')
    
  },
  {
    prop: "Status",
    label: this.$t('Status')
  }
  ]
    },
    actionCol(){
    return {
        props: {
          label: this.$t('Action'),
          className: 'actionCenter'
        },
      buttons: [{
          props: {
            type: 'primary'
          },
          handler: row => {
            let id = row.CollisionAndPaintId
           // alert(id);
            this.$router.push({path: '/Quote_detail_SA/'+id})
          },
          label: <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTUxNjgxNDgwNDM3MTFFOUI4OUNGQkY0MzYyNTQ5NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTUxNjgxNDkwNDM3MTFFOUI4OUNGQkY0MzYyNTQ5NTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NTE2ODE0NjA0MzcxMUU5Qjg5Q0ZCRjQzNjI1NDk1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NTE2ODE0NzA0MzcxMUU5Qjg5Q0ZCRjQzNjI1NDk1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrWPTn4AAAKNSURBVHjaYtQ7U8gABb5ADOKYAjEPA23BFyA+DcR9QLwFJMAElWgB4k1A7EgHRzBA7QDZtRlqNwMLEPsAcTXDwAGQ3SdBIVLEMPCgEOQQk0HgEBOQQ3gHgUN4mRgGCRh1yKhDhoxDWEjVoMIpyeAtZMRgwqvCIMcuwiDAws3w4c9Xhkc/3zCc+XyHYeu7cwx3vj8n2SGMwErvPzEKZdiFGcpkAxjs+LUYGIHw3/9/DBe/PmR4+vMtgzRQTp9HARi8jAz/gfDQx2sMnY/XA+XeUTdEPIQMGRrkwxk4mdjA/Ic/XjMU3VuA4nNVYEj1KiUwyHOIMtjzazOY8aoyNDxcybDj3XmiHMIsnmbZgE9BjJgdQ518GAMrI8TNP//9YYi/OYnhwY9XDE4CugzBIpYMzIzMDOe/3Gc4+ukmmM/CyARUz8zgIqjH8PXfT4ZLwJCjKLF6CxkzlAKjAxQVMHDw4xWGx8DocBc0YOhXTmSIFbdnmKKSAuY/+vkaGC1XEfEOhCUy/mBzKHJIuWwghtgToCNAwJJPHUXcml8TTD8GJlp0AEpbFDkElOAwE60ImD7y6TqK+BFgAkWWRwY9TzZSlli3vjvLIAjMniWy/vDoASVEUA7a8/4SQ86d2QzmvGoM577cY9j34TI8ocIAKAf1PdnMsPntGepkX/RcA0qoJfcWMtxGyjWg8qVfOQFYtoiC+T/+/QLmmlUM24HlCm3LEaBvLwBzyjNgWYGtHOl6vAGenqjqEOTywguYC0x4lTFK1rOf74Kj8zYtS9bR2nfUIaMOQXLI50Hgji8gh5wZBA45DXJI/yBwSD8TdGigdQAdAbJ7Myyx1gCxPxDvB+KvdLD8K9QuP6jdDAABBgCSM9t5SatdEgAAAABJRU5ErkJggg==' />
        }] 
      }
    }

  
  },
  	watch: {
		'QuoteLists': {
			deep: true,
			handler(value) {
				this.data = [];
				this.data = this.QuoteLists;
        debugger
			}
		}
	},

  created() {

      this.$store.dispatch("QuoteLists");
      
    }


};
</script>

<style scoped>
 table.table thead th { border-top: none; } 
 thead th {  font-size: 15px;  padding: 15px;  text-transform: uppercase;  background: #0066d0;  color: #ffffff;}
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

.content_section_table.quotes_imp table tr th i {
    float: right;
    padding-top: 5px;
}

.content_section_table.quotes_imp table tr th {
    font-size: 14px;
}
.vehicle_tlt {
    margin-bottom: 10px;
}

</style>