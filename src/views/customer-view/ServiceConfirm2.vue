<template>
<section id="ServiceConfirm2">
 <div class="container-fluid">

    <div class="row">
      <div class="col-12 main-title">
        <h2>{{ 'SERVICES' | translate }}</h2>
      </div>  

       <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
              <h4>{{ 'GetAQuote' | translate }}</h4>
          </div>

          <div class="vehicle_lsts_sec">
            <div  class="success_popup d-flex flex-column justify-content-center align-items-center">

                 <div class="head text-center">
                    <img src="../../assets/images/tick_icon.png"/>
                    <p class="mb-0">{{'AppointmentScheduledMessage' | translate }}<span>${{confirmationDetail.ServiceAmount}}</span></p>
                  </div>
                  
                  <div class="app_lst">
                     <div class="row">

                     <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/driver_icon.png"/>
                         <h5>{{'WorkShop' | translate }}</h5>
                        </div>
                      </div>

                       <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/specialist_icon.png"/>
                         <h5> {{'AssignedSpecialist' | translate }}</h5>
                        </div>
                      </div> 

                       <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont app_lst_prof d-flex">
                         <img src="../../assets/images/specialist_img.jpg"/>
                         <h4>{{confirmationData.WorkShopName}}</h4>
                        </div>
                      </div> 

                      <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont app_lst_prof d-flex">
                         <img  width="50" height="50" v-bind:src="confirmationData.SpecialistImage"/>
                         <h4>{{confirmationData.SpecialistName}}</h4>
                        </div>
                      </div> 


                     <div class=" col-md-12 col-sm-12">
                        <div class="app_lst_cont d-flex">
                        
                         <div class="tick_num_lst">
                          <h5>{{'Address' | translate }}</h5>
                          <h6>{{confirmationData.Address}}</h6>
                         </div>

                        </div>
                      </div> 


                    <div class="col-md-12 text-center d-flex justify-content-center btn_sucess">
                     <router-link to="/Addnewquote"><button class="detail-btn schedule_app">{{'ScheduleAnotherAppointment' | translate }}</button></router-link>
                     <router-link to="/ScheduleServiceList"><button class="confirm-btn">{{'Confirm' | translate }}</button></router-link>
                   </div>

                      

                     </div>
                  </div>

            </div>
          </div>

        </div>

    </div>

 </div>
 </section>
</template>

<script>
import { Row, Column, Card, CardBody, ViewWrapper, MdMask, CardTitle, CardText, CardFooter, Fa, Btn, Pagination, PageNav, PageItem } from 'mdbvue'

export default {
  name: 'ServiceConfirm2',
  components: {
    Row,
    Column,
    Card,
    CardBody,
    ViewWrapper,
    MdMask,
    CardTitle,
    CardText, 
    CardFooter,
    Fa,
    Btn,
    Pagination,
    PageNav,
    PageItem
    
  },
       props: ["confirmationDetail"],
  data() {
    return {
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          },
          dates: new Date(2018, 0, 1)
        },
      ],
       quotesFinalObj: {},
       confirmationData:{}
    };
  },
  mounted: function() {
        var self = this;

        if (self.confirmationDetail) {
          		return this.$store.dispatch('getSubServiceData', self.confirmationDetail.url).then((response) => {
				if (response.data.IsSuccess) {
          this.confirmationData=response.data.data;
        this.$message(response.data.Message)
          
				}
				else {
				
				}
			}).catch(function(err) {
				alert(err.response.data.error)
			});

        }else{
            this.$router.push({
                    name: 'Addnewquote'
                })
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
