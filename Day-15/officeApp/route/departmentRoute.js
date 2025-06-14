const express =require('express')
const router =express.Router()
const  Department= require('../models/Department')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try {
        const results=await Department.find()
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

// ✅ Get employees by department ID
router.get('/emp/:did', async (req, res) => {
    try {
        const did = req.params.did;
        const employees = await Employee.find({ Dep_ID: did }).populate("Dep_ID");

        const results = await Employee.find(
            { Dep_ID: did },
            { name: 1, Dep_ID: 1 }
        ).populate("Dep_ID").sort({ name: -1 });

        const filterResult = results.map(emp => ({
            employee_id: emp._id,
            employee_name: emp.name,
            department_name: emp.Dep_ID?.name // populated from Department
        }));

        if (results.length > 0) {
            res.status(200).json(filterResult);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !");
    }
});

// ✅ Get employee count per department
router.get('/empcount', async (req, res) => {
    try {
        const results = await Department.aggregate([
            {
                $lookup: {
                    from: "employees",
                    localField: "_id",
                    foreignField: "Dep_ID",
                    as: "emps"
                }
            },
            {
                $project: {
                    name: 1,
                    num_of_employees: { $size: "$emps" }
                }
            }
        ]);

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !");
    }
});

module.exports=router