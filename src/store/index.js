'use strict'

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import login from './login'
import admin from './admin'
import common from './common'
import i18nVuex from 'i18n-vuex'


Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: sessionStorage,
    reducer: state => ({
        login: state.login,
        admin: state.admin,
        common: state.common
    })
})



const store = new Vuex.Store({
    modules: {
        i18n: i18nVuex.store,
        login,
        admin,
        common
    },
    plugins: [vuexLocal.plugin]
})

export default store