<template>
    <section id="rating_SA">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title adm">
                   <h2>{{ 'Ratings' | translate }}</h2>
                </div>
            </div>
            <div class="row">
                  <div class="col-lg-12 col-lg-12 col-md-12 col-sm-12 col-12">
               <div class="rating_sa d-flex flex-wrap">
                     <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12" v-for="RatingData in RatingList" >
                         <h4>{{RatingData.ServiceName}}</h4>
                         <div class="rating_card d-flex flex-column">
                             <div class="card-ratings d-flex flex-row">
                                <p>{{ 'Overall' | translate }}</p>
                                 <!--<img src="../../assets/images/mystar-ratng.png">-->
                                  <star-rating v-bind:increment="0.5"
                                                v-bind:max-rating="5"
                                                inactive-color="#c4c4c4"
                                                active-color="#2a7af4"
                                                v-bind:star-size="20"
                                                v-model="RatingData.OverAll">
                                    </star-rating>
                             </div>
                             <ul>
                                 <li>
                                     <p>{{ 'Quality' | translate }}</p>
                                     <span>{{RatingData.Quality}} / 5</span>
                                 </li>
                                 <li>
                                     <p>{{ 'Attention' | translate }}</p>
                                     <span>{{RatingData.Attention}} / 5</span>
                                 </li>
                                 <li>
                                     <p>{{ 'Cleaning' | translate }}</p>
                                     <span>{{RatingData.Cleaning}} / 5</span>
                                 </li>
                             </ul>
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
        Btn,
        Fa,
        ListGroup,
        ListGroupItem
    }
    from 'mdbvue'
    export default {
        name: 'reports_SA',
        components: {
            Row,
            Column,
            Btn,
            Fa, 
            ListGroup,
            ListGroupItem
        },
        data() {
            return {
                RatingData:[]
            }
        },
        methods: {
        },
        created() {

      
       this.$store.dispatch('getRatingList')
      
    },
           computed: {
     
    ...mapGetters({
      RatingList: "getRatingList"
    })

  },
  watch: {
		
    'getRatingList': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.getRatingList;
        debugger
          
			}
		}
    	
	},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-title {
        padding: 15px 15px;
    }
    .row.work_cont h3 {
        font-size: 20px;
        font-family: Nunito-Medium;
        padding: 15px 0;
    }
    .rating_sa {
    margin-top: 25px;
}
    .rating_sa h4 {
        font-size: 20px;
        margin-bottom: 20px;
        font-family: Nunito-Medium;
    }.rating_card {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
}
.rating_card {
    width: 100%;
        margin-bottom: 20px;
    background: #fff;
    border-radius: 4px;
    padding: 24px;
}

.rating_card ul {
    padding-left: 0;
    width: 100%;
    margin-bottom: 0;
}

.rating_card ul li {
    width: 33.33%;
    float: left;
}

.rating_card ul li p {
    color: #656b6d;
    font-size: 16px;
    margin-bottom: 0;
}

.rating_card ul li span {
    color: #212121;
    font-size: 16px;
}

.card-ratings img {
    width: 105px;
    height: 21px;
    margin-top: 5px;
    object-fit: cover;
    margin-right: 20px;
}

.card-ratings p {
    margin-bottom: 0;
    font-size: 16px;
    color: #000;
    padding-right: 25px;
}

.card-ratings {
    width: 100%;
    margin-bottom: 20px;
}

</style>