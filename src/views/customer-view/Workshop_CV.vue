<template>
  <section id="Workshop_CV">
    <div class="container-fluid">
      <div class="row">
  
        <div class="col-12 main-title">
          <h2> {{ 'OurWorkshop' | translate }}</h2>
        </div>
  
        <div class="col-12 content_section">
  
          <div class="d-flex flex-wrap vehicle_lsts_sec health_index_sec">
  
            <div class="col-12 p-0">
  
              <div class="main_hsty_tlt">{{ 'Meetourallworkshop' | translate }}</div>
 
  
              <div class="our_wrokshop_list d-flex" >
                <ul class="d-flex flex-column">
                  <li class="d-flex flex-row" v-for="workshopdata in workshoplist">
                    <img  v-bind:src="workshopdata.WorkShopImage" />
                    <div class="our_wrokshop_content d-flex flex-column">
                       <h4>{{workshopdata.WorkShopName}}</h4>
                       <p>{{workshopdata.WorkShopAddress}}</p>
                       <span>{{workshopdata.WorkShopDesc}}</span>
                  </div>
                  </li>
                 
                </ul>
              </div>
  
  
  
  
  
  
  
            </div>
  
  
  
  
          </div>
        </div>
  
  
  
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
  import {
    Row,
    Column,
    Card,
    CardBody,
    ViewWrapper,
    MdMask,
    CardTitle,
    CardText,
    CardFooter,
    Fa,
    Btn,
    Pagination,
    PageNav,
    PageItem
  } from 'mdbvue'
  
  export default {
    name: 'Workshop_CV',
    components: {
      Row,
      Column,
      Card,
      CardBody,
      ViewWrapper,
      MdMask,
      CardTitle,
      CardText,
      CardFooter,
      Fa,
      Btn,
      Pagination,
      PageNav,
      PageItem
    },
    data() {
      return {
       workshopdata:[]
    }
    },
    	computed: {
		...mapGetters({
			workshoplist: "getworkshoplist", 
		})
	},
  	created() {
		this.$store.dispatch("getworkshoplist");
	},
  	methods: {
	},
  	watch: {
		'getworkshoplist': {
			deep: true,
			handler(value) {
				this.workshopdata = null
				this.workshopdata = this.getworkshoplist;
			}
		}
  
	},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main_hsty_tlt {
    font-size: 17px;
    margin-bottom: 30px;
    color: #36383e;
  }
  .our_wrokshop_list > ul {
    padding-left: 0;
        margin-bottom: 0;
}
  .our_wrokshop_list > ul li{
      margin-bottom: 40px;
}
.our_wrokshop_list > ul li:last-child {
    margin-bottom: 0;
}
.our_wrokshop_list > ul li img {
    border-radius: 4px;
    height: 100%;
    object-fit: cover;
    width:100%;
    max-width:400px;
}
.our_wrokshop_content {
    padding-left: 35px;
        font-family: 'Nunito-Medium';
}

.our_wrokshop_content h4 {
    color: #0066d0;
    font-size: 22px;
    padding: 15px 0 20px;
    margin: 0;
}
.our_wrokshop_content span {
    font-family: 'Nunito-Regular';
    font-weight: 100;
    color: #626262;
    font-size: 18px;
}
.our_wrokshop_content p {
    color: #363b3f;
    margin: 0;
    font-size: 18px;
    margin-bottom: 8px;
}
@media screen and (max-width: 767px){
  .our_wrokshop_list > ul li {
    flex-direction: column !important;
}
.our_wrokshop_content {
    padding-left: 0 !important;
}
}
@media screen and (min-width: 768px) and (max-width: 1028px){
.our_wrokshop_list > ul li img {
    width: 300px;
    height: 200px;
}
.our_wrokshop_content {padding-left: 15px;}
.our_wrokshop_content h4{padding-top: 0;}
}
</style>
