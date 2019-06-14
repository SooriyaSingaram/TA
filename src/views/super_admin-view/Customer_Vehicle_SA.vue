<template>
  <section id="Customer_Vehicle_SA">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Customers</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>Customer Vehicle</h4>
            </div>
            
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec driver_vehicle driver_detail">
        
            <form>
              <ul>
                <li><label>Customer</label><span>Vicente Fernandez</span></li>
              
                <li><label>Brand</label><span>Renault</span></li>
              
                <li><label>Class</label><span>Motion</span></li>
            
                <li><label>Usage(KM)</label><span>55,000 KMS</span></li>

                <li><label>Date of last Technical<br>
Mechanical Revision</label><span>01/12/2016</span></li>
              </ul>
               <ul>
              
                <li><label>Vehicle</label><span>Renault Sandero - BWE 145</span></li>
              
                <li><label>Model</label><span>Sandero</span></li>
              
                <li><label>Year</label><span>2005</span></li>
              
                <li><label>Plate</label><span>CMJ 0699</span></li>

                <li><label>Expiring Date of <br>
SOAT</label><span>27/01/2017</span></li>
              </ul>
            </form>
              <div class="d-flex flex-column col-12 p-0">
          <div class="workdetatab1 mr-auto ml-auto col-md-8">

 <div class="col-lg-12 p-0">
<h2>Services</h2>
</div>


 <div class="col-lg-12 p-0">
<div class="text-nowrap servtab">
 <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>DESCRIPTION</th>
        <th>DATE</th>
        <th>VALUE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Oil Change</td>
        <td>01/11/2018 </td>
                <td>$ 523,000</td>
      </tr>
      <tr>
        <td>2</td>
      <td>Tires Change</td>
        <td>01/11/2018 </td>
                <td>$ 943,000</td>
      </tr>

  
    </tbody>
  </table>
</div>
</div>

</div>
</div>
            <div class="sub_btn btn_div">
              <btn class="bck_btn">Back</btn>
            </div>
            <!--/vehicleDetail-->
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
  } from 'mdbvue'
  
  export default {
    name: 'Customer_Vehicle_SA',
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
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.servtab
{
    margin-top: 20px;
}

@media only screen and (max-width: 767px)
{
 .servtab
{
overflow-x: scroll;
}
   
                   .workdeta1 .col-lg-3 h3
                {
                    padding-left: 0px!important;
                }
}


.servtab thead
   {
       background: #007df8;
       color: white;
       border-top-left-radius: 5px;
              border-top-right-radius: 5px;
   }



   .servtab th
   {
    font-size: 16px!important;
    /* padding-left: 10px; */
    border-right: 1px solid white;
   }



      .servtab td
   {
       padding-left: 10px;
    font-size: 16px!important;
        border-right: 1px solid white;
   }

         .servtab td img
         {
             padding-right:4px;
         }

        



    /* top-left border-radius */
    table tr:first-child th:first-child,
    table.Info tr:first-child td:first-child {
        border-top-left-radius: 6px;
    }
    
    /* top-right border-radius */
    table tr:first-child th:last-child,
    table.Info tr:first-child td:last-child {
        border-top-right-radius: 6px;
    }
    
    /* bottom-left border-radius */
    table tr:last-child td:first-child {
        border-bottom-left-radius: 6px;
    }
    
    /* bottom-right border-radius */
    table tr:last-child td:last-child {
        border-bottom-right-radius: 6px;
    }
     .table-striped {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
  }

.workdetatab1
{
    padding-top: 20px;
    margin-top: 0px;
    background: white;
    border-radius: 5px;

}

.workdetatab1 h2
{
    font-size: 18px;
    color: #212121;font-family: 'Nunito-Bold';
}

    .workdeta1
    {
        background: white;
        border-radius: 5px;
        padding-top: 20px;
        padding-left: 20px;
                padding-right: 20px;
                    margin-top: 30px;
    }
        .workdeta1 .col-lg-3
        {
            padding-bottom: 30px;
        }

                .workdeta1 .col-lg-3 h3
                {
                    padding-left: 30px;
                    font-size: 20px;
                    color: #666666;
                    padding-top: 5px;
                }


                .workdeta1 .col-lg-3 input
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
    font-size: 16px;
    color: #444444;
                }

                  .workdeta1 .col-lg-3 textarea
                {
                    background: #f5f8fa;
    border-radius: 10px!important;
    height: 100px;
        font-size: 16px;
    color: #444444;
                }
            
             
  .table td,
  .table th {
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
  
  .table td:last-child,
  .table th:last-child {
    border-right: 0px solid #dee2e6;
  }
  
  .bt-0 {
    border-top: 0!important;
  }
  
  .table-striped tbody tr:last-child table tbody tr:nth-child(odd) {
    background: #eef6fe none repeat scroll 0 0;
  }
  
  .table-striped tbody tr:last-child table tbody tr:nth-child(even) {
    background: #e3ebf3 none repeat scroll 0 0;
  }
  td.action-ic img {
    /* width: 34px;
    height: 34px; */
    cursor: pointer;
}
td.action-ic {
    padding: 10px 10px!important;text-align: center;
}
.driver_detail ul li label{width: 190px;}
.driver_detail ul li span{width: 195px;}
</style>
