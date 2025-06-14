const express = require('express');
const app=express();
const mongoose = require('mongoose')
const port=3001;

const coursert = require('./routes/courseRoute') //importing courseRoute
const degreert = require('./routes/degreeRoute')
const studentrt = require('./routes/studentRoute')

app.use(express.json())
app.use('/course', coursert) //using courseRoute
app.use('/degree',degreert)
app.use('/student',studentrt)

mongoose.connect('mongodb://localhost:27017/Students').then(()=>{
    console.log("Database Connected!")
}).catch((error)=>{
    console.error(error);
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})