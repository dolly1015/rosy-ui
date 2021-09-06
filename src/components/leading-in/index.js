import LeadingIn from './LeadingIn.vue'

LeadingIn.install = (Vue) => {
    console.log('导入组件')
    Vue.component(LeadingIn.name, LeadingIn)
}

export default LeadingIn