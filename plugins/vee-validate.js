import Vue from "vue";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure,
} from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", required);

configure({
  classes: {
    invalid: "is-danger",
  },
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
