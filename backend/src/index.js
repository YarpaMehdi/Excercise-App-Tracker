const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const cors = require('cors')

// dotenv.config()
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', false);

app.use('/users',userRouter)
app.use('/notes',noteRouter)

app.get('/',(req,res) =>{
    res.send("Excercise API From Yarpa Mehdi")
})

// const PORT = process.env.PORT || 8000

mongoose.connect("mongodb+srv://admin:admin@cluster0.0ajhbxy.mongodb.net/test?retryWrites=true&w=majority")
.then(() =>{
    app.listen(5000,() =>{
        console.log("Server Start port no 5000" )
    })
})
.catch((err) =>{
    console.log(err)
})

