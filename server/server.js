const express = require('express')
const Render = require('react-dom/server')
const serverEntry = require('../dist/server-entry.js').default
const fs = require('fs')
const path =require('path')

const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')

const app = new express()
app.use('/pubilc',express.static(path.join(__dirname,'../dist')))

app.get('*',function(req,res){
    const appstring = Render.renderToString(serverEntry)

    res.send(template.replace('<app></app>',appstring))
})

app.listen(3003,()=>{
    console.log('server is runing at port 3003')
})