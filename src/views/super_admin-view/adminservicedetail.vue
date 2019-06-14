<template>
  <section id="adminservicedetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title adm">
          <h2>{{ 'AdminFunctions' | translate }}</h2>
        </div>
      </div>
      
      <div class="row work_cont">
 <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <h3>{{ 'SERVICES' | translate }}</h3>
 </div>

 <div class="col-lg-6 col-md-6 col-sm-6 col-6 cancont text-right">

                   <router-link to="/adminservices"><button class="btn btn-success">{{ 'CANCEL' | translate }}</button></router-link>

 </div>

 </div>
 <form >
<div class="container-fluid workdeta1">
 <div class="row d-flex">
 <div class="col-lg-12 servdeta9">
          <h3>{{ 'ServiceDetail' | translate }}</h3>
 </div>
</div>


 <div class="row d-flex">
<div class="col-lg-3 col-md-6" v-if="subServiceActive">
 <h3>{{ 'MainService' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6"  v-if="subServiceActive"> 
 <select class="form-control"  :disabled="mainServiceDisable"  name="MainService"  v-model="service.MainService"  @change="getName(service.MainService)" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
                   
    <option v-for="main in mainservice" :value="main.MainServiceID">{{main.ServiceName}}</option>

                    </select>
                     <i v-show="errors.has('MainService')" class="fa fa-warning"></i>
                    <span v-show="errors.has('MainService')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
<div class="col-lg-3 col-md-6" v-if="!subServiceActive">
 <h3>{{ 'MainService' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6" v-if="!subServiceActive" >
  <input type="text" class="form-control" :disabled="mainServiceDisable"  id="usr" name="MainServiceName"  v-model="service.MainServiceName" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >

  <i v-show="errors.has('MainServiceName')" class="fa fa-warning"></i>
                    <span v-show="errors.has('MainServiceName')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'SubService' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" id="usr"  :disabled="mainDisable" name="SubServiceName"  v-model="service.SubServiceName" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('SubServiceName')" class="fa fa-warning"></i>
                    <span v-show="errors.has('SubServiceName')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>



</div>




<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'Brand' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
 <select class="form-control" :disabled="mainDisable" name="BrandID"  v-model="service.BrandID" @change="getData('Model','BrandId=',service.BrandID)"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
                   
    <option v-for="brand in brandList" :value="brand.Id">{{brand.Name}}</option>

                    </select>
  <i v-show="errors.has('BrandID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('BrandID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
<div class="col-lg-3 col-md-6">
 <h3>{{ 'Model' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <select class="form-control" :disabled="mainDisable" name="ModelID"  v-model="service.ModelID" @change="getData('Class','ModelID=',service.ModelID)"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
                   
    <option v-for="data in Model" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('ModelID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('ModelID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>




</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'Class' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
   <select class="form-control" :disabled="mainDisable" name="ClassID"  v-model="service.ClassID"  @change="getData('Year','ClassID=',service.ClassID)"   v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
                   
    <option v-for="data in Class" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('ClassID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('ClassID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'Year' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <select class="form-control" :disabled="mainDisable" name="YearID"  v-model="service.YearID"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
                   
    <option v-for="data in Year" :value="data.ID">{{data.Name}}</option>

                    </select>
                     <i v-show="errors.has('YearID')" class="fa fa-warning"></i>
                    <span v-show="errors.has('YearID')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
</div>




</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'PartLabourIncluded' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" id="usr"  :disabled="mainDisable" name="PartLabour"  v-model="service.PartLabour" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('PartLabour')" class="fa fa-warning"></i>
                    <span v-show="errors.has('PartLabour')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'DeliveryTimeDays' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="DeliverDays"  v-model="service.DeliverDays" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('DeliverDays')" class="fa fa-warning"></i>
                    <span v-show="errors.has('DeliverDays')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
</div>



</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'WarrantyDays' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="WarrentyDays"  v-model="service.WarrentyDays" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('WarrentyDays')" class="fa fa-warning"></i>
                    <span v-show="errors.has('WarrentyDays')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'ReferenceDealerPrice' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="RefDealerPrice"  v-model="service.RefDealerPrice" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('RefDealerPrice')" class="fa fa-warning"></i>
                    <span v-show="errors.has('RefDealerPrice')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
</div>



</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'ServiceDescription' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <textarea  class="form-control" id="usr" :disabled="mainDisable" name="SubServiceDescription"  v-model="service.SubServiceDescription" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 </textarea><i v-show="errors.has('SubServiceDescription')" class="fa fa-warning"></i>
                    <span v-show="errors.has('SubServiceDescription')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'Margen' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="Margen"  v-model="service.Margen" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('Margen')" class="fa fa-warning"></i>
                    <span v-show="errors.has('Margen')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
</div>



</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'GrossContribution' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="GrossContribution"  v-model="service.GrossContribution" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('GrossContribution')" class="fa fa-warning"></i>
                    <span v-show="errors.has('GrossContribution')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'Predictable' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
<label for="one">Yes</label>
  <input type="radio"  id="usr" :disabled="mainDisable"  value="true"   v-model="service.Predictable" >
  <label for="one">No</label>
   <input type="radio"  id="usr" :disabled="mainDisable" value="false"   v-model="service.Predictable">
</div>
</div>



</div>
<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'UploadPhoto' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
                        <label for="file" class="sr-only">File</label>
                        <div class="input-group">
                            <input type="text" name="filename" class="form-control" placeholder="No file selected" readonly>
                            <span class="input-group-btn">
                            <div class="btn btn-default  custom-file-uploader">
                            <input type="file" @change="generateBase64()">
                                {{ 'Browse' | translate }}
                            </div>
                            </span>
                        </div>
                        {{service.name }}
                        </div></div><div class="col-lg-3 col-md-6">
 <h3>{{ 'paintandCollisionType' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
<label for="one">Yes</label>
  <input type="radio" name="d" id="usdr" :disabled="mainDisable"  value="true"   v-model="service.IsCollision" >
  <label for="one">No</label>
   <input type="radio"  name="d" id="usdr" :disabled="mainDisable" value="false"   v-model="service.IsCollision">
</div>
</div></div>
<div class="row" v-if="service.Predictable == 'true'">
<div class="col-lg-3 col-md-6">
 <h3>{{ 'RecurrenceLevelMonths' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="RecurrenceLevelMonth"  v-model="service.RecurrenceLevelMonth" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('RecurrenceLevelMonth')" class="fa fa-warning"></i>
                    <span v-show="errors.has('RecurrenceLevelMonth')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

<div class="col-lg-3 col-md-6">
 <h3>{{ 'RecurrenceLevelKM' | translate }}</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <input type="text" class="form-control" id="usr" :disabled="mainDisable" name="RecurrenceLevelKM"  v-model="service.RecurrenceLevelKM" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('owner') }" >
 <i v-show="errors.has('RecurrenceLevelKM')" class="fa fa-warning"></i>
                    <span v-show="errors.has('RecurrenceLevelKM')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>
</div>


</div>

</div>


 <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="!isDisabled">

                   <button class="btn btn-success" type="button" v-on:click="addService()" v-if="create" >{{ 'CREATE' | translate }}</button>
                    <button class="btn btn-success" type="button" v-on:click="addService()" v-if="!create" >{{ 'UPDATE' | translate }}</button>
                   <!--<router-link to="/adminservices"><button class="btn bck_btn">Cancel</button></router-link>-->

 </div>
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center" v-if="isDisabled">

                <router-link to="/adminservices"><button class="btn bck_btn">{{ 'BACK' | translate }}</button></router-link>

 </div>

 </div>

</form>

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
	Btn,
	Card,
	Fa
}
from 'mdbvue'
export default {
	name: 'adminservicedetail',
	components: {
	Row,
	Column,
	Btn,
	Card,
	Fa
	},
	data() {
		return {
            service:{},
            mainservice:[],
            brandList:[],Year:[],Class:[],Model:[],mainDisable:false,subServiceActive:false,mainServiceDisable:false
            
		}
	},
	created() {
        this.create = true;
      this.service.IsCollision=false;
        this.isDisabled=false
        this.$store.dispatch('getMainServiceList')
        this.$store.dispatch('getBrand')
        this.getCustomerParam()
       
	},
	methods: {
        getName(mainService){
            
             this.service.MainServiceID=mainService.MainServiceID
             this.service.MainServiceName=mainService.ServiceName
        },
		getCustomerParam() {
			let paramId = this.$route.params.id;
            let name = this.$route.params.name;
            
			if (name == 'sub') {
              
                   	this.create = false;
                    this.subServiceActive = false;
                    this.mainServiceDisable=true;
                    this.getContent(paramId)
               
              
			}else if(name == 'view'){
                 this.mainServiceDisable=true;
                   this.isDisabled=true;
              	this.create = true;
                 this.subServiceActive = false;
                 this.mainDisable=true;
                   this.getContent(paramId)
               
            }else if(name == 'add-sub'){
                this.create = true;
                this.subServiceActive=true;
                this.service.SubServiceID=0;
                this.service.MainService=Number(paramId);
                this.mainServiceDisable=false;
                
            }
			else {
                if(paramId == "0"){
                    	this.create = true;
                  this.service.MainServiceID=0;
                  this.service.SubServiceID=0; 
                }
				this.subServiceActive = false;
                 
             
				//this.$store.dispatch('getcustomer', corporateId)
			}
		},
		addService() {
            this.$validator.validateAll().then((result) => {
                debugger
        if (result) {
            
			var self = this;
           self.mainservice.map((item)=>{
                    if(item.MainServiceID ==this.service.MainService ){
                      this.service.MainServiceID=this.service.MainService;
                      this.service.MainServiceName=item.ServiceName;
                    }
                })
           
            this.service.url= '/SuperAdmin/AddSubService';
            let serviceData=this.service
            delete serviceData["MainService"]

			return this.$store.dispatch('updateData', serviceData).then((response) => {
                
				self.$message(response.data.Message)
				self.$router.push({
					name: 'adminservices'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
        }else{
            //alert("error occurs")
        }
            })
		},
        getData(api,param,data){
            
             let url= '/Common/Get'+api+'?'+param+data
         
return this.$store.dispatch('getDropdownList', url).then((response) => {
	this[api] =  response.data.data;
}).catch(function(err) {
	//alert(err.response.data.error)
});

        },
        getContent(a) {
			var self = this;
			let url = '/SuperAdmin/GetSubServiceEdit?SubServiceID=' + a;
			return this.$store.dispatch('getSubServiceData', url).then((response) => {
				
					this.service = response.data.data;
                    
				
				this.getData('Model','BrandId=',this.service.BrandID) 
                this.getData('Class','ModelID=',this.service.ModelID)
                 this.getData('Year','ClassID=',this.service.ClassID)
			}).catch(function(err) {
				//alert(err.response.data.error)
			});
		},
         generateBase64 () {
       var self=this;

    AWS.config.region = 'us-east-1';
 // 1. Enter your region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId:  'us-east-1:8ffb9f37-c289-47ea-8ea1-7b11fdbeec7d' // 2. Enter your identity pool
    });
    AWS.config.credentials.get(function(err) {
        if (err) alert(err);
        console.log(AWS.config.credentials);
    });
    var bucketName = 'ValetSaaS'; // Enter your bucket name
    var bucket = new AWS.S3({
        params: {
            Bucket: bucketName
        }
    });
        var file =  document.querySelector('input[type=file]').files[0];
         self.service.name = file.name;

        if (file) {
            var objKey = 'taller_web/' + file.name;
            var params = {
                Key: objKey,
                ContentType: file.type,
                Body: file,
                ACL: 'public-read'
            };
            bucket.putObject(params, function(err, data) {
                if (err) {
                   console.log(err)
                } else {
self.service.MainServiceImageName=file.name;
self.service.MainServiceImageURL='https://s3.amazonaws.com/ValetSaaS/'+objKey
                   }
            });
        } else {
           
        }

// let dat= document.querySelector('input[type=file]').files[0];
//  const reader = new FileReader();
//     reader.readAsDataURL(dat);
//     reader.onload = () =>{
//        this.workshop.ImageName= "image.png"
//      this.workshop.Base64string = reader.result.split(',')[1];
//     }
//     reader.onerror = (error) => {
//       console.log(error) 
//     };
 
    }
        		
	},
	computed: {
		...mapGetters({
            getMainServiceList: "getMainServiceList",
            getBrand:"getBrand"
		})
	},
	watch: {
		
        'getMainServiceList': {
			deep: true,
			handler(value) {
				this.mainservice = null
				this.mainservice = this.getMainServiceList;
                
			}
		},
        'getBrand': {
			deep: true,
			handler(value) {
				this.brandList = null
				this.brandList = this.getBrand.data;
                
			}
		}
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
  .custom-file-uploader {
  position: relative;
    }
  input[type='file'] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: default;
  }
.custom-file-uploader{margin:0px; padding-bottom: 11px; padding-top: 12px; border-radius: 5px; margin-right: 2px;margin-top: 0px;background: #0066d0 !important;}

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

                 .form-control{line-height:42px; padding-top:0px;}
  select.form-control {
    line-height: 37px;
    -webkit-appearance: none;
    appearance: none;
   background: #f3f6fb url('../../assets/images/arrow-down.png') !important; background-repeat: no-repeat !important;
  background-position: 97% center !important;
}
</style>
