import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl ="mongodb://root:root123@ds247191.mlab.com:47191/mearn"
mongodb.MongoClient.connect(dbUrl,function(err,db){
    if (err) {console.error(err); }
    console.error(db); 
    app.get('/api/food',(req,res)=>{
        db.collection("Food").find({}).toArray((err,food)=>{
            res.json({food});
        });
       
    });


    app.listen(8080,() => console.log('server is running on localhost:8080'));
});

