const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send('we are on the home route')
})
app.post('/',(req,res)=>{
    const {name,password} = req.body
    console.log(name)
    console.log(password)
})
app.listen(3000,()=>{
    console.log('route is connected')
})