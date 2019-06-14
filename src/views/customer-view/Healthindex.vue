<template>
  <section id="Healthindex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'MyVehicles' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start">
              <h4>{{ 'HealthIndex' | translate }}</h4>
            </div>
  
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec health_index_sec">
            <div class="row">
              <!--health_index_lst-->
  
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 flex-column" v-for="HealthData in HealthList" >

                <div class="health_index_lst d-flex flex-column">
                  <h5 class="percent text-center">{{HealthData.IndicatorGroupName}} <span>{{HealthData.IndexPercentage.substring(0, 5) }}%</span></h5>
                  <!--<img src="../../assets/images/health_index/health_index_mg1.png" />-->
                  <div class="reports-charts">
                        <card class="mb-4">
                        <card-body>
                          <div style="display: block">
                            <pie-chart :data="HealthData.GraphData" :options="pieChartOptions6" ></pie-chart>
                          </div>
                        </card-body>
                        </card>   
                  </div>
                 <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. in reprehenderit in voluptate velit esse cillum </p>-->

                 
                </div>

              </div>
  
             
              <div class="sub_btn back_btn">
                <btn class="cancel_btn" @click="$router.go(-1)">{{ 'BACK' | translate }}</btn>
              </div>
  
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
    PageItem,
    PieChart
  } from 'mdbvue'
  
  export default {
    name: 'Healthindex',
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
      PageItem,
      PieChart
    },
    data() {
      return {
     
        HealthList:[],
    //  pieChartData6: {
    //     labels: ['General Service - 11%', 'Routine Service - 89%'],
    //     datasets: [
    //       {
    //         data: [11, 89],
    //         backgroundColor: ['#34495e', '#2980b9'],
    //         hoverBackgroundColor: ['#3f658b', '#52ace7']
    //       }
    //     ]
    //   },
      pieChartOptions6: {
        responsive: true,
        maintainAspectRatio: false
      },


      }
    },
      methods: {
           getHealthParam(){
             debugger
           let customerVehicleId = this.$route.params.id;
          return this.$store.dispatch('getCalculatedHealthIndex', customerVehicleId).then((response) => {                                          
          this.HealthList = response;
          
			
			}).catch(function(err) {
				alert(err.response.data.error)
			});
          
           },
            
        },
          created() {

      this.getHealthParam();
     
      
    }//,
  //          computed: {
     
  //   ...mapGetters({
  //     HealthList: "getCalculatedHealthIndex"
  //   })

  // },
  //  watch: {
		
  //   'getCalculatedHealthIndex': {
	// 		deep: true,
	// 		handler(value) {
	// 			this.data = null
	// 			this.data = this.getCalculatedHealthIndex;
  //       console.log(this.data);
  //       debugger
          
	// 		}
	// 	}
    	
	// },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .health_index_sec {
    background: #f2f5f7;
    padding-top: 0px;
  }
  
  .health_index_lst {
    margin-bottom: 31px;
    background: #fff;
    padding: 25px;
  }
  
  .health_index_lst h5 {
    color: #333;
    font-size: 19px;
    min-height: 50px;
    line-height: 30px;
    min-height: 62px;
  }
  
  .health_index_lst p {
    color: #333;
    font-size: 17px;
    text-align: justify;
    line-height: 28px;
    min-height: 168px;
  }
  
  .health_index_lst h5 span {
    color: #0066d0;
    font-family: 'Nunito-Medium';
  }
  
  .health_index_lst>img {
    align-self: center;
    margin: 20px 0;
    max-width: 100%;
    width: 163px;
  }
  
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }


  /*.health_index_lst {
    width: 450px;
    max-width: 450px;
}*/

  .health_index_lst {
    width: 100%;
    max-width: 100%;
}

.health_index_lst h5 span {
    width: 100%;
    float: left;
    text-align: center;
}

.chartjs-render-monitor {
    -webkit-animation: chartjs-render-animation 0.001s;
    animation: chartjs-render-animation 0.001s;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
}
</style>
