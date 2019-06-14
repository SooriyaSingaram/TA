<template>
    <section id="addVehicle">
        <div class="container-fluid">

            <div class="row">
                <div class="col-12 main-title adm">
                    <h2>{{ 'Vehicle' | translate }}</h2>
                </div>
            </div>

            <form>
           
                <div class="container-fluid workdeta1">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <h3>{{ 'Brand' | translate }}</h3>
                        </div>
                        <div class="col-lg-3 col-md-6">
                           <autocomplete  
  :source="brandList" :showNoResults="false" inputClass="form-control" :placeholder="[[vehicle.BrandName]]" v-model="vehicle.BrandName"
  
   >
</autocomplete>

                            <input type="hidden" name="brand" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('brand') }" class="form-control" :disabled="isDisabled" v-model="vehicle.BrandName">
                            <i v-show="errors.has('brand')" class="fa fa-warning"></i>
                            <span v-show="errors.has('brand')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                        </div>
<div class="col-lg-3 col-md-6">
                            <h3>{{ 'Model' | translate }}</h3>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="form-group">
                              <autocomplete 
  :source="ModelList" :showNoResults="false" inputClass="form-control" :placeholder="[[vehicle.ModelName]]"  v-model="vehicle.ModelName"  @close="checkValue"
  
   >
</autocomplete>
                                <input type="hidden" name="model" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('model') }" class="form-control" :disabled="isDisabled" v-model="vehicle.ModelName">
                                <i v-show="errors.has('model')" class="fa fa-warning"></i>
                                <span v-show="errors.has('model')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                            </div>
                        </div>
                      

                    </div>

                    <div class="row">

                        
                        <div class="col-lg-3 col-md-6">
                            <h3>{{ 'Class' | translate }}</h3>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="form-group">
                              <autocomplete 
  :source="ClassList" :showNoResults="false" inputClass="form-control" v-model="vehicle.ClassName" :placeholder="[[vehicle.ClassName]]" 
  
   >
</autocomplete>
                                <input type="hidden" name="class" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('class') }" class="form-control" :disabled="isDisabled" v-model="vehicle.ClassName">

                                <i v-show="errors.has('class')" class="fa fa-warning"></i>
                                <span v-show="errors.has('class')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                            </div>
                        </div>
                          <div class="col-lg-3 col-md-6">
                            <h3>{{ 'Year' | translate }}</h3>
                        </div>
                        <div class="col-lg-3 col-md-6">
<autocomplete 
  :source="YearList" :showNoResults="false" inputClass="form-control"  v-model="vehicle.YearName" :placeholder="[[vehicle.YearName]]" 
  
   >
</autocomplete>
                            <input type="hidden" name="year" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('year') }" class="form-control" :disabled="isDisabled" v-model="vehicle.YearName">
                            <i v-show="errors.has('year')" class="fa fa-warning"></i>
                            <span v-show="errors.has('year')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                            <button class="btn btn-success" type="button" v-on:click="addVehicle()" v-if="create">{{ 'CREATE' | translate }}</button>
                            <button class="btn btn-success" type="button" v-on:click="addVehicle()" v-if="!create">{{ 'UPDATE' | translate }}</button>
                            <router-link to="/vehicle-model">
                                <button class="btn bck_btn" >{{ 'CANCEL' | translate }}</button>
                            </router-link>

                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="isDisabled">

                            <router-link to="/vehicle-model">
                                <button class="btn bck_btn">{{ 'BACK' | translate }}</button>
                            </router-link>

                        </div>
                    </div>

                </div>
            </form>

        </div>
    </section>
</template>

