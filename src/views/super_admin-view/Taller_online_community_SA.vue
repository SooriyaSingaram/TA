<template>
    <section id="Taller_online_community_SA">
       
          
                <div class="col-12 main-title">
                    <h2>{{ 'TallerOnlineCommunity' | translate }} </h2>
                </div>
                <div class="col-12 content_section">
                     <form >
<div class="container-fluid workdeta1 workdeta-toc">


<div class="col-lg-6 d-flex brand no-padding">
 <label> {{ 'Title' | translate }}</label>
  <input type="text" class="form-control" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('title') }"  id="usr" name="title" v-model="community.Title">
   
</div>
<div class="clearfix">
  <i v-show="errors.has('title')" class="fa fa-warning"></i>
   <span v-show="errors.has('title')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
   </div>
 

<div class="col-lg-6 d-flex brand no-padding">
 <label>  {{ 'Keyword' | translate }}</label>

  <textarea rows="4" cols="40" class="form-control txt-area-toc" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('Keyword') }"   v-model="community.SearchKeyWords" name="Keyword" ></textarea>
                    
</div>
  <div class="clearfix">
                     <i v-show="errors.has('Keyword')" class="fa fa-warning"></i>
            <span v-show="errors.has('Keyword')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
            </div>
<div class="col-lg-6 d-flex brand no-padding">
 <label>  {{ 'Description' | translate }}</label>

  <textarea rows="4" cols="40" name="Description" class="form-control txt-area-toc" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('Description') }"  v-model="community.Description"  ></textarea>
                      
</div>
<div class="clearfix">
                     <i v-show="errors.has('Description')" class="fa fa-warning"></i>
            <span v-show="errors.has('Description')" class="help is-danger">{{ 'requiredValidation' | translate }}</span>
</div>

            <mdb-col col="12" class="p-0">
                     <div class="sub_btn back_btn_cad_sec d-flex justify-content-start">
                       <button @click="AddTallerCommunity(community)" class="cancel_btn submit_btn_cad mr-4" type="button">{{ 'Submit' | translate }}</button>
                       <router-link to=""><button type="reset" @click="resetField()" class="cancel_btn reset_btn_cad">{{ 'Reset' | translate }}</button></router-link>
                   </div>
          </mdb-col>
</div>

</form>
                  
                </div>

         <div class="col-12 content_section">
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle" v-for="TallerCommunityData in TallerCommunitysAdmin">
            <mdb-col col="12" class="p-0">
             <div class="d-flex sub-heading-toc col-12 no-padding"> 
                 <h3 class="quote-sub-heading quote-sec-toc">{{TallerCommunityData.Title}}</h3>
                <div class="d-flex no-padding toc-endimg">
                  <button v-on:click="editError='';editNote(TallerCommunityData)"><img class="mr-2" src="../../assets/images/penedit.png"/></button>
                  <button v-on:click="removeNote(TallerCommunityData)"><img src="../../assets/images/deleteedit.png"/></button>
                </div>
            </div>
              <ul class="community-list-block">
                <li>
                  <h3>{{ 'Keyword' | translate }} <a >{{TallerCommunityData.SearchKeyWords}}</a> </h3>
                  <label>{{TallerCommunityData.CreatedDate | formatDate(TallerCommunityData.CreatedDate)}}</label>
                  <p>
                    {{TallerCommunityData.Description}}
                  </p>
                </li>
              </ul>
            </mdb-col>
          </div>
  <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
  <span>{{ 'deleteAlert' | translate }}?</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-on:click="centerDialogVisible = false; deleteCorporate();" >{{ 'confirm' | translate }}</el-button> 
    <el-button type="danger" @click="centerDialogVisible = false">{{ 'CANCEL' | translate }}</el-button> </span>

</el-dialog>
 <el-dialog title="Edit taller online community" :visible.sync="editModal" class="edit_tall_pp" center>
  <div class="col-12 content_section">
   <form >
