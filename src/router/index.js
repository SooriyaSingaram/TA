import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'

import customerLayout from '@/layouts/customerLayout'
import Login from '@/views/customer-view/Login'
import Forgotpassword from '@/views/customer-view/Forgotpassword'
import Register from '@/views/customer-view/Register'
import Dashboard from '@/views/customer-view/Dashboard'
import Myvehicles from '@/views/customer-view/Myvehicles'
import Addnewvehicle from '@/views/customer-view/Addnewvehicle'
import Vehicledetail from '@/views/customer-view/Vehicledetail'
import Healthindex from '@/views/customer-view/Healthindex'
import MaintenanceHistory from '@/views/customer-view/MaintenanceHistory'
import Addnewquote from '@/views/customer-view/Addnewquote'
import Maintenancehistorydetail from '@/views/customer-view/Maintenancehistorydetail'
import selectSubService from '@/views/customer-view/selectSubService'
import GetQuote from '@/views/customer-view/GetQuote'
import Reschedule from '@/views/customer-view/reschedule'
import GetquoteCheckdate from '@/views/customer-view/GetquoteCheckdate'
import ServicesInprogress from '@/views/customer-view/ServicesInprogress'
import ServiceGPS from '@/views/customer-view/ServiceGPS'
import ServiceImages from '@/views/customer-view/ServiceImages'
import Contactspecialist from '@/views/customer-view/Contactspecialist'
import CompletedService from '@/views/customer-view/CompletedService'
import CompletedServiceDetail from '@/views/customer-view/CompletedServiceDetail'
import QuoteRequest from '@/views/customer-view/QuoteRequest'
import Collisionandpaint from '@/views/customer-view/Collisionandpaint'
import RequestedquoteList from '@/views/customer-view/RequestedquoteList'
import Requestedforquote from '@/views/customer-view/Requestedforquote'
import Tallercommunity from '@/views/customer-view/Tallercommunity'
import ScheduleService from '@/views/customer-view/ScheduleService'
import SchedulePayment from '@/views/customer-view/SchedulePayment'
import ServiceConfirm1 from '@/views/customer-view/ServiceConfirm1'
import ServiceConfirm2 from '@/views/customer-view/ServiceConfirm2'
import ServiceConfirm3 from '@/views/customer-view/ServiceConfirm3'
import Workshop_CV from '@/views/customer-view/Workshop_CV'
import Myinformation from '@/views/customer-view/Myinformation'
import Cart from '@/views/customer-view/Cart'
import About_us from '@/views/customer-view/About_us'
import inbox from '@/views/customer-view/inbox'
import Contact_us from '@/views/customer-view/Contact_us'
import ServiceChecklist from '@/views/customer-view/ServiceChecklist'
import ScheduleServiceList from '@/views/customer-view/ScheduleServiceList'
import UpdateService from '@/views/super_admin-view/update_main_service'

import View_Workshop from '@/views/workshop-view/View_Workshop'
import workshopLayout from '@/layouts/workshopLayout'
import Login_WW from '@/views/workshop-view/Login_WW'
import Forgotpassword_WW from '@/views/workshop-view/Forgotpassword_WW'
import Profile_WW from '@/views/workshop-view/Profile_WW'
import Services_WW from '@/views/workshop-view/Services_WW'

