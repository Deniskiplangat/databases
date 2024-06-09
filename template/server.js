const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()


app.use(expressLayouts)
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.set('layout','./layouts/default.ejs')
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/notifications',(req,res)=>{
    res.render('notification')
})



app.listen(3002,()=>{
    console.log('we are connected')
})