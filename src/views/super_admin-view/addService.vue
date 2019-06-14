<template>
  <section id="addService">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12 main-title adm">
          <h2>Add Service</h2>
        </div>
      </div>
      

    <form >
        <div class="container-fluid workdeta1">
            <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>Service Name</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" class="form-control" v-model="corporate.CorporateUniqueAccessID" >
                    </div>

                    <div class="col-lg-3 col-md-6">
                    <h3>Corporate Agreement</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" class="form-control"  v-model="corporate.CorporateCompanyName" required>
                    </div>
                    </div>
             </div>    


              <div class="row">
               <div class="col-lg-3 col-md-6">
                    <h3>Email</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="form-group">
                    <input type="text" class="form-control"  v-model="corporate.CompanyEmail" >
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <h3>Address</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="textarea" class="form-control"  v-model="corporate.CompanyAddress">
                    </div>
                    
             </div> 

              <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <h3>Password</h3>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <input type="text" class="form-control"  v-model="corporate.CompanyMobile">
                    </div>
                    
          
             
             </div>

             <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont btn_div text-center">

                   <button class="btn btn-success" type="submit" v-on:click="addCorporate()" v-if="create" >Create</button>
                    <button class="btn btn-success" type="submit" v-on:click="addCorporate()" v-if="!create" >Update</button>
                   <router-link to="/Corporate_agreement_SA"><button class="btn bck_btn">Cancel</button></router-link>

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
import {
	Row,
	Column,
	Btn,
	Card,
	Fa
}
from 'mdbvue'
export default {
	name: 'addService',
	components: {
	Row,
	Column,
	Btn,
	Card,
	Fa
	},
	data() {
		return {
			corporate: {}
		}
	},
	created() {
		this.getCorporateParam()
	},
	methods: {
		getCorporateParam() {
			let corporateId = this.$route.params.id;
			if (corporateId == '0') {
                this.corporate.CorporateMasterID =0;
				this.create = true;
			}
			else {
				this.create = false;
				this.$store.dispatch('getcorporate', corporateId)
			}
		},
		addCorporate() {
			var self = this;
			return this.$store.dispatch('addcorporate', this.corporate).then((response) => {
				self.$message(response.data.Message)
				self.$router.push({
					name: 'Corporate_agreement_SA'
				})
				self.$store.dispatch('clearData')
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		}
	},
	computed: {
		...mapGetters({
			getCorporate: "getCorporate"
		})
	},
	watch: {
		'getCorporate': {
			deep: true,
			handler(value) {
				this.corporate = null
				this.corporate = this.getCorporate.data;
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
    height: 47px;
                }

                                .workdeta1 .col-lg-3 .dropcity
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
    
                }


                                .workdeta1 .col-lg-3 .dropmale
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
    
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
</style>
