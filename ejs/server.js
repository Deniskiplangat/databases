const ejs = require("ejs");
const express = require("express");

const app = express();

//set ejs as the templating engine
app.set("view engine", "ejs");
//get css file from public
app.use(express.static(__dirname + "/public"));

const data = [{
  barcode: 123455,
  product_description: "bar of soap",
  quantity: 20,
  expiry_date: "2023-4-7",
  daysleft: 35,
},
{
    barcode: 746744,
    product_description: "chocolate ice cream",
    quantity: 25,
    expiry_date: "2023-4-7",
    daysleft: 35,
  },
  {
    barcode: 1653645,
    product_description: "Omo detergent",
    quantity: 20,
    expiry_date: "2023-4-7",
    daysleft: 35,
  },
  {
    barcode: 123455,
    product_description: "mandazi mix",
    quantity: 20,
    expiry_date: "2023-4-7",
    daysleft: 35,
  }]

 


app.get("/", (req, res) => {
  res.render("home", {data});
});

app.listen(3003, () => {
  console.log("listening on port 3000");
});
