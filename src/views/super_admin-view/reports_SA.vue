<template>
  <section id="reports_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title adm">
          <h2>Reports</h2>
        </div>
      </div>

      <div class="row work_cont">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <h3>Report Detail</h3>
        </div>

        <div class="reports_sa">
          <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="myreports-cards">
              <h4>Services by Type</h4>
              <div class="reports-charts">
                <card class="mb-4">
                  <card-body>
                    <div style="display: block">
                      <!--datepicker v-model="fromdate" name="uniquename"></datepicker>
                      <span>
                        <datepicker v-model="todate" name="uniquename"></datepicker>
                        <button @click="loadReport(fromdate,todate)">SHOW</button>
                      </span-->

                      <pie-chart  :data="pieChartData" :options="pieChartOptions" :height="300"></pie-chart>
                    </div>
                  </card-body>
                </card>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="myreports-cards">
              <h4>Services by Brand</h4>
              <div class="reports-charts">
                <card class="mb-4">
                  <card-body>
                    <div style="display: block">
                      <!-- <datepicker></datepicker>
                      <span>
                        <datepicker></datepicker>
                      </span>-->
                      <pie-chart :data="pieChartData1" :options="pieChartOptions" :height="300"></pie-chart>
                    </div>
                  </card-body>
                </card>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="myreports-cards">
              <h4>Services by Workshop</h4>
              <div class="reports-charts">
                <card class="mb-4">
                  <card-body>
                    <div style="display: block">
                      <!-- <datepicker></datepicker>
                      <span>
                        <datepicker></datepicker>
                      </span>-->
                      <pie-chart :data="pieChartData2" :options="pieChartOptions" :height="300"></pie-chart>
                    </div>
                  </card-body>
                </card>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="myreports-cards">
              <h4>Payment Report</h4>
              <div class="reports-charts">
                <card class="mb-4">
                  <card-body>
                    <div style="display: block">
                      <!-- <datepicker></datepicker>
                      <span>
                        <datepicker></datepicker>
                      </span>-->
                      <pie-chart :data="pieChartData3" :options="pieChartOptions" :height="300"></pie-chart>
                    </div>
                  </card-body>
                </card>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="myreports-cards">
              <h4>Services by Agreement</h4>
              <div class="reports-charts">
                <card class="mb-4">
                  <card-body>
                    <div style="display: block">
                      <!-- <datepicker></datepicker>
                      <span>
                        <datepicker></datepicker>
                      </span>-->
                      <pie-chart :data="pieChartData4" :options="pieChartOptions" :height="300"></pie-chart>
                    </div>
                  </card-body>
                </card>
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
  Row,
  Column,
  Btn,
  Fa,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardText,
  PieChart
} from "mdbvue";
import { mapGetters } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  name: "reports_SA",

  components: {
    Row,

    Column,

    Btn,

    Fa,

    ListGroup,

    ListGroupItem,
    Card,
    CardBody,
    CardHeader,
    CardText,
    PieChart,
    Datepicker
  },

  data() {
    return {
      value: ([] = []),
      label: ([] = []),
      value1: ([] = []),
      label1: ([] = []),
      value2: ([] = []),
      label2: ([] = []),
      value3: ([] = []),
      label3: ([] = []),
      value4: ([] = []),
      label4: ([] = []),

      fromdate: "",
      todate: "",
      // pieChartData: null,

      // pieChartData: {
      //   labels: [],
      //   datasets: [
      //     {
      //       data: [],
      //       backgroundColor: ["#34495e", "#2980b9", "#f1c40f", "#e74c3c"],
      //       hoverBackgroundColor: ["#3f658b", "#52ace7", "#f0cd41", "#d16a60"]
      //     }
      //   ]
      // },

      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },

      pieChartData1: {
        labels: this.label1,
        datasets: [
          {
            data: this.value1,
            backgroundColor: [
              "#34495e",
              "#2980b9",
              "#f1c40f",
              "#e74c3c",
              "#2ecc71"
            ],
            hoverBackgroundColor: [
              "#3f658b",
              "#52ace7",
              "#f0cd41",
              "#d16a60",
              "#5ee999"
            ]
          }
        ]
      },
      pieChartOptions1: {
        responsive: true,
        maintainAspectRatio: false
      },

      pieChartData2: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ["#34495e", "#2980b9", "#f1c40f", "#e74c3c"],
            hoverBackgroundColor: ["#3f658b", "#52ace7", "#f0cd41", "#d16a60"]
          }
        ]
      },
      pieChartOptions2: {
        responsive: true,
        maintainAspectRatio: false
      },
      pieChartData3: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ["#34495e", "#2980b9", "#f1c40f"],
            hoverBackgroundColor: ["#3f658b", "#52ace7", "#f0cd41"]
          }
        ]
      },
      pieChartOptions3: {
        responsive: true,
        maintainAspectRatio: false
      },

      pieChartData4: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ["#34495e", "#2980b9", "#f1c40f", "#e74c3c"],
            hoverBackgroundColor: ["#3f658b", "#52ace7", "#f0cd41", "#d16a60"]
          }
        ]
      }
    };
  },

  created() {
    //setInterval(this.loadReport, 2000);

    let body = {
      FromDate: "2010-03-12T13:27:00.1248475+05:30",
      ToDate: new Date(),
      MainServiceId: 0
    };

    this.$store.dispatch("getServicesByType", body);

    let brand = {
      FromDate: "2010-03-12T13:27:00.1248475+05:30",
      ToDate: new Date(),
      BrandId: 0
    };

    this.$store.dispatch("getServicesByBrand", brand);

    let workshop = {
      FromDate: "2010-03-12T13:27:00.1248475+05:30",
      ToDate: new Date(),
      WorkShopId: 0
    };

    this.$store.dispatch("getServicesByWorkshop", workshop);

    let payment = {
      FromDate: "2010-03-12T13:27:00.1248475+05:30",
      ToDate: new Date(),
      PaymentTypeId: 0
    };

    this.$store.dispatch("getServicesByPayment", payment);

    let agreement = {
      FromDate: "2010-03-12T13:27:00.1248475+05:30",
      ToDate: new Date(),
      AgreementId: 0
    };

    this.$store.dispatch("getServicesByAgreement", agreement);

    this.getData();
  },

  computed: {
    ...mapGetters({
      tdata: "ServicesByType",
      bdata: "ServiceByBrand",
      workshopdata: "ServiceByWorkshop",
      payment: "ServiceByPayment",
      agreement: "ServiceByAgreement"
    }),
      pieChartData(){
        let label =[],dataMgt=[]

         for (let i = 0; i < this.tdata.length; i++) {
       label.push(this.tdata[i].ServiceName);
        dataMgt.push(Number(this.tdata[i].ServicePercentage));
      }
      

return  {
        labels: label,
        datasets: [
          {
            data: dataMgt,
            backgroundColor: ["#34495e", "#2980b9", "#f1c40f", "#e74c3c"],
            hoverBackgroundColor: ["#3f658b", "#52ace7", "#f0cd41", "#d16a60"]
          }
        ]
      };
      }
  },

  watch: {
    ServicesByType: {
      deep: true,
      handler(value) {
        this.tdata = null;
        this.tdata = this.ServicesByType.data;
      }
    }
  },

  methods: {
    getData() {
      // this.result = this.tdata;
      this.brandresult = this.bdata;

      // for (let i = 0; i < this.result.length; i++) {
      //   this.label.push(this.result[i].ServiceName);
      //   this.pieChartData.labels = this.label;
      //   this.value.push(Number(this.result[i].ServicePercentage));
      // }
     // this.pieChartData.datasets[0].data = this.value;

      for (let i = 0; i < this.brandresult.length; i++) {
        this.label1.push(this.brandresult[i].BrandName);
        this.pieChartData1.labels = this.label1;
        this.value1.push(Number(this.brandresult[i].ServicePercentage));
      }
      this.pieChartData1.datasets[0].data = this.value1;

      for (let i = 0; i < this.workshopdata.length; i++) {
        this.label2.push(this.workshopdata[i].WorkShopName);
        this.pieChartData2.labels = this.label2;
        this.value2.push(Number(this.workshopdata[i].Percentage));
      }
      this.pieChartData2.datasets[0].data = this.value2;

      for (let i = 0; i < this.payment.length; i++) {
        this.label3.push(this.payment[i].PaymentType);
        this.pieChartData3.labels = this.label3;
        this.value3.push(Number(this.payment[i].Percentage));
      }
      this.pieChartData3.datasets[0].data = this.value3;

      console.log(this.agreement)

      for (let i = 0; i < this.agreement.length; i++) {
        this.label4.push(this.agreement[i].AgreementName);
        this.pieChartData4.labels = this.label4;
        this.value4.push(Number(this.agreement[i].Percentage));
      }
      this.pieChartData4.datasets[0].data = this.value4;
    },

    loadReport(from, to) {
      //debugger
      console.log(from, to);

      let body = {
        FromDate: from,
        ToDate: to,
        MainServiceId: 0
      };

      this.$store.dispatch("getServicesByType", body);

      this.result = this.tdata;

      console.log(this.result);
      if (this.result.length > 0) {
        this.label = [];
        this.value = [];
      }

      // for (let i = 0; i < this.result.length; i++) {
      //   this.label.push(this.result[i].ServiceName);
      //   this.pieChartData.labels = this.label;
      //   this.value.push(Number(this.result[i].ServicePercentage));
      // }
      // this.pieChartData.datasets[0].data = this.value;

      // console.log(this.pieChartData.datasets[0].data);
      // console.log(this.pieChartData.labels);

      // this.pieChartData = {
      //   labels: [],
      //   datasets: [
      //     {
      //       data: [],
      //       backgroundColor: ["#34495e", "#2980b9", "#f1c40f", "#e74c3c"],
      //       hoverBackgroundColor: ["#3f658b", "#52ace7", "#f0cd41", "#d16a60"]
      //     }
      //   ]
      // };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reports_sa {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.main-title {
  padding: 15px 15px;
}
.myreports-cards {
  width: 100%;
  background: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 4px;
}
.row.work_cont h3 {
  font-size: 20px;
  font-family: Nunito-Medium;
  padding: 15px 0;
}

.myreports-cards h4 {
  font-size: 20px;
  font-family: Nunito-Medium;
}

.date-picker {
  width: 30%;
  display: inline-block;
  margin-right: 5px;
}
</style>
