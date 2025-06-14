const express =require('express')
const router =express.Router()
const  Employee= require('../models/Employee')
const { default:mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try {
        const results=await Employee.find().populate('Dep_ID').populate('EtfID').populate('Pro_ID')
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry,No Data Found !")
        }
        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error !")
        }
})

router.get('/:id', async (req, res) => {
    try {
        const emp = await Employee.findById(req.params.id)
            .populate('EtfID');
        if (emp) {
            res.status(200).json(emp);
        } else {
            res.status(404).send("Employee not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !");
    }
});

// Route 3: Count number of projects per employee
router.get('/procount', async (req, res) => {
    try {
        const results = await Employee.find();
        const newResults = results.map(emp => ({
            id: emp._id,
            name: emp.name,
            num_of_projects: emp.Pro_ID.length
        }));

        if (results.length > 0) {
            res.status(200).json(newResults);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !");
    }
});

module.exports=router