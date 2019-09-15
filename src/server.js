import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import path from 'path';

const app = express();

// app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname,'/build')));
app.use(bodyParser.json());

app.post("/signup", async (req,res)=>{
    console.log(req.body);
    try {
        const {email, username,password} = req.body;
        console.log(req.body)
        const newUser={
                email: email,
                username:username,
                password:password     
        }
    
        const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
        const db = client.db('cloud-gallery');
        const users = await db.collection('users').insert(newUser);
        res.status(200).send({userName:`${username}`})
        client.close();

    } catch(error){
        res.status(500).json({message:"error connecting", error})
    }
 
})

app.post("/login", async (req,res)=>{
    console.log(req.body);
    const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
    const db = client.db('cloud-gallery');
    db.collection('users').findOne({ email: req.body.email}, function(err, user) {
        // In case the user not found   
        if(err) {
          console.log('THIS IS ERROR RESPONSE')
          res.json(err)
        } 
        if (user && user.password === req.body.password){
          console.log('User and password is correct')
          console.log(user.username)
          res.status(200).send({message:"User and password is correct",
           userName:`${user.username}`})
        } else {
          console.log("Credentials wrong");
          res.json({message: "Login invalid"});
        }            
        client.close();  
 });

})

app.get("/paintings", async (req,res)=>{

    const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
    const db = client.db('cloud-gallery');
    const paintings = await db.collection('paintings').find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

        res.status(200).send(result)
        client.close();

      });;
    
    
})

app.get("/paintings/detail/:name", async (req,res)=>{
    const name = req.params.name;
    console.log(name);
    const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
    const db = client.db('cloud-gallery');
    const paintings = await db.collection('paintings').find({name:name}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

        res.status(200).send(result)
        client.close();

      });;
})

app.post("/paintings/add", async (req,res)=>{
    console.log(req.body);
    try {
        const {name,price,author,theme,description,seller} = req.body;
        console.log(req.body)
        const newPainting={
                name: name,
                price: price,
                author:author,
                theme:theme,
                description: description,
                seller: seller    
        }
    
        const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
        const db = client.db('cloud-gallery');
        const users = await db.collection('paintings').insert(newPainting);
        res.status(200).send({message:"add success"})
        client.close();

    } catch(error){
        res.status(500).json({message:"error connecting", error})
    }
 
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000,()=> console.log("on port 8000"));