"use strict"
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/',
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 192 //设计图宽度大小/10之后的数值
                    })
                ]
            }
        }
    },
}