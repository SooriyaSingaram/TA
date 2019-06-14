// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource';
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import moment from 'moment'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import VueDataTables from 'vue-data-tables'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import VeeValidate from "vee-validate"
import StarRating from 'vue-star-rating'
import i18nVuex from 'i18n-vuex'
import translationsEn from './translate/en.json'
import translationsEsp from './translate/esp.json'
import translationsEm from './translate/em.json'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js';



window.$ = require('jquery')
window.JQuery = require('jquery')



locale.use(lang)

Vue.component('star-rating', StarRating);
Vue.use(VueDataTables)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VCalendar, {
    firstDayOfWeek: 2, // Monday
});
Vue.use(VeeValidate, {
    validity: true
});

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDQk4z6HMd8NOVYE24diEYyi7XZknts-8U',
        libraries: 'places',
        sensor: false
    }
})

Vue.use(VeeValidate, {
    validity: true
});

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm A')
    }
});




Vue.config.productionTip = false
Vue.use(i18nVuex.plugin, store);


Vue.i18n.add('en', translationsEn);
Vue.i18n.add('esp', translationsEsp);
Vue.i18n.add('em', translationsEm);
Vue.i18n.set('esp', translationsEn);
/* eslint-disable yes-new */


export default {
    install: function(Vue) {
        Vue.t = i18next.t.bind(i18next)
        Vue.prototype.$t = Vue.t
    }
}

new Vue({
    el: '#app',

    router,
    store,
    components: { App },
    template: '<App/>'
})