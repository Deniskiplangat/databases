const mysql = require('mysql');
const express = require('express')
const path = require('path');
const fs = require('fs');
const router = express.Router();

//254764938881 my number


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'camindo',
    database: 'chandarana'
  });


const app = express()

// app.engine('html', function (filePath, options, callback) { 
//     fs.readFile(filePath, function (err, content) {
//         if(err)
//             return callback(err)        
//         var rendered = mustache.to_html(content.toString(),options);
//         return callback(null, rendered)
//     });
//   });

//   app.set('views',path.join(__dirname,'views'));
//   app.set('view engine','html');



// router.get('/',function(req,res){
//     connection.connect((err) => {
//         if (err) throw err;
//         console.log('this is the home route');

//         connection.query('SELECT * FROM products', (err,rows) => {
//             if(err) throw err;
//             // const {barcode,product_description,quantity,expiry_date,days} = req.body this is the data present in rows
          
//             console.log('Data received from Db:');
//             res.render('index',{rows});
            
//             console.log(rows);
//           });
          
//     }) 
//   });
   
// app.use('/',router)

app.listen(3000,()=>{
    console.log('app connected')
})

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  //add to database

  const product = { barcode: '5464738', product_description: 'paul pogba',quantity: '7',expiry_date: '2024-7-8',days:'7' };
  connection.query('INSERT INTO products SET ?',product, (err,res) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    
    
    console.log(res);
  });

//show from the database

  connection.query('SELECT * FROM products', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  });
});
