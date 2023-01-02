
var express = require('express');
var path = require('path');
var fs=require('fs');
var cookieParser = require('cookie-parser');
const { title } = require('process');
var http=require('http')
const session = require('cookie-session');

const alert=require('alert');
var flag=0;
var users=""
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'secret key',resave:false, saveUninitialized:false}));
 
app.get('/',function(req,res){
  if(flag===1){
    res.write("acc created")
  }
  res.render('login');
 


});
app.get('/invalidlogin',function(req,res){
  res.render('invalidlogin')
  
  });
app.get('/home',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
  res.render('home')}
  });
app.get('/annapurna',function(req,res){


  if(users==""){
    res.redirect("/")
  }else{
    res.render('annapurna')}
    });
app.get('/bali',function(req,res){

  if(users==""){
    
    res.redirect("/")
  }else{
    res.render('bali');
  }});
 app.get('/cities',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
        res.render('cities')}
        });
app.get('/hiking',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
          res.render('hiking')}
          });

app.get('/inca',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
            res.render('inca')}
            });          
app.get('/islands',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
              res.render('islands')}
              });

app.get('/paris',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
                res.render('paris')}
                });
app.get('/rome',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
                  res.render('rome')}
                  });
app.get('/registration',function(req,res){
                    res.render('registration')
                    });
app.get('/santorini',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
                      res.render('santorini')}
                      });      
app.get('/searchresults',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
                        res.render('searchresults')}
                        });        
app.get('/wanttogo',function(req,res){
  if(users==""){
    res.redirect("/")
  }else{
                          res.redirect("/myapp/app.js")

  }


                          });
                          app.post('/invalidlogin',(req,res)=>{
  
                            var x={name: req.body.username ,pass:req.body.password};
                            
                                                      
                            var {MongoClient} =require('mongodb');
                             
                            
                            connect();
                            module.exports = app; 
                            async function connect(){
                              const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
                              var db= client.db("project");
                              const collection=db.collection("users")
                             
                              try {
                                await client.connect();
                             
                              } catch (error) {
                                console.error({error});
                              }
                              var x=req.body.username;
  
                                var y=req.body.password
                              if((await collection.findOne({name:x,password:y}))!==null){
                                users=x;
                               res.redirect('/home');
                              }else {
                               res.redirect('/invalidlogin');
                              }
                               }})
app.post('/',(req,res)=>{

var x={name: req.body.username ,pass:req.body.password};

                          
var {MongoClient} =require('mongodb');
 

connect();
module.exports = app; 
async function connect(){
  const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
  var db= client.db("project");
  const collection=db.collection("users")
 
  try {
    await client.connect();
 
  } catch (error) {
    console.error({error});
  }
  var x=req.body.username;
  
var y=req.body.password
 if((await collection.findOne({name:x,password:y}))!==null){
  users=x
  console.log(users)
  res.redirect('/home');
 }else {
  res.redirect('/invalidlogin');

 }

  }})
  app.post('/register',function(req,res){

    var {MongoClient} =require('mongodb');
     
    
    connect();
    module.exports = app; 
    async function connect(){
      const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
      var db= client.db("project");
      const collection=db.collection("users")
     
      try {
        await client.connect();
     
      } catch (error) {
        console.error({error});
      } 
      
      if((await collection.findOne({name:req.body.username}))!==null){
        res.status(500).json({error: "users already exists"});
       }else {
        
       console.log(req.body.password);
           collection.insertOne({name:req.body.username ,password:req.body.password});

    db.createCollection(req.body.username, function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      
    });}



   res.redirect('registersed')
;  









       
  }})
  app.post(('/search'),function(req,res){
    

res.redirect('/searchresults');




  }
  )
