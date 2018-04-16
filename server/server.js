const express = require('express')
const Render = require('react-dom/server')
const fs = require('fs')
const path =require('path')

const isDev = process.env.NODE_ENV === 'development'
const app = new express()


if(!isDev){
    const serverEntry = require('../dist/server-entry.js').default
    const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')
    
    //访问静态资源目录
    app.use('/public',express.static(path.join(__dirname,'../dist')))

    app.get('*',function(req,res){
        const appstring = Render.renderToString(serverEntry)

        res.send(template.replace('<!--app-->',appstring))
    })
}else{
    const devStatic = require('./util/dev-static')
    devStatic(app)
}

app.listen(3003,()=>{
    console.log('server is runing at port 3003')
})