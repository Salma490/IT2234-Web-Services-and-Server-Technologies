const express = require('express')
const router = express.Router()
const studentService = require('./studentservice')

router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found !")
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getStudent(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found !")
    }
})

//gender
router.get('/gender/:gen',(req,res)=>{
    const gen = req.params.gen=='m'?'male':'female'
    const results = studentService.getByGender(gen)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found !")
    }
})

//course
router.get('/course/:crs',(req,res)=>{
    const crs = req.params.crs
    const results = studentService.getByCourse(crs)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found!")
    }
})

module.exports = router