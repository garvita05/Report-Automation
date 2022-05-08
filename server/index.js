import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express()

app.use(bodyParser.json({limit:"30mb",extended:'true'}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors())
//to connect server with real database use cloud atlas version of mongodb
//cluster acts as our online cloud database

const CONNECTION_URL="mongodb+srv://garvita05:himank18@cluster0.kupc0.mongodb.net/automation?retryWrites=true&w=majority"
const PORT=process.env.PORT ||5000;


mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error) => (console.log(error.message)))

// mongoose.set('useFindAndModify',false)