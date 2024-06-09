const express = require('express')
const session = require('express-session')
const app = express()

//set ejs as the default view engine
app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(
    session({
      secret: "mynameisdeniskiplangatruto",
      cookie: { maxAge: 30000 },
      saveUninitialized: false,
    })
  );


  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/work');
}

app.get('/login',(req,res)=>{

    res.render('login')

})
app.get('/work',isLoggedIn,(req,res)=>{

    res.render('work')

})
app.post('/login',(req,res)=>{
    
    // let username = req.body.user;
	// let password = req.body.pass;
    const { user, pass } = req.body;
    
    console.log(pass)
    console.log(user)

    if(user && pass){
        if (req.session.authenticated) {

            res.json(session);

          } else {
            if (pass === "123") {
              req.session.authenticated = true;
              req.session.user = { user };
              res.json(req.session);
            } else {

              res.status(403).json({ msg: "Bad credentials" });
              
            }
          }
    }else{

        res.send('write something')
    }

    
})

app.listen(3005,()=>{
    console.log('server is running')
})