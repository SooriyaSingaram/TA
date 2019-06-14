<template>
  <section id="ServiceGPS">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Services</h2>
        </div>
        <div class="col-12 content_section">
          <div class="vehicle_tlt d-flex flex-row">
            <h4>{{ 'ServicesInProgress' | translate }}</h4>
          </div>

           <div class="gps_loc">
          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.722929044356!2d-0.47749438431793323!3d52.139361372120476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b6d185e8dda3%3A0x3860ed97d5964!2sAge+UK+Bedfordshire!5e0!3m2!1sen!2sin!4v1544711924939" width="100%" height="460" frameborder="0" style="border:0" allowfullscreen></iframe>-->

       <!-- <GmapMap
  :center="{lat:52.139542, lng:-0.475295}"
  :zoom="1" 
  map-type-id="terrain"
  style="width:100%; height: 500px"
>


  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>-->

   <gmap-map ref="mymap" :center="startLocation" :zoom="14" style="width: 100%; height: 500px">

  
    <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false">
        {{infoContent}}
      </gmap-info-window>
      <gmap-marker v-for="(item, key) in Locationlist"  :key="key" :position="getPosition(item)" :clickable="true" @click="toggleInfo(item, key)" />

    </gmap-map>



           </div>

           <div class="sub_btn back_btn">
              <router-link to="/ScheduleServiceList"><btn class="cancel_btn" @click="$router.go(-1)">{{ 'BACK' | translate }}</btn></router-link>
            </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

  import {
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Column
  } from 'mdbvue';
  
  export default {
    name: 'ServiceGPS',
    
    components: {
      Btn,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter,
      Container,
      Row,
      Column,
    },
    data() {
       //alert(this.position)
      return {
    
      startLocation: {
      lat: 13.0573117,
      lng: 80.2534188
    },
    //     coordinates: {
    //   0: {
    //     full_name: 'Erich  Kunze',
    //     lat: 10.31,
    //     lng: 123.89
    //   },
    //   1: {
    //     full_name: 'Delmer Olson',
    //     lat: '10.32',
    //     lng: '123.89'
    //   }
    // },
      infoPosition: null,
    infoContent: null,
    infoOpened: false,
    infoCurrentKey: null,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
      }
      
    },
    methods:{
      getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
      toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.full_name;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },


getLocationParam() {
  	let userid = Number(JSON.parse(localStorage.getItem('userId'))) ;
    //let CarOwnerServiceId = this.$route.params.id;
    this.$store.dispatch("getLocationTracking", userid); 
}

    },
     computed: {
     
    ...mapGetters({
      Locationlist: "getLocationTracking"
    })
     

  },

  	watch: {
		'getLocationTracking': {
			deep: true,
			handler(value) {
				this.data = null
				this.data = this.getLocationTracking;
        
        
			}
		}
	},


  created() {
 
	// this.mapdata();
      this.getLocationParam();
      
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }
  .sub_btn button{background:#0066d0 !important; color:#fff !important; width:160px;}
</style>
