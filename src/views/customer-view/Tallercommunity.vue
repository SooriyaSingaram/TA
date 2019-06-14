<template>
  <section id="Servicesselectdetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'TallerOnlineCommunity' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
              <h2 class="quote-main-heading">{{ 'Searchinpourknowledgebase' | translate }}</h2>
              <div class="sel_fac">
                <div class="d-flex flex-row search-main">
                  <mdb-icon icon="search" class="search-icon"/>
                  <input class="form-control" v-model="search" type="text" placeholder="Search" >
                </div>
              </div>
            </mdb-col>
            <mdb-col col="12" class="p-0" v-for="TallerCommunityData in searchData" key="TallerCommunityData.OnlineCommunityId">
              <h3 class="quote-sub-heading">{{TallerCommunityData.Title}}</h3>
              <ul class="community-list-block">
                <li>
                  <h3>Keyword <span>{{TallerCommunityData.SearchKeyWords}}</span></h3>
                  <label>{{TallerCommunityData.CreatedDate.substr(0,10)}}</label>
                  <p>{{TallerCommunityData.Description}}</p>
                </li>
              </ul>
            </mdb-col>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon } from "mdbvue";
import { METHODS } from "http";
export default {
  name: "Tallercommunity",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,mdbIcon
  },
  data() {
    return {
      search: "",
      TallerCommunityData: []
    };
  },
  computed: {
    ...mapGetters({
      TallerCommunity: "getTallerCommunityLists"
    }),

    searchData() {
      return this.TallerCommunity.filter(post => {
        return post.SearchKeyWords.toLowerCase().includes(
          this.search.toLowerCase()
        );
      });
    }
  },
  created() {
    this.$store.dispatch("getTallerCommunityLists");
  },
  watch: {
    getTallerCommunityLists: {
      deep: true,
      handler(value) {
        this.data = null;
        this.data = this.getTallerCommunityLists;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sel_fac input {
  background: #f3f6fb;
  color: #36383e;
  font-size: 17px;
  width: 470px;
}

.quote-main-heading {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 25px;
  color: #292b30;
  font-family: "Nunito-Medium";
  text-transform: capitalize;
}
.quote-sub-heading {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 25px;
  color: #292b30;
  font-family: "Nunito-Medium";
  text-transform: capitalize;
}
.community-list-block {
  padding: 0;
}
.community-list-block li {
  list-style: none;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 35px;
  margin-bottom: 30px;
}
.community-list-block li:last-child {
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 0px;
}
.community-list-block h3 {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 15px;
  color: #333333;
  font-family: "Nunito-Medium";
  text-transform: capitalize;
  text-align: left;
  width: 74%;
  display: inline-block;
  vertical-align: top;
}
.community-list-block label {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 15px;
  color: #626262;
  font-family: "Nunito-Regular";
  text-transform: capitalize;
  text-align: right;
  width: 25%;
  display: inline-block;
  vertical-align: top;
}
.community-list-block p {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 0px;
  color: #626262;
  font-family: "Nunito-Medium";
  line-height: 35px;
  text-transform: capitalize;
  text-align: left;
  width: 100%;
  display: block;
}
.community-btn {
  width: 130px;
  background: #0066d0;
  margin-left: 20px;
  height: 42px;
  padding: 0;
}

.search-main{
  position: relative;
}

.search-icon{
    font-size: 25px;
    position: absolute;
    line-height: 41px;
    right: 0;
    left: 430px;
    color: grey;
}
.community-list-block h3 span{
  color:#007bff;
  padding-left: 20px;
}
@media only screen and (min-width:320px) and (max-width:500px){
.search-icon{left:230px;}
.search-main{ width: 263px;}
}
</style>
