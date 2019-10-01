import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const formData = require('express-form-data')
const cloudinary = require('cloudinary')

const app = express();

cloudinary.config({
    cloud_name: "drivmdqxt",
    api_key: 418621557898236,
    api_secret: "GO1hskBxQoTI3Mrw7JKGiUlK8lA"
})

// app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());
app.use(formData.parse())

app.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        const { email, username, password } = req.body;
        console.log(req.body)
        const newUser = {
            email: email,
            username: username,
            password: password
        }

        const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true });
        const db = client.db('cloud-gallery');
        const users = await db.collection('users').insert(newUser);
        res.status(200).send({ userName: `${username}` })
        client.close();

    } catch (error) {
        res.status(500).json({ message: "error connecting", error })
    }

})

app.post("/login", async (req, res) => {
    console.log(req.body);
    const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true });
    const db = client.db('cloud-gallery');
    db.collection('users').findOne({ email: req.body.email }, function (err, user) {
        // In case the user not found   
        if (err) {
            console.log('THIS IS ERROR RESPONSE')
            res.json(err)
        }
        if (user && user.password === req.body.password) {
            console.log('User and password is correct')
            console.log(user.like)
            res.status(200).send({
                message: "User and password is correct",
                userName: `${user.username}`,
                email:  `${user.email}`,
                like: user.like
            })
        } else {
            console.log("Credentials wrong");
            res.json({ message: "Login invalid" });
        }
        client.close();
    });

})

app.get("/paintings", async (req, res) => {

    const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true });
    const db = client.db('cloud-gallery');
    const paintings = await db.collection('paintings').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

        res.status(200).send(result)
        client.close();

    });;
})

app.post("/paintings/like", async (req, res) => {
   
    try {
        const { email, paintingID, paintingname} = req.body;
        console.log(req.body)
        const newLike = {
            paintingID: paintingID,
            paintingname:paintingname
        }

        const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true,useUnifiedTopology: true  });
        const db = client.db('cloud-gallery');
        const users = await db.collection('users').updateOne(
           {email:email},
            {$push: {"like": {paintingID: paintingID, paintingname:paintingname}},
            
        
    }
        )
        res.status(200).send({ email: email })
        client.close();

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error connecting", error })
    }

})



app.post("/paintings/unlike", async (req, res) => {
   
    // try{
        const { email, paintingID, paintingname} = req.body;
        console.log(req.body)

        const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true,useUnifiedTopology: true  });
        const db = client.db('cloud-gallery');
        const like = await db.collection('users').find({email:email}).project({like:1, _id: 0}).toArray( function (err, result) {
            
            console.log(result[0].like);
            const newLike = result[0].like.filter(like=>like.paintingID!==paintingID)
            const users = db.collection('users').updateOne(
                {email:email},
                {$set: {"like": newLike}
            }
            )
            res.status(200).send({ userName: email })
            client.close();
    
        })
      

    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({ message: "error connecting", error })
    // }
})

app.get("/paintings/detail/:name", async (req, res) => {
    const name = req.params.name;
    console.log(name);
    const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true });
    const db = client.db('cloud-gallery');
    const paintings = await db.collection('paintings').find({ name: name }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

        res.status(200).send(result)
        client.close();

    });;
})



app.post("/paintings/add", (req, res) => {

    const { name, price, author, theme, description, seller } = req.body;
    console.log(req.body)
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(async results => {
            console.log(results[0].url);
            const newPainting = {
                name: name,
                price: price,
                author: author,
                theme: theme,
                description: description,
                seller: seller,
                imageUrl: results[0].url
            }
            try {
                const client = await MongoClient.connect('mongodb://104.197.112.244:27017', { useNewUrlParser: true, useUnifiedTopology: true });
                const db = client.db('cloud-gallery');
                const users = await db.collection('paintings').insertOne(newPainting);
                res.status(200).send({ message: "add success" })
                client.close();
            } catch (error) {
                res.status(500).json({ message: "error connecting", error })
            }
        })

})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000, () => console.log("on port 8000"));
