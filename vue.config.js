const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1:7206",
                changeOrigin: true,
                ws: true,
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                    priColor: '#1687d9',
                    linkColor:'#ccc',
                }
            }
        }
    },
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, './src/assets/style/common.less')] // less所在文件路径
        }
    }
}