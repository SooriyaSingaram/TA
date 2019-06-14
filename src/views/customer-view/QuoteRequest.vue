<template>
  <section id="QuoteRequest">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
       <h2>{{ 'SERVICES' | translate }}</h2>
      </div>
<div class="col-12 content_section">

          <div class="vehicle_tlt ">
          <div class="col-6 d-flex flex-column align-items-start">
          <h4>{{ 'QuoteRequest' | translate }}</h4>
          </div>
          </div>

    <div class="d-flex flex-wrap quote_lsts_sec p-4">
          <!--quoteList-->
        <div class="col-sm-12 col-md-12 flex-column top_txt">
            <p>{{ 'SelectTheService' | translate }}</p>
        </div>


          <!--quoteList-->
           <div class="col-sm-12 col-md-3 flex-column" v-for="data in mainservice">
            <div class="quote_lst" >
<a  @click="goToNext(data.MainServiceID)">
                <div class="quote_lst_det">
                     <span class="md-add-background"  </span>
                       <p class="mt-2">{{data.ServiceName}}</p>
                       
               </div>
</a>

            </div>
          </div>

        

         <!--quoteList-->
          <div class="col-12 text-center">
              <router-link to="/Addnewquote"><button class="back-btn">  {{ 'BACK' | translate }}</button></router-link>
        </div>
    </div>
 </div>
       
      </div>
  </div>
  </section> 
</template>

<script>
import { vehicleValue } from './main';
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
  
 name: 'QuoteRequest',
  
    components: {
	Row,
	Column,
	Btn,
	Card,
	Fa
  
    },
   props: ["vehicedata"],
  data() {
		return {tabIndex:0,contentLength:0,
            service:{},
            mainservice:[],clickCount:0,tempObj:{}
	}
  },
	created() {
 
    var self = this;
		self.create = true;
		self.isDisabled = false
		//self.$store.dispatch('getMainServiceList')
     this.getData()

	},
	methods: {
                    getData(){
            
             let url= '/CarOwner/GetMainServiceList'
         
return this.$store.dispatch('getDropdownList', url).then((response) => {
	this.mainservice =  response.data.data;
  console.log(response.data.data);
}).catch(function(err) {
	//alert(err.response.data.error)
});

        },

goToNext(id){
  var self= this;
  let prevOutput=self.tempObj;
  debugger
  if(id == 3){
      self.$router.replace({name: 'Collisionandpaint', params:{ id:id, servicedata: prevOutput }});
  }else{
  self.$router.replace({name: 'selectSubService', params:{ id:id, servicedata: prevOutput }});
  }
 
	}
  },
	computed: {
		...mapGetters({
			getMainServiceList: "getMainServiceList",
		})
	},
	watch: {
		'getMainServiceList': {
			deep: true,
			handler(value) {
				// this.mainservice = null
				// this.mainservice = this.getMainServiceList.data;
			}
		}
	},
    mounted: function () { 
    if (this.vehicedata) {
           this.tempObj =this.vehicedata
        }else{
             this.$router.push({
                    name: 'Addnewquote'
                }) 
        }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote_lsts_sec{
    background: #fff;
}
.vehicle_tlt{margin-bottom:30px;}
.vehicle_tlt h4
{
    color:#363a3f;
    font-size:22px;
    font-family: 'Nunito-Bold';
    
}
.quote_lst_det{
    text-align: center; 
}
.quote_lst {
  border: 1px solid #d1d4d7;
  border-radius: 5px;
  margin-bottom: 31px;
  padding: 15px;
}
.back-btn{
    padding: 6px 60px 10px 60px;
    background: #cacaca;
    color: #212121;
    border: none;
    border-radius:4px; 
}

.quote_lst_det p {
  color: #292b30;
}

.top_txt{
    font-weight: bold;
    font-size:18px;
}
.md-add-background{
align-items: center;
    background-color: rgb(136, 136, 136);
    border-radius: 50%;
    display: flex;
    height: var(--md-icon-size);
    justify-content: center;
    width: var(--md-icon-size);
}

</style>
