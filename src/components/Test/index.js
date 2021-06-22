import Test from './src/main'

Test.install = function (Vue, opt) {
    Vue.component(Test.name, Test)
}

export default Test