<div class="container-fluid workdeta1 workdeta-toc edit-taller">


<div class="col-lg-12 d-flex brand no-padding">
 <label>{{ 'Title' | translate }}</label>

  <input type="text" class="form-control"   id="usr" v-model="editData.Title">
</div>

<div class="col-lg-12 d-flex brand no-padding">
 <label>{{ 'Keyword' | translate }}</label>

  <textarea rows="4" cols="40" class="form-control txt-area-toc" v-model="editData.SearchKeyWords" ></textarea>
</div>
<div class="col-lg-12 d-flex brand no-padding">
 <label>{{ 'Description' | translate }}</label>

  <textarea rows="4" cols="40" class="form-control txt-area-toc" v-model="editData.Description"  ></textarea>
</div>
<p style="color:red">{{editError}}</p>

            <mdb-col col="12" class="p-0">
                     <div class="sub_btn back_btn_cad_sec d-flex justify-content-start">
                       <button type="button" class="cancel_btn submit_btn_cad mr-4" @click="updateTallerCommunity(editData)" >{{ 'UPDATE' | translate }}</button>
                     <el-button type="danger" @click="editModal = false">{{ 'CANCEL' | translate }}</el-button> 
                   </div>
          </mdb-col>
</div>

</form>
</div>
  
   

