const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports={
    target:'node',
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    output:{
        filename:'server-entry.js',
        path:path.join(__dirname,'../dist'),
        libraryTarget:'commonjs2',
        publicPath:'/public'
    },
    module:{
        rules:[
            {
                test:/.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/.js$/,
                loader:'babel-loader',
                exclude:[
                    path.join(__dirname,'../node_modules')
                ]
            }
        ]
    }
}