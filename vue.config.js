console.log('env ==========>', process.env.NODE_ENV)

const CompressionWebpackPlugin = require('compression-webpack-plugin')


// CDN外链，会插入到index.html中
const cdn = {
    // 开发环境
    dev: {
        css: [
            'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        ],
        js: []
    },
    // 生产环境
    build: {
        css: [
            'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
            'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
            'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
            'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
            'https://unpkg.com/element-ui/lib/index.js'
        ]
    }
}

// 转CND外链的npm包， 键名是import的npm包名，键值是该库暴露的全局变量
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-ui': 'ELEMENT'
}

// 是否使用gzip
const productionGzip = false;

module.exports = {
    configureWebpack: config => {
        let myConfig = {}
        if (process.env.NODE_ENV === 'production') {
            // 生产环境下npm包转CDN
            myConfig.externals = externals;
            myConfig.plugins = []

            productionGzip && myConfig.plugins.push(
                new CompressionWebpackPlugin({
                    test: /\.(js|css)(\?.*)?$/i,    //需要压缩的文件正则
                    threshold: 10240,               //文件大小大于这个值时启用压缩deleteOriginalAssets:
                    deleteOriginalAssets: false     //压缩后保留原文件
                })
            )
        } else if (process.env.NODE_ENV === 'development') {

        }
        return myConfig;
    },
    chainWebpack: config => {
        /* 删除懒加载模块的prefetch，降低带宽压力 */
        config.plugins.delete('prefetch')

        /* 添加CDN参数到htmlWebpackPlugin配置中 */
        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdn.build
            } else if (process.env.NODE_ENV === 'development') {
                args[0].cdn = cdn.dev
            }
            return args
        })
    }
}