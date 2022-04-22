const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const objectId = require('mongodb').ObjectId;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// mongoDB user: dbuser1 
// mongoDB password: 90Fa2bCqX2MkQIu5


const uri = "mongodb+srv://dbuser1:90Fa2bCqX2MkQIu5@cluster0.wugey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        // getting the documents of users from server side 
        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users)
        });

        // getting a single document of a single user from server side 
        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: objectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result);
        });

        // getting the posted data with app.post 
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        });

        // updating a user data with app.put 
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const updateUser = req.body;
            const filter = { _id: objectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: updateUser.name,
                    email: updateUser.email
                }
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        //deleting a user with app.delete
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: objectId(id) }
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });



    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);



app.get('/', (req, res) => {
    const names = [
        { name: 'something', email: 'something@gmail.com' }
    ]
    res.send(names);
});


app.listen(port, () => console.log('listening to port,', port));