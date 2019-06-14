<template>
  <section id="Contactspecialist">
    <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
          <h2>Services</h2> 
      </div>
     <div class="col-12 content_section">
          <div class="vehicle_tlt d-flex flex-row">
            <h4>Services in Progress</h4>
         </div>
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment">
  
            <form>
              <ul>
                 <li>
                 <p>Contact the specialist assigned to your service.</p>
                 <p>During non business hours, we will contact you in next business hour</p>
                 <textarea v-model="chat.message"></textarea>
                </li>
              </ul>
            </form>
  
            <div class="sub_btn back_btn">
              <button class="detail-btn valid-btn pp_btn" @click="sendMessage()">Send Message</button>
              <router-link to="/ScheduleServiceList"> <button  class="cancel_btn">Back</button> </router-link >
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
    Column
  } from 'mdbvue'
  export default {
  name: 'Contactspecialist',
  components: {
      Row,
      Column
    },
   props: ["specialist"],
  data() {
  return {
  
   attrs: [{
  
    dates: new Date(2018, 11, 10),
   highlight: {
  backgroundColor: '#007bff',
 },
   contentStyle: {
 color: '#fafafa',
  
}

        }, ],
        specialistData:{},
        chat:{}
};
},
    mounted: function () { 
    if (this.specialist) {
           this.specialistData =this.specialist
        }
},
  methods:{
    sendMessage(){
      
let messageObj= {
      
  "CarOwnerServiceId": this.specialistData.CarOwnerServiceId,
  "SenderId": Number(JSON.parse(localStorage.getItem('userId'))) ,
  "ReceiverId": this.specialistData.receiverId,
  "Message": this.chat.message,
  "IsSpecialist": false,
  "CreatedBy": Number(JSON.parse(localStorage.getItem('userId'))),
"url":"/Common/ChatReply"
}
	return this.$store.dispatch('updateData',messageObj ).then((response) => {
    	if (response.data.IsSuccess) {
				this.$message(response.data.Message)
			  this.chat.message=""
      }else{
        	this.$message(response.data.Message)
      }
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});

    }

  }
  
  
  
  
  
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.service_radio_input { border: 1px solid #cbcdce; padding: 46px 35px; }
.service_option {  background: #fff;}
.add_newvehicle form { width: 100%;}
.add_newvehicle form ul li p {font-size: 18px; line-height: 18px;}
.custom-control.custom-radio { margin-bottom: 30px; }
.sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0px 0 11px;
    width: 100%;}
  .service_payment {margin-top: 30px;}
  .detail-btn.valid-btn.pp_btn { width: auto !important; margin-right:10px;}
  .add_newvehicle form ul li{max-width:100%; width:55%; margin-right:0px;}
  .add_newvehicle form ul li label{margin-bottom:10px;}
  textarea {background: #f3f6fb none repeat scroll 0 0;border: 1px solid #ced4da;
border-radius: 5px;height: 97px; width: 100%;  padding:10px;}


@media only screen and (min-width:320px) and (max-width:800px){
.add_newvehicle form{max-width:100% !important;}
.add_newvehicle form ul li{width:80% !important;}
}

</style>
