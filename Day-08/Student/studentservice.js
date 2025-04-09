const students = require('./stuDB')


function getstudents() {
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regNo==id)
}

function getByGender(gen){
    return students.filter((student)=>student.gender==gen)
}

function getByCourse(crs) {
    return students.filter((student)=>student.course==crs)
}

module.exports={getStudent,getstudents,getByGender,getByCourse}