import superAdminLayout from '@/layouts/superAdminLayout'
import Login_SA from '@/views/super_admin-view/Login_SA'
import Dashboard_detail1_SA from '@/views/super_admin-view/Dashboard_detail1_SA'
import Dashboard_detail2_SA from '@/views/super_admin-view/Dashboard_detail2_SA'
import proactive_detail from '@/views/super_admin-view/proactive-detail'
import Dashboard_SA from '@/views/super_admin-view/Dashboard_SA'
import adminservicedetail from '@/views/super_admin-view/adminservicedetail'
import adminservices from '@/views/super_admin-view/adminservices'
import customer_detail from '@/views/super_admin-view/customer_detail'
import Customer_detail_SA from '@/views/super_admin-view/Customer_detail_SA'
import workshop_detail from '@/views/super_admin-view/workshop_detail'
import Corporate_agreement_detail from  '@/views/super_admin-view/Corporate_agreement_detail'
import addCorporate from '@/views/super_admin-view/addCorporate'
import addWorkshop from '@/views/super_admin-view/addWorkshop'
import addSpecialist from '@/views/super_admin-view/addSpecialist'
import addDriver from '@/views/super_admin-view/addDriver'
import addCustomer from '@/views/super_admin-view/addCustomer'
import addService from '@/views/super_admin-view/addService'
import Customer_service_detail from  '@/views/super_admin-view/Customer_service_detail'
import reports_SA from  '@/views/super_admin-view/reports_SA'
import rating_SA from  '@/views/super_admin-view/rating_SA'
import Driver_detail_SA from  '@/views/super_admin-view/Driver_detail_SA'
import Quote_detail_SA from  '@/views/super_admin-view/Quote_detail_SA'
import Service_detail_SA from  '@/views/super_admin-view/Service_detail_SA'
import Specialist_detail_SA from  '@/views/super_admin-view/Specialist_detail_SA'
import Taller_online_community_SA from  '@/views/super_admin-view/Taller_online_community_SA'
import Drivers_SA from  '@/views/super_admin-view/Drivers_SA'
import Workshop_list_SA from  '@/views/super_admin-view/Workshop_list_SA'
import Corporate_agreement_SA from  '@/views/super_admin-view/Corporate_agreement_SA'
import Specialist_SA from  '@/views/super_admin-view/Specialist_SA'
import Customer_SA from  '@/views/super_admin-view/Customer_SA'
import ProactiveService_SA from  '@/views/super_admin-view/ProactiveService_SA'
import Quotes_SA from  '@/views/super_admin-view/Quotes_SA'
import Customer_Vehicle_SA from  '@/views/super_admin-view/Customer_Vehicle_SA'
import Service_SA from  '@/views/super_admin-view/Service_SA'
import who_we_are_SA from  '@/views/super_admin-view/who_we_are_SA'
import Contact_us_SA from  '@/views/super_admin-view/Contact_us_SA'
import ServiceGPS_SA from '@/views/super_admin-view/ServiceGPS_SA'
import ServiceImages_SA from '@/views/super_admin-view/ServiceImages_SA'
import ServiceChecklist_SA from '@/views/super_admin-view/ServiceChecklist_SA'

import Customer_Vehicle_Detail_SA from '@/views/super_admin-view/Customer_Vehicle_Detail_SA'
import health_index_master from '@/views/super_admin-view/health-index'

import add_health_index from '@/views/super_admin-view/add-health-index'

