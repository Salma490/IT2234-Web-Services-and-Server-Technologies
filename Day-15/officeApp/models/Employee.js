const mongoose=require('mongoose')
const employeeSchema=new mongoose.Schema({
     _id:{type:String,require:true},
    name:{type:String,require:true},
    gender:{type:String},
    EtfID:{type:String,require:true,ref:'etfs'},
    Dep_ID:{type:String,require:true,ref:'departments'},
    Pro_ID:[{type:mongoose.Types.ObjectId,ref:'projects'}]
})

const Employee=mongoose.model('employees',employeeSchema)
const John=new Employee({
    _id:'EMP25001',
    name:'John Doe',
    gender:'Male',
    EtfID:"ET001",
    Dep_ID:"Dep003",
    Pro_ID:['68334b5d2cb4a9da5afb28e8']
})

//John.save()
module.exports=Employee