</el-dialog>
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
	mdbContainer,
	mdbRow,
	mdbCol,
	mdbBtn
}
from "mdbvue";
export default {
	name: "Taller_online_community_SA",
	components: {
		mdbContainer,
		mdbRow,
		mdbCol,
		mdbBtn
	},
	data() {
		return {
			centerDialogVisible: false,
			editModal: false,
			TallerCommunitysAdmin: [],
      community:{},
      editData:{},editError:''
		}
	},
	computed: {
		...mapGetters({
			getTallerCommunityLists: "getTallerCommunityLists", 
      getTallerCommunityListsedit:"getTallerCommunityListsedit"// for get data
		})
	},
	created() {
		this.$store.dispatch("getTallerCommunityLists");
	},
	methods: {
		AddTallerCommunity(communityData) {
      
      let tallerComunity={};
      tallerComunity=communityData;
        tallerComunity.CreatedBy=Number(localStorage.getItem('userId').slice(1, -1));
        this.$validator.validateAll().then((result) => {
            if (result) {
			var self = this;
			
     tallerComunity.url= '/SuperAdmin/AddCommunity';
			return this.$store.dispatch('addtallercommunity', tallerComunity).then((response) => {
        // this.community = null;
        // this.editData = null;
        this.editModal = false;
			this.resetField()
        this.$store.dispatch("getTallerCommunityLists");
        	this.$message(response.data.Message)
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
       }
        });
		},
   updateTallerCommunity(communityData){
   			 communityData.CreatedBy=Number(localStorage.getItem('userId').slice(1, -1));

      for(let key in communityData){
      
        if(communityData[key] == ''){
          alert(communityData[key],key)
          debugger
          this.editError = "Please enter all the fields";
          return
        }
      }
      let tallerComunity={};
      tallerComunity=communityData;
			var self = this;
     tallerComunity.url= '/SuperAdmin/AddCommunity';
			return this.$store.dispatch('addtallercommunity', tallerComunity).then((response) => {
        // this.community = null;
        // this.editData = null;
        this.editModal = false;
			this.resetField()
        this.$store.dispatch("getTallerCommunityLists");
        	this.$message(response.data.Message)
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
       
        
		
   },
    resetField() {
      debugger
        this.community = {}
      },

		editNote(data) {
			this.editModal = true;
      this.$store.dispatch("getTallerCommunityListsedit",data.OnlineCommunityId);
      console.log(this.editData)
		},
		removeNote(data) {
			this.centerDialogVisible = true;
			this.corp_id = data.OnlineCommunityId;
		},
		deleteCorporate() {
			var self = this;
			let tallerData = {
				url: '/SuperAdmin/DeleteCommunity?id=' + self.corp_id
			}
			return this.$store.dispatch('updateData', tallerData).then((response) => {
				this.$store.dispatch("getTallerCommunityLists");
			}).catch(function(err) {
				self.$message(err.response.data.error)
			});
		}
	},
	watch: {
		'getTallerCommunityLists': {
			deep: true,
			handler(value) {
				this.TallerCommunitysAdmin = null
				this.TallerCommunitysAdmin = this.getTallerCommunityLists;
        debugger
			}
		},
    'getTallerCommunityListsedit':{
      deep: true,
			handler(value) {
				this.editData = null 
				this.editData = this.getTallerCommunityListsedit.data;
        console.log(this.editData)
			}
    }
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .sub_btn {
        margin-top: 50px;
        margin-bottom: 20px;
        padding-left: 25px;
    }
    .sub_btn button, .sub_btn btn{width: 200px;}
    .brand input, .txt-area-toc{width:65%; margin-left:auto;font-weight:bold !important;}
    .brand .txt-area-toc{height: 100px;}
    .brand label{color:#666666;font-size: 18px;}
    .workdeta-toc{background: #fff;  padding-top: 25px;padding-bottom: 30px;}
    .no-padding{padding:0 !important;}
    .brand{margin-bottom: 30px;padding-left: 20px !important}
    .submit_btn_cad{background: #007df8!important;color:#fff!important;}
    .sub-heading-toc img{width: 30px; height: 30px;}
    .quote-sec-toc{margin-top: 0px!important;}
    .toc-endimg{margin-left: auto;}
    .community-list-block h3 a {padding-left: 30px;}
    .vehicle_lsts_sec{ margin: 20px}
    
    .sel_fac input {
    background: #f3f6fb;
    color: #36383e;
    font-size: 17px;
    width: 470px;
    ;
  }
  
  .quote-main-heading {
    font-size: 20px;
    margin-top: 0;
    margin-bottom:25px;
    color: #292b30;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;
  }
   .quote-sub-heading {
    font-size: 20px;
    margin-bottom: 25px;
    color: #292b30;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;
  }
  .community-list-block{padding: 0;}
  .community-list-block li{    list-style: none;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 35px;
    margin-bottom: 30px;}
    .community-list-block li:last-child{margin-bottom: 0;border-bottom: 0;padding-bottom: 0px;}
  .community-list-block h3
  {
  font-size: 20px;
    margin-top: 0;
    margin-bottom: 15px;
    color: #333333;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;text-align: left;width:74%;display:inline-block;vertical-align: top;
  }
   .community-list-block label
  {
      font-size:18px;
    margin-top: 0;
    margin-bottom: 15px;
    color: #626262;
    font-family: 'Nunito-Regular';
    text-transform: capitalize;text-align: right;width: 25%;display:inline-block;vertical-align: top;
  }
   .community-list-block p
  {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0px;
    color: #626262;
    font-family: 'Nunito-Medium';line-height: 35px;
    text-transform: capitalize;text-align: left;width: 100%;display: block;
  }
 
  .content_section { padding-bottom: 0;}
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .brand { padding-left: 0 !important;}
    .brand label{ font-size: 14px;}
    .brand .txt-area-toc { height: auto;}
    .sub-heading-toc {flex-direction: column;}
    .toc-endimg { margin-left: initial; margin-bottom: 10px;}
    .community-list-block h3 a {padding-left: 8px;}
    .superadmin_content .main-title h2 { text-align: center;}
    }

#Taller_online_community_SA .toc-endimg button {
    background: transparent !important;
    padding: 0px !important;
    margin-bottom:16px;
}

.clearfix {
    position: relative;
    top: -26px;
    left: 2%;
}

 @media only screen and (min-width: 320px) and (max-width: 767px) {
.community-list-block label{width:auto !important;}
 }
</style>