import city_zone from '@/views/super_admin-view/city_zone'
import add_city_zone from '@/views/super_admin-view/add_city_zone'
import vehicle_model from '@/views/super_admin-view/vehicle_model'
import vehicle_master from '@/views/super_admin-view/vehicle_master'
import ls from 'local-storage'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Forgotpassword',
      name: 'Forgotpassword',
      component: Forgotpassword
    },

    {
      path: '/Login_WW',
      name: 'Login_WW',
      component: Login_WW
    },

    {
      path: '/Forgotpassword_WW',
      name: 'Forgotpassword_WW',
      component: Forgotpassword_WW
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

    {
      path: '/Login_SA',
      name: 'Login_SA',
      component: Login_SA
    },

    
    {
      path: '/customerLayout',
      name: 'customerLayout',
      component: customerLayout,
       children: [
         {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
           
         },
         {
          path: '/Myvehicles',
          name: 'Myvehicles',
          component: Myvehicles,
          meta: { requiresAuth: true }
         },
         {
          path: '/Addnewvehicle/:id',
          name: 'Addnewvehicle',
          component: Addnewvehicle,
          meta: { requiresAuth: true }
         },   
         {
          path: '/Vehicledetail/:id',
          name: 'Vehicledetail',
          component: Vehicledetail,
          meta: { requiresAuth: true }
         },
         {
          path: '/Healthindex/:id',
          name: 'Healthindex',
          component: Healthindex,
          meta: { requiresAuth: true }
         },
         {
          path: '/MaintenanceHistory/:id',
          name: 'MaintenanceHistory',
          component: MaintenanceHistory,
          meta: { requiresAuth: true }
         },
         {
          path: '/Addnewquote',
          name: 'Addnewquote',
          component: Addnewquote//,
         // meta: { requiresAuth: true }
         },
         {
          path: '/Maintenancehistorydetail/:id',
          name: 'Maintenancehistorydetail',
          component: Maintenancehistorydetail,
          meta: { requiresAuth: true }
         },
         {
          path: '/selectSubService',
          name: 'selectSubService',
          component: selectSubService,
         // meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/GetQuote',
          name: 'GetQuote',
          component: GetQuote,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/rescheduleService',
          name: 'rescheduleService',
          component: Reschedule,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/GetquoteCheckdate',
          name: 'GetquoteCheckdate',
          component: GetquoteCheckdate,
          meta: { requiresAuth: true }
         },
         {
          path: '/ServiceGPS/:id',
          name: 'ServiceGPS',
          component: ServiceGPS,
          meta: { requiresAuth: true }
         },
         {
          path: '/ServiceImages/:id',
          name: 'ServiceImages',
          component: ServiceImages,
          meta: { requiresAuth: true }
         },

         {
          path: '/ServiceChecklist/:id/:servicetype',
          name: 'ServiceChecklist',
          component: ServiceChecklist,
          meta: { requiresAuth: true }
         },

         {
          path: '/ServicesInprogress/:id',
          name: 'ServicesInprogress',
          component: ServicesInprogress,
          meta: { requiresAuth: true }
         },
         {
          path: '/QuoteRequest',
          name: 'QuoteRequest',
          component: QuoteRequest,
         // meta: { requiresAuth: true },
          props: true
         },
         
         {
          path: '/ScheduleServiceList',
          name: 'ScheduleServiceList',
          component: ScheduleServiceList,
          meta: { requiresAuth: true }
         },
         
         
         {
          path: '/Contactspecialist',
          name: 'Contactspecialist',
          component: Contactspecialist,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/CompletedService',
          name: 'CompletedService',
          component: CompletedService,
          meta: { requiresAuth: true }
         },
         {
          path: '/CompletedServiceDetail/:id',
          name: 'CompletedServiceDetail',
          component: CompletedServiceDetail,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/Collisionandpaint/:id',
          name: 'Collisionandpaint',
          component: Collisionandpaint,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/Requestedforquote/:id',
          name: 'Requestedforquote',
          component: Requestedforquote,
          meta: { requiresAuth: true }
         },

         {
          path: '/RequestedquoteList',
          name: 'RequestedquoteList',
          component: RequestedquoteList,
          meta: { requiresAuth: true }
         },
         {
          path: '/Tallercommunity',
          name: 'Tallercommunity',
          component: Tallercommunity
         },

         {
          path: '/ScheduleService',
          name: 'ScheduleService',
          component: ScheduleService,
          meta: { requiresAuth: true }
         },

         {
          path: '/SchedulePayment',
          name: 'SchedulePayment',
          component: SchedulePayment,
          meta: { requiresAuth: true },
          props: true
         },

         

         {
          path: '/ServiceConfirm1',
          name: 'ServiceConfirm1',
          component: ServiceConfirm1,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/ServiceConfirm2',
          name: 'ServiceConfirm2',
          component: ServiceConfirm2,
          meta: { requiresAuth: true },
          props: true
         },
         {
          path: '/ServiceConfirm3',
          name: 'ServiceConfirm3',
          component: ServiceConfirm3,
          meta: { requiresAuth: true },
          props: true
         },
         
         {
          path: '/Workshop_CV',
          name: 'Workshop_CV',
          component: Workshop_CV
         },

         {
          path: '/Myinformation',
          name: 'Myinformation',
          component: Myinformation,
          meta: { requiresAuth: true }
         },
         

         {
          path: '/Cart',
          name: 'Cart',
          component: Cart,
          meta: { requiresAuth: true }
         },

         
         {
          path: '/Contact_us',
          name: 'Contact_us',
          component: Contact_us
         },

         
         {
          path: '/About_us',
          name: 'About_us',
          component: About_us
         },
         {
          path: '/inbox',
          name: 'inbox',
          component: inbox,
          meta: { requiresAuth: true }
         }

         
        
       ]
    },
   
    {
      path: '/workshopLayout',
      name: 'workshopLayout',
      component: workshopLayout,
       children: [
         {
            path: '/Services_WW',
            name: 'Services_WW',
            component: Services_WW,
            meta: { requiresAuth: true, permission: 'workshop' }
         },
         {
          path: '/Profile_WW/:id',
          name: 'Profile_WW',
          component: Profile_WW,
          meta: { requiresAuth: true, permission: 'workshop' }
         },
         {
          path: '/View_Workshop',
          name: 'View_Workshop',
          component: View_Workshop,
          meta: { requiresAuth: true, permission: 'workshop' }
         }
         
       ]
    },


    {
      path: '/superAdminLayout',
      name: 'superAdminLayout',
      component: superAdminLayout,
       children: [
         {
            path: '/Dashboard_SA',
            name: 'Dashboard_SA',
            component: Dashboard_SA,
            meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/Dashboard_detail1_SA',
          name: 'Dashboard_detail1_SA',
          component: Dashboard_detail1_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/Dashboard_detail2_SA',
          name: 'Dashboard_detail2_SA',
          component: Dashboard_detail2_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/proactive-detail/:id',
          name: 'proactive-detail',
          component:proactive_detail,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/adminservicedetail/:name/:id',
          name: 'adminservicedetail',
          component: adminservicedetail,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/adminservices',
          name: 'adminservices',
          component: adminservices,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/workshop_detail/:id',
          name: 'workshop_detail',
          component: workshop_detail,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/customer_detail',
          name: 'customer_detail',
          component: customer_detail,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Customer_detail_SA/:id',
          name: 'Customer_detail_SA',
          component: Customer_detail_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         

     
         
         {
          path: '/Corporate_agreement_detail/:id',
          name: 'Corporate_agreement_detail',
          component: Corporate_agreement_detail,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/corporate/:id',
          name: 'addCorporate',
          component: addCorporate,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/workshop/:id',
          name: 'addWorkshop',
          component: addWorkshop,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/specialist/:id',
          name: 'addSpecialist',
          component: addSpecialist,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         
         {
          path: '/driver/:id',
          name: 'addDriver',
          component: addDriver,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/addDriver',
          name: 'addDriver',
          component: addDriver,
          meta: { requiresAuth: true }
         },

         {
          path: '/customer/:id',
          name: 'addCustomer',
          component: addCustomer,
          meta: { requiresAuth: true }
         },
         
         {
          path: '/addService',
          name: 'addService',
          component: addService,
          meta: { requiresAuth: true }
         },
         
         
         {
          path: '/Customer_service_detail',
          name: 'Customer_service_detail',
          component: Customer_service_detail,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Quotes_SA',
          name: 'Quotes_SA',
          component: Quotes_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/ProactiveService_SA',
          name: 'ProactiveService_SA',
          component: ProactiveService_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/Service_SA',
          name: 'Service_SA',
          component: Service_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/Customer_SA',
          name: 'Customer_SA',
          component: Customer_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Driver_detail_SA/:id',
          name: 'Driver_detail_SA',
          component: Driver_detail_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Quote_detail_SA/:id',
          name: 'Quote_detail_SA',
          component: Quote_detail_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Service_detail_SA/:id',
          name: 'Service_detail_SA',
          component: Service_detail_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

        
         {
          path: '/Customer_Vehicle_Detail_SA/:id',
          name: 'Customer_Vehicle_Detail_SA',
          component: Customer_Vehicle_Detail_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },
         

         {
          path: '/Specialist_detail_SA/:id',
          name: 'Specialist_detail_SA',
          component: Specialist_detail_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Taller_online_community_SA',
          name: 'Taller_online_community_SA',
          component: Taller_online_community_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/Drivers_SA',
          name: 'Drivers_SA',
          component: Drivers_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/Workshop_list_SA',
          name: 'Workshop_list_SA',
          component: Workshop_list_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Corporate_agreement_SA',
          name: 'Corporate_agreement_SA',
          component: Corporate_agreement_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/Customer_Vehicle_SA',
          name: 'Customer_Vehicle_SA',
          component: Customer_Vehicle_SA,
           meta: { requiresAuth: true, permission: 'admin' }
         },

         

          {
          path: '/Specialist_SA',
          name: 'Specialist_SA',
          component: Specialist_SA,
           meta: { requiresAuth: true, permission: 'admin' }
          },


          {
            path: '/who_we_are_SA',
            name: 'who_we_are_SA',
            component: who_we_are_SA,
            meta: { requiresAuth: true, permission: 'admin' }          
          },
            

          {
            path: '/Contact_us_SA',
            name: 'Contact_us_SA',
            component: Contact_us_SA ,
            meta: { requiresAuth: true, permission: 'admin' }         
          },

         {
          path: '/reports_SA',
          name: 'reports_SA',
          component: reports_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/ServiceGPS_SA/:id',
          name: 'ServiceGPS_SA',
          component: ServiceGPS_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/ServiceImages_SA/:id',
          name: 'ServiceImages_SA',
          component: ServiceImages_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/ServiceChecklist_SA/:id',
          name: 'ServiceChecklist_SA',
          component: ServiceChecklist_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },

         {
          path: '/rating_SA',
          name: 'rating_SA',
          component: rating_SA,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/update-service',
          name: 'update-service',
          component: UpdateService,
          meta: { requiresAuth: true, permission: 'admin' }
         },
         {
          path: '/city-zone',
          name: 'city-zone',
          component: city_zone,
          meta: { requiresAuth: true, permission: 'admin' }
       },
       {
        path: '/add/:id',
        name: 'add-city-zone',
        component: add_city_zone,
        meta: { requiresAuth: true, permission: 'admin' }
     },
     {
      path: '/index/:id',
      name: 'add-health-index',
      component: add_health_index,
      meta: { requiresAuth: true, permission: 'admin' }
   },
     {
      path: '/vehicle-model',
      name: 'vehicle-model',
      component: vehicle_model,
      meta: { requiresAuth: true, permission: 'admin' }
   },
   {
    path: '/vehicle-master/:id',
    name: 'vehicle-master',
    component:  vehicle_master,
    meta: { requiresAuth: true, permission: 'admin' }
 },
 {
  path: '/health-index-master',
  name: 'health-index-master',
  component:  health_index_master,
  meta: { requiresAuth: true, permission: 'admin' }
}
  
         
         
       ]
    },
  ]
})

router.beforeEach((to, from, next) => {
	const user = ls.get('token');
	const role = ls.get('role');
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (to.matched.some(record => (record.meta.permission == 'admin'))) {
			if (user && (role == '1')) {
				next()
			}
			else {
				next({
					name: 'Login_SA',
					query: {
						redirect: to.fullPath
					}
				})
			}
    }
    else if (to.matched.some(record => (record.meta.permission == 'workshop'))) {
			if (user && (role == '3')) {
				next()
			}
			else {
				next({
					name: 'Login_WW',
					query: {
						redirect: to.fullPath
					}
				})
			}
		}
		else {
			if (user) {
				next()
			}
			else {
				next({
					name: 'Login',
					query: {
						redirect: to.fullPath
					}
				})
			}
		}
	}
	else {
		next()
	}
})

export default router