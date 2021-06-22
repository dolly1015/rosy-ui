const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: 'Rosy UI',
    base: '/rosy-ui/',
    description: 'Rosy UI Document',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/qiudongwei/ange-ui' },
        ],
        sidebar: [
            ['/views/button', '按钮 Button'],
            ['/views/test', '测试 test'],
        ]
    },
    markdown: {
        lineNumbers: false
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs'),
              'rosy-ui': resolve('src/index'),
              '@scss': resolve('src/scss'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    }
}