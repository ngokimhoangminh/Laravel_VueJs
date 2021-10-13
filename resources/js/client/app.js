
require('./bootstrap');

window.Vue = require('vue');
import ClientComponent from './View/ClientComponent';

import Vue from 'vue';
import router from './router/routes';
import store from './store/store';
import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
const app = new Vue({
    el: '#apps',
    components:{ClientComponent},
    template:'<ClientComponent/>',
    router,
    store
});
