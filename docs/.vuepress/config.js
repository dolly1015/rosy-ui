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
        lastUpdated: '最后更新',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/linxiaodi/rosy-ui' },
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/guide/install',
                    '/guide/use',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/component/button',
                    '/component/leadingIn',
                ]
            }
            // {
            //     title: '组件',
            //     collapsable: false,
            //     children: [
            //         '/views/button'
            //     ]
            // }
            // ['/views/test', '测试 test'],
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
    },
    plugins: ['demo-container'],
}