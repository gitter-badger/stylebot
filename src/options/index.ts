import Vue from 'vue';
import store from './store/index';

import {
  IconsPlugin,
  LayoutPlugin,
  DropdownPlugin,
  FormInputPlugin,
  ButtonPlugin,
  ListGroupPlugin,
  FormCheckboxPlugin,
  ModalPlugin,
  FormTextareaPlugin,
  FormGroupPlugin,
} from 'bootstrap-vue';

Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
Vue.use(DropdownPlugin);
Vue.use(FormInputPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(ListGroupPlugin);
Vue.use(ModalPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(FormGroupPlugin);

import App from './App.vue';

new Vue({
  store,
  el: '#app',
  render: h => h(App),
});
