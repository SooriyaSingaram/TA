<template>
  <section id="addcityZone">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12 main-title adm">
          <h2>{{ 'AdminFunctions' | translate }}</h2>
        </div>
      </div>
      

  <div class="col-12 content_section">
       <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex  p-0">
            <h4>{{ 'cityZone' | translate }}</h4>
            
            </div>
          </div>
    <form id="view-form"  >

    
        <div class="container-fluid workdeta1">
            <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'CityName' | translate }}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6"  v-if="!cityActive"> 
 <select class="form-control"    name="MainService"  v-model="cityZone.CityId"   v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
    <option v-for="city in cities" :value="city.CityId">{{city.CityName}}</option>
               
   

                    </select>
                     <i v-show="errors.has('MainService')" class="fa fa-warning"></i>
                    <span v-show="errors.has('MainService')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
                    <div class="col-lg-3 col-md-6" v-if="cityActive">
                    <input type="text" name="cityZone"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cityZone') }" class="form-control" :disabled="isDisabled" v-model="cityZone.CityName" >
                    <i v-show="errors.has('cityZone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('cityZone')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
</div>

  
      
     

      <div v-for="(input, index) in inputs">
        <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>{{ 'Zone' | translate }} {{index+1}}</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group btn_grp">
                    <input type="text" name="name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" class="form-control"  :disabled="isDisabled" v-model="input.ZoneName" >
                    <button class="minus" type="button" v-if="index>0" @click="deleteRow(index)">-</button>
                                        <button class="plus" type="button" v-if="(inputs.length-1) == index" @click="addRow()">+</button>

                     <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
                    </div>
                    </div>
             </div>  
             </div>  

           
             <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button"  v-on:click="addcityZone()" >{{ 'CREATE' | translate }}</button>
                   <router-link to="/city-zone"><button type="button" class="btn bck_btn">{{ 'CANCEL' | translate }}</button></router-link>

 </div>

 </div>

        </div>
    </form>


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
	Btn,
	Card,
	Fa
}
from 'mdbvue'
export default {
	name: 'addcityZone',
	components: {
	Row,
	Column,
	Btn,
	Card,
	Fa
	},
    
	data() {
        
		return {
             inputs: [{}],
			cityZone: {},
            cities:[],
            isDisabled:false
		}
	},
   
	created() {
		this.getcityZoneParam()
	},
	methods: {
 addRow() {
      this.inputs.push({
        ZoneName: ''
      })
      console.log(this.inputs)
    },
    deleteRow(index) {
      this.inputs.splice(index,1)
    },
    //  validateBeforeSubmit() {
    //   this.$validator.validateAll().then((result) => {
    //     if (result) {
    //       // eslint-disable-next-line
    //       alert('Form Submitted!');
    //       return true;
    //     }

    //     alert('Correct them errors!');
    //   });
    // },
       
		getcityZoneParam() {
			let cityZoneId = this.$route.params.id;
            
			if (cityZoneId == "city-zone") {
              this.cityZone.CityId=0;
                this.isDisabled = false;
				
                this.cityActive=true;
			}
            else if(cityZoneId == "zone"){
                
                this.isDisabled = false;
               
                 this.cityActive=false;
                 this.$store.dispatch('cityList')
               
            }
			else {
              
                 
                   this.$store.dispatch('cityZoneList', cityZoneId)
               
                
				
				
			}
		},
		addcityZone() {        

        this.$validator.validateAll().then((result) => {
            if (result) {
            // eslint-disable-next-line
            var self = this;
            
            this.cityZone.ZoneName=[];
  this.cityZone.CreatedBy=Number(localStorage.getItem('userId').slice(1, -1));

           this.cityZone.url= '/SuperAdmin/AddCityZone';
           this.inputs.map((item)=>{
 this.cityZone.ZoneName.push(item.ZoneName)
           })
           
			return this.$store.dispatch('updateData', this.cityZone).then((response) => {
				//self.$message(response.data.Message)
				self.$router.push({
					name: 'city-zone'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				//self.$message(err.response.data.error)
			});
            }

           // alert('Correct them errors!');
        });


			
		}
	},
	computed: {
		...mapGetters({
			cityZoneList: "cityZoneList",
            "cityList":"cityList"
		})
	},
	watch: {
		'cityZoneList': {
			deep: true,
			handler(value) {
				this.cityZone = null
				this.cityZone = this.cityZoneList.data;
			}
		},
            'cityList': {
			deep: true,
			handler(value) {
				this.cities = null
				this.cities = this.cityList;
			}
		},
	},
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

#cityZone_agree
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
            padding-bottom: 12px;
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

button.add_btn span, button.delete_btn span {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    line-height: 30px;
    font-size: 27px;
}

button.add_btn{
    background:#007df8;
}
button.delete_btn{
    background:#c2c2c2;
}
button.add_btn, button.delete_btn {
    width: 40px;
    height: 40px;
    padding: 010px;
    position: relative;
    top: -43px;
    right: -105%;
    border-radius: 40px;
    border: 0px;
}
button.plus{
       background: #0052b1 none repeat scroll 0 0;
    border-radius: 58px;
    color: #fff;
    font-size: 15px;
    height: 39px;
    line-height: 10px;
    margin-top: 30px;
    padding: 0;
    text-align: center;
    width: 40px;
}
button.minus {
    background:#c2c2c2;
  border-radius: 58px;
    color: #fff;
    font-size: 15px;
    height: 39px;
    line-height: 10px;
    margin-top: 30px;
    padding: 0;
    text-align: center;
    width: 40px;
}

</style>
