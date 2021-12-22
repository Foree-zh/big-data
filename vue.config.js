<<<<<<< HEAD
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
=======
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
>>>>>>> 2874230260ea3bfd314133c1952c5de60b3cdb44
}