import Button from './Button.vue'
/*
  export default {
      components: {
        [Button.name]: Button
      }
  }
 */
Button.install = function (Vue, opt) {
    Vue.component(Button.name, Button)
}

export default Button
