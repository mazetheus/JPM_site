import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vueScrollto from 'vue-scrollto'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.use(vueScrollto)

import {library} from '@fortawesome/fontawesome-svg-core'
import {faMapMarkerAlt, faPhone, faCircle, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram, faWhatsapp)
library.add(faMapMarkerAlt, faPhone, faCircle, faArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
