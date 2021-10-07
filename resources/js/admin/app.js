require('./bootstrap');

window.Vue = require('vue');

import RootComponent from './components/RootComponent';

import Vue from 'vue';
import router from './router/routes';
import store from './store/store';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CKEditor from 'ckeditor4-vue';
import DataTable from 'laravel-vue-datatable';

Vue.use(DataTable);

Vue.use( CKEditor );
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(BootstrapVue);
Vue.use(FlashMessage);

Vue.component('login-form',require('./components/login/LoginComponent').default);

const app = new Vue({
    el: '#app',
    components:{RootComponent},
    template:'<RootComponent/>',
    router,
    store
});



