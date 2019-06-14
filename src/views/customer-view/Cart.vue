<template>
  <section id="Cart">

    <div class="container-fluid">

      <div class="row">

        <div class="col-12 main-title">

          <h2>{{ 'CART' | translate }}</h2>

        </div>

        <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">

            <h4>{{ 'CartList' | translate }}</h4>

          </div>

 
<div class="container container_board">
	<table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
            	<td style="width:25%">{{ 'VehicleName' | translate }}</td>
              <td style="width:25%">
              <tr>	<td style="width:25%">{{ 'ServiceType' | translate }}</td>
							<td style="width: 35%;padding-left: 62px;">{{ 'Description' | translate }}</td>
							<td style="width: 25%;padding-left: 68px;">{{ 'Price' | translate }}</td>
					
            <td style="width:20%">{{ 'Remove' | translate }}</td></tr></td>
            	<td style="width:20%">Total Amount</td></tr></td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="cartdata in cartList">
 							<td data-th="Product"> <img v-bind:src="cartdata.ImageURL" class="cent_img"/><p class="bold_para">{{cartdata.VehicleName}}</p></td> 
               <td>
               <tr  v-for="cartItem in cartdata.data">
               	<td data-th="Product"> <img src="../../assets/images/quote-img1.png" class="cent_img"/><p class="bold_para">{{cartItem.MainServiceName}}</p></td>
							<td data-th="Price" class="second_dt"><p>{{cartItem.SubServiceName +'-'+ cartItem.Description}}</p></td>
							<td data-th="Subtotal" class="bold_txt">${{cartItem.Amount}}</td>
              	
							<td class="actions"><button type="button" @click="deleteCartItem(cartItem.CarOwnerCartDeatilsID)" class="btn  btn-sm"><a  class="remove"><img src="../../assets/images/close_cart.png" /></a></button></td>
               </tr>
               <td data-th="Subtotal" class="bold_txt totl-amt"><span>${{totalSum(cartdata.data)}}</span></td>
               </td>          
			<td data-th="Product">    
                <button @click="schedule(cartdata,totalSum(cartdata.data))" class="detail-btn valid-btn pp_btn">{{ 'scheduleNow' | translate }}</button>  
      </td> 
						</tr>
           
					</tbody>
				<tfoot>
				
			 	<tr>
							
						
						</tr> 
					</tfoot>
				</table>

      
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
  
    Column,
  
    Btn
  
  } from 'mdbvue'

  export default {
  
  
    name: 'Cart',
  
  
    components: {
   Row,
   Column,
    Btn
  
    },

    data() {
      return {
        total:0,
        cartList:[],
        attrs: [{
          dates: new Date(2018, 11, 10),
          highlight: {
            backgroundColor: '#007bff',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          }

        }, ],

      };

    },
     created() {
    this.getCart()
        
	},
  methods: {
   totalSum(items)
{
  debugger
    return items.reduce(function(sum, item)
    {
      debugger
        return (sum + item.Amount);
    }, 0);
},
    schedule(cartdata,totalPrice){

    let  ServiceList=[];
   let  cartIdList=[];
    cartdata.data.map((item)=>{
      cartIdList.push(item.CarOwnerCartDeatilsID)
                 ServiceList.push({MainServiceId:item.MainServiceId,SubserviceId: item.SubServiceId})
    })

      let vehicleData={
        CustomerVehicleID:cartdata.data[cartdata.data.length-1].CustomerVehicleID,
        CityId:cartdata.data[cartdata.data.length-1].CityId,
        ZoneId: cartdata.data[cartdata.data.length-1].ZoneId,
        ServiceList:ServiceList,
        ServiceAmount: totalPrice,
        cartIdList:cartIdList
      }
      this.$router.replace({
                name: 'GetQuote',
                
                params: {
                    quoteFinaldata: vehicleData
                }
            });
    },
    deleteCartItem(id){
let deleteCart={
  
  url:'/CarOwner/DeletCarOwnerCartDetails?vehicleId='+id
}
	return this.$store.dispatch('updateData', deleteCart).then((response) => {
			
        this.getCart()
        	this.$message(response.data.Message)
			}).catch(function(err) {
				this.$message(err.response.data.error)
			});
    },
// /CarOwner/DeletCarOwnerCartDetails?vehicleId={vehicleId}
getCart(){
   this.cartList.length=0;
  let userId=Number(localStorage.getItem('userId').slice(1, -1));
  return this.$store.dispatch('getListData','/CarOwner/GetcartDeatils?userId='+userId).then((response) => { 
                if(response.data.IsSuccess){

                  var datas = response.data.data;
               
                let result = datas.reduce(function(r, a) {
                    r[a.CustomerVehicleID] = r[a.CustomerVehicleID] || [];
                    r[a.CustomerVehicleID].push(a);
                    return r;
                }, Object.create(null));
                for (let key in result) {
                  debugger
 let imagUrl;
 debugger
if(result[key][0].hasOwnProperty('ImageURL')){
imagUrl = result[key][0].ImageURL
}else{
  imagUrl='../../assets/images/vehicle.jpg'
}
   
                    this.cartList.push({
                        "data": result[key],
                        name: key,
                        ImageURL:imagUrl,
                        VehicleName:result[key][0].BrandName+result[key][0].ClassName+result[key][0].ModelName+result[key][0].YearName
                    })
                }
                
             }else{
              
                }
               
            })
}
  }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





  .service_radio_input {
  
    border: 1px solid #cbcdce;
  
    padding: 46px 35px;
  
  }
  
  
  
  .service_option {
  
    background: #fff;
  
  }
  
  
  
  .add_newvehicle form {
  
    width: 100%;
  
  }
  
  
  
  .custom-control-label {
  
    font-size: 18px;
  
    line-height: 18px;
  
    padding-left: 16px;
  
  }
  
  
  
  .custom-control.custom-radio {
  
    margin-bottom: 30px;
  
  }
  
  
  
  .sub_btn.back_btn {
  
    align-items: center;
  
    align-self: center;
  
    display: flex;
  
    flex-direction: row;
  
    justify-content: center;
  
    margin: 35px 0 11px;
  
    width: 100%;
  
  }
  
  
  
  .service_payment {
  
    margin-top: 30px;
  
  }
  
  
  
  .detail-btn.valid-btn.pp_btn {
  
    width: auto !important;
  
  }
  .add_newvehicle form ul li label{margin-bottom:10px;}

  textarea {
  background: #f3f6fb none repeat scroll 0 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  height: 97px;
  width: 100%;
  padding:10px;
}


 


/*aasif*/

 .container.container_board  button.cancel_btn.back_mainsc.btn.btn-default.ripple-parent {
    width: auto!important;
        font-weight: 500;
}
.container.container_board table.table-condensed  th {
    font-size: 18px;
    color: #363a3f;
    font-weight: 600;
}
.container.container_board table.table-condensed tr td img.cent_img {
    margin-left: 24px;
    max-width: 200px;
}
 
.container.container_board table.table-condensed  th, table.table td {
    padding-top: 1.1rem;
    padding-bottom: 1rem;
}
.container.container_board table.table-condensed  td, .container.container_board table.table-condensed  th {
    padding: .75rem;
    vertical-align: middle;
   border-top: 0;
}
.container.container_board table.table-condensed  a {
    margin: 0;
    color: #ffffff;
}
.container.container_board table.table-condensed  button.btn.btn-sm {
    border-radius: 50%;
      padding: 3px 14px 7px 14px;
    font-size: 18px;
    box-shadow: none;
}
.container.container_board table.table-condensed  tbody tr:hover {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    background-color: transparent;
}
.container.container_board table.table-condensed td.total_balance a {
    color: #212529!important;
}
.container.container_board {
    background: #ffffff;
        
}
.container.container_board table.table-condensed td.second_dt p{
    font-size: 14px;
        text-align: justify;
    padding-right: 43px;
}
.container.container_board table.table-condensed td.bold_txt {
    font-weight: 600;
    font-size: 18px;
}

.container.container_board table.table-condensed  p.bold_para {
    min-width: 143px;
    font-size: 14px;
    font-weight: 600;
}

.container.container_board  .sub_btn.back_btn {
    padding-bottom: 35px;
}
.container.container_board table.table-condensed tr.bord_bm {
    border-bottom: 1px solid #ccc;
}
.container.container_board table.table-condensed td.total_balance {
    font-size: 16px;
    font-weight: 600;
}
.container.container_board td.total_balance.br-lt {
    background: #f2f5f7;
    border-radius: 4px 0 0 4px;
}
.container.container_board td.total_balance.br-rt {
    background: #f2f5f7;
    border-radius: 0 4px 4px 0;
}

.container.container_board table.table-condensed td.bold_txt.totl-amt{
  font-size:22px !important;
}
.totl-amt span{
    background: #1032ef;
    padding: 10px;
    border-radius: 50%;
    color: #fff;
}
@media only screen and (min-width:320px) and (max-width:467px)
{
 .container.container_board   button.cancel_btn.back_mainsc.btn.btn-default.ripple-parent {
    font-size: 12px!important;
}
}
@media screen and (max-width: 767px) {
  .container.container_board {
    overflow-x: scroll;
}
} 
</style>
