const express = require("express");
const cors = require ("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=> {
    url = "mongodb+srv://rohitkumarnagula:u2RFbillTXlxz90r@cluster0.scol3qg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("Student");
    const coll = db.collection("student");
    const doc = {"name" : req.body.name,"choice":req.body.choice};
    coll.insertOne(doc)
    .then(res => {
        res.send(res);
    })
    .catch(err => {
        res.send(err);
    });
});

app.listen(9007,()=>{
    console.log("Server running at 9000");
})