<script>
import {
	mapGetters,
	mapActions
}
from "vuex";
import Autocomplete from 'vuejs-auto-complete'

  import {
    Row,
    Column,
    Btn,
    Card,
    CardBody,
    CardHeader,
    CardText,
    Fa,
    BarChart,
    PieChart,
    LineChart,
    RadarChart,
    DoughnutChart,
    ListGroup,
    ListGroupItem,
    Badge,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter
  } from 'mdbvue'
  export default {
    name: 'vehicle_master',
    components: {
        Autocomplete,
      Row,
      Column,
      Btn,
      Card,
      CardBody,
      CardHeader,
      CardText,
      Fa,
      BarChart,
      PieChart,
      LineChart,
      RadarChart,
      DoughnutChart,
      ListGroup,
      ListGroupItem,
      Badge,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter
    },
  data() {
		return {
			vehicle: {},brandList:[],ModelList:[],ClassList:[],YearList:[]	}
	},

	created() {
        this.$store.dispatch('getBrand');
		this.getDriverParam()
        this.getData('Model','ModelList') 
        this.getData('Class','ClassList')
        this.getData('Year','YearList')
      

	},
	methods: {
    
        
            getData(api,sourceData){
            
             let url= '/Common/GetAll'+api;
             
         var self=this;
return self.$store.dispatch('getDropdownList', url).then((response) => {
    self[sourceData]=response.data.data;
//    let keyObj= Object.keys(reqData[0])
//     reqData.map(function(data){
        
// self[sourceData].push({id:data[keyObj[1]],name:data[keyObj[1]]})
//     })
console.log(self.ModelList);
}).catch(function(err) {
	//alert(err.response.data.error)
});

        },
		getDriverParam() {
            
			let vehivle_Id = this.$route.params.id;
			if (vehivle_Id == '0') {
                //this.vehicle.DriverDetailsID =0;
                // this.vehicle.UserID =0;
                this.isDisabled = false;
				this.create = true;
                
			}
			else {
               console.log(vehivle_Id)
              let vehicleData= vehivle_Id.split('&')
              
                   this.isDisabled = false;
                   this.create = false;
              let vehicleUpdate={
                   "ClassId": Number(vehicleData[0].substring(2)),
                  "BrandId": Number(vehicleData[1].substring(2)),                 
                  "ModelId":Number(vehicleData[2].substring(2)),
                   "YearId": Number(vehicleData[3].substring(2)),
                   url:'/SuperAdmin/ViewMasterVehicle'
              } 
              debugger
                return this.$store.dispatch('updateData', vehicleUpdate).then((response) => {
         this.vehicle= response.data.data
				this.$store.dispatch('clearData')		
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
            }	
				
			},
		addVehicle() {  
             this.$validator.validateAll().then((result) => {   
                 if(result) {                              
			var self = this;
           this.vehicle.url= '/SuperAdmin/AddMasterVehicle';
            this.vehicle.UserId =Number(localStorage.getItem('userId').slice(1, -1));
			return this.$store.dispatch('updateData', this.vehicle).then((response) => {
         
                    
              self.$message(response.data.Message)
				self.$router.push({
					name: 'vehicle-model'
				})
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
            
            }
            
              })
		
    
		}
	},
    computed: {
		...mapGetters({
            getBrand:"getBrand"
		})
	},
	watch: {
 
	
    'getBrand': {
			deep: true,
			handler(value) {
				this.brandList.length=0;
                var self=this;
			self.brandList=	self.getBrand.data
                
			}
		}
    
	}
  }

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.highbut
{
        padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.lessbut
{
        padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.secform
{
    margin-top: 20px;
}
.servdeta9 h3
{
    font-size: 25px;
    font-weight: 300;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
}

  .cancont button
  {
      font-size: 18px;
      background: #95a5a6!important;
      border-radius: 5px;
      box-shadow: none!important;
  }


.custdetabut
{
    margin-top: 50px;
}
.vehrig
{
        border-left: 12px solid #f2f5f7;

}

.corpe
{
    margin-top: -50px;
}
.view
{
    font-size: 18px;
    color: black;
    text-decoration: underline;
    float: right;
    cursor: pointer;
}


input:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.dropcity:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.dropmale:focus
{
    box-shadow: none!important;
    border: 1px solid #e0cece!important;
}

.chanimg
{
    width: 110px;
    height: 110px;
    border: 3px solid #007df8;
    border-radius: 50%;
}
.servtab
{
    margin-top: 20px;
}

@media only screen and (max-width: 992px)
{
    .corpe
{
    margin-top: 0px!important;
}
}

@media only screen and (max-width: 767px)
{
 .servtab
{
overflow-x: scroll;
}

.servdeta9 h3
{
    padding-left: 0px!important;
}
.corpe
{
    margin-top: 0px!important;
}
 
                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 0px!important;
                }  
}

.workdetatab1
{
    padding-top: 20px;
    margin-top: 30px;
    background: white;
    border-radius: 5px;

}

.workdetatab1
{
    padding-bottom: 30px;
}
.workdetatab1 h2
{
    font-size: 25px;
    color: #212121;
}
.work_cont
{
    margin-top: 20px;
}
   .cancont button
  {
      font-size: 18px;
      background: #95a5a6!important;
      border-radius: 5px;
      box-shadow: none!important;
  }


 
  .upcont button
  {
      font-size: 18px;
      background: #007df8!important;
      border-radius: 5px;
      box-shadow: none!important;
  }

.upcont
{
    margin-top: 20px;
    padding-bottom: 40px;
}
      .adm
    {
        background: #0052b1;
        color: white!important;
    }
         
    .adm h2
    {
                color: white!important;
    }

#Corporate_agree
{
    padding-bottom:40px;
}
    .workdeta1
    {
        background: white;
        border-radius: 5px;
        padding-top: 20px;
        padding-left: 20px;
                padding-right: 50px;
                    margin-top: 30px;
    }
        .workdeta1 .col-lg-3
        {
            padding-bottom: 30px;
        }

                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 30px;
                    font-size: 18px;
                    color: #666666;
                    padding-top: 5px;
                }

.workdeta1 .col-lg-3 h4
{
    font-size: 20px;
    padding-top: 2px;
}

.corptext
{
    margin-top: 30px;
}

                .workdeta1 .col-lg-3 input
                {

                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
                }

                                .workdeta1 .col-lg-3 .dropcity
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
    
                }


                                .workdeta1 .col-lg-3 .dropmale
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 42px;
    
                }

.workdeta1 .col-lg-3 textarea
{
    background: #f5f8fa;
    border-radius: 10px!important;
    height: 100px;
 }

body .btn_div button.bck_btn {
    background: #3a4959 !important;
    color: #fff;
}

 .form-control{line-height:42px; padding-top:0px;}
  select.form-control {
    line-height: 37px;
    -webkit-appearance: none;
    appearance: none;
   background: #f3f6fb url('../../assets/images/arrow-down.png') !important; background-repeat: no-repeat !important;
  background-position: 97% center !important;
}
.autocomplete__icon {
    ;
    display: none;
}
.autocomplete__box img {
    display: none !important;
        opacity: 0;
}
.autocomplete__icon.autocomplete--clear{
display: none;
}

</style>
