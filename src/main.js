import Vue from 'vue'
import App from './App'
import router from './router'


import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.config.productionTip = false

import { Navbar, TabItem ,Cell} from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