app.get(("/registersed"),function(req,res){

res.render("registersed")



})
  app.post(("/wanttogobali"),function(req,res){

    var {MongoClient} =require('mongodb');
     
    
    connect();
    module.exports = app; 
    async function connect(){
      const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
      var db= client.db("project");
      const collection=db.collection(users)
   
      try {
        await client.connect();
     
      } catch (error) {
        console.error({error});
      }
      if (await collection.findOne({name:"bali"})!=null){
        alert("already added");
       }
      collection.insertOne({name:"bali"});
  }


})
app.post(("/wanttogosant"),function(req,res){

  var {MongoClient} =require('mongodb');
   
  
  connect();
  module.exports = app; 
  async function connect(){
    const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
    var db= client.db("project");
    const collection=db.collection(users)

    
   
    try {
      await client.connect();
   
    } catch (error) {
      console.error({error});
    }
    if (await collection.findOne({name:"sant"})!=null){
      alert("already added");
     }
   
    collection.insertOne({name:"sant"});
}


})
app.post(("/wanttogorome"),function(req,res){

  var {MongoClient} =require('mongodb');
   
  
  connect();
  module.exports = app; 
  async function connect(){
    const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
    var db= client.db("project");
    const collection=db.collection(users)
   
    try {
      await client.connect();
   
    } catch (error) {
      console.error({error});
    }
    if (await collection.findOne({name:"rome"})!=null){
      alert("already added");
     }
    collection.insertOne({name:"rome"});
}


})
app.post(("/wanttogoparis"),function(req,res){

  var {MongoClient} =require('mongodb');
   
  
  connect();
  module.exports = app; 
  async function connect(){
    const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
    var db= client.db("project");
    const collection=db.collection(users)
   
    try {
      await client.connect();
   
    } catch (error) {
      console.error({error});
    }
    if (await collection.findOne({name:"paris"})!=null){
      alert("already added");
     }
    collection.insertOne({name:"paris"});
}


})
app.post(("/wanttogoinca"),function(req,res){

  var {MongoClient} =require('mongodb');
   
  
  connect();
  module.exports = app; 
  async function connect(){
    const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
    var db= client.db("project");
    const collection=db.collection(users)
   
    try {
      await client.connect();
   
    } catch (error) {
      console.error({error});
    }if ( await collection.findOne({name:"inca"})!=null){
      alert("already added");
     }

    collection.insertOne({name:"inca"});
    
}


})


app.post(("/wanttogoanna"),function(req,res){

  var {MongoClient} =require('mongodb');
   
  
  connect();
  module.exports = app; 
  async function connect(){
    const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
    var db= client.db("project");
    const collection=db.collection(users)
   
    try {
      await client.connect();
   
    } catch (error) {
      console.error({error});
    }
    if (await collection.findOne({name:"anna"})!=null){
      alert("already added");
     }
    collection.insertOne({name:"anna"});
}


})







app.get("/myapp/app.js",function(req,res){
  if (users==""){
    res.redirect("/");
  }else{
  res.writeHead(200,{'content-type':'text/html'})



var {MongoClient} =require('mongodb');
     
    
    connect();
    module.exports = app; 
    async function connect(){
      const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
      var db= client.db("project");
      const collection=db.collection(users)
     
      try {
        await client.connect();
     
      } catch (error) {
        console.error({error});
      } 
      if( await collection.findOne({name:"bali"})!=null){
        res.write(  '<div class="container1" id="baly"><img id="image" src="/bali.png" width="193" height="300"> <br> <label id="label1" class="ml-4 my-2">Bali Island</label><br>   <form method="get" action="/bali" class="form-inline my-2 my-lg-0"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">view</button></form></div>'
        )
        
      }
    
        
      if(await collection.findOne({name:"inca"})!=null){
        res.write(         '<div class="container6"> <img id="image" src="/inca.png" width="193" height="300"><br> <label id ="label5" class="ml-4 my-2">inca</label> <form method="get" action="/inca" class="form-inline my-2 my-lg-0"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">view</button></form></div>'
        )
        
      }
      
 
      if(await collection.findOne({name:"anna"})!=null){
        res.write(          '<div class="container5"> <img id="image" src="/annapurna.png" width="193" height="300"><br> <label id ="label5" class="ml-4 my-2">annapurna</label> <form method="get" action="/annapurna" class="form-inline my-2 my-lg-0"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">view</button></form></div>'
        )
        
      }
      if(await collection.findOne({name:"paris"})!=null){
        res.write(            '<div class="container4"> <img id="image" src="/paris.png" width="193" height="300"><br> <label id ="label4" class="ml-4 my-2">paris</label><form method="get" action="/paris" class="form-inline my-2 my-lg-0"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">view</button></form></div>'
        )
        
      }
      if(await collection.findOne({name:"rome"})!=null){
        res.write(         '<div class="container3"> <img id="image" src="/rome.png" width="193" height="300"><br> <label id ="label3" class="ml-4 my-2">rome Island</label> <form method="get" action="/rome" class="form-inline my-2 my-lg-0"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">view</button></form></div>'

        )
      }
















res.end()


}}})



app.post('/registersed',(req,res)=>{
  
  var x={name: req.body.username ,pass:req.body.password};
  
                            
  var {MongoClient} =require('mongodb');
   
  
  connect();
  module.exports = app; 
  async function connect(){
    const client =new MongoClient( "mongodb+srv://omarika:hadama13579@cluster0.migf4pa.mongodb.net/?retryWrites=true&w=majority")
    var db= client.db("project");
    const collection=db.collection("users")
   
    try {
      await client.connect();
   
    } catch (error) {
      console.error({error});
    }
    var x=req.body.username;

      var y=req.body.password
    if((await collection.findOne({name:x,password :y}))!==null){
      users=x;
     res.redirect('/home');
    }else {
     res.redirect('/invalidlogin');
    }
     }})



      

app.listen(process.env.PORT,function(){console.log('server started')});
