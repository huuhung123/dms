const mongoose = require("mongoose");
const Student = require('../models/student.model')

module.exports.getIndex = (req, res) => {
  Student
    .find({})
    // .then(students => {
    //   res.render("student/index", {
    //     listStudent: students
    //   })
    // })
    .then(students => res.json(students))
    .catch(err => console.log(err))
};

module.exports.getCreate = (req, res) => {
  res.render("student/create");
}

module.exports.postCreate = (req, res) => {
  const today = new Date()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const newStudent = new Student()

  newStudent.name = req.body.name
  newStudent.age = req.body.age
  newStudent.createdTime = date+' '+time
 
  newStudent
    .save()
    // .then(() => res.redirect('/student'))
    .then(() => res.json("Duty is created"))
    .catch(err => console.log(err))
};

module.exports.getUpdate = (req, res) => {
  Student
    .findById(req.params.id)
    .then(student => {
      res.json(student)
      // res.render("student/update", {
      //   student: student
      // })
    })
    .catch(err => console.log(err))
};

module.exports.postUpdate = (req, res) => {
  const updatedStudent = {};
  updatedStudent.name = req.body.name;
  updatedStudent.age = req.body.age;

  const query = { _id: req.params.id };
  Student
    .update(query, updatedStudent)
    // .then(() => res.redirect("/student"))
    .then(() => res.json("123"))
    .catch(err => console.log(err))
}

module.exports.getDelete = (req, res) => {
  const queryDel = { _id: req.params.id }
  
  Student
    .remove(queryDel)
    //.then(() => res.redirect('/student'))
    .then(() => res.json("Student is deleted"))
    .catch(err => console.log(err))
}

module.exports.getSearch = (req, res) => {
  const question = req.query.q;
   Student
    .find()
    .or([
      {name: question}, 
      {age: question}])
    .then(matchedStudent => {
      res.render("student/index", {
        listStudent: matchedStudent
      })
    })
    .catch(err => console.log(err))
  //   var matchedDuty =  db.get('users').filter(function(user) {
  //       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  //   })
}
