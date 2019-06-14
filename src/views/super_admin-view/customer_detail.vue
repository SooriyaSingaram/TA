<template>
  <section id="customer_detail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title adm">
          <h2>Customers</h2>
        </div>
      </div>
      
      <div class="row work_cont">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 vehicle_tlt">
          <h4>Customer Information</h4>
 </div>


 </div>
<div class="container-fluid workdeta1">


<form action="/">
 <div class="row d-flex">
<div class="col-lg-3 col-md-6">
 <h3>Name</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" placeholder="Andres Rodriguez" id="usr">
</div>

<div class="col-lg-3 col-md-6">
 <h3>Identification</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" placeholder="79,750,688" id="usr">
</div>



</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>Address</h3>
</div>
<div class="col-lg-3 col-md-6">
 <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" placeholder="Lorem ipsum is a dummy text content..." rows="10"></textarea>
</div>

<div class="col-lg-3 col-md-6">
 <h3 class="citdrop">City</h3>

</div>
<div class="col-lg-3 col-md-6">
  <select class="form-control dropcity" id="sel1">
    <option>Bogoto</option>
    <option>City 2</option>
    <option>City 3</option>
    <option>City 4</option>
  </select>
</div>


</div>


<div class="row  corpe justify-content-end">
<div class="col-lg-3 col-md-6">
  <h3>Corporate
Agreement</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" placeholder="IBM" id="usr">
</div>
</div>


<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>Email</h3>
</div>
<div class="col-lg-3 col-md-6">
  <input type="text" class="form-control" placeholder="arodriguez@yahoo.com" id="usr">
</div>

<div class="col-lg-3 col-md-6">
 <h3>Identification</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <input type="text" class="form-control" placeholder="3164315485" id="usr">
</div>
</div>



</div>

<div class="row">
<div class="col-lg-3 col-md-6">
 <h3>Gender</h3>
</div>
<div class="col-lg-3 col-md-6">
  <select class="form-control dropmale" id="sel1">
    <option>Male</option>
    <option>Female</option>

  </select>
</div>

<div class="col-lg-3 col-md-6">
 <h3>Password</h3>
</div>
<div class="col-lg-3 col-md-6">
<div class="form-group">
  <input type="password" class="form-control" placeholder="Your Password" id="usr">
</div>
</div>



</div>
<div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 upcont text-center">

                   <router-link to="/"><button class="btn btn-success">Update</button></router-link>

 </div>

 </div>
</form>
</div>

<div class="container-fluid">

<div class="row">
 <div class="col-lg-7 workdetatab1">
 <h2>Service Price</h2>
<div class="servtab">
 <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>SERVICE TYPE</th>
        <th>BRAND</th>
        <th>MODAL</th>
        <th>VALUE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Oil Change</td>
        <td>Renault</td>
        <td>Sandero</td>
                <td>$ 523,000</td>
<td class="action-ic">
         <router-link to="/Customer_service_detail"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>
      <tr>
        <td>2</td>
       <td>Oil Change</td>
        <td>Renault</td>
        <td>Sandero</td>
                <td>$ 523,000</td>
<td class="action-ic">
         <router-link to="/Customer_service_detail"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>
       <tr>
        <td>3</td>
       <td>Oil Change</td>
        <td>Renault</td>
        <td>Sandero</td>
                <td>$ 523,000</td>
<td class="action-ic">
         <router-link to="/Customer_service_detail"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>

         <tr>
        <td>4</td>
       <td>Oil Change</td>
        <td>Renault</td>
        <td>Sandero</td>
                <td>$ 523,000</td>
<td class="action-ic">
         <router-link to="/Customer_service_detail"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>

  
    </tbody>
  </table>


</div>
<router-link to="/" class="view">View More</router-link>

</div>


 <div class="col-lg-5 workdetatab1 vehrig">
 <h2>Vehicles</h2>
<div class="servtab">
 <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>VEHICLE NAME</th>
        <th>YEAR</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Renault Sandero GT</td>
        <td>2016</td>

<td class="action-ic">
         <router-link to="/"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>
      <tr>
        <td>2</td>
       <td>Renault Sandero GT</td>
        <td>2016</td>

<td class="action-ic">
         <router-link to="/"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>
       <tr>
        <td>3</td>
      <td>Renault Sandero GT</td>
        <td>2016</td>

<td class="action-ic">
         <router-link to="/"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>

         <tr>
        <td>4</td>
     <td>Renault Sandero GT</td>
        <td>2016</td>

<td class="action-ic">
         <router-link to="/"><img src="../../assets/images/eyeedit.png" /></router-link>
        </td>
      </tr>

  
    </tbody>
  </table>
</div>


</div>
 </div>
 <div class="row">
 <div class="col-lg-12 col-md-12 col-sm-12 col-12 backcont custdetabut text-center">

                   <router-link to="/"><button class="btn btn-success">Back</button></router-link>

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
    Btn,
    Card,
    CardBody,
    CardHeader,
    CardText,
    Fa,
    BarChart,
    PieChart,
    LineChart,
    RadarChart,
    DoughnutChart,
    ListGroup,
    ListGroupItem,
    Badge,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter
  } from 'mdbvue'
  export default {
    name: 'customer_detail',
    components: {
      Row,
      Column,
      Btn,
      Card,
      CardBody,
      CardHeader,
      CardText,
      Fa,
      BarChart,
      PieChart,
      LineChart,
      RadarChart,
      DoughnutChart,
      ListGroup,
      ListGroupItem,
      Badge,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter
    },
    data() {


      return {
  
      }
    }
    

  }

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input::placeholder {
  color: #444444;
}

textarea::placeholder {
  color: #444444;
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
.usercha
{
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 30px;
}
.chang
{
    position: absolute;
    left: 95px;
    top: 75px;

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

.corpe
{
    margin-top: 0px!important;
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
    font-size: 15px!important;
    /* padding-left: 20px; */
    border-right: 1px solid white;
   }



      .servtab td
   {
       padding-left: 20px;
    font-size: 16px!important;
        border-right: 1px solid white;
   }

         .servtab td img
         {
             padding-right: 10px;
         }

         .pagi
         {
             margin-top: 40px;
         }

         .pagination.pg-dark .page-item.active .page-link {

    border-radius: 5px;
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


   .backcont button
  {
      margin-top: 20px;
      font-size: 18px;
      background: #3a4959!important;
      border-radius: 5px;
      box-shadow: none!important;
  }

.backcont
{
    padding-bottom: 30px;
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
                    font-size: 18px;
                    color: #666666;
                    padding-top: 10px;
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
      color: #444444;
      font-size: 16px;
                }

                                .workdeta1 .col-lg-3 .dropcity
                {
                    background: #f5f8fa;
    border-radius: 10px;
    height: 47px;
          color: #444444;
      font-size: 16px;
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
          color: #444444!important;
      font-size: 16.5px;
                }
                .vehicle_tlt h4{margin-left:15px;}



 table.table thead th {
    border-top: none;
  }
  
  thead th {
    font-size: 15px;
    padding: 12px;
    text-transform: uppercase;
    background: #0066d0;
    color: #ffffff;
  }
tbody td {
    color: #434343;
    font-size: 16px;
    padding: 15px;
  }
  
  .table-striped {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
  }
  
  .table-striped tbody tr:nth-of-type(2n+1) {
    background-color: #e3ebf3;
  }
  
  .table-striped tbody tr {
    background: #eef6fe none repeat scroll 0 0;
    padding: 10px;
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
</style>
