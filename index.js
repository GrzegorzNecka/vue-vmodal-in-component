import Vue from "vue";

Vue.component('my-checkbox', {
	template: '#my_checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: String,
    // use `checked` as the prop which take the place of `value`
    checked: {
      type: Boolean,
      default: false
    }
  },
})

new Vue({
  el: "#app",
  data: {
		checked: null
  },	
})